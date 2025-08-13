'use client'
import Link from "next/link";
import AuthPageStruct from "./AuthPageStruct";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { sendOtp } from "@/services/auth";

const SignInPhone =({ loginState, setLoginState }) =>{

    const [phoneNumber, setPhoneNumber] = useState({phone_number:''})

    const handleSendData = async () => {
        const {response , error} = await sendOtp(phoneNumber)    
        if (response) {
            document.cookie = `expire_time=${response.data.code_expires_at}; max-age=${2*60}`;
            setLoginState(prev=>({...prev,state:"verification", otp_code: response.data?.otp_code , phoneNumber:phoneNumber.phone_number, is_2fa:response.data.is_2fa}))
        }
        else{            
            toast.error(error.response?.data.error || "مشکلی پیش آمده", { 
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  }
                )         
            }
    }

    return(
    <AuthPageStruct>

     <div className="
     gap-y-8
     md:gap-y-5
     flex
     flex-col
     mt-16
     md:justify-center
     md:items-center
     ">
        <div className="
        md:w-[616px]
        leading-10
        ">
        <p className="
        text-2xl
        font-bold
        md:text-base
        text-white
        ">
            ورود با شماره تلفن
        </p>

        <p className="
        mt-4
        text-[#A6A6A6]
        text-xl
        md:text-base
        ">
        لطفا اطلاعات زیر را تکمیل کنید
        </p>
        </div>
  
        <div className="
                flex
                items-center
                md:w-[616px] w-full
                h-12
                rounded-xl"
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
                text-xl
                md:text-base
                "
                placeholder=" شماره موبایل* "
                type="text"
                name="firstname"
                onChange={(e) => {
                    setPhoneNumber(prev => ({
                      ...prev,
                      phone_number: e.target.value
                    }));
                  }}                />
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
                 onClick={() => {
                    handleSendData()                    
                 }}
                 >
                    ارسال کد
            </button>
        </div>


        <div  className="
        text-white
        w-[616px]
        md:leading-9
        leading-10
        ">
             <button
             className="
            text-xl
            md:text-base
             "
            onClick={() => setLoginState(prev=>({...prev,state:"forgetPassword", phoneNumber:phoneNumber.phone_number, is_2fa:loginState.is_2fa}))}
            >
            فراموشی رمزعبور
            </button>

            <div className="
            text-xl
            md:text-base
            flex">
            ثبت نام نکرده اید؟  

            <button
            onClick={() => setLoginState(prev=>({...prev,state:0, phoneNumber:phoneNumber.phone_number, is_2fa:loginState.is_2fa}))}
            >
             <Link href="/Login">
             <p className="mr-1 text-primary">
                ثبت نام
            </p>  
             </Link>
            </button>
          
            </div>

        </div>
        
     </div>

     </AuthPageStruct>

    )
}
export default SignInPhone;