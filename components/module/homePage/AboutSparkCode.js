import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../../../public/icons/ArrowRight";

const AboutSparkCode = ()=>{

    return(

        <>

            <div className="w-full lg:mt-24 mt-10">

                <div className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text animate-floatText">About Spark Code</div>
                <div className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">درباره اسپارک کد</div>

                <div className="lg:w-[85%] w-full lg:flex m-auto mt-14">

                    <div className="lg:w-1/2 w-full flex flex-wrap items-center text-base lg:pr-7 lg:pl-14 pr-7 pl-7">

                        <p className="w-full leading-8 text-white">ما یک تیم متخصص در حوزه برنامه‌نویسی و فناوری اطلاعات هستیم که با خلاقیت و نوآوری توانسته‌ایم راه‌حل‌های منحصربه‌فردی برای کسب‌وکارهای کوچک و بزرگ ارائه دهیم. با قابلیت‌هایی در زمینه کدنویسی، طراحی وب و اپلیکیشن، و مدیریت سرورها و هاستینگ، ما به شما کمک می‌کنیم تا حضور آنلاین خود را تقویت کنید و نیازهای خاص بیزینس خود را برآورده سازید. هدف ما ایجاد تجربه‌ای کاربرپسند و مؤثر برای مشتریانمان است.</p>

                        <Link
                            href="/about"
                            className="
                                hover:text-lg
                                inline-flex items-center justify-center
                                bg-[#2E567D]
                                text-white
                                rounded-lg
                                px-4 py-2
                                gap-x-2
                                whitespace-nowrap
                                transition-all duration-300 ease-in-out
                                hover:bg-[#3F6FA3]
                            "
                            >
                            درباره ما
                            <ArrowRight className="inline-block transition-transform duration-300 ease-in-out hover:translate-x-1" />
                        </Link>


                    </div>

                    <div className="lg:w-1/2 w-full lg:mt-0 mt-10 flex justify-center lg:pr-10 lg:pl-10 pr-10 pl-10">

                        <Image src="/image/about-spark.png" alt="" width={496} height={338}/>

                    </div>

                </div>

            </div>

        </>

    )

}


export default AboutSparkCode;