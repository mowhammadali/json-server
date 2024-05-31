import React, { useState } from 'react';
import styles from './Form.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import api from '../../../services/axios/config';
import { NavLink } from 'react-router-dom';

const Form = () => {
    const [userData , setUserData] = useState({
        email: '',
        password: ''
    })

    const registerUser = async () => {
        if (userData.email && userData.password) {
            try {
                const response = await api.post('register' , userData);
                console.log(response);
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className={`${styles.container}`}>
            <h2>Register</h2>
            <TextField label="Email" variant="outlined" size='small' sx={{width: '100%'}}
                onChange={event => setUserData(prevState => ({...prevState , email: event.target.value}))}
            />
            <TextField label="Password" variant="outlined" size='small' sx={{width: '100%'}}
                onChange={event => setUserData(prevState => ({...prevState , password: event.target.value}))}
            />
            <Button variant="contained" sx={{width: '100%'}}
                onClick={registerUser} type='button'>
                Contained
            </Button>
            <NavLink to={'/login'}>go to login</NavLink>
        </div>
    )
}

export default Form;