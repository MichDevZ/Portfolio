'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useBearStore } from '@/app/context/zustand'


export const Presentation = () => {

  
  const {isChecked} = useBearStore();
  
  
  return (
    <>
    
    <div className="grid my-10 md:grid-cols-2
     justify-items-center text-center  md:mt-[120px]
     md:ml-[130px]" >
    <div className="grid md:flex-block
     font-mono justify-items-center md:justify-items-start ">
    <h1 className="text-orange-500 md:text-5xl text-2xl
     text-nowrap animate-fade-right animate-duration-[2000ms]">
    Michael Vargas</h1>
    <h2 className="text-white text-nowrap 
    text-1xl md:text-2xl mb-2 animate-fade-down animate-duration-[1500ms] 
    animate-delay-[500ms]">
    {isChecked ? 'Full Stack Developer' : 'Desarrollador Full Stack'}</h2>
    <div className='flex mb-8 space-x-3 animate-fade-left animate-duration-[1000ms] animate-delay-[1500ms] '>
      <Link href={'https://github.com/MichDevZ'} target='_blank'>
      <svg className="h-8 md:w-7 text-red-500 md:size-auto size-5"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
      </Link>

      <Link href={'https://www.linkedin.com/in/michael-vargas-rodriguez-a29562323/'} 
      target='_blank'>
      <FontAwesomeIcon icon={faLinkedin} size='2x' className='md:size-auto size-5' style={{color:'#0077B5'}} />
      </Link>
      <Link href={'mailto:michael.vargasr98@gmail.com'}>
      <FontAwesomeIcon icon={faEnvelope} className='md:size-auto size-6' style={{color:'#0077B5', fontSize: '34px'}} />
      </Link>
      </div>
    </div>

    <div className="flex">
      <div>
        <Image src={'/Logo.webp'} alt={'MichDev'} width={150} height={50} className='bg-white' />

        <button className='bg-gray-400 hover:bg-gray-400
       text-gray-800 font-bold md:py-2 py-1 px-3 rounded'>

        <div className='flex items-center '>
            <svg className="fill-current md:w-2 h-4 mr-2 md:mr-2" 
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <a className='text-xs' href={isChecked ? "/curriculum en.pdf" : "/curriculum es.pdf" } 
        download={isChecked ? "curriculum en.pdf" : "curriculum es.pdf"}>
          {isChecked ? 'Download my CV' : 'Descarga mi CV'}</a>
        </div>

        </button>
      </div>

    </div>

    </div>

    
</>
  )
}