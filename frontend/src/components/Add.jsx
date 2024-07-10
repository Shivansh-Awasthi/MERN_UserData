import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Add = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)

    const navigate = useNavigate();

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleAge = (e) => {
        setAge(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setAge(0);
        console.log(name, email, age)




        const addUser = { name, email, age }
        const response = await fetch("http://localhost:5001", {
            method: "POST",
            body: JSON.stringify(addUser),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await response.json();

        if (!response.ok) {
            console.log(result.error)
        }

        if (response.ok) {
            console.log(result)
            navigate('/all')
        }

    }





    return (
        <div className='container my-2'>
            <h2 className='text-container'>Enter the data</h2>


            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" value={name} onChange={handleName} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={handleEmail} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter your age:</label>
                    <input type="number" className="form-control" value={age} onChange={handleAge} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>



        </div>
    )
}

export default Add