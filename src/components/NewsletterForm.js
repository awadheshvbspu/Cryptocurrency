import React from 'react'

export default function NewsletterForm() {
  return (
    <div>
   <form className='flex-1 flex flex-col items-start w-full gap-y-6 lg:flex-row lg:gap-x-10'>
   <input type='text' placeholder='Enter Your email' className='input text-base text-white placeholder:text-base'/>
   <button className='btn bg-white text-darkblue hover:bg-white/60'>Subscribe</button>
   </form>
    </div>
  )
}
