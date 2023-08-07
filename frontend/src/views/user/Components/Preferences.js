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


export const Preferences = (user) => {
    return (
        <div>
            <Box mt={1}>
                <Typography variant='h5'>
                    Meta de gasto
                </Typography>
            </Box>
            <Box mt={1}>
                <CustomTextField fullWidth>
                    
                </CustomTextField>
            </Box>
        </div>
    )
}