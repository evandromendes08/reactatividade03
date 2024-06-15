import React, { useContext } from 'react'
import logo from '../../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { userLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className='bg-transparent z-50 w-full'>
        <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
            <div className='flex flex-grow items-center'>
                <Link to='/'>
                <img src={logo} alt="Logo" className='w-36 cursor-pointer'/>
                <h1 className='text-center text-3xl font-semibold text-gray-700'> Food App</h1>
                </Link>
            </div>
            <div className='flex items-center justify-end space-x-6'>

                <button onClick={() => navigate('/login')} className='bg-primary px-6 text-white rounded-full transition duration-700 hover:scale-105'>Login</button>

                <button onClick={() => navigate('/registro')} className='bg-primary px-6 text-white rounded-full transition duration-700 hover:scale-105'>Register</button>
              
                <button onClick={() => navigate('/notfound')} className='bg-primary px-6 text-white rounded-full transition duration-700 hover:scale-105'>Contato</button>

            </div>
        </nav>

    </header>
  )
}

export default Navbar