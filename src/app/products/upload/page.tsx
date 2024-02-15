// http://localhost:3000/products/upload
'use client'

import Container from '@/components/Container';
import React, { useState } from 'react'
import Heading from '@/components/Heading';
import ImageUpload from '@/components/ImageUpload';
import Input from '@/components/Input';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import Button from '@/components/Button';
import dynamic from 'next/dynamic';
import { categories } from '@/components/categories/Categories';
import CategoryInput from '@/components/categories/CategoryInput';
import axios from 'axios';
import { useRouter } from 'next/navigation';

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
            longitude: 126.79581,
            imageSrc: '',
            price: 1
        }
    })

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value);
    }

    const imageSrc = watch('imageSrc');
    const category = watch('category');
    const latitude = watch('latitude');
    const longitude = watch('longitude');
    
    const KakaoMap = dynamic(() => import('../../../components/KakaoMap'),{
        ssr: false,
    });
    
    const router = useRouter();
    
    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/products', data)
        .then((response)=> {
            //router.push(`/products/${response.data.id}`)
            router.push('/')
        })
        .catch((err)=> {
            console.error(err);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }
    
    return (
        <Container>
            <div
                className='max-w-screen-lg mx-auto'
            >
                <form className='flex flex-col gap-8'
                    onSubmit={handleSubmit(onSubmit)}>
                    <Heading title='상품 올리기' 
                                subtitle='상품을 올리세요'
                    />
                    <ImageUpload onChange={(value)=>
                                    setCustomValue('imageSrc', value)}
                                    value={imageSrc}
                    />
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
                    <div className='grid grid-cols-1 md:grid-cols-2
                                    gap-3 max-h-[50vh] overflow-y-auto'>
                        {
                            categories.map((item)=>(
                                <div key={item.label} className='col-span-1'>
                                <CategoryInput
                                    onClick={(category) =>
                                        setCustomValue('category', category)}
                                    selected={category === item.path}
                                    label={item.label}
                                    icon={item.icon}
                                    path={item.path}
                                />
                                </div>
                            ))
                        }
                    </div>                            
                    <KakaoMap 
                        setCustomValue={setCustomValue}
                        latitude={latitude}
                        longitude={longitude}
                    />
                    <Button label="상품 생성하기" isLoading={false}/>                        
                </form>
            </div>

        </Container>
  )
}

export default ProductUploadPage