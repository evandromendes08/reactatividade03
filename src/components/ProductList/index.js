import React, { useState } from 'react'
import Product from '../Product'

const ProductList = () => {
    const [categoriaTab, setCategoriaTab] = useState('Hamburguer');
  return (
    <section className='my-12 max-w-screen-xl mx-auto px-3'>
        {/* MENU DE CATEGORIA */}
        <div className='flex items-center justify-center space-x-6'>
            <p className={categoriaTab === 'Hamburguer' ? "active-menu-tab bg-primary" : 'menu-tab'} onClick={() => setCategoriaTab('Hamburguer')}>Hamburguer</p>
            <p className={categoriaTab === 'Brasileira' ? "active-menu-tab bg-primary" : 'menu-tab'} onClick={() => setCategoriaTab('Brasileira')}>Brasileira</p>
            <p className={categoriaTab === 'Japonesa' ? "active-menu-tab bg-primary" : 'menu-tab'} onClick={() => setCategoriaTab('Japonesa')}>Japonesa</p>
        </div>
        {/* LISTA DE PRODUTOS */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </section>
  )
}

export default ProductList