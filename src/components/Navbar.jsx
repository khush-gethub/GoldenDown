import React from 'react'
import logo from '../assets/Logo.png'

export const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between mx-10 font-[Archivo] m-5 items-center'>
                <div className="">
                    <img src={logo} alt="" className='h-14 w-17.75' />
                </div>

                <div className="flex gap-10">
                    <a href="#">SHOP</a>
                    <a href="#">COLLECTION</a>
                    <a href="#">ABOUT</a>
                    <a href="#">JOURNAL</a>
                </div>

                <div className="bg-[#E8E2D5] px-5 py-1 rounded-full">
                    <a href="#">.</a>
                    <a href="#">.</a>
                    <a href="#">.</a>
                </div>
            </nav>
        </>
    )
}
