'use client'
import { useState , useEffect } from "react";
import AuthPageStruct from "./AuthPageStruct";
import { getCookie, setCookie } from "@/utils/cookies";
import { setTime } from "@/utils/setTime";
import { useRouter } from "next/navigation";
import { UserProfile } from "@/stores/profileStore";
import { Bounce, toast } from "react-toastify";
import { sendForgetPassOtp } from "@/services/auth";


const ResendPasswordSignIn = ({ loginState, setLoginState }) => {

        const [otpObj, setOtpObj] = useState({email: loginState.email, otp: ''  });  
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
          const { response, error } = await sendForgetPassOtp({ email: otpObj.email });
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

      const handleSendData = () => {
        setLoginState(prev=>({...prev , state:"newPassword" , forgetPassword_otp:otpObj.otp}))
      }
    return(
        
    <AuthPageStruct>

        <div className="
        gap-y-5
        flex
        flex-col
        mt-16
        justify-center
        items-center
        ">
            <div className="
        w-[616px]
        leading-10
        ">
        <p className="
        text-2xl
        font-bold
        ">
            فراموشی رمز عبور 
        </p>

        <p className="
        mt-4
        text-[#A6A6A6]
        ">
        کد 6 رقمی ارسال شده به ایمیل {loginState.email} را وارد کنید.
        </p>
        </div>

        <div className="
                flex
                items-center
                w-[317px]
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
                w-[317px]
                "
                placeholder="  "
                type="text"
                name="otp"
                value={otpObj.otp} 
                onChange={handleOtpChange}
                />
                </div>

                <p className="text-[#ffffff]">
                {turnToMinuets(remainingTime).minuet}:{turnToMinuets(remainingTime).seconds} تا ارسال مجدد کد
                </p>

                
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
export default ResendPasswordSignIn;