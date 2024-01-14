'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500'>
                        Hello, Im {' '}
                    </span>
                        <TypeAnimation
                            sequence={[
                                'Pasha',
                                1000, //
                                'Awesome',
                                1000,
                                'Front End',
                                1000,
                                'Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={15}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
                        Frontend developer specializing in creating interactive and stylish websites, helping businesses stand out in the digital space by crafting effective online interfaces to engage clients.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-200 text-white'>
                            Hire Me
                        </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 mb-6 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] relative'>
                        <Image src='/images/hero.png'
                               alt='hero-image'
                               width={300}
                               height={300}
                               className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;