'use client'
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image'

interface Props {
    project: Project;
}

interface Project {
    images: string[];
    name: string;
    description: string;
}

export const ProjectCard: FC<Props> = ({project}) => {

  return (
    <>
            <div>
            <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop>
                {
                  project.images.map(image => (
                    <div key={image}>
                      <Image key={image} src={`/${image}.webp`} alt={"BSG"} width={300} height={50} />
                    </div>
                  ))
                }
            </Carousel>
            <div >
                <h3 className="text-gray-300 font-bold">{project.name}</h3>
            </div>
        
            <div>
              <p className="text-sm font-medium p-3" >{project.description}</p>
            </div>
        
          </div>
    
    </>
  )
}
