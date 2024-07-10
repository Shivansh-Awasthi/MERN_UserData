import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Show = () => {

    const [data, setData] = useState([])

    async function getData() {




        const response = await fetch("http://localhost:5001")
        const result = await response.json();


        if (!response.ok) {
            console.log(result.error)
        }

        if (response.ok) {
            setData(result)
        }

    }


    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:5001/${id}`, {
            method: 'DELETE',
        })
        const result = await response.json();
        if (!response.ok) {
            console.log(result.error)
        }
        if (response.ok) {
            console.log(result)
        }
        setTimeout(() => {
            getData();
        }, 100);
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <div className=' container my-2'>
            <h2 className='text-center'>All data</h2>
            <div className='row'>

                {data?.map((ele) =>
                    <div className='col-3' key={ele._id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
                                <p className="card-text">{ele.age}</p>
                                <a href="#" className="card-link" onClick={() => handleDelete(ele._id)}>
                                    Delete</a>
                                <Link to={`/${ele._id}`} className="card-link">Edit</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Show