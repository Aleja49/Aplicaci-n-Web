import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle, faExclamationCircle, faUser, faCaretDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../../styles/RegistroInasistencias.css';

const RegistroInasistencias = () => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const [formData, setFormData] = useState({
    nombreEstudiante: '',
    numeroFicha: '',
    fecha: '',
    justificaInasistencia: ''
  });

  const toggleLogoutMenu = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    console.log('Cerrar sesión');
    setShowLogout(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'nombreEstudiante') {
      newValue = value.replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚ\s]/g, '');
    } else if (name === 'numeroFicha') {
      newValue = value.replace(/\D/g, '');
    }

    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/inasistencias', {
      nombre_estudiante: formData.nombreEstudiante,
      fecha_inasistencia: formData.fecha,
      justificada: formData.justificaInasistencia
    })
    .then(response => {
      console.log(response.data);
      alert('Inasistencia registrada correctamente');
    })
    .catch(error => {
      console.error('Hubo un error al registrar la inasistencia:', error);
      alert('Hubo un error al registrar la inasistencia');
    });
  };

  const redirectToInasistencias = () => {
    navigate('/inasistencias');
  };

  const redirectToReporteEstudiantes = () => {
    navigate('/reporte-estudiantes');
  };

  const redirectToPerfil = () => {
    navigate('/perfil');
  };

  return (
    <div className="registro-inasistencias-container">
      <h2 className="rectangle-title">REGISTRO DE INASISTENCIAS</h2>
      <p className="new-text">Diligencie los datos para registrar la inasistencia del estudiante</p>
      
      <form className="registro-inasistencias-form" onSubmit={handleSubmit}>
        <label>
          <span>Nombre del estudiante:</span>
          <input
            type="text"
            name="nombreEstudiante"
            value={formData.nombreEstudiante}
            onChange={handleChange}
            pattern="[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+"
            required
          />
        </label>
        <label>
          <span>Número de ficha:</span>
          <input
            type="text"
            name="numeroFicha"
            value={formData.numeroFicha}
            onChange={handleChange}
            pattern="[0-9]+"
            required
          />
        </label>
        <label>
          <span>Fecha:</span>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Justifica inasistencia:</span>
          <select
            name="justificaInasistencia"
            value={formData.justificaInasistencia}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </label>

        <button type="submit" className="submit-button">Registrar inasistencia</button>
      </form>

      <div className="left-rectangle">
        <div className="rectangle-content">
          <button className="rectangle-button" onClick={redirectToInasistencias}>
            <FontAwesomeIcon icon={faTimes} className="button-icon" />
            Inasistencias
          </button>
          <button className="rectangle-button" onClick={() => console.log('Botón 2 clicado')}>
            <FontAwesomeIcon icon={faCheckCircle} className="button-icon" />
            Registro de inasistencias
          </button>
          <button className="rectangle-button" onClick={redirectToReporteEstudiantes}>
            <FontAwesomeIcon icon={faExclamationCircle} className="button-icon" />
            Reporte estudiantes
          </button>
          <button className="rectangle-button" onClick={redirectToPerfil}>
            <FontAwesomeIcon icon={faUser} className="button-icon" />
            Perfil
          </button>
        </div>
      </div>

      <div className="top-bar">
        <div className="user-info">
          <span className="user-name">Alejandra</span>
          <FontAwesomeIcon icon={faUser} className="profile-icon" />
          <FontAwesomeIcon icon={faCaretDown} className="caret-icon" onClick={toggleLogoutMenu} />
        </div>
        {showLogout && (
          <div className="logout-menu">
            <button onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
              <span className="logout-text">Cerrar sesión</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistroInasistencias;