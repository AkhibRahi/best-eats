import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu,
 AiOutlineSearch, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import {MdFavorite, MdHelp } from 'react-icons/md'
import {FaWallet, FaUserFriends} from 'react-icons/fa'

function Navbar() {

    const [nav, setNav] = useState(false)

    return (
        <div className=' max-w-[1240px] p-4 mx-auto flex justify-between items-center'>
            {/* left side */}
            <div className='flex gap-8 items-center justify-between'>
                <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='nav-h text-2xl md:text-3xl lg:text-4xl'>Best <span className='font-bold'>Eats</span></h1>
                <div className=' hidden lg:flex gap-1 bg-gray-200 rounded-full text-[14px]'>
                    <p className='px-2 py-1 bg-black text-white rounded-full'>Delivery</p>
                    <p className='px-2 py-1'>Pickup</p>
                </div>
            </div>

            {/* search input */}
            <div className='flex items-center gap-1 bg-gray-200 rounded-full 
            px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20} />
                <input type='text' className='bg-transparent w-full p-2' placeholder='Search' />
            </div>

            {/* Cart */}
            <button className=' hidden md:flex items-center gap-1
             bg-black text-white rounded-full'>
                <BsFillCartFill /> Cart
            </button>

            {/* Mobile Device */}

            {/* overlay */}
            
            <div className={nav ? 'bg-black/80 z-[10] fixed top-0 left-0 w-full h-screen' : "" } >
            </div>

            {/* side drawer */}
            <div className= {nav? 'bg-white w-[300px] fixed z-[10] h-screen top-0 left-0' : "fixed left-[-100%]" } >
                <div className='absolute top-4 right-4'>
                    <AiOutlineClose onClick={()=> setNav(!nav)} className='cursor-pointer' size={25} />
                </div>
                <h1 className='text-3xl p-4'>Best
                    <span className='font-bold px-1'>Eats</span></h1>
                <nav>
                    <ul className='flex flex-col px-4 text-gray-800'>
                        <li className='flex items-center gap-3 text-xl py-4'>
                            <TbTruckDelivery size={25} /> Orders</li>
                        <li className='flex items-center gap-3 text-xl py-4'>
                            <MdFavorite size={25} /> Favorites</li>
                        <li className='flex items-center gap-3 text-xl py-4'>
                            <FaWallet size={25} /> Wallet</li>
                        <li className='flex items-center gap-3 text-xl py-4'>
                            <MdHelp size={25} /> Help</li>
                        <li className='flex items-center gap-3 text-xl py-4'>
                            <AiFillTag size={25} /> Promotions</li>
                        <li className='flex items-center gap-3 text-xl py-4'>
                            <BsFillSaveFill size={25} /> Best Ones</li>
                        <li className='flex items-center gap-3 text-xl py-4'>
                            <FaUserFriends size={25} /> Invite Friends</li>
                    </ul>
                </nav>
            </div>


        </div>
    )
}

export default Navbar