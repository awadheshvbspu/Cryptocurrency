
import React, { useState } from 'react'
import { currency } from '../data';
import  {IoIosArrowForward} from 'react-icons/io'

export default function Trade() {
  const [itemName,setItemName] = useState('Bitcoin')
  return (
    <section className='section lg:pt-[32px] bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:mt-[320px]'>
    <div className='container mx-auto'>
    <h2 className='section-title text-center mb-16' data-aos='fade-up' data-aos-offset='400'> Trade securely and market the high growth cryptocurrencies.</h2>
    <div className='flex flex-col lg:flex-row gap-[45px] ' data-aos='fade-up' data-aos-offset='450'>
    {currency.map((item,i) =>{
      const { image,name ,abbr,description} = item;
      return(
        <div onClick={()=>setItemName(name)} key={i} className={`${name === itemName ? 'bg-violet text-white':'bg-white'} w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-200`}>
        <div className='flex flex-col justify-center items-center'>
    
          <img src={image} alt='' className='mb-12' />
        <div className='mb-4 flex items-center gap-x-2'>
        <div className='text-[32px] font-bold'>{name}</div>
        <div className='text-lg text-gray-500 font-medium'>{abbr}</div>
        </div>
        <p className='mb-6 text-center'>{description}</p>
        <button className={`${name === itemName  ? 'text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3' : 'border-2 border-gray-300'} border-2 border-gray-300 rounded-full px-2 h-16 flex justify-center items-center`}>
        {name === itemName && (<div className= "text-lg font-medium"> Start Mining</div>)}
        <IoIosArrowForward className={`${name === itemName ? 'text-2xl' : 'text-3xl'}`}/>
        </button>
        </div>
        </div>
      )
    })}
    </div>
    </div>
    
    </section>
  )
}
