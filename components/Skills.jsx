import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-gray-600'>My Services</p>
            <h2 className='py-4 text-[#126068]'>Learning Everyday</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


                <div className='p-6 shadown-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/me.jpg'  
                        width='114' height='64' alt='/'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Web Designer</h3>
                        <p>Coding & Design </p>
                    
                       
                    </div>

                    <button className='w-full p-4 text-gray-100 mt-4 '>
                         Your Coder
                        </button>
                </div>
                </div>

                <div className='p-6 shadown-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/me.jpg'  
                        width='114' height='64' alt='/'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Your Coach</h3>
                        <p>Personal</p>
                     
                    </div>
                    <button className='w-full p-4 text-gray-100 mt-4 '>
                         Your Coach
                        </button>
                </div>
                </div>


                <div className='p-6 shadown-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/me.jpg'  
                        width='114' height='64' alt='/'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Texter</h3>
                        <p>Creative</p>
                        
                    </div>
                    <button className='w-full p-4 text-gray-100 mt-4 '>
                         Your Texter
                        </button>
                </div>
                </div>

                <div className='p-6 shadown-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/me.jpg'  
                        width='114' height='64' alt='/'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Content Creator</h3>
                        
                    </div>
                    <button className='w-full p-4 text-gray-100 mt-4 '>
                         Your Creator
                        </button>
                </div>
                </div>


               


               




             


               


              


               


                


                




            </div>
        </div>
    </div>
  )
}

export default Skills