import React from 'react';
import img3 from '../assets/img/feature-3-img.png'

export default function FeaturesSection3() {
  return (
    <section className='py-[30px] lg:py-[120px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-end items-center lg:flex-row'>
        <div className='flex-1 max-w-[456px]' data-aos='fade-right' data-aos-offset='400'>
        <h3 className='h3 mb-6'>Grow Your profit and track your investment.</h3>
        <p className='text-gray mb-8'>Use advanced analytics tools. Clear Trading view charts let you track current na historical profit investments.</p>
        <button className='btn px-8 mb-6 lg:mb-0'>learn More</button>
        </div>
        <div className='flex-1 lg:absolute lg:left-0 order-2 lg:order-1' data-aos='fade-left' data-aos-offset='450'>
          <img src={img3} alt='' className='' />
        </div>
        </div>
      </div>
    </section>
  )
}
