import React from 'react'
import img1 from '../assets/img/arrived1.png'
import img2 from '../assets/img/arrived2.png'
import img3 from '../assets/img/arrived3.png'

const Arrivel = () => {
    return (
        <>
            <div className="flex items-center flex-col  md:mt-20 mt-10">
                <div className="font-normal md:text-[54px] md:w-310 h-max md:px-15 text-center text-[18px] w-[395px]">
                    <p>CRAFTED WITH <span>PRECISION</span>, INSPIRED BY <span className='font-medium'>GOLDEN MORNINGS</span> — GOLDEN DOWN
                        REDEFINES <span>TIMELESS BEAUTY.</span></p>
                </div>
                <div className="md:flex md:gap-6 md:mt-14.75 mt-7">
                    <div className="md:h-182.5 md:w-112.5 h-140 w-90 flex flex-col gap-2">
                        <img src={img1} alt="" className='md:h-150 h-100 rounded' />
                        <div className="font-normal flex flex-col md:gap-2 ">
                            <p className='text-[8px]'>PERFUME</p>
                            <h2>AMBER DAWN</h2>
                            <p>₹499.00</p>
                        </div>

                        <button className='border p-2.5 font-normal w-full'>SHOP NOW</button>
                    </div>

                    <div className="md:h-182.5 md:w-112.5 w-90 h-140 flex flex-col gap-2">
                        <img src={img2} alt="" className='md:h-150 h-100 rounded' />
                        <div className="font-normal flex flex-col md:gap-2">
                            <p className='text-[8px]'>PERFUME</p>
                            <h2>RADIENT HAZE</h2>
                            <p>₹499.00</p>
                        </div>

                        <button className='border p-2.5 font-normal w-full'>SHOP NOW</button>
                    </div>

                    <div className="md:h-182.5 md:w-112.5 w-90 h-140 flex flex-col gap-2">
                        <img src={img3} alt="" className='md:h-150 h-100 rounded' />
                        <div className="font-normal flex flex-col md:gap-2">
                            <p className='text-[8px]'>PERFUME</p>
                            <h2>SUNLIT WHISPER</h2>
                            <p>₹499.00</p>
                        </div>

                        <button className='border p-2.5 font-normal w-full'>SHOP NOW</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Arrivel