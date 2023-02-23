import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';


// Link to projetcs page

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-3'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-gray-600'>About </p>
                <h2 className='py-4 text-[#126068]'> Who am I</h2>
                <br/>

                <p>
                    
                    Optimism leads me. That's why I am always on improving myself - be it with learning Chinese 
                   or developing on new skills. 
                    Take a look into my CV.
            
                </p>

                <br/>
               <p>
                    As a former professional basketball player, 
                    I also have a affinity for sports and health.{'\n'} Find out what I offer down below! 

                   
               </p>
        

                {/* <Link href='/#skills'>
                <button className='py-4 p-6 text-gray-100 mt-4 '>
                         My CV
                </button>
                </Link> */}
               
  
                    <br/>
                    <br/>


                <div className='flex  py-30'>
                    <Link href='/#skills'>
                        
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleDown
                            className='text-[#126068]'
                            size={30}
                            />
                        </div>
                        
                    </Link>
                </div>



            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
               <Image className='rounded-xl' src="/../public/assets/CV_Pic.png" alt="/" width='395' height='240' /> 
            </div>

        </div>


        

    </div>
  )
}

export default About