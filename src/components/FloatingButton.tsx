import React from 'react'
import Link from 'next/link';

interface FloatingButtonProps {
    href: string,
    children: React.ReactNode
}
export default function FloatingButton(
    {href, children}: FloatingButtonProps) {
  return (
    <Link href={href}
        className='fixed flex items-center justify-center text-white
                    trasition-colors bg-orange-400 border-0 border-transparent
                    rounded-full shadow-xl cursor-pointer hover:bg-orange-500
                    aspect-squre bottom-5 right-5 w-14'   
    >
        {children}
    </Link>
  )
}
