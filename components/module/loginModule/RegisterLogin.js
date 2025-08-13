"use client"

import Link from "next/link";
import { Bounce, toast } from "react-toastify";
import { registerForm } from "@/constant/auth";
import { sendOtp } from "@/services/auth";



const RegisterLogin = ({setFormData ,formData ,setloginRegisterState }) =>{


    const handleChange = (e) => {  
      const { name, value } = e.target;  
      setFormData((prevData) => ({  
          ...prevData,  
          [name]: value  
      }));  
    }; 

    const handleSendData = async () => {       
      console.log(formData, 'this is form data hereeeeeeeeeeeeeeeeeeeeeeeee')

      const { response, error } = await sendOtp(formData)

      if (response){
        document.cookie = `expire_time=${response.data.code_expires_at}; max-age=${2*60}`;
        setloginRegisterState({state: 1, phone: formData.phone_number})

        
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
       bg-slate-800
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
              text-white
              md:text-xl text-2xl
              font-bold 
              mb-4 
              text-center
              ">
                ثبت نام
            </h2>

            <p className="
                text-[16px]
              text-white
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
                          md: full 
                          h-12  
                          rounded-xl 
                          mb-3
                          md:mb-0
                      ">   
                          
                          <input  
                              className=" 
                                  rounded-xl
                                  m-auto 
                                  p-2
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
                onClick={() => handleSendData()}
                 >
                    تایید و ادامه
                </button>
            </div> 

            <div className="
            text-white
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