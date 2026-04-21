import React from 'react'
import img1 from '../assets/img/cta1.png'
import img2 from '../assets/img/cta2.png'
import img3 from '../assets/img/cta3.png'
import img4 from '../assets/img/cta4.png'

const CTA = () => {
    return (
        <>
            <div className="bg-[#312E29] text-[#F8F6F0] flex flex-col items-center xl:mt-23.75 xl:pb-23.75 mt-10 lg:pb-15 md:pb-15 pb-31">
                <p className='xl:text-5xl md:text-2xl md:px-14 text-xl font-medium text-center xl:px-25 xl:mx-40 xl:tracking-wide xl:leading-17 xl:mt-19.25 mt-10'>THESE ARE THE <span>FRAGRANCE</span> THAT DEFINE US—THE SCENTS <span>THAT HAVE CAPTIVATED</span> HEARTS AND LINGERED IN <span>MEMORY FOR YEARS.</span></p>

                <div className="flex flex-col lg:flex-row xl:flex-row xl:gap-6 xl:mt-12.5 lg:gap-3 mt-8">
                    <div className="xl:h-182.5 xl:w-112.5 lg:h-110 lg:w-70 w-90 h-140 flex flex-col gap-2 text-[14px] xl:text-[16px]">
                        <img src={img1} alt="" className='xl:h-150 h-100 rounded' />
                        <div className="font-normal flex flex-col xl:gap-2">
                            <p className='text-[8px]'>FOR WHOM?</p>
                            <h2>VERITE ABSOLUE</h2>
                            <p>₹1499.00</p>
                        </div>

                        <button className=' bg-black p-2.5 font-normal w-full hover:bg-white hover:text-black'>SHOP NOW</button>
                    </div>

                    <div className="xl:h-182.5 xl:w-112.5 lg:h-110 lg:w-70 w-90 h-140 flex flex-col gap-2 text-[14px] xl:text-[16px]">
                        <img src={img2} alt="" className='xl:h-150 h-100 rounded' />
                        <div className="font-normal flex flex-col xl:gap-2">
                            <p className='text-[8px]'>FOR WHOM?</p>
                            <h2>FEU SECRET</h2>
                            <p>₹4099.00</p>
                        </div>

                        <button className='bg-black p-2.5 font-normal w-full hover:bg-white hover:text-black'>SHOP NOW</button>
                    </div>

                    <div className="xl:h-182.5 xl:w-112.5 lg:h-110 lg:w-70 w-90 h-140 flex flex-col gap-2 text-[14px] xl:text-[16px]">
                        <img src={img3} alt="" className='xl:h-150 h-100 rounded' />
                        <div className="font-normal flex flex-col xl:gap-2">
                            <p className='text-[8px]'>FOR WHOM?</p>
                            <h2>NUIT BLANCHE</h2>
                            <p>₹2599.00</p>
                        </div>

                        <button className='bg-black p-2.5 font-normal w-full hover:bg-white hover:text-black'>SHOP NOW</button>
                    </div>
                </div>

                <div className="relative xl:mt-20 lg:mt-15">
                    <img src={img4} alt="" className='xl:w-360 xl:h-150 md:w-150 md:h-85 w-90 h-100 object-cover object-top rounded' />

                    <div className="absolute xl:top-15 xl:right-5 xl:w-135 w-90 xl:text-2xl md:text-[12px] text-[10px] font-medium md:top-3 md:w-60 right-2">
                        <p className=' mt-2'><span>A Fragrance is More Than The Sum Of Its Notes—It's An Emotional Journey, A Trigger For Memory, A Catalyst For Connection. We Don't Simply Blend Ingredients; We Compose Experiences.</span></p>
                        <button className='border border-white px-5 py-1 xl:mt-4 mt-1  hover:bg-white hover:text-black'><span>Shop Now</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTA