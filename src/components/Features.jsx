import React from 'react'
import img1 from '../assets/img/features1.png'
import img2 from '../assets/img/features2.png'
import img3 from '../assets/img/features3.png'
import img4 from '../assets/img/features4.png'

const Features = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-25 mb-44.5">
                <h1 className='text-[90px] font-medium text-center flex flex-col leading-20  mb-10'>THE ALCHEMY <p>OF <span>GOLDEN DOWN</span></p></h1>

                <div className="flex gap-10">
                    <div className="h-122.75 w-83.75 flex flex-col gap-2">
                        <img src={img1} alt="" className='h-100 w-80 rounded' />
                        <div className="font-normal flex flex-col gap-2">
                            <p className='text-[8px]'>PODUCT NAME</p>
                            <h2>ELISE NOIRE</h2>
                            <p>₹999.00</p>
                        </div>

                        <button className='border p-2.5 font-normal w-full'>SHOP NOW</button>
                    </div>

                    <div className="h-122.75 w-83.75 flex flex-col gap-2">
                        <img src={img2} alt="" className='h-100 w-80 rounded' />
                        <div className="font-normal flex flex-col gap-2">
                            <p className='text-[8px]'>PODUCT NAME</p>
                            <h2>SERICA</h2>
                            <p>₹1499.00</p>
                        </div>

                        <button className='border p-2.5 font-normal w-full'>SHOP NOW</button>
                    </div>

                    <div className="h-122.75 w-83.75 flex flex-col gap-2">
                        <img src={img3} alt="" className='h-100 w-80 rounded' />
                        <div className="font-normal flex flex-col gap-2">
                            <p className='text-[8px]'>PODUCT NAME</p>
                            <h2>CUIR OBSCUR</h2>
                            <p>₹599.00</p>
                        </div>

                        <button className='border p-2.5 font-normal w-full'>SHOP NOW</button>
                    </div>

                    <div className="h-122.75 w-83.75 flex flex-col gap-2">
                        <img src={img4} alt="" className='h-100 w-80 rounded' />
                        <div className="font-normal flex flex-col gap-2">
                            <p className='text-[8px]'>PODUCT NAME</p>
                            <h2>L'INCONNU</h2>
                            <p>₹1999.00</p>
                        </div>

                        <button className='border p-2.5 font-normal w-full'>SHOP NOW</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Features