'use client'
import { useBearStore } from '@/app/context/zustand';
import Image from 'next/image'
import React from 'react'

export const NavBar = () => {

  const {isChecked, changeChecked} = useBearStore();

  const scrollTo = (sectionId: string) => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({behavior: "smooth"})
      }
  }

  return (
    <nav className='' > 
      <div className='grid md:grid-cols-3 md:items-center font-mono md:justify-between justify-items-center '>
        <div className='flex items-center'>
        <Image src={'/Logo.webp'} alt={'MichDev'} width={50} height={50} className='bg-black' />
          <h1 className='text-white text-sm '>MichDev</h1>

        </div>
  
        <div className='md:space-x-1 text-xs md:text-sm text-white md:mt-1 my-3 sm:my-0'>
            <button className='hover:text-orange-500 border-r-2 px-2 border-inherit'>
            {isChecked ? 'Home' : 'Inicio'}</button>
          <button  onClick={() => scrollTo('about')}
          className='hover:text-orange-500 border-r-2 px-2 border-inherit'>
            {isChecked ? 'About me' : 'Sobre mi'}</button>
          <button  onClick={() => scrollTo('projects')}
          className='hover:text-orange-500 border-r-2 px-2 border-inherit'>
            {isChecked ? 'Projects' : 'Proyectos'}</button>
          <button onClick={() => scrollTo('contact')}
          className='hover:text-orange-500 px-2'>
            {isChecked ? 'Contact' : 'Contacto'}</button>
      </div>

      <div className='flex md:space-x-5 md:ml-10 my-2 sm:my-0'>
          
      <label className="inline-flex items-center  cursor-pointer space-x-5 ">
        <span className="ms-3 text-xs md:text-sm font-medium text-white dark:text-white">ESP</span>
        <input type="checkbox" checked={isChecked} onChange={() => changeChecked(isChecked)} className="sr-only peer" />
        <div className="relative w-11 h-6
         bg-gray-200 peer-focus:outline-none peer-focus:ring-4
          peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer
           dark:bg-gray-700 peer-checked:after:translate-x-full
            rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white
            after:content-[''] after:absolute after:top-[2px] after:start-[2px]
           after:bg-white after:border-gray-300 after:border after:rounded-full
            after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-xs md:text-sm font-medium text-white dark:text-white">ENG</span>
      </label>


      </div>

      </div>


    </nav>
  )
}
