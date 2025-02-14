'use client';
import {useState} from "react";
import Image from "next/image";
import SlideRight from "../../../public/icons/SlideRight";
import SlideLeft from "../../../public/icons/SlideLeft";

const CustomerReviews = ()=>{

    const [index , setIndex] = useState(0);
    const slides = [
        {id:1 , name:"امید عطایی"} ,
        {id:"2" , name:"محسن پورپاک"},
        {id:"2" , name:"رضا عبادی"},
        {id:"2" , name:"علیرضا سلمان"},
        {id:"2" , name:"فاطمه صباغ"},
        {id:"2" , name:"مهربد"},
        {id:"2" , name:"رزا"},
        {id:"2" , name:"مریم محمدی"},
    ]

    const updateSlider = (mozoe) => {
        if (mozoe === "azafe") {
            setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1)); // از اول شروع کن
        } else {
            setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); // برعکس
        }
    };


    return(

        <>

            <div className="w-full lg:min-h-auto h-full lg:mt-24 mt-10">

                <div className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text">Customer Reviews</div>
                <div className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">نظرات مشتریان</div>

                <div className="lg:w-[85%] w-full m-auto mt-10 lg:flex lg:flex-wrap gap-x-4 relative hidden">

                    <div className="w-full flex justify-end gap-x-2">

                        <div className=" flex justify-between gap-x-2">

                            <button className="w-12 h-12 bg-[#2e567d] flex justify-center items-center" onClick={() => updateSlider("azafee")}>
                                <SlideLeft/>
                            </button>

                            <button className="w-12 h-12 bg-[#2e567d] flex justify-center items-center" onClick={() => updateSlider("azafe")}>
                                <SlideRight/>
                            </button>

                        </div>

                    </div>

                    <div className="relative lg:w-[1200px] w-3/5 min-h-[200px] mx-auto mt-10 overflow-hidden">
                        <div className="flex transition-transform duration-500" style={{ transform: `translateX(${index * 33.33 - 33.33}%)` }}>
                            {slides.map((slide, i) => (
                                <div
                                    key={i}
                                    className={`flex-none lg:w-1/3 w-1/3 flex justify-center items-center p-4 transition-transform duration-300 cursor-pointer ${i === index ? "scale-125 z-10 opacity-100" : "opacity-50"}`}
                                    onClick={() => updateSlider(i)}
                                >
                                    {/*<Image width={300} height={300} src={src} alt={`Slide ${i + 1}`} className="w-full rounded-lg" />*/}
                                    <div className="lg:w-[900px] bg-[#2e567d] pb-9 bg-[#091119] pt-5">
                                        <p className="w-full text-[12px] mt-5 pr-5 pl-7 leading-6 text-white">تجربه کار کردن با تیم اسپارکد یکی از بهترین تجربه های کاری من  در این چند ساله بوده  لذت داشتن یک تیم حرفه ای و باحال یکی از دلایل خفن بود این تیم بود ! </p>

                                        <div className="flex justify-between items-center pr-5 pl-5 mt-16">

                                            <div>
                                                <Image src="/image/arrow-comment.png" alt="" width={37} height={37}/>
                                            </div>

                                            <div className="flex items-center">
                                                <p className="pl-2 text-white">{slide.name}</p>
                                                <Image src="/image/social.png" alt="" width={32} height={32}/>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>


                </div>



                {/*    Responsive slider   */}

                <div className="relative w-[85%] min-h-[250px] mx-auto mt-10 pb-3 lg:hidden block">
                    {/* اسلایدها */}
                    <div className="relative w-full h-auto">
                        {slides.map((slide, key) => (
                            <div
                                key={key}
                                className={`w-full min-h-[200px] absolute top-0 left-0 flex flex-col justify-center items-center rounded-xl bg-[#2e567d] pt-4 pb-4 transition-opacity duration-500 ${index === key ? "opacity-100 z-10" : "opacity-0 z-0"}`}>

                                <p className="w-full text-[13px] mt-2 pr-7 pl-9 leading-6 text-white">
                                    تجربه کار کردن با تیم اسپارکد یکی از بهترین تجربه های کاری من  در این چند ساله بوده  لذت داشتن یک تیم حرفه ای و باحال یکی از دلایل خفن بود این تیم بود !
                                </p>

                                <div className="w-full flex justify-between items-center pr-5 pl-5 mt-16">
                                    <div>
                                        <Image src="/image/arrow-comment.png" alt="" width={37} height={37}/>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="pl-2 text-white">{slide.name}</p>
                                        <Image src="/image/social.png" alt="" width={32} height={32}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* دکمه‌های ناوبری */}
                    <button className="absolute top-24 -left-8 w-9 h-9 flex justify-center items-center z-50 -translate-y-1/2" onClick={() => updateSlider("prev")}>
                        <SlideLeft />
                    </button>
                    <button className="absolute top-24 -right-8 w-9 h-9 flex justify-center items-center z-50 -translate-y-1/2" onClick={() => updateSlider("azafe")}>
                        <SlideRight />
                    </button>
                </div>


            </div>


        </>

    )

}


export default CustomerReviews;