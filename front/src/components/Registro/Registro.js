import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Registro.css'; // Asegúrate de tener los estilos importados correctamente

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    axios.post('http://localhost:4000/Cliente', {
      full_name: nombre,
      email: email,
      password: password
    })
    .then(response => {
      console.log(response.data);
      mostrarAlerta();
    })
    .catch(error => {
      console.error('Hubo un error al registrar al usuario:', error);
      alert('Hubo un error al registrar al usuario');
    });
  };

  const mostrarAlerta = () => {
    const alerta = document.createElement('div');
    alerta.textContent = 'Usuario creado correctamente';
    alerta.classList.add('alerta-creado');
    document.body.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  };

  return (
    <div className="registro-container">
      <form className="registro-form" onSubmit={handleSubmit}>
        <h2>Regístrate</h2>
        <div className="form-control">
          <label htmlFor="nombre">Nombre</label>
          <div className="input-container">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input
              type="text"
              id="nombre"
              placeholder="Ingrese su nombre completo"
              value={nombre}
              onChange={handleNombreChange}
              required
            />
          </div>
        </div>
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
        <div className="form-control">
          <label htmlFor="confirm-password">Confirmar Contraseña</label>
          <div className="input-container">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirme su contraseña"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;