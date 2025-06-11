'use client'
import React, { useState } from 'react'
import Input from '../components/input/Input'
import Button from '../components/button/Button'
import { loginUser } from '../lib/auth'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function AuthPage() {
    const [phone , setPhone] = useState("")
    const router = useRouter()
     const validatePhone = (phone: string) => {
    return /^09\d{9}$/.test(phone);
  };

    const enterHandleClick = async ()=>{
        console.log("log");
        
        if(!validatePhone(phone)){
            toast.error("موبایل معتبر نیست.")
            return         
        }

    const success = await loginUser(phone);
    if (success) {
      router.push('/dashboard');
    }
        
    }
  return (
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 w-4/12 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <div className='w-full flex flex-col gap-3'>
            <Input placeholder='رمز عبور' value={phone} onChange={(e)=> setPhone(e.target.value)}  />
            <Button text='ورود' onClick={enterHandleClick} />
        </div>
      </div>
    </div>
  )
}
