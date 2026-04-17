import React from 'react'
import img1 from '../assets/img/cta1.png'
import img2 from '../assets/img/cta2.png'
import img3 from '../assets/img/cta3.png'
import img4 from '../assets/img/cta4.png'

const CTA = () => {
    return (
        <>
            <div className="bg-[#312E29] text-[#F8F6F0] flex flex-col items-center md:mt-23.75 md:pb-23.75 mt-10 pb-31">
                <p className='md:text-5xl text-xl font-medium text-center md:px-25 md:mx-40 md:tracking-wide md:leading-17 md:mt-19.25 mt-10'>THESE ARE THE <span>FRAGRANCE</span> THAT DEFINE US—THE SCENTS <span>THAT HAVE CAPTIVATED</span> HEARTS AND LINGERED IN <span>MEMORY FOR YEARS.</span></p>

                <div className="md:flex md:gap-6 md:mt-12.5 mt-8">
                    <div className="md:h-182.5 md:w-112.5 w-90 h-140 flex flex-col gap-2 text-[14px] md:text-[16px]">
                        <img src={img1} alt="" className='md:h-150 h-100 rounded' />
                        <div className="font-normal flex flex-col md:gap-2">
                            <p className='text-[8px]'>FOR WHOM?</p>
                            <h2>VERITE ABSOLUE</h2>
                            <p>₹1499.00</p>
                        </div>

                        <button className=' bg-black p-2.5 font-normal w-full hover:bg-white hover:text-black'>SHOP NOW</button>
                    </div>

                    <div className="md:h-182.5 md:w-112.5 w-90 h-140 flex flex-col gap-2 text-[14px] md:text-[16px]">
                        <img src={img2} alt="" className='md:h-150 h-100 rounded' />
                        <div className="font-normal flex flex-col md:gap-2">
                            <p className='text-[8px]'>FOR WHOM?</p>
                            <h2>FEU SECRET</h2>
                            <p>₹4099.00</p>
                        </div>

                        <button className='bg-black p-2.5 font-normal w-full hover:bg-white hover:text-black'>SHOP NOW</button>
                    </div>

                    <div className="md:h-182.5 md:w-112.5 w-90 h-140 flex flex-col gap-2 text-[14px] md:text-[16px]">
                        <img src={img3} alt="" className='md:h-150 h-100 rounded' />
                        <div className="font-normal flex flex-col md:gap-2">
                            <p className='text-[8px]'>FOR WHOM?</p>
                            <h2>NUIT BLANCHE</h2>
                            <p>₹2599.00</p>
                        </div>

                        <button className='bg-black p-2.5 font-normal w-full hover:bg-white hover:text-black'>SHOP NOW</button>
                    </div>
                </div>

                <div className="relative md:mt-20">
                    <img src={img4} alt="" className='md:w-360 md:h-150 w-90 h-100 object-cover object-top rounded' />

                    <div className="absolute md:top-15 md:right-5 md:w-135 w-90 md:text-2xl text-[10px] font-medium">
                        <p className=' mt-2'><span>A Fragrance is More Than The Sum Of Its Notes—It's An Emotional Journey, A Trigger For Memory, A Catalyst For Connection. We Don't Simply Blend Ingredients; We Compose Experiences.</span></p>
                        <button className='border border-white px-5 py-1 md:mt-4 mt-1  hover:bg-white hover:text-black'><span>Shop Now</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTA