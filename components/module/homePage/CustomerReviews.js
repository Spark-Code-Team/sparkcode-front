'use client';
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import reviews from "@/constant/reviews";

const CustomerReviews = () => {
  const [index, setIndex] = useState(2);

  const renderStars = (rating) => {
    return (
      <div className="flex gap-[2px]">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`text-[12px] lg:text-[16px] ${
              i <= rating ? "text-yellow-400" : "text-gray-400"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };
  
  const shortDate = (date) => date;
  const formatDateFa = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-full lg:min-h-auto h-full lg:mt-24 mt-10">
      <div className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text animate-floatText">
        Customer Reviews
      </div>
      <div className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">
        نظرات مشتریان
      </div>

      <div className="lg:w-[85%] w-full m-auto mt-10 lg:flex lg:flex-wrap gap-x-4 relative">
        <div className="lg:w-[1200px] w-full mx-auto mt-10 overflow-hidden">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1}
            spaceBetween={24}
            initialSlide={2}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation]}
            onSwiper={(swiper) => {
              swiper.on("slideChange", () => setIndex(swiper.activeIndex));
            }}
          >
            {reviews.map((item, i) => (
              <SwiperSlide
                key={item.id}
                className={`flex justify-center transition-transform duration-300 cursor-pointer ${
                  i === index ? "scale-110 z-10 opacity-100" : "scale-90 opacity-60"
                }`}
              >
                <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px] min-h-[230px] flex flex-col justify-between bg-[#2e567d] py-4 lg:pt-5 lg:pb-6 rounded-lg">
                 
                  <p className="text-[11px] lg:text-[15px] text-white/95 leading-6 text-justify px-3 lg:px-6 mt-1 line-clamp-5">
                    {item.review}
                  </p>

                  
                  <div className="flex justify-between items-center px-3 lg:px-6 mt-4">
                    
                    <div className="flex items-center gap-2">
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        width={36}
                        height={36}
                        className="w-8 h-8 lg:w-9 lg:h-9 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <span className="text-[12px] lg:text-[14px] text-white">{item.author}</span>
                        <span className="text-[10px] lg:text-[12px] text-gray-200">{item.service}</span>
                      </div>
                    </div>

                   
                    <div className="flex flex-col items-end">
                      {renderStars(item.rating)}
                      <span className="text-[10px] lg:text-[14px] text-gray-300 mt-1">
                      {formatDateFa(item.date)}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;




// 'use client';
// import { useRef, useState } from "react";
// import Image from "next/image";
// import SlideRight from "../../../public/icons/SlideRight";
// import SlideLeft from "../../../public/icons/SlideLeft";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import reviews from "@/constant/reviews";

// const CustomerReviews = () => {

//     const [index, setIndex] = useState(3);
//     const slides = [
//         { id: 1, name: "امید عطایی" },
//         { id: 2, name: "محسن پورپاک" },
//         { id: 3, name: "رضا عبادی" },
//         { id: 4, name: "علیرضا سلمان" },
//         { id: 5, name: "فاطمه صباغ" },
//         { id: 6, name: "مهربد" },
//         { id: 7, name: "رزا" },
//         { id: 8, name: "مریم محمدی" },
//     ]

//     return (

//             <div className="w-full lg:min-h-auto h-full lg:mt-24 mt-10">

//                 <div className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text animate-floatText">Customer Reviews</div>
//                 <div className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">نظرات مشتریان</div>

//                 <div className="lg:w-[85%] w-full m-auto mt-10 lg:flex lg:flex-wrap gap-x-4 relative">

//                     <div className=" lg:w-[1200px] w-full  mx-auto mt-10 overflow-hidden">
//                         <Swiper
//                             effect="coverflow"
//                             grabCursor={true}
//                             centeredSlides={true}
//                             slidesPerView={3}
//                             spaceBetween={30}
//                             initialSlide={3}
//                             coverflowEffect={{
//                                 rotate: 0,
//                                 stretch: 0,
//                                 depth: 100,
//                                 modifier: 2.5,
//                                 slideShadows: false,
//                             }}
//                             modules={[EffectCoverflow, Navigation]}
//                             onSwiper={(swiper) => {
//                                 swiper.on('slideChange', () => {
//                                 setIndex(swiper.activeIndex);
//                                 });
//                             }}
//                             >
//                             {slides.map((slide, i) => (
//                                 <SwiperSlide
//                                     key={i}
//                                     className={`flex justify-center transition-transform duration-300 cursor-pointer ${
//                                         i === index ? 'scale-110 z-10 opacity-100' : 'scale-90 opacity-50'
//                                     }`}
//                                 >
//                                 <div className="w-full max-w-[250px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px] h-[170px] lg:h-[220px] flex flex-col justify-between bg-[#2e567d] py-3 lg:pt-5 lg:pb-9 rounded-lg">
//                                     <p className="text-[10px] lg:text-[12px] text-white text-justify px-2 lg:px-7 mt-2 lg:mt-5">
//                                     تجربه کار کردن با تیم اسپارکد یکی از بهترین تجربه های کاری من در این چند ساله بوده...
//                                     </p>
//                                     <div className="flex justify-between items-center px-2 lg:px-5 mt-auto">
//                                     <Image src="/image/arrow-comment.png" className="w-5 h-5 lg:w-8 lg:h-8" alt="" width={37} height={37} />
//                                     <div className="flex items-center">
//                                         <p className="pl-2 text-[10px] text-white">{slide.name}</p>
//                                         <Image src="/image/social.png" className="w-5 h-5 lg:w-8 lg:h-8" alt="" width={32} height={32} />
//                                     </div>
//                                     </div>
//                                 </div>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>

//                     </div>


//                 </div>
//             </div>


//     )

// }


// export default CustomerReviews;