"use client"
import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { FaBars } from 'react-icons/fa'
import React from 'react'

function Header() {
    const path = usePathname();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigation = (url:any) => { //TODO change the type
        setMenuOpen(false); // Close menu on navigation
        router.push(url);
    };

    return (
        <div className="flex bg-black sticky z-50 bg-opacity-100 top-0 backdrop-filter backdrop-blur-lg items-center justify-between flex-wrap p-6 -mb-2">
            <Image src={'/logo.svg'} width={60} height={40} alt='logo' />
            
            <div className='md:hidden'>
                <FaBars className='text-white cursor-pointer' size={24} onClick={() => setMenuOpen(!menuOpen)} />
            </div>
            
            <ul className='hidden md:flex text-white gap-6'>
                <li className={`hover:text-gray-300 hover:font-extrabold transition-all cursor-pointer
                    ${path === '/dashboard' && 'text-gray-300 font-extrabold'}`}
                    onClick={() => handleNavigation('/dashboard')}
                >Dashboard</li>
                <li className={`hover:text-gray-300 hover:font-extrabold transition-all cursor-pointer
                    ${path === '/dashboard/fundamental-analysis' && 'text-gray-300 font-extrabold'}`}
                    onClick={() => handleNavigation('/dashboard/fundamental-analysis')}
                >Fundamental Analysis</li>
                {/* <li className={`hover:text-gray-300 hover:font-extrabold transition-all cursor-pointer
                    ${path === '/dashboard/technical-analysis' && 'text-gray-300 font-extrabold'}`}
                    onClick={() => handleNavigation('/dashboard/technical-analysis')}
                >Technical Analysis</li> */}
                {/* <li className={`hover:text-gray-300 hover:font-extrabold transition-all cursor-pointer
                    ${path === '/dashboard/algo-trading' && 'text-gray-300 font-extrabold'}`}
                    onClick={() => handleNavigation('/dashboard/algo-trading')}
                >Algo Trading</li> */}
                <li className={`hover:text-gray-300 hover:font-extrabold transition-all cursor-pointer
                    ${path === '/dashboard/future-plans' && 'text-gray-300 font-extrabold'}`}
                    onClick={() => handleNavigation('/dashboard/finance-tracker')}
                >Finance Tracker</li>
                <li className={`hover:text-gray-300 hover:font-extrabold transition-all cursor-pointer
                    ${path === '/dashboard/future-plans' && 'text-gray-300 font-extrabold'}`}
                    onClick={() => handleNavigation('/dashboard/future-plans')}
                >Future Plans</li>
            </ul>

            {menuOpen && (
                <div className='absolute top-20 left-0 w-full bg-black p-4 md:hidden'>
                    <ul className='flex flex-col gap-4 text-white'>
                        <li className={`hover:text-gray-300 hover:font-extrabold transition-all cursor-pointer
                            ${path === '/dashboard' && 'text-gray-300 font-extrabold'}`}
                            onClick={() => handleNavigation('/dashboard')}
                        >Dashboard</li>
                        <li className={`hover:text-gray-300 hover:font-extrabold transition-all cursor-pointer
                            ${path === '/dashboard/fundamental-analysis' && 'text-gray-300 font-extrabold'}`}
                            onClick={() => handleNavigation('/dashboard/fundamental-analysis')}
                        >Fundamental Analysis</li>
                        {/* <li className={`hover:text-gray-300 hover:font-extrabold transition-all cursor-pointer
                            ${path === '/dashboard/technical-analysis' && 'text-gray-300 font-extrabold'}`}
                            onClick={() => handleNavigation('/dashboard/technical-analysis')}
                        >Technical Analysis</li>
                        <li className={`hover:text-gray-300 hover:font-extrabold transition-all cursor-pointer
                            ${path === '/dashboard/algo-trading' && 'text-gray-300 font-extrabold'}`}
                            onClick={() => handleNavigation('/dashboard/algo-trading')}
                        >Algo Trading</li> */}
                         <li className={`hover:text-gray-300 hover:font-extrabold transition-all cursor-pointer
                    ${path === '/dashboard/future-plans' && 'text-gray-300 font-extrabold'}`}
                    onClick={() => handleNavigation('/dashboard/future-plans')}
                        >Finance Tracker</li>
                        <li className={`hover:text-gray-300 hover:font-extrabold transition-all cursor-pointer
                            ${path === '/dashboard/future-plans' && 'text-gray-300 font-extrabold'}`}
                            onClick={() => handleNavigation('/dashboard/future-plans')}
                        >Future Plans</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Header
