'use client'

import { useEffect, useState } from "react";
import AuthPageStruct from "./AuthPageStruct";
// import PhoneLogin from "../../../../public/icons/PhoneLogin";
import Link from "next/link";
import { sendForgetPassOtp } from "@/services/auth";

const ForgetPasswordSignIn = ({ loginState, setLoginState })=> {

    const [email , setEmail] = useState()


    const sendData = async () => {
        const {response , error} = await sendForgetPassOtp({
            email
        })
        if(response){
            console.log(response)
            document.cookie = `expire_time=${response.data.code_expires_at}; max-age=${2*60}`;
            setLoginState(prev=>({...prev , state:"resendCode", email}))            
        }else{
            console.log(error)
        }
    }


    return (
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
        md:text-2xl
        text-xl
        font-bold
        text-white
        ">
            فراموشی رمز عبور
        </p>

        <p className="
        mt-4
        text-[#A6A6A6]
        md:text-base
        text-lg
        ">
        برای بازیابی رمز عبور آدرس ایمیل خود را وارد کنید.
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
                md:text-base
                text-xl
                
                "
                placeholder=" ایمیل"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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


        <div  className="
        md:w-[616px] w-full
        leading-9
        ">

            <div className="
            md:text-base
            text-xl
            flex
            text-white">
            ثبت نام نکرده اید؟ 
             <Link href="/Login">
             <p className="mr-1 text-primary">
                ثبت نام
            </p>  
             </Link>
            
            </div>

        </div>
        
     </div>

    </AuthPageStruct>
    )
}
export default ForgetPasswordSignIn;