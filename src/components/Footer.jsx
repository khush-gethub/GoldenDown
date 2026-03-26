import React from 'react'

const Footer = () => {
    return (
        <>
        <div className="flex flex-col bg-[#312E29] text-white md:pt-15.25 pt-8 md:gap-37.5 gap-5 md:items-center">
            <div className="flex justify-between md:mx-10 font-normal md:gap-78.75 mx-2">
                <h1 className='md:text-[54px]'>Lets Talk <br /> goldendown@gmail.com</h1>

                <div className="hidden md:flex flex-col gap-6">
                    <a href="#">SHOP</a>
                    <a href="#">COLLECTION</a>
                    <a href="#">ABOUT</a>
                    <a href="#">JOURNAL</a>
                </div>

                <div className="flex flex-col md:gap-6 gap-2 text-[#E8E2D5A6] md:mt-15 md:text-[16px] text-[10px]">
                    <p>SIGN UP TO READ OUR JOURNAL'S <br />AND SEE OUT NEW COLLECTION</p>
                    <input type="text" placeholder='EMAIL ADDRESS' className='border-b-2' />
                </div>
            </div>

            <div className="md:text-[190px] text-[50px] font-bold text-white">
                    <p>GOLDEN DOWN</p>
            </div>


        </div>
        </>
    )
}

export default Footer