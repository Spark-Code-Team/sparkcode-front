"use client"

import { UserProfile } from "@/stores/profileStore";

export const getProfile = () => {  
    const profileStore = UserProfile(); 
    return [
    {
        id:1,
        field_name:'نام کاربری',
        content: profileStore.data.username ,

    },
    {
        id:2,
        field_name:' شماره موبایل',
        content: profileStore.data.phone_number,

    },
    {
        id:3,
        field_name:'نام کامل',
        content: profileStore.data.full_name,
    },
    {
        id:4,
        field_name:'آدرس ایمیل',
        content: profileStore.data.email,

    },
]}