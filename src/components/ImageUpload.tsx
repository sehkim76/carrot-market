'use client';
import { CldUploadWidget } from 'next-cloudinary';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
    var cloudinary: any
  }
  
const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

interface ImageUploadProps {
    onChange: (value: string) => void;
    value: string;
}
const ImageUpload : React.FC<ImageUploadProps> = 
({onChange, value}
) => {

    const handleUpload = ( result : any) => {
        console.log("[ImageUpload] result", result);
        onChange(result.info.secure_url);
    }
  return (
    <div>

        <CldUploadWidget
                onUpload={handleUpload}
                uploadPreset={uploadPreset}
                options={{
                    maxFiles: 1
                }}
            >
                {
                    ({open}) => {
                        return (
                            <div
                                onClick={()=> open?.()}
                                className='relative flex flex-col items-center
                                justify-center gap-4 p-20 transition border-2
                                border-dashed cursor-pointer hover:opacity-70
                                border-neutral-300 text-neutral-600'
                            >
                                <TbPhotoPlus size={50} />
                            </div>
                        )
                    }
                }

            </CldUploadWidget>

    </div>

  )
}

export default ImageUpload
