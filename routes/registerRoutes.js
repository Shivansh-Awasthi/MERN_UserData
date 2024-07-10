const mongoose = require('mongoose');
const express = require('express');
const Register = require('../models/models');
const router = express.Router();

//GET

router.get('/', async (req, res) => {
    try {
        const showUsers = await Register.find();
        res.status(200).json(showUsers)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})



//POST

router.post('/', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const userRegister = await Register.create({
            name: name,
            email: email,
            age: age
        })
        res.status(201).json(userRegister)
    } catch (error) {
        console.log("Error to add a new user")
        res.status(400).json({ error: error.message })
    }
})


// GET SINGLE USER

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const singleUser = await Register.findById({
            _id: id
        })
        res.status(201).json(singleUser)

    } catch (error) {
        console.log("Woops!! cannot to find that user")
        res.status(500).json({ error: error.message })
    }
})


//DELETE


router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deleteUser = await Register.findByIdAndDelete({
            _id: id
        })
        res.status(201).json(deleteUser)

    } catch (error) {
        console.log("Woops!! cannot deleter")
        res.status(500).json({ error: error.message })
    }
})


// UPDATE

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    try {
        const updateUser = await Register.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.status(201).json(updateUser)

    } catch (error) {
        console.log("Woops!! cannot deleter")
        res.status(500).json({ error: error.message })
    }
})





module.exports = router;






