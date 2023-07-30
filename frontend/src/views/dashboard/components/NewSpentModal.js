import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { InputBase } from '@mui/material';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

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
    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];
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
                    <TextField sx={{ m: 3 }} id="outlined-basic" label="Título" variant="outlined" />
                    <TextField sx={{ m: 3 }} id="outlined-basic" label="Título" variant="outlined" />
                    <TextField  sx={{ m: 3 }} 
                        id="outlined-select-currency"
                        select
                        label="Select"
                        defaultValue="EUR"
                        helperText="Please select your currency"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField sx={{ m: 3 }} id="outlined-basic" label="Título" variant="outlined" />
                    <TextField sx={{ m: 3 }} id="outlined-basic" label="Título" variant="outlined" />
                    <TextField sx={{ m: 3 }} id="outlined-basic" label="Título" variant="outlined" />
                </Box>
            </Modal>
        </div>
    );
}