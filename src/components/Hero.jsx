import React from 'react'
import img from '../assets/hero.png'

const Hero = () => {
    return (
        <>
            <div className=" flex flex-col items-center mt-20">
                <h5 className='font-extrabold text-[134px] leading-37'>GOLDEN DOWN</h5>
                <p className='font-normal text-3xl flex text-center'>AN AWEKING OF ELEGANCE. A SCENT KISSED <br /> BY LIGHT</p>
                <img src={img} alt="" className='w-290 h-151.75 rounded-[7px] object-cover object-top mt-13' />
            </div>
        </>
    )
}

export default Hero