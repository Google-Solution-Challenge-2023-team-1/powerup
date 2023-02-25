import React from 'react'
import { mainImg } from '@/assets'
import TypewriterComponent from "typewriter-effect";

export default function HomeHeader() {
    const newStrings = ['Communities', 'Individuals', 'Organizations'];
  return (
        <div className='flex w-full bg-center h-screen md:h-[90vh] bg-cover bg-no-repeat text-white gap-2 justify-between ' style={{ backgroundImage: `url(${mainImg.src})` }}>
          <div className="w-full px-8 md:px-14 bg-gradient-to-r from-black/60  to-transparent gap-4">

          <div className='text-3xl md:text-6xl font-semibold pt-32 md:pt-44'>
            Affordable Energy For <span className='text-primary'>
              <TypewriterComponent  
                  options={{
                    strings: newStrings,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
          </div>
          <p className="lg:w-[40%] w-full text-sm md:text-xl py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fuga quae cupiditate sapiente porro asperiores natus 
            quam eveniet inventore veniam, earum esse minus, 
            voluptatem voluptatum facere
          </p>
          <div className='flex flex-row gap-5'>
            <button className='border-2 mt-3 font-bold shadow-3xl border-black w-[8rem] text-xl rounded-lg py-2 bg-[#E65100]'>Register</button>
            <button className='border-2 mt-3 font-bold shadow-3xl bg-white text-black w-[9rem] text-lg rounded-lg py-2 '>Learn More</button>
          </div>
          </div>
        </div>
  )
}
