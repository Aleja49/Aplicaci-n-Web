import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'; // Importar Link y useNavigate desde react-router-dom
import '../../styles/InicioSesion.css'; // Asegúrate de tener los estilos importados correctamente

const InicioSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inicializar el hook useNavigate

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión, como enviar los datos al backend
    console.log(`Email: ${email}, Password: ${password}`);
    // Redirigir a la página de Inasistencias
    navigate('/inasistencias'); // Asegúrate de usar la ruta correcta
  };

  return (
    <div className="inicio-sesion-container">
      <form className="inicio-sesion-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <div className="form-control">
          <label htmlFor="email">Correo electrónico</label>
          <div className="input-container">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              id="email"
              placeholder="Ingrese su correo electrónico"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="password">Contraseña</label>
          <div className="input-container">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              id="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
        </div>
        <button type="submit">Iniciar sesión</button>
        <p className="register-link">
          ¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link> {/* Cambio a Link */}
        </p>
      </form>
    </div>
  );
};

export default InicioSesion;