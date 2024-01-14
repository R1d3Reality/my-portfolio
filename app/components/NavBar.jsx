'use client';
import React, {useState} from "react";
import Link from "next/link";
import NavLink from "../components/NavLink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "../components/MenuOverlay";


const navLinks = [
    {
        title: 'About',
        path: '#about'
    },
    {
        title: 'Projects',
        path: '#projects'
    },
    {
        title: 'Contact',
        path: '#contact'
    }

]

const NavBar = () => {

    const [navBarOpen, setNavBarOpen] = useState(false);

    return (
        /*border border-[#33353F] */
        <nav className='fixed mx-auto  top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={'/'} >
                    <h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500'>
                            PS
                        </span>
                    </h1>
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {!navBarOpen ? (
                        <button
                            onClick={() => setNavBarOpen(true)}
                            className='flex items-center px-3 py-2 border border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5 '/>
                        </button>) : (
                            <button
                                onClick={() => setNavBarOpen(false)}
                                className='flex items-center px-3 py-2 border border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-5 w-5 '/>
                            </button>
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                            ))}
                    </ul>
                </div>
            </div>
            {navBarOpen ? <MenuOverlay links={navLinks} /> : null }
        </nav>
    )
}
export default NavBar