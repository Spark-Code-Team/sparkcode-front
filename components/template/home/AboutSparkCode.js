import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../../../public/icons/ArrowRight";

const AboutSparkCode = ()=>{

    return(

        <>

            <div className="w-full bg-violet-400 lg:mt-24 mt-10">

                <div className="w-full bg-yellow-300 text-center lg:text-3xl text-xl opacity-90">About Spark Code</div>
                <div className="w-full bg-yellow-600 text-center lg:text-2xl text-xl lg:mt-1">درباره اسپارک کد</div>

                <div className="lg:w-[85%] w-full bg-yellow-300 flex m-auto mt-10">

                    <div className="lg:w-1/2 bg-violet-800 flex flex-wrap items-center text-base lg:pr-7 lg:pl-14">

                        <p className="w-full bg-yellow-200 leading-8">ما یک تیم متخصص در حوزه برنامه‌نویسی و فناوری اطلاعات هستیم که با خلاقیت و نوآوری توانسته‌ایم راه‌حل‌های منحصربه‌فردی برای کسب‌وکارهای کوچک و بزرگ ارائه دهیم. با قابلیت‌هایی در زمینه کدنویسی، طراحی وب و اپلیکیشن، و مدیریت سرورها و هاستینگ، ما به شما کمک می‌کنیم تا حضور آنلاین خود را تقویت کنید و نیازهای خاص بیزینس خود را برآورده سازید. هدف ما ایجاد تجربه‌ای کاربرپسند و مؤثر برای مشتریانمان است.</p>

                        <Link href="#" className="bg-red-800 lg:w-[135px] lg:h-[51px] gap-x-1 flex justify-center items-center lg:mt-6 text-white rounded-lg">
                            درباره ما <ArrowRight/>
                        </Link>

                    </div>

                    <div className="lg:w-1/2 bg-orange-500 flex justify-center lg:pr-10 lg:pl-10">

                        <Image src="/image/about-spark.png" alt="" width={496} height={338}/>

                    </div>

                </div>

            </div>

        </>

    )

}


export default AboutSparkCode;