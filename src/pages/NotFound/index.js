import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h3 className='text-center text-3xl md:tex-4x1 lg:text-5xl font-semibold text-gray-900'>404 - Not Found</h3>
            <br></br>
            <h2 className='text-center text-3xl md:tex-4x1 lg:text-5xl font-semibold text-red-600'>SE O ERRO CONTINUAR ENTRE EM CONTATO EM NOSSO EMAIL: food@food.com</h2>
            <br></br>
            <div className='bg-primary px-6 text-white text-center rounded-full transition duration-700 hover:scale-105'>
            <Link to='/'>Voltar para Página Principal</Link>
            </div>
            
        </div>
    )
}

export default NotFound;