'use client';
import { useRef, useState } from "react";
import Image from "next/image";
import SlideRight from "../../../public/icons/SlideRight";
import SlideLeft from "../../../public/icons/SlideLeft";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const CustomerReviews = () => {

    const [index, setIndex] = useState(0);
    const slides = [
        { id: 1, name: "امید عطایی" },
        { id: 2, name: "محسن پورپاک" },
        { id: 3, name: "رضا عبادی" },
        { id: 4, name: "علیرضا سلمان" },
        { id: 5, name: "فاطمه صباغ" },
        { id: 6, name: "مهربد" },
        { id: 7, name: "رزا" },
        { id: 8, name: "مریم محمدی" },
    ]

    const prevButton = useRef(null)
    const nextButton = useRef(null)

    const updateSlider = (mozoe) => {
        if (mozoe === "azafe") {
            setIndex((prev) =>
            prev <= 0 ? prev + 1 : prev
            );
        } else {
            setIndex((prev) =>
            prev >= slides.length -1 ? prev - 1 : prev
            );
        }
    };

    return (

            <div className="w-full lg:min-h-auto h-full lg:mt-24 mt-10">

                <div className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text animate-floatText">Customer Reviews</div>
                <div className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">نظرات مشتریان</div>

                <div className="lg:w-[85%] w-full m-auto mt-10 lg:flex lg:flex-wrap gap-x-4 relative hidden">

                    <div className="w-full flex justify-end gap-x-2">

                        <div className=" flex justify-between gap-x-2">

                            <button ref={prevButton} className="w-12 h-12 bg-[#2e567d] flex justify-center items-center" onClick={() => updateSlider("azafee")}>
                                <SlideRight/>
                            </button>
                            <button ref={nextButton} className="w-12 h-12 bg-[#2e567d] flex justify-center items-center" onClick={() => updateSlider("azafe")}>
                                <SlideLeft/>
                            </button>


                        </div>

                    </div>

                    <div className=" lg:w-[1200px] w-3/5 min-h-[200px] mx-auto mt-10 overflow-hidden">
                        <Swiper
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={3}
                            spaceBetween={30}
                            coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                            }}
                            modules={[EffectCoverflow, Navigation]}
                            className="
                                p-2
                            "
                            navigation={{
                                prevEl: prevButton.current,
                                nextEl: nextButton.current
                            }}
                            // onSlideChange={(swiper) => {
                            //     setIndex(swiper.activeIndex)
                            // }}
                            // onBeforeInit={(swiper) => {
                            //     swiper.params.navigation.prevEl = prevRef.current;
                            //     swiper.params.navigation.nextEl = nextRef.current;
                            // }}
                            onSwiper={(swiper) => {
                                // حل مشکل: گوش دادن دستی به تغییر اسلاید
                                swiper.on('slideChange', () => {
                                    setIndex(swiper.activeIndex);
                                });
                            }}
                        >
                            {slides.map((slide, i) => (
                                <SwiperSlide
                                    key={i}
                                    virtualIndex={index}
                                    className={`flex-none w-[300px] flex justify-center rounded-lg items-center p-4 transition-transform duration-300 cursor-pointer scale-125 z-10 opacity-100 ${i == index ? "opacity-100" : "opacity-50"}`}
                                    // onClick={() => updateSlider(i)}
                                >
                                    {/*<Image width={300} height={300} src={src} alt={`Slide ${i + 1}`} className="w-full rounded-lg" />*/}
                                    <div className="lg:w-[300px] bg-[#2e567d] pb-9 pt-5 rounded-lg">
                                        <p className="w-full text-[12px] mt-5 pr-5 pl-7 leading-6 text-white">تجربه کار کردن با تیم اسپارکد یکی از بهترین تجربه های کاری من در این چند ساله بوده لذت داشتن یک تیم حرفه ای و باحال یکی از دلایل خفن بود اینتیم بود ! </p>

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

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>


                </div>
            </div>


    )

}


export default CustomerReviews;