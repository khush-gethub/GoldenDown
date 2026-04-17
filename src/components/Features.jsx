import React from 'react'
import img1 from '../assets/img/features1.png'
import img2 from '../assets/img/features2.png'
import img3 from '../assets/img/features3.png'
import img4 from '../assets/img/features4.png'

const Features = () => {
    return (
        <>
            <div className="flex flex-col items-center md:mt-25 mt-15 md:mb-44.5 mb-20">
                <h1 className='md:text-[90px] text-[40px] font-medium text-center flex flex-col md:leading-20 leading-10 mb-10'>THE ALCHEMY <p>OF <span>GOLDEN DOWN</span></p></h1>

                <div className="md:flex gap-10">
                    <div className="md:h-122.75 md:w-83.75 h-120 w-80 flex flex-col gap-2 md:text-[16px] text-[14px]">
                        <img src={img1} alt="" className='h-100 w-80 rounded' />
                        <div className="font-normal flex flex-col md:gap-2">
                            <p className='text-[8px]'>PODUCT NAME</p>
                            <h2>ELISE NOIRE</h2>
                            <p>₹999.00</p>
                        </div>

                        <button className='border p-2.5 font-normal w-full hover:bg-black hover:text-white'>SHOP NOW</button>
                    </div>

                    <div className="md:h-122.75 md:w-83.75 h-120 w-80 flex flex-col gap-2 md:text-[16px] text-[14px] md:mt-0 mt-12">
                        <img src={img2} alt="" className='h-100 w-80 rounded' />
                        <div className="font-normal flex flex-col md:gap-2">
                            <p className='text-[8px]'>PODUCT NAME</p>
                            <h2>SERICA</h2>
                            <p>₹1499.00</p>
                        </div>

                        <button className='border p-2.5 font-normal w-full hover:bg-black hover:text-white'>SHOP NOW</button>
                    </div>

                    <div className="md:h-122.75 md:w-83.75 h-120 w-80 flex flex-col gap-2 md:text-[16px] text-[14px] md:mt-0 mt-12">
                        <img src={img3} alt="" className='h-100 w-80 rounded' />
                        <div className="font-normal flex flex-col md:gap-2">
                            <p className='text-[8px]'>PODUCT NAME</p>
                            <h2>CUIR OBSCUR</h2>
                            <p>₹599.00</p>
                        </div>

                        <button className='border p-2.5 font-normal w-full hover:bg-black hover:text-white'>SHOP NOW</button>
                    </div>

                    <div className="md:h-122.75 md:w-83.75 h-120 w-80 flex flex-col gap-2 md:text-[16px] text-[14px] md:mt-0 mt-12">
                        <img src={img4} alt="" className='h-100 w-80 rounded' />
                        <div className="font-normal flex flex-col md:gap-2">
                            <p className='text-[8px]'>PODUCT NAME</p>
                            <h2>L'INCONNU</h2>
                            <p>₹1999.00</p>
                        </div>

                        <button className='border p-2.5 font-normal w-full hover:bg-black hover:text-white'>SHOP NOW</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Features