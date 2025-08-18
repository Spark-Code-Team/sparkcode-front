"use client"


import { useEffect, useState } from "react";
// import { Profile } from "@/service/profile";
import { getCookie } from "@/utils/cookies";
// import { changePassword, emailSendOtp, logOut, setEmailPass } from "@/service/auth";
import { UserProfile } from "@/stores/profileStore";
// import { useRouter } from "next/navigation";
// import ModalPage from "../elements/Modals";
// import { Bounce, toast } from "react-toastify";
import { setTime } from "@/utils/setTime";
import DashboardStyle from "../element/DashboardStyle";
import { getProfile } from "@/constant/profile";

const UserAccountDashboardPage = () => {

    const profileStore = UserProfile()
    const [expired, setExpired] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0); 
    // const router = useRouter()
    const profile = getProfile(); 
    // const [modalOpen , setModalOpen] = useState(false)
    // const [modalOpenChangePass , setModalOpenChangePass] = useState(false)



          useEffect(() => {
                const inputTime = getCookie('expire_time');
                
                const totalSeconds = setTime(inputTime)
        
                setRemainingTime(totalSeconds);

                // setChangePass(prev => ({...prev,email:profileStore.data.email  }))
                
        
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

        // const turnToMinuets = (remainingTime) => {
        //         let minuet ;
        //         let seconds ; 
        
        //         minuet = Math.floor(remainingTime / 60)
        //         seconds = Math.floor(remainingTime % 60)
            
        //         return {minuet , seconds}
        //   }


        // const [emailAndPassword, setEmailAndPassword] = useState({  
        //     email: '',  
        //     otp_code: '',
        //     password: '',  
        //     confirm_password: ''  
        // });



        
        // const [changePass , setChangePass] = useState({
        //     email:'',
        //     otp_code: '',
        //     current_password:'',
        //     password:'',
        //     password_repeat:''
        // })




        // const handleChangePass = (e) => {
        //     setChangePass({  
        //         ...changePass,  
        //         [e.target.name]: e.target.value  
        //     }); 
        // };



        // const handleSendOtp = async () => {
        //       if (expired){
        //         const { response, error } = await emailSendOtp(emailAndPassword.email);
        //             if (response) {
        //                   document.cookie = `expire_time=${response.data.code_expires_at}; max-age=${2*60}`;
        //                   setTime(response.data.code_expires_at) 
        //                   setExpired(false)
        //               }
        //               else{
        //                   toast.error(error.response.data.error, { 
        //                           position: "bottom-right",
        //                           autoClose: 5000,
        //                           hideProgressBar: false,
        //                           closeOnClick: true,
        //                           progress: undefined,
        //                           theme: "light",
        //                           transition: Bounce,
        //                       }
        //                       )         
        //                   }
        //       }  
        //     }     

            


    
        // const handleChange = (e) => {  
        //     setEmailAndPassword({  
        //         ...emailAndPassword,  
        //         [e.target.name]: e.target.value  
        //     });  
        // };



        

        // const handleSubmit = async () => {  

        //     setModalOpen(true)
        //     const {response , error} = await setEmailPass(emailAndPassword)
        //         if(response){
        //             profileStore.setProfileToNull()
        //             router.push('/')
        //                 toast.success( "رمز عبور ذخیره شد", { 
        //                 position: "bottom-right",
        //                 autoClose: 5000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 progress: undefined,
        //                 theme: "light",
        //                 transition: Bounce,
        //               }
        //             ) 
        //         }
        //         else{            
        //             toast.error(error.response?.data.error || "مشکلی پیش آمده", { 
        //                     position: "bottom-right",
        //                     autoClose: 5000,
        //                     hideProgressBar: false,
        //                     closeOnClick: true,
        //                     progress: undefined,
        //                     theme: "light",
        //                     transition: Bounce,
        //                   }
        //                 )         
        //             }
        // };  


        // const handleSubmitChangePass = async () => {
        //     const {response , error} = await changePassword(changePass)
        //     if(response){
        //             const {response , error} = await logOut(getCookie('refreshToken'))
        //             if(response){
        //                 document.cookie.split(';').forEach(function(c) {
        //                 document.cookie = c.trim().split('=')[0] + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        //                 });
        //                 document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        //                 document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC"; 
        //                 router.push("/Shop")
        //                 window.location.reload()
        //             }else{
        //                 console.log(error)
        //                 router.push("/Shop")
        //                 window.location.reload()
        //                 toast.error('خروج ناموفق')
        //             }
        //             toast.success( "رمز عبور جدید ذخیره شد") 
        //         }
        //         else{            
        //             toast.error(error.response?.data.error || "مشکلی پیش آمده", { 
        //                     position: "bottom-right",
        //                     autoClose: 5000,
        //                     hideProgressBar: false,
        //                     closeOnClick: true,
        //                     progress: undefined,
        //                     theme: "light",
        //                     transition: Bounce,
        //                   }
        //                 )         
        //             }
        // }
        
        // const handleSendChangePassOtp = async () => {  
        //     if (expired){
        //         const { response, error } = await emailSendOtp(profileStore.data.email);
        //             if (response) {
        //                   document.cookie = `expire_time=${response.data.code_expires_at}; max-age=${2*60}`;
        //                   setTime(response.data.code_expires_at) 
        //                   setExpired(false)
        //               }
        //               else{
        //                   toast.error(error.response.data.error, { 
        //                           position: "bottom-right",
        //                           autoClose: 5000,
        //                           hideProgressBar: false,
        //                           closeOnClick: true,
        //                           progress: undefined,
        //                           theme: "light",
        //                           transition: Bounce,
        //                       }
        //                       )         
        //                   }
        //       }  
        // };



 

    return(
        <div className="mx-3 mt-10">
            <div>
            <div className="
            w-full
            h-max
            bg-slate-800
            rounded-xl        
            ">
                
                <DashboardStyle
                    title="اطلاعات"
                />

<div className="
    grid
    grid-cols-1      
    md:grid-cols-2 
    gap-4
    pt-6
    pb-6
    place-items-center
    px-6
">
  {
    profile.map(p => (
      <div key={p.id} className="flex flex-col">
        <label className="
          text-white
          text-[14px]
          font-normal
          pr-4
        ">
          {p.field_name}
        </label>

        <div className="
          flex
          items-center
          md:w-[392px]
          h-[56px]
          rounded-xl
          border-[1px]
          border-[#7A7A7A]
          bg-[#EDEDED]
        ">
          <span className="mr-4">
            {p.logo}
          </span>

          <input
            type="text"
            value={p.content}
            disabled
            className="
              w-full
              border-none
              focus:outline-none
              focus:ring-0
              focus:border-transparent
              bg-[#EDEDED]
            "
          />
        </div>
      </div>
    ))
  }
</div>
            </div>

            {/* <div className="
            w-full  
            h-full  
            bg-white  
            border-[1px]  
            rounded-xl        
            border-[#CBCED7]  
            pb-3  
            mt-7  
            px-4
            "> */}



{/* 
    {profileStore.data.is_2fa?
                    <div className="md:pr-6">
                            <p className="
                            pt-6
                            text-2xl
                            font-bold
                            mb-[16px]
                            ">
                                تغییر رمز عبور
                            </p>


                            <div className="
                                flex
                                items-center
                                md:w-[392px]
                                h-[56px]
                                rounded-xl 
                                border-[1px] 
                                mb-[16px]
                                border-[#E1E1E1]
                            ">

                            <input 
                            type="text" 
                            placeholder="رمز عبور فعلی را وارد کنید" 
                            onChange={handleChangePass}
                            value={changePass.current_password}  
                            name="current_password"  
                            className="
                                w-[350px]
                                border-none
                                focus:outline-none
                                focus:ring-0
                                focus:boredr-transparent 
                                text-[#979797]
                            "/>
                            
                            </div>

                            <div className="
                                flex
                                items-center
                                md:w-[392px]
                                h-[56px]
                                rounded-xl 
                                mb-[16px]
                                border-[1px] 
                                border-[#E1E1E1]
                            ">

                            <input 
                                type="text" 
                                placeholder="رمز عبور جدید" 
                                onChange={handleChangePass}
                                value={changePass.password}  
                                name="password"  
                                className="
                                    w-[350px]
                                    border-none
                                    focus:outline-none
                                    focus:ring-0
                                    focus:boredr-transparent 
                                    text-[#979797]
                                "
                            />
                            
                            </div>

                            <div className="
                                flex
                                items-center
                                md:w-[392px]
                                h-[56px]
                                rounded-xl 
                                mb-[16px]
                                border-[1px] 
                                border-[#E1E1E1]
                            ">

                            <input 
                            type="text" 
                            placeholder="تکرار رمز عبور" 
                            onChange={handleChangePass}
                            value={changePass.password_repeat}  
                            name="password_repeat"  
                            className="
                                w-[350px]
                                border-none
                                focus:outline-none
                                focus:ring-0
                                focus:boredr-transparent 
                                text-[#979797]
                            "/>
                            
                            </div>

                            <div className="
                                    pt-6
                                    pb-[16px]
                                    mb-24 
                                "
                            >
                                <button 
                                    onClick={()=>{
                                        handleSendChangePassOtp()
                                        setModalOpenChangePass(true)
                                    }}
                                    className="
                                    w-[108px]
                                    h-12
                                    bg-primary
                                    rounded-xl
                                    ">
                                    تغییر رمز عبور
                                </button>

                            </div>

                            </div>
                            :
                            <div className="md:pr-6">
                            <p className="
                            pt-6
                            text-2xl
                            font-bold
                            ">
                                رمزعبور
                            </p>

                            <p className="py-6">
                            برای سهولت در ورودهای بعدی، لطفا برای حساب کاربری خود یک رمز عبور قرار دهید.
                            </p>
                            <div className="
                                flex
                                items-center
                                w-full          
                                md:w-[392px]   
                                h-[56px]
                                rounded-xl 
                                border-[1px] 
                                border-[#E1E1E1]
                            ">
                               

                                <input 
                                    type="text" 
                                    placeholder="ایمیل" 
                                    onChange={handleChange}
                                    value={emailAndPassword.email}  
                                    name="email"  
                                    className="
                                        w-full          
                                        md:w-[350px]    
                                        border-none
                                        focus:outline-none
                                        focus:ring-0
                                        focus:border-transparent
                                        text-[#979797]
                                    "
                                />
                            </div>
                            <div className="
                            flex 
                            flex-col     
                            md:flex-row  
                            pt-6
                            gap-4
                            ">
                            <div className="
                                flex
                                items-center
                                w-full           
                                md:w-[392px]     
                                h-[56px]
                                rounded-xl 
                                border-[1px] 
                                border-[#E1E1E1]
                                bg-[#EDEDED]
                            ">

                                <input 
                                type="text" 
                                placeholder="رمزعبور"
                                onChange={handleChange} 
                                value={emailAndPassword.password}  
                                name="password"  
                                className="
                                    w-full          
                                    md:w-[350px]    
                                    border-none
                                    focus:outline-none
                                    focus:ring-0
                                    focus:border-transparent
                                    text-[#979797]
                                    bg-[#EDEDED]
                                "
                                />
                            </div>

                            <div className="
                                flex
                                items-center
                                w-full
                                md:w-[392px]
                                h-[56px]
                                rounded-xl 
                                border-[1px] 
                                border-[#E1E1E1]
                                bg-[#EDEDED]
                            ">

                                <input 
                                type="text" 
                                placeholder="تکرار رمزعبور" 
                                onChange={handleChange}
                                value={emailAndPassword.confirm_password}  
                                name="confirm_password"  
                                className="
                                    w-full
                                    md:w-[350px]
                                    border-none
                                    focus:outline-none
                                    focus:ring-0
                                    focus:border-transparent
                                    text-[#979797]
                                    bg-[#EDEDED]
                                "
                                />
                            </div>
                            </div>

                            <div className="pt-6">
                                <button 
                                    onClick={()=>{
                                        if(emailAndPassword.email
                                            &&emailAndPassword.confirm_password
                                            &&emailAndPassword.password){
                                            handleSendOtp()
                                            setModalOpen(true)
                                        }

                                    }}
                                    className="
                                    w-full
                                    md:w-[108px]
                                    h-12
                                    bg-primary
                                    rounded-xl
                                    ">
                                    ثبت ایمیل
                                </button>

                            </div>

                            </div>
    } */}

            
            
            {/* </div> */}

            </div>

            {/* <ModalPage isOpen={modalOpen} >

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
                                کد تایید به ایمیل {emailAndPassword.email} ارسال شد
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
                            name="otp_code"  
                            onChange={handleChange}
                            value={emailAndPassword.otp_code} 
                            
                            />
                            </div>

                            <p className="
                            text-xl
                            md:text-base
                            text-[#A6A6A6]">
                            {turnToMinuets(remainingTime).minuet}:{turnToMinuets(remainingTime).seconds} 
                            تا ارسال مجدد کد
                            </p>

                        <div>
                        {
                        expired ?                               
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
                                handleSendOtp()
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
                                handleSubmit()
                            }}
                            >
                                تایید و ادامه
                            </button>}

                        </div>

                        </div>


                    </div>

    
            </ModalPage>

            <ModalPage isOpen={modalOpenChangePass} >

                <div className="
                bg-white 
                md:w-[664px] 
                md:h-[590px] 
                md:p-8 
                rounded-xl 
                md:shadow-lg
                ">
                    <button onClick={()=>{setModalOpenChangePass(false)}} className="font-bold py-2 px-4 rounded text-xl flex items-center justify-center">
                    </button>
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
                            کد تایید به ایمیل {profileStore.data.email} ارسال شد
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
                        name="otp_code"  
                        onChange={handleChangePass}
                        value={changePass.otp_code} 
                        
                        />
                        </div>

                        <p className="
                        text-xl
                        md:text-base
                        text-[#A6A6A6]">
                        {turnToMinuets(remainingTime).minuet}:{turnToMinuets(remainingTime).seconds} 
                        تا ارسال مجدد کد
                        </p>

                    <div>
                    {
                    expired ?                               
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
                            handleSendChangePassOtp()
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
                            handleSubmitChangePass()
                        }}
                        >
                            تایید و ادامه
                        </button>}

                    </div>

                    </div>


                </div>


            </ModalPage> */}


        </div>

    )
}
export default UserAccountDashboardPage;