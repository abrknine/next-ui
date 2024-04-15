import React from 'react'
import Link from 'next/link'
const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative  overflow-hiddenn mx-auto py-10 md:py-0'>
            <div className='p-4 relative z-10 w-full text-center'>
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 '>Master the are of Music</h1>
                <p className='mt-4 font-normal text-base  md:text-lg text-neutral-300 max-w-lg mx-auto '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus aut d
                    Provident eligendi facere reprehenderit facilis maiores  quia blanditiis,
                     quae maxime sunt aspernatur sequi suscipit animi aperiam obcaecati? Fuga!
                </p>
                <div className='mt-4'> 
                <Link href={'/courses'}> Explore Courses</Link>
                </div>
            </div>
    </div>
  )
}

export default HeroSection