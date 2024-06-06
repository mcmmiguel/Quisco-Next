"use client"

import { getImagePath } from "@/src/utils";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from 'react-icons/tb'

const ImageUpload = ({ image }: { image: string | undefined }) => {

    const [imageURL, setImageURL] = useState('');

    return (
        <CldUploadWidget
            onSuccess={(result, { widget }) => {
                if (result.event === 'success') {
                    widget.close();
                    // @ts-ignore
                    setImageURL(result.info.secure_url);
                }
            }}
            uploadPreset="ccawjcqw"
            options={{ maxFiles: 1 }}
        >
            {({ open }) => (
                <>
                    <div className="space-y-2">
                        <label className="text-slate-800">Imagen producto</label>
                        <div
                            className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
                            onClick={() => open()}
                        >
                            <TbPhotoPlus size={50} />
                            <p className="text-lg font-semibold">Agregar imagen</p>

                            {imageURL && (
                                <div
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <Image
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        src={imageURL}
                                        alt="Imagen de producto"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {image && !imageURL && (
                        <div className="space-y-2">
                            <label>Imagen actual:</label>

                            <div className="relative w-64 h-64">
                                <Image
                                    fill
                                    src={getImagePath(image)}
                                    alt="Imagen producto"
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    )}

                    <input
                        type="hidden"
                        name="image"
                        defaultValue={imageURL ? imageURL : image}
                    />
                </>
            )
            }
        </CldUploadWidget>
    )
}
export default ImageUpload