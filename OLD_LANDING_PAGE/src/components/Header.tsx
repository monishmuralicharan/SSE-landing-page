'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white/90 backdrop-blur-sm md:bg-transparent mx-auto flex justify-between items-center py-4 px-5 md:py-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 relative z-10">
                        <Image 
                            src={siteDetails.siteLogo} 
                            alt={siteDetails.siteName}
                            width={28}
                            height={28}
                            className="min-w-fit"
                        />
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-black cursor-pointer leading-tight">
                                SSE
                            </span>
                            <span className="text-sm font-medium text-gray-600 cursor-pointer leading-tight">
                                Social Stock Exchange
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-gray-600 hover:text-black transition-colors font-medium">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#waitlist" className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-all duration-200 font-semibold">
                                Join Waitlist
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-black text-white focus:outline-none rounded-lg w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-4 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-gray-600 hover:text-black block font-medium" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#waitlist" className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-lg block w-fit font-semibold" onClick={toggleMenu}>
                                Join Waitlist
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
