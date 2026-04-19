import React from 'react'
import img from '../assets/img/hero.png'

const Hero = () => {
    return (
        <>
            <div className=" flex flex-col items-center xl:mt-[51.21px] mt-5">
                <h5 className='font-semibold xl:text-[134px] xl:leading-37 text-[45px] md:text-7xl'>GOLDEN DOWN</h5>
                <p className='font-normal xl:text-3xl flex text-center text-[16px] md:text-[20px]'>AN AWEKING OF ELEGANCE. A SCENT KISSED <br /> BY LIGHT</p>
                <img src={img} alt="" className='xl:w-290 xl:h-151.75 md:w-150 md:h-85 w-[320px] rounded-[7px] object-cover object-top xl:mt-12.75 mt-5' />
            </div>
        </>
    )
}

export default Hero