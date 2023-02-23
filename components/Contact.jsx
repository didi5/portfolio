import React from 'react';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import ContactImg from '../public/assets/user.png';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { SocialIcon } from 'react-social-icons';


const Contact = () => {
  return (
    // Media Query
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-gray-600'>Contact</p>
        <h2 className='py-4 text-[#126068]'>Let's stay in touch</h2>
        {/* the grid system */}
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* Left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full'>
                    <div>
                        <Image className='rounded-xl hover:scale-105 ease-in duration-300 ' src='/../public/assets/me.jpg'  
                        width='114' height='64' alt='/'
                        />
                    </div>

                    <div>
                        <h2 className='py-2'>Dilem Kaya</h2>
                        
                        <p className='py-4'>I am happy to help and always looking for improvement. </p>
                    </div>

                    <div>
                    <p className='pt-8'> Let's Connect!</p>
                    <div className='flex items-center justify-between py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            
                            {/* <FaLinkedinIn /> */}
                            
                            <SocialIcon network="linkedin" url="https://www.linkedin.com/in/dilemkaya/" style={{ height: 25, width: 25 }}/>
                        </div>

                       

                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            {/* < FaGithub url="https://github.com/didi5/websites" /> */}
                            {/* <SocialIcon url="https://github.com/didi5/websites" /> */}
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
                </div>

                </div>
               
            </div>
                {/* Right */}

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>

                    <form >
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Name</label>
                            <input
                            className='border-2 rounded-lg p-3 flex border-gray-300'
                            type='text'
                            name='name'
                            />
                        </div>

                         <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>
                                Phone Number
                                </label>
                                <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type='text'
                                name='phone'
                                />
                        </div>

                        </div>

                    <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type='email'
                                name='email'
                            />
                    </div>
                    <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4 '>
                  Send Message
                </button>
        </form>
                </div>
            </div>
        </div>

        <div className='flex justify-center py-16 text-gray-600'>
        <h2>“Choose to be  optimistic. It feels  <span className='text-[#126068]'>better  </span>.” 
        </h2>
        
        </div>

        <div className='flex justify-center py-1'>

        <br/>
        <p> Dalai Lama</p>
        </div>


        <div className='flex justify-center py-12'>
        


          <Link href='/'>
            
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#126068]'
                  size={30}
                />
              </div>
            
          </Link>
        </div>

        </div>
    </div>
  )
}

export default Contact