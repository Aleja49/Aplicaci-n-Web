-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS asistencias_edu;
USE asistencias_edu;

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de estudiantes
CREATE TABLE IF NOT EXISTS estudiantes (
    nombre VARCHAR(100) NOT NULL,
    numero_estudiante INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de inasistencias
CREATE TABLE IF NOT EXISTS inasistencias (
    nombre_estudiante VARCHAR(100) NOT NULL,
    fecha_inasistencia DATE NOT NULL,
    justificada ENUM('SI', 'NO') DEFAULT 'NO',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Mostrar la estructura de las tablas
SHOW TABLES;

-- Mostrar la estructura de una tabla específica
DESCRIBE usuarios;
DESCRIBE estudiantes;
DESCRIBE inasistencias;