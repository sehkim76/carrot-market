import useFavorite from '@/hooks/useFavorite';
import { User } from '@prisma/client';
import React from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
interface HeartButtonProps {
    productId: string;
    currentUser: User | null;
}

const HeartButton : React.FC<HeartButtonProps> = ({
    productId,
    currentUser
}) => {
    const { hasFavorited, toggleFavorite} = 
            useFavorite({productId, currentUser})
  return (
    <div className='relative transition cursor-pointer
                hover:opacity-80'
        onClick={toggleFavorite}>
        <AiOutlineHeart 
            size={28}
            className='fill-white absolute
                -top-[2px] -right-[2px]'
        />
        <AiFillHeart size={24}
            className={hasFavorited ? 'fill-rose-500' 
                                    : 'fill-neutral-500/70'}/>
    </div>
  )
}

export default HeartButton