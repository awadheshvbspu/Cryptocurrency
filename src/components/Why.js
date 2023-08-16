import React from 'react';
import img from '../assets/img/why-img.png'

export default function Why() {
  return (
    <section className='section'>
    <div className='container mx-auto' >
    <div className='flex flex-col lg:flex-row items-center gap-x-8'>
    <div className='order-2 lg:order-1' data-aos='fade-right' data-aos-offset='400'><img src={img} alt='' /></div>
    <div className='order-1 lg:order-2 max-w-[480px]' data-aos='fade-left' data-aos-offset='400'>
    <h2 className='section-title'>Why you should choose CRAPRO</h2>
    <p className='section-subtitle'>Experience the next generation cryptocurrency olateform. No financial borders extra fees, and fake reviews.</p>
    <button className='btn px-6'>Learn More</button>
    </div>
    </div>
    </div>
    </section>
  )
}
