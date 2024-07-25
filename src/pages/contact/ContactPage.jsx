import React, { useState } from 'react';
import { TextField, Button, Container, Paper } from '@mui/material';
import emailjs from 'emailjs-com';
import 'tailwindcss/tailwind.css';

const ContactPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_yf9m8c8', // Reemplaza con tu Service ID de EmailJS
            'template_tyqnfts', // Reemplaza con tu Template ID de EmailJS
            form,
            'pD_sdAS-dIWkio_-X' // Reemplaza con tu User ID de EmailJS
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Mensaje enviado con éxito!');
            setForm({
                name: '',
                email: '',
                message: ''
            });
        }).catch((err) => {
            console.error('FAILED...', err);
            alert('Error al enviar el mensaje.');
        });
    };

    return (
        <Container
            className="flex flex-col justify-center items-center pt-20 pb-10 min-h-screen"
            maxWidth="sm"
        >
            <h1 className="text-4xl font-bold text-center text-white mb-6">Contáctame</h1>
            <Paper elevation={10} className="p-8 rounded-lg shadow-2xl w-full bg-white">
                <form onSubmit={handleSubmit} className="w-full">
                    <TextField
                        label="Nombre"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        variant="outlined"
                        className="bg-white"
                    />
                    <TextField
                        label="Correo Electrónico"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        variant="outlined"
                        className="bg-white"
                    />
                    <TextField
                        label="Mensaje"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        required
                        variant="outlined"
                        className="bg-white"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="mt-6 w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold text-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
                    >
                        Enviar
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default ContactPage;
