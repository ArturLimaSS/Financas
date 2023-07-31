import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NumberFormat } from 'react-number-format';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { InputBase } from '@mui/material';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

import { apiService } from 'src/api/api';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: '#fff',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    borderRadius: '8px',
    p: 4,
};

export default function NewSpentModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [currencyInput, setCurrencyInput] = React.useState('');

    const formattedCurrency = (value) => {
        const cleanedValue = value.replace(/[^0-9]/g, '');
        const numberValue = Number(cleanedValue) / 100;
        const formattedvalue = numberValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        return formattedvalue;
    }

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setCurrencyInput(formattedCurrency(inputValue))
    }

    const cleanedValue = currencyInput.replace(/[^0-9]/g, '')

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            'title': event.target[0].value,
            'reason': event.target[2].value,
            'value': cleanedValue,
            'user_id': '2'
        }

        apiService.postSpents(data)
        .then((response) => console.log(response))
    }

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" color="primary">
                Novo Gasto
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={modalStyle}>
                    <form onSubmit={handleSubmit}>
                        <TextField sx={{ m: 3 }} id="outlined-basic" label="Título" variant="outlined" />
                        <TextField sx={{ m: 3 }} id="outlined-basic" label="Motivo" variant="outlined" />
                        <TextField sx={{ m: 3 }} value={currencyInput} onChange={handleChange} type='text' id="outlined-basic" label="Valor" variant="outlined" />
                        <Button type='submit' color='success' variant='contained'>Salvar</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}