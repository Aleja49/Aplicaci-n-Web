import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle, faExclamationCircle, faUser, faCaretDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import '../../styles/ReporteEstudiantes.css';

const ReporteEstudiantes = () => {
  const navigate = useNavigate(); // Usa useNavigate para navegar entre rutas
  const [showLogout, setShowLogout] = useState(false);

  const toggleLogoutMenu = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    console.log('Cerrar sesión');
    setShowLogout(false);
  };

  const redirectToPerfil = () => {
    navigate('/perfil'); // Redirige a la ruta de Perfil.js
  };

  const redirectToRegistroInasistencias = () => {
    navigate('/registro-inasistencias'); // Redirige a la ruta de RegistroInasistencias.js
  };

  const redirectToInasistencias = () => {
    navigate('/inasistencias'); // Redirige a la ruta de Inasistencias.js
  };

  return (
    <div className="reporte-estudiantes-container">
      <h2 className="rectangle-title">REPORTE DE ESTUDIANTES</h2>
      <p className="new-text">Estudiantes con más de tres fallas sin justificación</p>
      
      {/* Cuadro de búsqueda */}
      <div className="search-box">
        <input type="text" placeholder="Buscar por nombre" className="search-input" />
      </div>
      
      {/* Tabla de estudiantes con inasistencias */}
      <table className="fallas-table">
        <thead>
          <tr>
            <th>Nombre estudiante</th>
            <th>Número de ficha</th>
            <th>Total de fallas sin justificación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>José Pérez</td>
            <td>123456</td>
            <td>4</td>
          </tr>
          <tr>
            <td>María López</td>
            <td>789012</td>
            <td>5</td>
          </tr>
          {/* Agrega más filas según sea necesario */}
        </tbody>
      </table>
      
      <div className="left-rectangle">
        <div className="rectangle-content">
          <button className="rectangle-button" onClick={redirectToInasistencias}>
            <FontAwesomeIcon icon={faTimes} className="button-icon" />
            Inasistencias
          </button>
          <button className="rectangle-button" onClick={redirectToRegistroInasistencias}>
            <FontAwesomeIcon icon={faCheckCircle} className="button-icon" />
            Registro de inasistencias
          </button>
          <button className="rectangle-button" onClick={() => console.log('Botón 3 clicado')}>
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

export default ReporteEstudiantes;