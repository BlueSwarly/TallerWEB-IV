// index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Requirement 6: Allow frontend to connect
app.use(cors()); 

// Requirement 4: api/health endpoint
app.get('/api/health', (req, res) => {
    res.json({ message: 'El API está funcionando.' });
});

// Requirement 5: api/info endpoint
app.get('/api/info', (req, res) => {
    res.json({
        status: 'El API está funcionando correctamente',
        integrantes: [
            { nombre: 'Ana García', edad: 21, carrera: 'Ingeniería de Software', materiasAprobadas: 24 },
            { nombre: 'Luis Pérez', edad: 23, carrera: 'Ingeniería de Sistemas', materiasAprobadas: 28 }
        ]
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});