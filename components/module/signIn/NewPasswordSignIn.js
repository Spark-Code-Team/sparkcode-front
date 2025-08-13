'use client'

import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { forgetPassword } from "@/services/auth";
import AuthPageStruct from "./AuthPageStruct";

const NewPasswordSignIn = ({ loginState, setLoginState }) => {

    const router = useRouter()
    const [pass , setPass] = useState({
        password:'',
        confirm_password:''
    })

    const sendData = async () => {
        const {response , error} = await forgetPassword({
            confirm_password:loginState.confirm_password,
            password:loginState.password,
            otp_code:loginState.forgetPassword_otp,
            email:loginState.email    })
        if(response){
            console.log(response)
            toast.success('پسورد با موفقیت تغییر کرد.') 
            router.push("/Login")
        }else{
            toast.error(error.response?.data.error||'مشکلی پیش آمده') 
        }
    }

    return(

    <AuthPageStruct>

    <div className="
     md:gap-y-5
     gap-y-8
     flex
     flex-col
     mt-16
     md:justify-center
     md:items-center
     ">
        <div className="
        md:w-[616px] w-full
        leading-10
        ">
        <p className="
        text-2xl
        font-bold
        text-white
        ">
            فراموشی رمز عبور 
        </p>

        <p className="
        mt-4
        text-[#A6A6A6]
        ">
        رمز عبور جدید را وارد کنید.
        </p>
        </div>
  
        <div className="
                flex
                items-center
                md:w-[616px] w-full
                h-12"
                >

                <input
                className="
                p-2
                rounded-xl
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[616px] w-full
                "
                placeholder=" رمز عبور جدید را وارد کنید "
                type="text"
                name="password"
                value={pass.password}
                onChange={(e)=>{
                    setLoginState(prev=>({...prev , password:e.target.value}))
                    setPass(prev=>({...prev , password:e.target.value}))
                }}
                />
            </div>

            <div className="
                flex
                items-center
                md:w-[616px] w-full
                h-12"
                >

                <input
                className="
                p-2
                rounded-xl
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[616px] w-full
                "
                placeholder=" مجددا رمز عبور را وارد کنید "
                type="text"
                name="confirm_password"
                value={pass.confirm_password}
                onChange={(e)=>{
                    setLoginState(prev=>({...prev , confirm_password:e.target.value}))
                    setPass(prev=>({...prev , confirm_password:e.target.value}))
                }}
                />
            </div>

        <div>
            <button className="
                hover:bg-primary
                hover:text-white
                transition
                duration-200
                hover:bg-slate-500
                 md:w-[616px] w-full
                 h-12 
                 bg-[#e6e6e6] 
                 rounded-xl 
                 text-[#202020]
                 text-xl
                 md:text-base
                 "
                 onClick={()=>{sendData()}}
                 >
                     تایید و ادامه
            </button>
        </div>
          
    </div>

    </AuthPageStruct>
    )
}
export default NewPasswordSignIn;