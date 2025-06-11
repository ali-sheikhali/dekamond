'use client'
import axios from 'axios';
import toast from 'react-hot-toast';

export const loginUser = async (phone: string): Promise<boolean> =>{
    try{
        const responsive = await axios.get('https://randomuser.me/api/?results=1&nat=us')
        localStorage.setItem('user' , JSON.stringify(responsive.data.results[0]))
        toast.success("ورود با موفقیت انجام شد.")
        return true
    }catch(err){
        toast.error("شماره موبایل درست نیست.")
        return false
    }
}