'use client'
import { useBearStore } from '@/app/context/zustand'
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export const Contact = () => {

    const {isChecked} = useBearStore();

  return (
    <div id='contact' className="items-center mx-auto my-10  
    max-w-screen-md bg-zinc-900 p-5 rounded-md">
        <div>
            <h2 className='text-orange-500 text-1xl md:text-2xl underline italic mb-5'>{isChecked ? 'Contact me' : 'Contactame'}</h2>
        </div>
    
    <div className='flex justify-center'>
        <Link href={'https://www.linkedin.com/in/michael-vargas-rodriguez-a29562323/'}
        target='_blank'>
            <FontAwesomeIcon
             icon={faLinkedin} size='2x' className='md:size-auto size-5' style={{color:'#0077B5'}} />
        </Link>

        <Link href={'https://wa.me/+56955377838'} target='_blank'>
            <FontAwesomeIcon
             icon={faWhatsapp} size='2x' className='ml-4 md:size-auto size-5' style={{color:'#075E54'}} />
        </Link>

        <Link href={'mailto:michael.vargasr98@gmail.com'}>
            <FontAwesomeIcon
             icon={faEnvelope} className='ml-3 md:size-auto size-6' style={{color:'#d44638', fontSize: '34px'}} />
        </Link>
    </div>

    </div>
  )
}
