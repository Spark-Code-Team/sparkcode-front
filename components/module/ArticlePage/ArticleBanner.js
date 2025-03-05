import Image from "next/image";



export default function ArticleBanner() {

    return (
        <div
            className="
                w-[85%]
                mx-auto
                
                py-5
            "
        >
            <div
                className="
                    flex
                    items-center
                    w-full
                "
            >
                <div
                    className="
                        text-white
                        w-1/2
                        flex
                        flex-col
                        gap-6
                        items-center
                    "
                >
                    <div
                        className="
                            lg:animate-spinSpring
                        "
                    >
                        <p
                            className="
                                animate-textColor
                                lg:text-[48px]
                                text-[24px]
                                font-bold
                            "
                        >
                            آرشیو مقالات
                        </p>
                    </div>
                    <p
                        className="
                            text-justify
                            hidden
                            lg:block
                        "
                    >
                        به آرشیو مقالات تخصصی ما خوش آمدید! در اینجا، مجموعه‌ای از مقالات کاربردی در زمینه برنامه‌نویسی، توسعه نرم‌افزار و مدیریت پروژه‌های انفورماتیک را خواهید یافت. هدف ما ارائه راهکارهای عملی و  فنی است که به شما کمک کند پروژه‌های خود را با موفقیت به انجام برسانید و از آخرین دستاوردهای حوزه IT بهره‌مند شوید.  
                    </p>
                </div>

                <div className="lg:w-[614px] w-1/2 animate-float">
                    <Image src="/image/articleHeader.png" alt="" width={614} height={583} layout="responsive"/>
                </div>
            </div>
            <p
                className="
                    text-justify
                    lg:hidden
                    block
                    text-white
                    text-[14px]
                "
            >
                به آرشیو مقالات تخصصی ما خوش آمدید! در اینجا، مجموعه‌ای از مقالات کاربردی در زمینه برنامه‌نویسی، توسعه نرم‌افزار و مدیریت پروژه‌های انفورماتیک را خواهید یافت. هدف ما ارائه راهکارهای عملی و  فنی است که به شما کمک کند پروژه‌های خود را با موفقیت به انجام برسانید و از آخرین دستاوردهای حوزه IT بهره‌مند شوید.  
            </p>
        </div>
    )
}