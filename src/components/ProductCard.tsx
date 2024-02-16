'use client';
import { fromNow } from '@/app/helpers/dayjs';
import { Product, User } from '@prisma/client';
import Image from 'next/image';
import React from 'react'
import HeartButton from './HeartButton';

interface ProductCardProps {
    data: Product;
    currentUser: User | null;
}

const ProductCard : React.FC<ProductCardProps> = ({
    data, currentUser
}) => {
  return (
    <div className='col-span-1 cursor-pointer group'>
        <div className='flex flex-col w-full gap-2'>
            <div className='relative w-full overflow-hidden aspect-square
                        rounded-xl'>
                <Image fill
                        sizes="auto"
                        src={data.imageSrc}
                        alt="Listing"
                        className='object-cover w-full h-full transition
                            group-hover:scale-110'
                />
                <div className='absolute top-3 right-3'>
                    <HeartButton
                        productId={data.id}
                        currentUser={currentUser}
                    />
                </div>
            </div>
            <div className='text-lg font-semibold'>
                {data.title}
            </div>
            <div className='font-light text-neutral-500'>
                {data.category}
            </div>
            <div className='flex flex-row items-center gap-1 justify-between'>
                <div className='font-semibold'>
                    {data.price} {" "}<span className='font-light'>원</span>
                </div>
                <div>
                    {fromNow(data.createAt)}
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductCard