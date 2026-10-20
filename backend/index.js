// index.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 

app.get('/api/health', (req, res) => {
    res.json({ message: 'El API está funcionando.' });
});

app.get('/api/info', (req, res) => {
    res.json({
        message: 'El API está funcionando correctamente',
        integrantes: [
            {
                carnet: '00067425',
                nombre: 'Manuel Tobar Garcia',
                ciudadOrigen: 'Mejicanos',
                carrera: 'Ingenieria Informatica',
                proyectosRealizados: 20
            },
            {
                carnet: '00181425',
                nombre: 'Carlos Fernando Martinez Mogollon',
                ciudadOrigen: 'Antiguo Cuscatlan',
                carrera: 'Ingenieria Informatica',
                proyectosRealizados: 19
            }
        ]
    });
});


app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});