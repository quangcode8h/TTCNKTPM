import React, { useState, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {Users} from '../Data/Data.js'
import '../Style/Login.css';

function LogIn({setUser, setIsOpenForm}) {
    const [users, setUsers] = useState();
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    useEffect(() => {
        setUsers(Users);    
    }, [])
	//dieu huong den trang chu
    let navigate = useNavigate();
	const routeToHome = () => {
		const path = '/';
		navigate(path);
	}
    //xu ly su kien submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.filter(user => user.email === login.email && user.password === login.password)
        if(user.length > 0){
            setUser(user);
            setIsOpenForm(prev => ({...prev, isOpen: false}));
            routeToHome();
        }else{
            alert("Email or password is incorrect!");
        }
    }
    return(
        <div className="wrapper-form">
            <form className="form" onSubmit={handleSubmit}>
                <div className="warper">

                    <div className="title">
                            <Link className="form-close" to='/' onClick={() => setIsOpenForm(prev => ({...prev, isOpen: false}))}>Close</Link>
                        <h1>Log in</h1>
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

                    <div className='change-form'>
                        <p>Bạn chưa có tài khoản?</p>
                        <Link to='/register' className='change-link' onClick={() => setIsOpenForm(prev => ({...prev, formName: 'Register'}))}>Register</Link>
                    </div>

                    <button className="form-submit">Log in</button>
                </div>
                <Outlet/>
            </form>
        </div>
    )
}

export default LogIn;