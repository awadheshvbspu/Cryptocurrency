import React from 'react';
import Img from '../assets/img/hero-img.png';
import { IoIosArrowDroprightCircle } from 'react-icons/io'

export default function Hero() {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row'>
          <div className='flex-1'>
            <div className='bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]' data-aos='fade-down' data-aos-delay='400'>
              <div className='flex items-center justify-between text-sm lg:text-base'>
                <div className='bg-white text-darkblue rounded-full font-medium py-1 px-4'>75% SAVE</div>
                <div>For the Black Friday weekend.</div>
              </div>
            </div>

            <h1 className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6' data-aos='fade-down' data-aos-delay='500'>Fastest & secure patform to invest in crypto.</h1>
            <p data-aos='fade-down' data-aos-delay='600' className='max-w-[440px] leading-relaxed mb-8'>Buy and sell cryptocurrencies, trusted by 10M  Wallets with over $39 billion in Transactions.</p>
            <button className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base' data-aos='fade-down' data-aos-delay='700'>Try for Free
              <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' />
            </button>
          </div>
          <div className='flex-1' data-aos='fade-up' data-aos-delay='600'>
            <img src={Img} alt='' className=''  />
          </div>
        </div>
      </div>
    </div>
  )
}

