import React,{useState} from 'react'
import axios from "axios"
import {Link, useNavigate } from 'react-router-dom'

export default function AddUser() {

    let navigate = useNavigate()

    const [user,setUser]=useState ({
            name:"",
            password:"",
            email:"",
            address:"",
            mobile:""
    })

    const{name,password,email,address,mobile}=user

    // here

    const onInputChange=(e)=>{

        setUser({...user ,[e.target.name]:e.target.value});

    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    }

    return (
        <div className='container'>
            <div className='row'>

                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>

                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>
                                Name
                            </label>
                            <input 
                            type={'text'}
                            className='form-control'
                            placeholder='Enter Your Name'
                            name='name' 
                            value={name}
                            onChange={(e)=>onInputChange(e)}
                            />

                            
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Password' className='form-label'>
                                Password
                            </label>
                            <input 
                            type={'text'}
                            className='form-control'
                            placeholder='Enter Your Password'
                            name='password' 
                            value={password}
                            onChange={(e)=>onInputChange(e)}
                            />

                            
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>
                                Email
                            </label>
                            <input 
                            type={'text'}
                            className='form-control'
                            placeholder='Enter Your Email'
                            name='email' 
                            value={email}
                            onChange={(e)=>onInputChange(e)}
                            />

                        </div>


                        <div className='mb-3'>
                            <label htmlFor='Address' className='form-label'>
                                Address
                            </label>
                            <input 
                            type={'text'}
                            className='form-control'
                            placeholder='Enter Your Address'
                            name='address' 
                            value={address}
                            onChange={(e)=>onInputChange(e)}
                            />

                        </div>


                        <div className='mb-3'>
                            <label htmlFor='Mobile' className='form-label'>
                                Mobile Number
                            </label>
                            <input 
                            type={'text'}
                            className='form-control'
                            placeholder='Enter Your Mobile number'
                            name='mobile' 
                            value={mobile}
                            onChange={(e)=>onInputChange(e)}
                            />

                        </div>

                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link className='btn btn-outline-danger mx-2' to="/"> Cancel</Link>

                        </form>
                </div>

            </div>

        </div>
    )
}

