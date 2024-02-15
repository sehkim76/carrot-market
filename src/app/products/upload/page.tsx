// http://localhost:3000/products/upload
'use client'

import dynamic from 'next/dynamic'
import Container from '@/components/Container';
import React, { useState } from 'react'
import Heading from '@/components/Heading';
import ImageUpload from '@/components/ImageUpload';
import Input from '@/components/Input';
import { register } from 'module';
import { FieldValues, useForm } from 'react-hook-form';
import Button from '@/components/Button';
import KakaoMap from '@/components/KakaoMap';

const ProductUploadPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState : {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues : {
            title: '',
            description: '',
            category: '',
            latitude: 33.5563,
            LongitudeL: 126.79581,
            imageSrc: '',
            price: 1
        }
    })
    /*
    const KakaoMap = dynamic(() => import('../../../components/KakaoMap'),{
        ssr: false,
    });
    */
    return (
        <Container>
            <div>
                <form className='flex flex-col gap-8'>
                    <Heading title='상품 올리기' 
                                subtitle='상품을 올리세요'
                    />
                    <ImageUpload />
                    <Input id='title'
                            label='제품명'
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required/>
                    <Input id='description'
                            label='제품설명'
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required/>
                    <Input id='price'
                            label='가격'
                            formatPrice
                            type="number"
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required/>   
                    <KakaoMap/>
                    <Button label="상품 생성하기" isLoading={false}/>                        
                </form>
            </div>

        </Container>
  )
}

export default ProductUploadPage