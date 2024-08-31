'use client'
import Link from "next/link";
import { ProjectCard } from "../project";
import { useBearStore } from "@/app/context/zustand";



export const Projects = () => {

  const {isChecked} = useBearStore();

  const projects = [
   {
      link: `` ,
      images: ['bsg1', 'bsg2', 'bsg3', 'bsg4', 'bsg5'],
      name: 'BSG E-Commerce',
      description: isChecked 
      ? 'E-Commerce with a self-manageable panel, both for products and for the slideshow and relevant products. Developed with Next.js, TypeScript, Material UI, and MongoDB'
      :`E-Commerce con panel autoadministrable,
      tanto para los productos, como para el slideshow y productos relevantes.
      Desarrollada con Nextjs, TypeScrypt, Material UI y MongoDB `
    },
   {
        link: `https://frutillarpymes.netlify.app/` ,
        images: ['frutillar1', 'frutillar2', 'frutillar3', 'frutillar4'],
        name: `Frutillar Pymes`,
        description: isChecked 
        ? 'Project for the locality of Frutillar, Chile. Aiming to support all small businesses in the Frutillar commune by having them all in one place. It features a comment system, rating, and user registration. Developed with Next.js, TypeScript, Material UI, and MongoDB.' 
        : `Proyecto para la localidad de Frutiillar, Chile.
        Buscar apoyar a todas las pymes pertenecientes a la comuna de Frutillar, estando todas en un solo sitio.
        Cuenta con sistema de comentarios, calificación y registro de usuarios. Desarrollada con NextJS, TypeScript, Material UI y MongoDB`
    },
    {
      link: "https://construsierra.es",
      images: ['sierra1', 'sierra2', 'sierra3', 'sierra4'],
      name: `Constructora Sierra`,
      description: isChecked 
      ? 'Landing Page created for a construction company in Parla, Madrid. It has buttons linking to their social media and email. It also features an admin panel for managing their projects, developed with Next.js, TypeScript, Material UI, and uses Cloudinary for images'
      : `Landing Page realizada para una constructora, en Parla, Madrid. Cuenta con botones a sus redes sociales y correo. Y panel 
      administrable para sus proyecto, desarrollada con Next js, Typescript, Material UI y uso de Cloudinary para las imágenes  `
  }
  ]
  return (
    <div id="projects" className="items-center mx-auto my-10  max-w-screen-md bg-zinc-900 p-5 rounded-md">
    <div>
      <h2 className='text-orange-500 text-1xl md:text-2xl underline italic mb-5'>{isChecked ? 'Projects' : 'Proyectos'}</h2>
    </div>

    <div className="md:flex grid grid-col-1 justify-items-center md:space-x-8 ">

      {
        projects.map(project => (
          <Link href={`${project.link}`} target="_blank" key={project.name}>
          <div  className="md:mw-1/2 md:my-0 my-2 bg-orange-400 text-center rounded-2xl hover:-translate-y-2">
          <ProjectCard key={project.name} project={project} />
          </div>
          </Link>
        ))
      }


    </div>

      <div className="text-center text-gray-200 mt-5  p-5 font-semibold border-y-2 border-orange-500">
        <p className="md:text-base text-sm">{isChecked 
        ? `Although I don't have formal work experience, 
        I've gained experience by solving problems in the projects I've developed 
        on my own. For this reason, I've chosen to include only the projects that I have 
        fully created myself, although I've also completed other projects through courses
         (which can be found on my GitHub). The course projects don't represent much of 
         a challenge compared to my own projects, which require applying the knowledge 
         I've acquired and solving the problems encountered along the way.` 
        : `Aunque no cuento con experiencia laboral formal, he adquirido experiencia 
        resolviendo problemas en los proyectos que he desarrollado por mi cuenta. 
        Por esta razón, he decidido incluir solo los proyectos que he creado íntegramente, 
        aunque también he completado otros proyectos a través de cursos 
        (disponibles en mi GitHub). Los proyectos de los cursos no representan un gran 
        desafío en comparación con los propios, que sí requieren la aplicación de los 
        conocimientos adquiridos y la resolución de los problemas que surgen en el proceso.`}
        </p>
      </div>

    </div>
  )
}
