import getCurrentUser from '@/app/actions/getCurrentUser'
import { User } from '@prisma/client';
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

interface NavItemProps {
  mobile?: boolean;
  currentUser?: User | null;
}

const NavItem = async ({mobile, currentUser} : NavItemProps ) => {
  

  console.log('[NavItem] currentUser', currentUser);
  return (
    <ul className={`text-md justify-center flex w-full items-center gap-4 
              ${mobile && "flex-col bg-orange-500 h-full"}`}>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <Link href={"/admin"}>Admin</Link>
      </li>
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <Link href={"/user"}>User</Link>
      </li>
 
      { currentUser ? 
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <button onClick={() => signOut()}>SignOut</button>
      </li>      :
      <li className='py-2 text-center border-b-4 cursor-pointer'>
        <button onClick={()=> signIn()}>SignIn</button>
      </li>
      }

    </ul>
  )
}

export default NavItem