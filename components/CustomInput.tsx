import React from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "./ui/form"
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'

import {z} from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up');

 

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>> // "email" | "password", 
    label: string,
    placeholder:string,
}

const CustomInput = ({control, name, label, placeholder}:CustomInput) => {
  return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormItem>
                        <FormLabel className='form-label'>{label}</FormLabel>
                        <div className='flex w-full flex-col'>
                            <FormControl>
                                <Input 
                                    placeholder={placeholder} 
                                    className="input-class"
                                    type={name === 'password' ? 'password': 'text' }
                                    {...field}
                                    />
                            </FormControl>
                            <FormMessage className="form-message mt-2">
                            </FormMessage>
                        </div>
                    </FormItem>
                </div>
            )}
        />
    )
}

export default CustomInput