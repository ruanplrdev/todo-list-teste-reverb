"use client"
import React, { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorsTitle?: string,
    touchedTitle?: boolean
}
export const FormInput = ({errorsTitle, touchedTitle,...rest}:FormInputProps) => {
   return (
    <>
    <input
       
        className={twMerge(
            "h-10 border rounded-lg px-3 w-full mb-6 focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-500",
            (errorsTitle && touchedTitle && "border-red-500 focus:ring-red-500" )
        )}
        {...rest}
    />
    {errorsTitle && touchedTitle && (<p className="text-red-500 text-sm -mt-6 mb-1">{errorsTitle}</p>)}
</>
   )
}
