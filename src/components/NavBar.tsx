'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import NavItem from './NavItem';
import { User } from '@prisma/client';

interface NavBarProps {
    currentUser?: User | null;
}

const NavBar = ({currentUser} : NavBarProps) => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }
  return (
    <nav className='relative z-10 w-full text-white bg-orange-500'>
        <div className='flex items-center justify-between mx-5 sm:mx-10 lg:mx-20'>
            <div className='flex items-center text-2xl h-14'>
                <Link href='/'>Carrot Market</Link>
            </div>

            <div className='hidden sm:block'>
                <NavItem currentUser={currentUser}/>
            </div>

            <div className='text-2xl sm:hidden'>
                { ( menu === false) ? 
                    <button onClick={handleMenu}>+</button> : 
                    <button onClick={handleMenu}>-</button>
                }
            </div>
        </div>
        <div className='block sm:hidden'>
            { ( menu === false) ? null : <NavItem mobile currentUser={currentUser}/>}
        </div>

    </nav>
  )
}

