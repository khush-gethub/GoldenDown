import React from 'react'
import img from '../assets/img/hero.png'

const Hero = () => {
    return (
        <>
            <div className=" flex flex-col items-center md:mt-[51.21px] mt-5 ">
                <h5 className='font-semibold md:text-[134px] md:leading-37 text-[50px]'>GOLDEN DOWN</h5>
                <p className='font-normal md:text-3xl flex text-center text-lg'>AN AWEKING OF ELEGANCE. A SCENT KISSED <br /> BY LIGHT</p>
                <img src={img} alt="" className='md:w-290 md:h-151.75 w-[320px] rounded-[7px] object-cover object-top md:mt-12.75 mt-5' />
            </div>
        </>
    )
}

export default Hero