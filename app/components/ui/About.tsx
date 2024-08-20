'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faHtml5, faReact, faCss3Alt, faDocker } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import { useBearStore } from '@/app/context/zustand'



export const About = () => {

  const {isChecked} = useBearStore();
  

  return (
  <div 
  id='about'
  className= "items-center mx-auto md:mt-[120px] md:max-w-screen-md bg-zinc-900 p-5 rounded-md animate-fade-up animate-delay-[2000ms]">
    <div>
      <h2 className='text-orange-500 text-xl md:text-2xl underline italic mb-3'>{isChecked ? 'About me' : 'Sobre mi'}</h2>
    </div>

    <p className='text-gray-200 text-sm md:text-base '>
      {isChecked 
      ? 'Self-taught developer, 26 years old. From Chile, Los Lagos. I consider myself a very cooperative, respectful person with strong communication skills. My passion for continuous learning drives me to always seek the best solutions, adapting and constantly improving to face any challenge that comes my way.' 
      : `Desarrollador autodidacta, 26 años. De Chile, Los lagos. 
      Me considero una persona bastante cooperativa,
       respetuosa y con una gran capacidad de comunicación. Mi pasión por el aprendizaje constante me impulsa a buscar siempre las mejores soluciones, adaptándome y mejorando continuamente para enfrentar cualquier desafío que se presente.` }
      
    </p>

    <div className='flex-block mt-4 text-sm md:text-base'>
      <h3 className='text-white font-bold mb-3'>{isChecked ? 'Skills:' : 'Habilidades:'}</h3>
      <div className='grid md:flex grid-cols-4 justify-items-center md:space-x-4 md:grid-cols-12  items-center'>
      <FontAwesomeIcon icon={faHtml5} size='3x' className='w-7 md:w-10' style={{color: 'orangered'}} />
      <FontAwesomeIcon icon={faCss3Alt} size='3x'  className='w-7 md:w-10' style={{color: '#264de4'}} />
      <FontAwesomeIcon icon={faJs} size='3x' className='w-7 md:w-10' style={{color: 'yellow'}} />
      <Image src={'/typescript.webp'} alt={'TypeScript'} className='w-7 md:w-10' width={44} height={30}/>
      <FontAwesomeIcon icon={faReact} size='3x' className='w-7 md:w-10' style={{color:'#61dbfb'}} />
      <FontAwesomeIcon icon={faDocker} size='3x' className='w-10 md:w-14' style={{color:'#0db7ed'}} />
      <Image src={'/mongo.webp'} alt={'MongoDB'}  className='w-12 md:w-20' width={90} height={30}/>
      <Image src={'/next.png'} alt={'Nextjs'} className='w-12 md:w-20'  width={90} height={30}/>
      </div>

    </div>


  </div>
  )

  }
  