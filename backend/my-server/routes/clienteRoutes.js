const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Ruta para crear un nuevo usuario
router.post('/', (req, res) => {
    const { full_name, email, password } = req.body;

    const sql = 'INSERT INTO usuarios (full_name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [full_name, email, password], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Usuario creado correctamente');
    });
});

// Ruta para obtener todos los usuarios
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Ruta para obtener un usuario por su email
router.get('/:email', (req, res) => {
    const { email } = req.params;
    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(sql, [email], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.length === 0) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.json(result[0]);
    });
});

// Ruta para actualizar un usuario por su email
router.put('/:email', (req, res) => {
    const { email } = req.params;
    const { full_name, password } = req.body;

    const sql = 'UPDATE usuarios SET full_name = ?, password = ? WHERE email = ?';
    db.query(sql, [full_name, password, email], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.send('Usuario actualizado correctamente');
    });
});

// Ruta para eliminar un usuario por su email
router.delete('/:email', (req, res) => {
    const { email } = req.params;
    const sql = 'DELETE FROM usuarios WHERE email = ?';
    db.query(sql, [email], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.send('Usuario eliminado correctamente');
    });
});

module.exports = router;