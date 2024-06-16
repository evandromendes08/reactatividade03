import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login/index';
import { AuthProvider } from './context/AuthContext';
import Contato from './pages/Contato';
import ProtectedRoute from './Routes/ProtectedRoute';


function App() {
  return (
    <>
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
          }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Routes>
    </AuthProvider>

    </>
  );
}

export default App;
