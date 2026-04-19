import React, { useState } from 'react'
import logo from '../assets/img/Logo.png'
import search from '../assets/svg/search.svg'
import cart from '../assets/svg/cart.svg'
import account from '../assets/svg/account.svg'

export const Navbar = () => {
    const [open, setopen] = useState('');
    return (
        <>
            <nav className='flex justify-between xl:mx-10 font-[Archivo] m-5 items-center'>
                <div className="">
                    <img src={logo} alt="" className='h-10 xl:h-14' />
                </div>
                {/* for Desktop  */}
                <div className="hidden xl:flex gap-10">
                    <a href="#">SHOP</a>
                    <a href="#">COLLECTION</a>
                    <a href="#">ABOUT</a>
                    <a href="#">JOURNAL</a>
                </div>
                {/* for Desktop  */}
                <div className="bg-[#E8E2D5] xl:px-5 py-1 rounded-full xl:flex xl:gap-5 flex gap-2 px-2">
                    <img src={search} alt="" className='h-4 xl:h-7'/>
                    <img src={cart} alt="" className='h-4 xl:h-7'/>
                    <img src={account} alt="" className='h-4 xl:h-7 xl:font-bold'/>
                </div>

                <div className="xl:hidden">
                    <button onClick={() => { setopen(!open) }}>
                        ☰
                    </button>
                </div>
                {/* for mobile */}
                {open && (
                    <div className="absolute top-15 left-62 w-max bg-white shadow-2xl rounded-xl">
                        <div className="flex flex-col m-3">
                            <a href="#">SHOP</a>
                            <a href="#">COLLECTION</a>
                            <a href="#">ABOUT</a>
                            <a href="#">JOURNAL</a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar