"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path = usePathname();
    const router = useRouter();
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-lg'>
        <Image src={'/logo.svg'} width={60} height={40} alt='logo'/>
        <ul className='hidden md:flex gap-6'>
            <li  className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard' && 'text-primary font-bold' }
                `}onClick={() => router.push('/dashboard')}
                >Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard/fundamental-analysis' && 'text-primary font-bold' }
                `}onClick={() => router.push('/dashboard/fundamental-analysis')}
                >Fundamental Analysis</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard/technical-analysis' && 'text-primary font-bold' }
                `}onClick={() => router.push('/dashboard/technical-analysis')}
                >Technical Analysis</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path=='/dashboard/howitworks' && 'text-primary font-bold' }
                `}
                >How it works ?</li>

        </ul>
    </div>
  )
}

export default Header
