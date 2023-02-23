import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#126068] to-[#ecf0f3]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-xl text-white tracking-wider text-center'>{title}</h3>
       
        <Link href={projectUrl}>
        <button className='w-full p-4 text-gray-100 mt-4  cursor-pointer'>
                         More Info
          </button>
           
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem


// text-center py-2 rounded-lg bg-white text-gray-700 font-bold text-lg