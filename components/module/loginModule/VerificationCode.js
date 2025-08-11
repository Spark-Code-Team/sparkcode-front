"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie , setCookie } from "@/utils/cookies";
import { register, sendOtp } from "@/service/auth";
import { Bounce, toast } from "react-toastify";
import { Profile } from "@/service/profile";
import { UserProfile } from "@/stores/profileStore";
import { setTime } from "@/utils/setTime";


const VerificationCode = ({dynamicPhoneNumber , setFormData , formData }) => {
      const [otpObj, setOtpObj] = useState({phoneNumber: dynamicPhoneNumber, otp: '' });
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
      },[ remainingTime , expired ]);

      const turnToMinuets = (remainingTime) => {
        let minuet ;
        let seconds ; 

        minuet = Math.floor(remainingTime / 60)
        seconds = Math.floor(remainingTime % 60)

        return {minuet , seconds}
      }


      const handleOtpChange = (e) => {  
        const value = e.target.value;
        setOtpObj(prevState => ({ ...prevState, otp: value }));
      };


            const handleSendOtpAgain = async ()=>{
              if (expired){
                const { response, error } = await sendOtp({ mobileNumber: otpObj.phoneNumber });
                    if (response) {
                          document.cookie = `expire_time=${response.data.code_expires_at}; max-age=${2*60}`;
                          setTime(response.data.code_expires_at) 
                          setExpired(false)
                      }
                      else{
                          toast.error(error.response.data.error, { 
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
      

      const handleSendData = async () =>{
        const newFormdata = {
          ...formData,
          otp:otpObj.otp,
          otp_for:otpObj.otp_for
        };
        
        setFormData(newFormdata)

        const {response , error} = await register(newFormdata)
        if (response){
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
                  document.cookie = "expire_time=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
              }}
              fetchProfile()
              router.push('/')
        }else{
          toast.error(error.response.data.detail, { 
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                }
              ) 
      }}
 

    return(
      <div className="
       flex 
       justify-center 
       items-center 
       md:h-screen 
       md:bg-center
       bg-no-repeat
       p-3
       md:p-0
       md:bg-contain 
       lg:bg-cover
       md:bg-[url('/images/userdashboard.png')]
      ">
        <div className="
         bg-white 
         md:w-[664px] 
         md:h-[590px] 
         md:p-8 
         rounded-xl 
         md:shadow-lg
         ">
            <div className="
            mt-16
             h-16 
             flex 
             flex-col 
             items-start
             ">
            <h2 className="
              text-xl 
              font-bold 
              mb-4 
              text-center
              md:text-2xl
              ">
                ثبت نام
            </h2>
            </div>

            <div className="
            w-[600px]
            h-[270px]
            justify-center
            flex
            flex-col
            items-center
            gap-y-5
            
            ">
                <p className="
                  text-2xl
                  md:text-base
                ">
                کد تایید وارد کنید
                </p>

                <p className="
                  text-xl
                  md:text-base
                text-[#A6A6A6]">
                کد تایید به شماره تلفن {dynamicPhoneNumber} ارسال شد.
                </p>

                <div className="
                flex
                items-center
                w-[320px]
                h-12
                rounded-xl
                border-[1px]
                boredr-[#E1E1E1]
                "
                >
                <input
                className="
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                rounded-xl
                w-[320px]
                "
                placeholder=""
                type="text"
                name="otp"  
                value={formData.otp_code} 
                onChange={handleOtpChange}
                
                />
                </div>

                <p className="
                  text-xl
                  md:text-base
                text-[#A6A6A6]">
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
                  handleSendOtpAgain()
                }}
                 >
                    ارسال مجدد کد
                </button>:<button className="
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
                  handleSendData()
                  }}
                 >
                    تایید و ادامه
                </button>}

            </div>

            <div className="
             mt-3 
             md:w-[600px] w-[370px]
             flex
             text-xl
             md:text-base
             ">
            حساب کاربری دارید؟
            <Link href="/Sign-in">
             <p className="mr-1 text-primary">
                ورود
            </p>  
             </Link> 
            
            </div>

            </div>


        </div>

      </div>
    )
}
export default VerificationCode;