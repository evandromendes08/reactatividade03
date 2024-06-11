import React from 'react'
import ProductList from '../../components/ProductList'

const Home = () => {
  return (
    <>
      <section className='home-banner w-full'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-center text-3xl md:tex-4x1 lg:text-5xl font-semibold text-gray-900'>O melhor Hamburguer você encontra aqui!</h1>
        </div>
      </section>
      <ProductList/>
      </>
  )
}

export default Home