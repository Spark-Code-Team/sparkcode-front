'use client';
import {useState} from "react";

const CustomerReviews = ()=>{

    const testimonials = [
        {
            id: 1,
            name: 'sara joan',
            role: 'Community Member',
            review: 'تجربه کار کردن با تیم اسپارکد یکی از بهترین تجربه‌های کاری من در این چند ساله بوده...',
        },
        {
            id: 2,
            name: 'Ali Reza',
            role: 'Verified User',
            review: 'تیم بسیار حرفه‌ای و خلاق. تجربه‌ای فوق‌العاده داشتم!',
        },
        {
            id: 3,
            name: 'Niloofar Amini',
            role: 'Freelancer',
            review: 'من کاملاً از همکاری با این تیم راضی هستم. طراحی زیبا و تعامل عالی!',
        },
        {
            id: 4,
            name: 'Mohammad T.',
            role: 'Developer',
            review: 'تجربه‌ی بی‌نظیری داشتم، همه چیز عالی بود!',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };


    return(

        <>

            <div className="w-full bg-violet-400 lg:mt-24 mt-10">

                <div className="w-full bg-yellow-300 text-center lg:text-3xl text-xl opacity-90">Customer Reviews</div>
                <div className="w-full bg-yellow-600 text-center lg:text-2xl text-xl lg:mt-1">نظرات مشتریان</div>

                <div className="w-[85%] h-[500px] flex items-center bg-blue-700 m-auto mt-10 flex gap-x-4 relative">

                    {/*<div className="w-full flex flex-col items-center py-10 relative overflow-hidden">*/}
                    {/*    <div className="relative w-full max-w-3xl flex justify-center items-center">*/}
                    {/*        {testimonials.map((testimonial, index) => {*/}
                    {/*            const isActive = index === currentIndex;*/}
                    {/*            const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length;*/}
                    {/*            const isNext = index === (currentIndex + 1) % testimonials.length;*/}
                    {/*            return (*/}
                    {/*                <div key={testimonial.id} className={`absolute w-[493px] h-[240px] p-6 bg-gray-900 text-white rounded-2xl shadow-lg transition-all duration-500 */}
                    {/*                    ${isActive ? 'scale-100 opacity-100 z-10' : 'scale-75 opacity-50 blur-md'}*/}
                    {/*                    ${isPrev ? '-translate-x-32 md:-translate-x-52' : ''}*/}
                    {/*                    ${isNext ? 'translate-x-32 md:translate-x-52' : ''}`}*/}
                    {/*                >*/}
                    {/*                    <p className="text-lg text-center">{testimonial.review}</p>*/}
                    {/*                    <h3 className="mt-4 font-bold text-center">{testimonial.name}</h3>*/}
                    {/*                    <p className="text-sm text-gray-400 text-center">{testimonial.role}</p>*/}
                    {/*                </div>*/}
                    {/*            );*/}
                    {/*        })}*/}
                    {/*    </div>*/}
                    {/*    /!* دکمه‌های ناوبری *!/*/}
                    {/*    <button*/}
                    {/*        onClick={prevSlide}*/}
                    {/*        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-20"*/}
                    {/*    >*/}
                    {/*        ❮*/}
                    {/*    </button>*/}
                    {/*    <button*/}
                    {/*        onClick={nextSlide}*/}
                    {/*        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-20"*/}
                    {/*    >*/}
                    {/*        ❯*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                </div>

            </div>

        </>

    )

}


export default CustomerReviews;