import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
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

    //get single user data 

    const { id } = useParams();

    const getSingleUser = async () => {
        const response = await fetch(`http://localhost:5001/${id}`)
        const result = await response.json();
        if (!response.ok) {
            console.log(result.error)
        }

        if (response.ok) {
            console.log(result)
            setName(result.name)
            setEmail(result.email)
            setAge(result.age)
        }
    }

    useEffect(() => {
        getSingleUser();
    }, [])


    //update

    const handleUpdate = async (e) => {
        e.preventDefault();


        const updatedUser = { name, email, age }
        const response = await fetch(`http://localhost:5001/${id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedUser),
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
            <h2 className='text-container'>Edit the data</h2>


            <form onSubmit={handleUpdate}>
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

export default Edit