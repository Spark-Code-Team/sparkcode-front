"use client"

import Link from "next/link";
import { sendOtp } from "@/service/auth";
// import { useState } from "react";
// import EmailLogin from "../../../../public/icons/EmailLogin";
import PersonName from "../../../../public/icons/PersonName";
import { Bounce, toast } from "react-toastify";
import { registerForm } from "@/constant/auth";



const RegisterLogin = ({setFormData ,formData ,setloginRegisterState }) =>{


    const handleChange = (e) => {  
      const { name, value } = e.target;  
      setFormData((prevData) => ({  
          ...prevData,  
          [name]: value  
      }));  
    }; 

    const handleSendData = async () => {       
      
      const { response, error } = await sendOtp(formData)

      if (response){
        document.cookie = `expire_time=${response.data.code_expires_at}; max-age=${2*60}`;
        setloginRegisterState({state: 1, phone: formData.mobileNumber})
        
      } else  {
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

    }; 

    return(
        <div 
          className="
          md:flex flex flex-col
          md:justify-center 
          md:items-center 
          md:h-screen
          md:bg-center
          bg-no-repeat 
          md:bg-contain 
          lg:bg-cover
          md:bg-[url('/images/userdashboard.png')]
          mt-4
          md:mt-0
          p-3
          md:p-0
          " 
        >

        <div className="
       bg-white
         md:w-[664px] w-full
         md:h-[590px] h-screen
         md:p-8 p-3
         rounded-xl 
         md:shadow-lg
         flex
         flex-col
         justify-between
         ">
            <div className="
             h-16 
             flex 
             flex-col 
             items-start
             ">

            <h2 className="
              md:text-xl text-2xl
              font-bold 
              mb-4 
              text-center
              ">
                ثبت نام
            </h2>

            <p className="
                text-[16px]
              text-[#A6A6A6]
              ">
                 لطفا اطلاعات زیر را تکمیل کنید 
            </p>

            </div>

            <div className="
             md:h-[325px] 
             md:grid 
             md:grid-cols-2 
             md:gap-4
             md:mt-10
            ">

              {registerForm.map((p) => {  
                  return (  
                      <div key={p.id} className="  
                          flex  
                          items-center  
                          md:w-[292px]  
                          h-12  
                          rounded-xl  
                          border-[1px]  
                          border-[#E1E1E1]  
                          mb-3
                          md:mb-0
                      ">  
                          <span className="mr-4">  
                              <PersonName />  
                          </span>  
                          
                          <input  
                              className="  
                                  border-none  
                                  focus:outline-none  
                                  focus:ring-0  
                                  focus:border-transparent  
                                  md:w-[250px] w-80  
                                  text-xl  
                                  md:text-base  
                              "  
                              placeholder={p.placeholder}  
                              type={p.type}  
                              name={p.name}   
                              value={formData[p.name]}  
                              onChange={handleChange}   
                          />  
                      </div>  
                  );  
              })}               

            </div>

            <div>
                <button className="
                md:w-[600px] w-full
                h-12 
                bg-[#EDEDED] 
                rounded-xl 
                text-black
                hover:bg-primary
                hover:text-black
                text-xl
                md:text-base
                "
                onClick={() => handleSendData()}
                 >
                    تایید و ادامه
                </button>
            </div> 

            <div className="
            mt-3 
            w-[600px]
            flex
            text-xl
            md:text-base
            ">
            حساب کاربری دارید؟
            <Link href="/Sign-in">
              <p className="
                  mr-1 
                text-primary
                  text-xl
                  md:text-base
                ">
                  ورود
              </p>  
            </Link> 
            
            </div>

        </div>

        </div>
    )
}
export default RegisterLogin;