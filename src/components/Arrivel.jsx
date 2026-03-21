import React from 'react'
import img1 from '../assets/arrived1.png'
import img2 from '../assets/arrived2.png'
import img3 from '../assets/arrived3.png'

const Arrivel = () => {
    return (
        <>
            <div className="flex items-center flex-col gap-25 mt-10">
                <div className="font-normal text-[54px] w-310 h-65.25 p-15 text-center ">
                    <p>CRAFTED WITH PRECISION, INSPIRED BY GOLDEN MORNINGS — GOLDEN DOWN
                        REDEFINES TIMELESS BEAUTY.</p>
                </div>
                <div className="flex gap-10">
                    <div className="h-182.5 w-112.5 flex flex-col gap-2">
                        <img src={img1} alt="" className='h-150 rounded' />
                        <div className="font-normal flex flex-col gap-2">
                            <p className='text-[8px]'>PERFUME</p>
                            <h2>AMBER DAWN</h2>
                            <p>₹499.00</p>
                        </div>

                        <button className='border p-2.5 font-normal w-full'>SHOP NOW</button>
                    </div>

                    <div className="h-182.5 w-112.5 flex flex-col gap-2">
                        <img src={img2} alt="" className='h-150 rounded' />
                        <div className="font-normal flex flex-col gap-2">
                            <p className='text-[8px]'>PERFUME</p>
                            <h2>RADIENT HAZE</h2>
                            <p>₹499.00</p>
                        </div>

                        <button className='border p-2.5 font-normal w-full'>SHOP NOW</button>
                    </div>

                    <div className="h-182.5 w-112.5 flex flex-col gap-2">
                        <img src={img3} alt="" className='h-150 rounded' />
                        <div className="font-normal flex flex-col gap-2">
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