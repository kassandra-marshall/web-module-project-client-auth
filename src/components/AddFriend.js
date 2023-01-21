import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = () => {
    const { push } = useHistory();
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/friends', form)
        .then(res => {
            push('/friends')
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
    <div>
        <h2>ADD FRIEND</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">FRIEND NAME:</label> 
                <input onChange= {handleChange} name="name" id="name" type="text"/>
            </div>
            <div>
                <label htmlFor="age">FRIEND AGE:</label>
                <input onChange= {handleChange} name="age" id="age" type="text" />
            </div>
            <div>
                <label htmlFor="email">FRIEND EMAIL:</label>
                <input onChange= {handleChange} name="email" id="email"type="email" />
            </div>
            <button>SUBMIT</button>
        </form>
    </div>
    )
}

export default AddFriend;