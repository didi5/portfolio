import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import propertyImg from '../public/assets/background2.jpg' 
import ProjectItem from './ProjectItem'

// 1:13h
//Change pictures of Work


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-gray-600'>My Services</p>
            <h2 className='py-4 text-[#126068]'>What I Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                      <ProjectItem  
                      title='Web Designer' 
                      backgroundImg={propertyImg} 
                      projectUrl='/property' 
                      />
                    
                      <ProjectItem  
                      title='(Podcaster/Video) Creator' 
                      backgroundImg={propertyImg} 
                      projectUrl='/property' 
                      />


                      {/* <ProjectItem 
                      title='Coach'
                        backgroundImg={propertyImg}
                        projectUrl='/property' 
                      /> */}
            </div>
        </div>
    </div>
  )
}

export default Projects