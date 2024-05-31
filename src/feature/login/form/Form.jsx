import React, { useState , useContext } from "react";
import styles from "../../register/form/Form.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import api from "../../../services/axios/config";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ContextAuthProvider } from "../../../context/context-auth/ContextAuth";

const Form = () => {
    const { setAuthenticated } = useContext(ContextAuthProvider);
    const navigate = useNavigate();
    
    const [userData , setUserData] = useState({
        email: '',
        password: ''
    })

    const loginUser = async () => {
        if (userData.email && userData.password) {
            try {
                const response = await api.post('login' , userData);
                if (response.status === 200) {
                    setAuthenticated(true);
                    navigate('/home');
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <TextField
                label="Email"
                variant="outlined"
                size="small"
                sx={{ width: "100%" }}
                onChange={(event) =>
                    setUserData((prevState) => ({
                        ...prevState,
                        email: event.target.value,
                    }))
                }
            />
            <TextField
                label="Password"
                variant="outlined"
                size="small"
                sx={{ width: "100%" }}
                onChange={(event) =>
                    setUserData((prevState) => ({
                        ...prevState,
                        password: event.target.value,
                    }))
                }
            />
            <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={loginUser}
                type="button"
            >
                Contained
            </Button>
            <NavLink to={"/"}>go to register</NavLink>
        </div>
    );
};

export default Form;