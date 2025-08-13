"use client"

// import PhoneLogin from "../../../../public/icons/PhoneLogin";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "@/utils/cookies";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";
import AuthPageStruct from "./AuthPageStruct";
import { UserProfile } from "@/stores/profileStore";
import { Profile } from "@/services/profile";
import { checkPassword } from "@/services/auth";


const PasswordSignIn = ({ setLoginState , loginState }) => {

    const router = useRouter()
    const profileStore = UserProfile()


    const [inputValues, setInputValues] = useState({  
        username_email: '',  
        password: '',  
    });  

        useEffect(() => {  
            if(getCookie('refreshToken')||getCookie('accessToken')){
                document.cookie = `refreshToken=; max-age=${0}`;
                document.cookie = `accessToken=; max-age=${0}`;
            }

                setInputValues(prevValues => ({  
                    ...prevValues,              
                    username_email: loginState.username_email, 
                }));  
             
        }, []);

    const handleChange = (event) => {  
        const { name, value } = event.target;  
        setInputValues((prevValues) => ({  
            ...prevValues,  
            [name]: value, 
        }));  
    }; 
    
    const sendPasswordData = async () => {
        console.log(inputValues , 'this is what you want to send back when you whant to login')
        const {response , error} = await checkPassword(inputValues)
        if(response){
            if (getCookie('refreshToken')||getCookie('accessToken')){
                setCookie(response.data)
            }
            else{
                setCookie(response.data)
            }
            const fetchProfile = async () => {
                    const {response , error} = await Profile()
                    if (response){         
                        profileStore.setProfile(response.data); 
                        if(response.data.role == 1){
                            router.push('/admin/User-Account')
                            document.cookie = "expire_time=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                        }else if(response.data.role == 3){
                            //اینجا پوش میکنیم به ساپورت
                        }else if(response.data.role == 2){
                            router.push('/dashboard/user-account-dashboard')
                            document.cookie = "expire_time=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                        }
            
                    }
                    else{
                    }}
            fetchProfile()  
        }
        else{
            toast.error(error.response?.data.error, { 
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
            ورود
        </p>

        <p className="
        mt-4
        text-[#A6A6A6]
        ">
        لطفا اطلاعات زیر را تکمیل کنید
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
                rounded-xl
                p-2
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[616px] w-full
                "
                placeholder="  نام کاربری یا آدرس ایمیل "
                type="text"
                name="username_email" 
                value={inputValues.username_email}  
                onChange={handleChange} 
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
                rounded-xl
                p-2
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[616px] w-full
                "
                placeholder="  رمزعبور "
                type="password"
                name="password" 
                value={inputValues.password}  
                onChange={handleChange} 
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
                 onClick={() => sendPasswordData()}
                 >
                    ورود
            </button>
        </div>


        <div  className="
        text-white
        w-[616px]
        leading-9
        ">

            <button
            onClick={() => setLoginState(prev=>({...prev,state:"phone"}))}
            >
            ورود با شماره همراه
            </button>

            <br/>

            <button
            onClick={() => setLoginState(prev=>({...prev,state:"forgetPassword"}))}
            >
            فراموشی رمزعبور
            </button>

            <div className="flex">
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
export default PasswordSignIn;