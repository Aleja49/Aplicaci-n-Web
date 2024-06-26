const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Ruta para crear un nuevo estudiante
router.post('/', (req, res) => {
    const { nombre, numero_estudiante } = req.body;

    const sql = 'INSERT INTO estudiantes (nombre, numero_estudiante) VALUES (?, ?)';
    db.query(sql, [nombre, numero_estudiante], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Estudiante creado correctamente');
    });
});

// Ruta para obtener todos los estudiantes
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM estudiantes';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Ruta para obtener un estudiante por su número de estudiante
router.get('/:numero_estudiante', (req, res) => {
    const { numero_estudiante } = req.params;
    const sql = 'SELECT * FROM estudiantes WHERE numero_estudiante = ?';
    db.query(sql, [numero_estudiante], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.length === 0) {
            return res.status(404).send('Estudiante no encontrado');
        }
        res.json(result[0]);
    });
});

// Ruta para actualizar un estudiante por su número de estudiante
router.put('/:numero_estudiante', (req, res) => {
    const { numero_estudiante } = req.params;
    const { nombre } = req.body;

    const sql = 'UPDATE estudiantes SET nombre = ? WHERE numero_estudiante = ?';
    db.query(sql, [nombre, numero_estudiante], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Estudiante no encontrado');
        }
        res.send('Estudiante actualizado correctamente');
    });
});

// Ruta para eliminar un estudiante por su número de estudiante
router.delete('/:numero_estudiante', (req, res) => {
    const { numero_estudiante } = req.params;
    const sql = 'DELETE FROM estudiantes WHERE numero_estudiante = ?';
    db.query(sql, [numero_estudiante], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Estudiante no encontrado');
        }
        res.send('Estudiante eliminado correctamente');
    });
});

module.exports = router;
