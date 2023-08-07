import React, { useState } from 'react';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox
} from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { apiService } from 'src/api/api';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const AuthLogin = ({ setLoggedIn, title, subtitle, subtext }) => {
    const navigate = useNavigate();
    if (localStorage.getItem('user_id') > 0) {
        navigate('/dashboard');
    }

    const MySwal = withReactContent(Swal);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = { 'email': formData.get('email'), 'password': formData.get('password') };

        try {
            apiService.login(data)
                .then((response) => {
                    console.log(response);
                    MySwal.fire({
                        title: response.data.message,
                        icon: response.data.status,
                        text: response.data.text
                    })
                    const token = response.data.token;
                    const user_id = response.data.user_id;
                    localStorage.setItem('authToken', token);
                    localStorage.setItem('user_id', user_id)
                    console.log(token);
                    setLoggedIn(true);
                });
        } catch (error) {
            console.error('Erro ao fazer login', error);
            MySwal.fire({
                title: 'Erro ao fazer login',
                text: error,
                icon: 'error'
            })
        }
    }

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <form onSubmit={handleSubmit}>
                <Stack>
                    <Box>
                        <Typography variant="subtitle1"
                            fontWeight={600} component="label" htmlFor='username' mb="5px">Email</Typography>
                        <CustomTextField id="email" name="email" placeholder="Ex: seunome@seuprovedor.com" variant="outlined" fullWidth />
                    </Box>
                    <Box mt="25px">
                        <Typography variant="subtitle1"
                            fontWeight={600} component="label" htmlFor='password' mb="5px" >Senha</Typography>
                        <CustomTextField id="password" name="password" type="password" placeholder="Ex: 12345678" variant="outlined" fullWidth />
                    </Box>
                    <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Lembrar este dispositivo"
                            />
                        </FormGroup>
                        <Typography
                            component={Link}
                            to="/"
                            fontWeight="500"
                            sx={{
                                textDecoration: 'none',
                                color: 'primary.main',
                            }}
                        >
                            Esqueceu a senha?
                        </Typography>
                    </Stack>
                </Stack>
                <Box>
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        type="submit"
                    >
                        Entrar
                    </Button>
                </Box>
            </form>
            {subtitle}
        </>
    )
};

