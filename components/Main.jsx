import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

// Change the color to my colors

export const Main = () => {
  return (
    <div id='home' className= 'w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                {/* <p className='uppercase text-sm tracking-widest text-gray-600'>
                    Welcome
                </p> */}
                
                <h1 >
                    I am <span className='text-[#126068]'>Dilem  </span> 
                    
                </h1>

               

                <h2 className='py-2 text-gray-700'>
                A perpetual learner and optimist
                </h2>

                <div className='flex justify-center items-center '>
                        <Image className='rounded-xl hover:scale-105 ease-in duration-300' src='/../public/assets/circle.png'  
                        width='160' height='115' alt='/#about'
                        />
                </div> 

                <p className='py-4 text-gray-600  m-auto'>
                    I am a web-developer, coach, texter and content-creator. 
                </p>


              
              


                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            {/* <FaLinkedinIn url="https://www.linkedin.com/in/dilemkaya/" /> */}
                            <SocialIcon network="linkedin" url="https://www.linkedin.com/in/dilemkaya/" style={{ height: 25, width: 25 }}/>

                        </div>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            {/* < FaGithub /> */}
                            <SocialIcon network="github" url="https://github.com/didi5/websites" style={{ height: 25, width: 25 }} />

                        </div>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            {/* <FaInstagram /> */}
                            <SocialIcon network="instagram" url="https://www.instagram.com" style={{ height: 25, width: 25 }} />

                        </div>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            {/* < AiOutlineMail /> */}
                            <SocialIcon network="email" url="https://dilem.can@yahoo.com" style={{ height: 25, width: 25 }} />

                        </div>
                </div>


                <div className='flex justify-center py-30'>
                    <Link href='/#about'>
                        
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleDown
                            className='text-[#126068]'
                            size={30}
                            />
                        </div>
                        
                    </Link>
                </div>

               

               
               

         
            </div>
           
        </div>
    </div>
  )
}
