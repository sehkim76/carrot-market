'use client'
import React from 'react'
import Heading from './Heading'
import Button from './Button'
import { useRouter } from 'next/navigation'

const EmptyState = () => {
    const router = useRouter();
  return (
    <div className='h-[60vh] flex flex-col gap-2 justify-center items-center'>
        <Heading 
            center
            title='일치하는 게 없습니다'
            subtitle='일부 필터를 변경하거나 제거해 보세요'
            />
        <div className='mt-4'>
            <Button
                outline
                label='모든 필터 제거'
                onClick={() => router.push('/')}
                isLoading={false}
                />
        </div>

    </div>
  )
}

export default EmptyState