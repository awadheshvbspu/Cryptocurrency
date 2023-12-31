import React from 'react';
import Logo from '../assets/img/logo.svg';
import VisImg from '../assets/img/visa.png';
import Master from '../assets/img/mastercard.png';
import bitcoin from '../assets/img/bitcoin.png'
import { IoLogoYoutube, IoLogoInstagram, IoLogoTwitch, IoLogoLinkedin } from 'react-icons/io'

export default function Footer() {
  return (
    <footer className='lg:pt-24 pt-0' data-aos='fade-up' data-aos-offset='400'>
      <div className='container mx-auto lg:mb-24'>
        <div className='flex flex-col gap-12 lg:flex-row'>
          <div className='flex-1 mx-auto lg:mx-0 max-w-[285px'><a href='#'><img src={Logo} alt='' /></a></div>
          <div className='flex flex-1 flex-col gap-16 lg:flex-row'>
            <div className='text-center w-full lg:text-left'>
              <div className='text-xl font-medium mb-6'>Quick Links</div>
              <ul className='space-y-4 text-gray'>
                <li><a className='hover:text-blue transition' href='#'>Home</a></li>
                <li><a className='hover:text-blue transition' href='#'>Products</a></li>
                <li><a className='hover:text-blue transition' href='#'>About</a></li>
                <li><a className='hover:text-blue transition' href='#'>features</a></li>
                <li><a className='hover:text-blue transition' href='#'>Contact</a></li>
              </ul>
            </div>
            <div className='text-center w-full lg:text-left'>
              <div className='text-xl font-medium mb-6'>Resource Links</div>
              <ul className='space-y-4 text-gray'>
                <li><a className='hover:text-blue transition' href='#'>Download Whitepaper</a></li>
                <li><a className='hover:text-blue transition' href='#'>Smart token</a></li>
                <li><a className='hover:text-blue transition' href='#'>BlockChain explore</a></li>
                <li><a className='hover:text-blue transition' href='#'>Crypto Api</a></li>
                <li><a className='hover:text-blue transition' href='#'>Interest</a></li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className='lg:ml-[80px]'>
              <h3 className='h3 font-medium text-center mb-10 lg:text-left'>We accept following payment systems</h3>
              <div className='flex justify-center items-center gap-6'>
                <img src={VisImg} alt='' />
                <img src={Master} alt='' />
                <img src={bitcoin} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-12'>
        <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
          <div>&copy; 2023 CRAPRO. All Right Reserved.</div>
          <div className='flex text-2xl gap-x-8'>
            <a href='#' className='hover:text-blue transition'><IoLogoYoutube /></a>
            <a href='#' className='hover:text-blue transition'><IoLogoInstagram /></a>
            <a href='#' className='hover:text-blue transition'><IoLogoTwitch /></a>
            <a href='#' className='hover:text-blue transition'><IoLogoLinkedin /></a>
          </div>

        </div>
      </div>
    </footer>
  )
}
