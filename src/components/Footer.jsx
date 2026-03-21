import React from 'react'

const Footer = () => {
    return (
        <>
        <div className="flex flex-col bg-[#312E29] text-white pt-20 gap-30 items-center">
            <div className="flex justify-between mx-10 font-normal gap-50">
                <h1 className='text-[54px]'>Lets Talk <br /> goldendown@gmail.com</h1>

                <div className="flex flex-col gap-6">
                    <a href="#">SHOP</a>
                    <a href="#">COLLECTION</a>
                    <a href="#">ABOUT</a>
                    <a href="#">JOURNAL</a>
                </div>

                <div className="flex flex-col gap-6 text-[#E8E2D5A6] mt-15">
                    <p>SIGN UP TO READ OUR JOURNAL'S <br />AND SEE OUT NEW COLLECTION</p>
                    <input type="text" placeholder='EMAIL ADDRESS' className='border-b-2' />
                </div>
            </div>

            <div className="text-[190px] font-bold text-white">
                    <p>GOLDEN DOWN</p>
            </div>


        </div>
        </>
    )
}

export default Footer