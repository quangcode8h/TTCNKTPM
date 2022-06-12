import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../Style/Login.css'

function Register({setIsOpenForm}) {
    const [login, setLogin] = useState({
        email: '',
        password: '',
        confirmPass: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="warper">
                <div className="title">
                    <Link className="form-close" to='/' onClick={() => setIsOpenForm(prev => ({...prev, isOpen: false}))}>Close</Link>
                    <h1>Register</h1>
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email' id='email' placeholder='Enter your email'
                        onChange ={e => setLogin({...login, email: e.target.value})}
                        value = {login.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' id='password' placeholder='Enter your password'
                        onChange ={e => setLogin({...login, password: e.target.value})}
                        value = {login.password}
                        autoComplete='off'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Confirm password</label>
                    <input 
                        type='password' id='confirmPassword' placeholder='Enter your password'
                        onChange ={e => setLogin({...login, confirmPassword: e.target.value})}
                        value = {login.password}
                        autoComplete='off'
                    />
                </div>
                <div className='change-form'>
                        <p>Bạn đã có tài khoản?</p>
                        <Link to='/login' className='change-link' onClick={() => setIsOpenForm(prev => ({...prev, formName: 'Login'}))}>
                            Login
                        </Link>
                </div>

                <button className="form-submit">Register</button>
            </div>
            <Outlet/>
        </form>
    )
}

export default Register;