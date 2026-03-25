import React from 'react'
import img1 from '../assets/img/cta1.png'
import img2 from '../assets/img/cta2.png'
import img3 from '../assets/img/cta3.png'
import img4 from '../assets/img/cta4.png'

const CTA = () => {
    return (
        <>
            <div className="bg-[#312E29] text-[#F8F6F0] flex flex-col items-center mt-23.75 pb-23.75">
                <p className='text-5xl font-medium text-center px-25 mx-40 tracking-wide leading-17 mt-19.25'>THESE ARE THE <span>FRAGRANCE</span> THAT DEFINE US—THE SCENTS <span>THAT HAVE CAPTIVATED</span> HEARTS AND LINGERED IN <span>MEMORY FOR YEARS.</span></p>

                <div className="flex gap-6 mt-12.5">
                    <div className="h-182.5 w-112.5 flex flex-col gap-2">
                        <img src={img1} alt="" className='h-150 rounded' />
                        <div className="font-normal flex flex-col gap-2">
                            <p className='text-[8px]'>FOR WHOM?</p>
                            <h2>VERITE ABSOLUE</h2>
                            <p>₹1499.00</p>
                        </div>

                        <button className=' bg-black p-2.5 font-normal w-full'>SHOP NOW</button>
                    </div>

                    <div className="h-182.5 w-112.5 flex flex-col gap-2">
                        <img src={img2} alt="" className='h-150 rounded' />
                        <div className="font-normal flex flex-col gap-2">
                            <p className='text-[8px]'>FOR WHOM?</p>
                            <h2>FEU SECRET</h2>
                            <p>₹4099.00</p>
                        </div>

                        <button className='bg-black p-2.5 font-normal w-full'>SHOP NOW</button>
                    </div>

                    <div className="h-182.5 w-112.5 flex flex-col gap-2">
                        <img src={img3} alt="" className='h-150 rounded' />
                        <div className="font-normal flex flex-col gap-2">
                            <p className='text-[8px]'>FOR WHOM?</p>
                            <h2>NUIT BLANCHE</h2>
                            <p>₹2599.00</p>
                        </div>

                        <button className='bg-black p-2.5 font-normal w-full'>SHOP NOW</button>
                    </div>
                </div>

                <div className="relative mt-20">
                    <img src={img4} alt="" className='w-360 h-150 object-cover object-top rounded' />

                    <div className="absolute top-15 right-5 w-135 text-2xl font-medium">
                        <p><span>A Fragrance is More Than The Sum Of Its Notes—It's An Emotional Journey, A Trigger For Memory, A Catalyst For Connection. We Don't Simply Blend Ingredients; We Compose Experiences.</span></p>
                        <button className='border border-white px-5 py-1 mt-4'><span>Shop Now</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTA