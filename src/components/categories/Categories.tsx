'use client';
import React from 'react'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { FaSkiing} from 'react-icons/fa'
import { GiBoatFishing, GiIsland, GiWindmill} from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { useSearchParams } from 'next/navigation'
import CategoryBox from './CategoryBox'
export const categories = [
    {
        label: '디지털기기',
        path: 'digital',
        icon: TbBeach,
        description: '디지털기기'
    },
    {
        label: '생활가전',
        path: 'appliance',
        icon: GiWindmill,
        description: '생활가전'
    },
    {
        label: '가구/인테리어',
        path: 'interior',
        icon: MdOutlineVilla,
        description: '가구/인테리어'
    },
    {
        label: '여성의류',
        path: 'women-clothing',
        icon: TbMountain,
        description: '여성의류'
    },
    {
        label: '남성패션/잡화',
        path: 'men-fashion',
        icon: TbPool,
        description: '남성패션/잡화'
    },
    {
        label: '뷰티/미용',
        path: 'beauty',
        icon: GiIsland,
        description: '뷰티/미용'
    },
    {
        label: '스포츠/레저',
        path: 'sports',
        icon: FaSkiing,
        description: '스포츠/레저'
    },
    {
        label: '중고차',
        path: 'used-car',
        icon: GiBoatFishing,
        description: '중고차'
    },
]


const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
  return (
    <div>
        {categories.map((item)=> (
            <CategoryBox 
                key={item.label}
                label={item.label}
                path={item.path}
                icon={item.icon}
                selected={category === item.label}/>
        ))}
    </div>
  )
}

export default Categories