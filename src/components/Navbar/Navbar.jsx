import React, { useState } from 'react';
import NavLinks from './NavLinks';
import Topbar from '../Topbar/topbar';
import logo from './../../assets/Logo/ICA_Logo.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [open, setOpen] = useState(false);


    return (
        <>
            <Topbar />
            <div className="flex items-center mx-auto bg-white">
                <div className="flex items-center mx-auto ">
                    {/* <div className="bg-blue-500 p-2 mr-4">
                        <p className="text-white text-lg">Your Pathway to Success</p>
                    </div> */}
                    <div>
                        <Link to="/">
                            <img src={logo} alt="Logo" className='mx-auto px-32' />
                        </Link>
                    </div>                    {/* <SearchBar /> */}
                    {/* <div className="flex items-center">
                        <ion-icon name="call-outline" size="large"></ion-icon>
                        <p className="text-lg ml-2">+64-9-3099558</p>
                    </div> */}
                </div>

            </div>
            <div className='border-b-2  border-gray-500 lg:hidden'></div>
            <nav className="bg-white text-gray p-2 pt-5 pb-2 items-center  border-b-8 border-lime-500 sticky top-0 z-50">
                <div className="container flex  mx-auto max-w-7xl">

                    <div className="text-3xl lg:hidden z-20 " onClick={() => setOpen(!open)}>

                        <ion-icon name={`${open ? "close" : "menu"}`} ></ion-icon>
                    </div>
                    <div className="lg:hidden text-xl font-semibold">Menu</div>

                    {/* </div> */}

                    {/* Navigation links for desktop */}
                    <ul className="lg:flex  hidden item-center ">
                        <NavLinks />
                    </ul>

                    {/* Mobile nav */}

                    <ul
                        className={`
        lg:hidden fixed w-full h-full top-0 left-0 z-10 bg-lime-600 overflow-y-auto
        duration-500 ${open ? "left-0" : "left-[-100%]"}
    `}
                        style={{ paddingTop: '16rem' }}
                    >
                        <div className='bg-white p-4 '>
                            <NavLinks />
                        </div>
                    </ul>

                </div>
            </nav >
        </>
    );
};

export default Navbar;
