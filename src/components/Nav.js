import React from 'react';
import { navData } from '../data'

export default function Nav() {
  return (
    <nav>
      <ul className='flex gap-x-8 pt-3.5'>
        {navData.map((item, i) => {
          return (
            <li className='border-b-2 border-transparent hover:border-blue transition-all duration-300' key={i}><a href={item.href}>{item.name}</a></li>
          )
        })}
      </ul>
    </nav>
  )
}

