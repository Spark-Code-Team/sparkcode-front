"use client"

import AuthPageStruct from "./AuthPageStruct";
import { useState } from "react";
import { useEffect } from "react";
import { getCookie } from "@/utils/cookies";
import { setCookie } from "@/utils/cookies";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setTime } from "@/utils/setTime";
import { phoneLogin, sendOtp } from "@/services/auth";
import { UserProfile } from "@/stores/profileStore";
import { Profile } from "@/services/profile";

const VerificationCodeSignIn = ({ setLoginState , loginState }) => {
          const [otpObj, setOtpObj] = useState({phoneNumber: loginState.phoneNumber, otp: loginState.otp_code  });  
          const [expired, setExpired] = useState(false);
          const [remainingTime, setRemainingTime] = useState(0);  
          const router = useRouter()
          const profileStore = UserProfile()
          

      useEffect(() => {
        const inputTime = getCookie('expire_time');   

        const totalSeconds = setTime(inputTime)

        setRemainingTime(totalSeconds);

    
        if (totalSeconds <= 0) {
          setExpired(true);
          setRemainingTime(0);
          return;
        }

        const timer = setInterval(() => {
          setRemainingTime((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              setExpired(true);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
    
        return () => clearInterval(timer); 
      },[remainingTime , , expired]);

      const turnToMinuets = (remainingTime) => {
        let minuet ;
        let seconds ; 

        minuet = Math.floor(remainingTime/60)
        seconds = Math.floor(remainingTime%60)

        return {minuet , seconds}
      }

      const handleSendLoginAgain = async ()=>{
        if (expired){
          const { response, error } = await sendOtp({ phone_number: otpObj.phoneNumber });
              if (response) {
                    document.cookie = `expire_time=${response.data.code_expires_at}; max-age=${2*60}`;
                    setTime(response.data.code_expires_at) 
                    setExpired(false)
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
        
      }


      const handleOtpChange = (e) => {  
        const value = e.target.value; 
        setOtpObj(prevState => ({ ...prevState, otp: value })); 
      };

      const handleSendData = async () => {
        const {response , error} = await phoneLogin(otpObj)
        if (response){
            if (getCookie('refreshToken')||getCookie('accessToken')){
                setCookie(response.data)
            }
            else{
                setCookie(response.data)
            }
            
            if(response.data.is_2fa){
                setLoginState({state:"password" , phoneNumber:loginState.phoneNumber,  is_2fa:response.data.is_2fa})
            }
            else{
                        const fetchProfile = async () => {
                                const {response , error} = await Profile()
                                if (response){ 
                                    profileStore.setProfile(response.data); 
                                    document.cookie = "expire_time=; expires=Thu, 01 Jan 1970 00:00:00 UTC";                        
                                }
                                else{
                                }}
                          fetchProfile()
                router.push('/')
            }           


        }else{
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
        ">
            کد تایید وارد کنید
        </p>

        <p className="
        mt-4
        text-[#A6A6A6]
        ">
        کد 8 رقمی به شماره تلفن {loginState.phoneNumber} ارسال شد
        </p>
        </div>

        <div className="
                flex
                items-center
                md:w-[317px] w-full
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
                md:w-[317px] w-full
                "
                placeholder="  "
                type="text"
                name="firstname"
                value={otpObj.otp} 
                onChange={handleOtpChange}
                />
                </div>

                <button
                onClick={() => setLoginState({state:"resendCode", phoneNumber:loginState.phoneNumber, is_2fa:loginState.is_2fa})}
                >

                <p className="text-[#ffffff]">
                {turnToMinuets(remainingTime).minuet}:{turnToMinuets(remainingTime).seconds} تا ارسال مجدد کد
                </p>

                </button>


                
                <div>
              {expired ?                               
                <button className="
                md:w-[600px] w-[375px]
                h-12 
                bg-[#EDEDED] 
                rounded-xl 
                text-black
                hover:bg-primary
                hover:text-black
                text-xl
                md:text-base
                "
                 onClick={() => {
                  handleSendLoginAgain()
                }}
                 >
                    ارسال مجدد کد
                </button>:<button className="
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
                 onClick={() => 
                  handleSendData()
                  }
                 >
                    تایید و ادامه
                </button>}

            </div>

        </div>
    </AuthPageStruct>
    )
}
export default VerificationCodeSignIn;