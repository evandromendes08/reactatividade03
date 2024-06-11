import { useState } from 'react';
import React from 'react';


const Registro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
     
      console.log('Nome:', name);
      console.log('Email:', email);
      console.log('Senha:', password);
    };
  
    return (
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className='flex flex-col items-center justify-center h-full'>Efetue seu cadastro para Login</h2>
          <div className="form-group flex flex-col items-center justify-center h-full">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='bg-primary px-6 text-white text-center rounded-full transition duration-700 hover:scale-105'
            />
          </div>
          <div className="form-group flex flex-col items-center justify-center h-full">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='bg-primary px-6 text-white text-center rounded-full transition duration-700 hover:scale-105'
            />
          </div>
          <div className="form-group flex flex-col items-center justify-center h-full">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='bg-primary px-6 text-white text-center rounded-full transition duration-700 hover:scale-105'
            />
          </div>
          <div className="form-group flex flex-col items-center justify-center h-full">
            <label htmlFor="password">Repita a Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='bg-primary px-6 text-white text-center rounded-full transition duration-700 hover:scale-105'
            />
          </div>
          <br></br>
          <div className='bg-primary px-6 text-white text-center rounded-full transition duration-700 hover:scale-105'>
          <button type="submit">Enviar</button>
          </div>
          
        </form>
      </div>
    );
  };
  
  export default Registro;