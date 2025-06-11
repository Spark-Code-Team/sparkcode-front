"use client"

import { LandingRequest } from "@/services/homePage";
// Next & React
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";


const inputs = [
    {
        title: "نام",
        placeholder: "نام خود را بنویسید",
        name: "first_name"
    },
    {
        title: "نام خانوادگی",
        placeholder: "نام خانوادگی خود را بنویسید",
        name: "last_name"
    },
    {
        title: "شماره تماس",
        placeholder: "09120000000",
        name: "phone_number"
    },
    {
        title: "آدرس ایمیل",
        placeholder: "email-address@gmail.com",
        name: "email"
    },
    {
        title: "درخواست خود را بنویسید",
        placeholder: "",
        name: "request"
    }
]

const ContactUs = () => {

    const [requestInputs, setRequestInputs] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        request: ""
    })

    const InputHandler = (e) => {
        
        setRequestInputs(last => ({...last, [e.target.name]: e.target.value}))
    }

    const sendData = async () => {

        if(!requestInputs.email && !requestInputs.first_name && !requestInputs.last_name && !requestInputs.request && !requestInputs.phone_number) {
            return toast.error("تمام فیلد ها باید پر شوند")
        }
        const {response, error} = await LandingRequest(
            `${requestInputs.first_name + " " + requestInputs.last_name}`,
            requestInputs.phone_number,
            `${requestInputs.request + " " + requestInputs.email}`,
            ""
        )

        if(response) {
            toast.success("درخواست شما با موفقیت ثبت شد")
            setRequestInputs({
                first_name: "",
                last_name: "",
                phone_number: "",
                email: "",
                request: ""
            })
        } else {
            toast.error("مشکلی پیش آمده")
        }
    }

    return(

        <>

            <div className="w-full lg:mt-24 mt-10 text-white relative">

                <div className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text animate-floatText">About Spark Code</div>
                <div className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">درباره اسپارک کد</div>

                <div className="glass-background lg:w-[85%] w-[90%] lg:flex m-auto mt-14 border-2 border-[#182128] rounded-3xl">

                    <div className="lg:w-[65%] w-full lg:pr-10 flex flex-wrap lg:relative custom-border-contact">

                        {
                            inputs.map(item => {

                                if(item.name == "request") {
                                    return (
                                        <div 
                                            className="
                                                lg:w-full 
                                                lg:mt-10 
                                                w-full 
                                                mt-10
                                            "
                                            key={item.title}
                                        >
                                            <label 
                                                className="
                                                    w-full 
                                                    block
                                                "
                                            >
                                                {item.title}    
                                            </label>
                                            <textarea 
                                                className="
                                                    lg:w-[94%] 
                                                    lg:mt-5 
                                                    lg:pr-4 
                                                    pt-3 
                                                    rounded-xl 
                                                    bg-transparent 
                                                    border-2 
                                                    border-[#182128] 
                                                    outline-none 
                                                    w-full 
                                                    mt-5
                                                " 
                                                value={requestInputs[item.name]}
                                                name={item.name} 
                                                onChange={(e) => InputHandler(e)}
                                            /> 
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div 
                                            className="
                                                lg:w-1/2 
                                                lg:mt-10
                                                w-full 
                                                mt-5
                                            "
                                            key={item.title}
                                        >
                                            <label 
                                                className="
                                                    w-full 
                                                    block
                                                "
                                            >
                                                {item.title}
                                            </label>
                                            <input 
                                                type="text" 
                                                name={item.name} 
                                                className="
                                                    lg:w-[296px] 
                                                    lg:h-[54px] 
                                                    w-full 
                                                    p-2 
                                                    pr-3 
                                                    rounded-xl 
                                                    mt-4 
                                                    bg-transparent 
                                                    border-2 
                                                    border-[#182128] 
                                                    outline-none
                                                " 
                                                placeholder={item.placeholder}
                                                value={requestInputs[item.name]}
                                                onChange={(e) => InputHandler(e)}
                                            />
                                        </div>
                                    )
                                }
                            
                            })
                        }

                        <div className="lg:w-full lg:mt-10 lg:mb-10 mt-10 flex justify-end lg:pl-11">
                            <button 
                                className="
                                    lg:w-[118px] 
                                    h-[45px] 
                                    w-32 
                                    bg-[#2e567d] 
                                    text-white 
                                    rounded-lg
                                "
                                onClick={() => sendData()}
                            >
                                ارسال
                            </button>
                        </div>

                    </div>

                    <div className="lg:w-[35%] pt-4 flex flex-wrap w-full lg:mt-0 mt-10">

                        <div className="lg:w-[90%] m-auto lg:pr-7 w-full">

                            <div className="flex gap-x-2 lg:mt-6 mt-6">
                                <Image src="/image/email.png" alt="" width={22} height={25}/>
                                <p>spark.code.agance@gmail.com</p>
                            </div>

                            <div className="flex gap-x-2 lg:mt-6 mt-6">
                                <Image src="/image/location.png" alt="" width={22} height={25}/>
                                <p>پاسداران - بوستان 5 </p>
                            </div>

                        </div>


                        <div className="lg:w-[90%] m-auto lg:mt-80 flex justify-around w-full mt-20">

                            {/* <div className="lg:w-[48px] lg:h-[48px]">
                                <Image src="/image/telegram.png" alt="" width={48} height={48}/>
                            </div> */}

                            <a 
                                href="https://www.linkedin.com/company/sparkcode-com/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B8nkW%2FiZdReqDjj4u%2BlNEgA%3D%3D"
                                className="lg:w-[48px] lg:h-[48px]"
                            >
                                <Image src="/image/linkedin.png" alt="" width={48} height={48}/>
                            </a>

                            <a 
                                href="https://www.instagram.com/sparkcode_com?igsh=dXp2YnU4dGljd2xu"
                                className="lg:w-[48px] lg:h-[48px]"
                            >
                                <Image src="/image/instagram.png" alt="" width={48} height={48}/>
                            </a>

                        </div>

                    </div>

                </div>

                <div className="lg:w-[132px] lg:h-[132px] rounded-full bg-[#2e567d] absolute left-40 top-14 -z-10 animate-floatAndColor"> </div>
                <div className="lg:w-[162px] lg:h-[162px] rounded-full bg-[#2e567d] absolute left-80 top-40 -z-10 animate-floatAndColor"> </div>
                <div className="lg:w-[250px] lg:h-[250px] rounded-full bg-[#2e567d] absolute left-0 -bottom-20 -z-10 animate-floatAndColor"> </div>

            </div>

        </>

    )

}


export default ContactUs;