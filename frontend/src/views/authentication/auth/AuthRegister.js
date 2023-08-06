import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import {useNavigate } from 'react-router-dom';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';
import { apiService } from 'src/api/api';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AuthRegister = ({ title, subtitle, subtext }) => {
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = { 'name': formData.get('name'), email: formData.get('email'), password: formData.get('password') };
        apiService.createUser(data)
            .then((response) => {
                MySwal.fire({
                    title: response.data.message,
                    icon: response.data.status
                })
                if (response.data.status === "success") {
                    setTimeout(() => navigate('/auth/login'), 3000)
                } else {
                    MySwal.fire({
                        title: 'Ocorreu um erro ao criar o seu acesso.',
                        text: 'Verifique seus dados para criação ou entre em contato com o nosso suporte!',
                        icon: 'error'
                    })
                }

            })
    };

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <Box>
                <form id='form-create-user' onSubmit={handleSubmit}>
                    <Stack mb={3}>
                        <Typography variant="subtitle1"
                            fontWeight={600} component="label" htmlFor='name' mb="5px">Nome</Typography>
                        <CustomTextField id="name" name="name" variant="outlined" fullWidth />

                        <Typography variant="subtitle1"
                            fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email</Typography>
                        <CustomTextField id="email" name="email" variant="outlined" fullWidth />

                        <Typography variant="subtitle1"
                            fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Senha</Typography>
                        <CustomTextField id="password" name="password" variant="outlined" fullWidth />
                    </Stack>
                    <Button color="primary" type='submit' variant="contained" size="large" fullWidth>
                        Criar acesso
                    </Button>
                </form>
            </Box>
            {subtitle}
        </>
    );
};

export default AuthRegister;
