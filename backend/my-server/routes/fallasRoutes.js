const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Ruta para crear una nueva inasistencia
router.post('/', (req, res) => {
    const { nombre_estudiante, numero_ficha, fecha_inasistencia, justificada } = req.body;

    const sql = 'INSERT INTO inasistencias (nombre_estudiante, numero_ficha, fecha_inasistencia, justificada) VALUES (?, ?, ?, ?)';
    db.query(sql, [nombre_estudiante, numero_ficha, fecha_inasistencia, justificada], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Inasistencia registrada correctamente');
    });
});

// Ruta para obtener todas las inasistencias
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM inasistencias';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Ruta para obtener una inasistencia por el nombre del estudiante
router.get('/:nombre_estudiante', (req, res) => {
    const { nombre_estudiante } = req.params;
    const sql = 'SELECT * FROM inasistencias WHERE nombre_estudiante = ?';
    db.query(sql, [nombre_estudiante], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.length === 0) {
            return res.status(404).send('Inasistencia no encontrada');
        }
        res.json(result[0]);
    });
});

// Ruta para actualizar una inasistencia por el nombre del estudiante
router.put('/:nombre_estudiante', (req, res) => {
    const { nombre_estudiante } = req.params;
    const { numero_ficha, fecha_inasistencia, justificada } = req.body;

    const sql = 'UPDATE inasistencias SET numero_ficha = ?, fecha_inasistencia = ?, justificada = ? WHERE nombre_estudiante = ?';
    db.query(sql, [numero_ficha, fecha_inasistencia, justificada, nombre_estudiante], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Inasistencia no encontrada');
        }
        res.send('Inasistencia actualizada correctamente');
    });
});

// Ruta para eliminar una inasistencia por el nombre del estudiante
router.delete('/:nombre_estudiante', (req, res) => {
    const { nombre_estudiante } = req.params;
    const sql = 'DELETE FROM inasistencias WHERE nombre_estudiante = ?';
    db.query(sql, [nombre_estudiante], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Inasistencia no encontrada');
        }
        res.send('Inasistencia eliminada correctamente');
    });
});

module.exports = router;