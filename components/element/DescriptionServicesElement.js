import Link from "next/link";
import ArrowLeftService from "@/public/icons/ArrowLeftService";
import Image from "next/image";

const DescriptionServicesElement = () => {

    return (

        <>

            <div className="w-full lg:mt-20 mt-10">

                <div className={`lg:w-[85%] w-full m-auto lg:mt-14 p-7 lg:p-0 flex flex-col lg:flex-row `}>

                    <div className="lg:w-1/2 m-auto">
                        <p className="text-xl text-white">توسعه وب سایت</p>
                        <div className="w-full text-white lg:m-auto lg:mt-7">

                        توسعه وب‌سایت فراتر از پیاده‌سازی صفحات و نوشتن کد است؛ ما معماری نرم‌افزار را بر اساس اهداف تجاری، نیازهای کاربران و آینده‌نگری طراحی میکنیم.  از انتخاب دقیق فناوری‌های فرانت‌اند و بک‌اند گرفته تا طراحی پایگاه‌داده و یکپارچه‌سازی با سرویس‌های خارجی، هر بخش با دقت مهندسی و نگاه سیستماتیک ساخته می‌شود. ما فرآیند توسعه را با استفاده از متدولوژی‌های مدرن مانند Agile و DevOps پیش می‌بریم تا تحویل سریع، کنترل کیفیت پیوسته و قابلیت توسعه در آینده تضمین شود. هدف ما ساختن وب‌سایت‌هایی است که نه‌فقط کار کنند، بلکه قابل اعتماد، توسعه‌پذیر و آماده برای رشد باشند.

                            </div>
                        <Link href="/?showComponent=true#bottom" className="bg-[#2E567D] lg:w-[153px] lg:h-[40px] lg:flex lg:justify-center lg:items-center lg:mt-7 rounded-md lg:gap-x-3 text-white">
                            تماس با ما<ArrowLeftService />
                        </Link>
                    </div>

                    <div className="lg:w-1/2 m-auto lg:flex lg:justify-center">

                    <img src="/image/webdesign.png" className=" lg-rounded-xl rounded-full mt-4 m-auto w-[40%] lg:w-[449px] lg:h-[425px] bg-cover bg-center lg:flex lg:justify-center lg:items-center text-white" alt="Success" />

                    </div>

                </div>

                <div className={`lg:w-[85%] w-full m-auto lg:mt-14 flex flex-col lg:flex-row-reverse`}>

                    <div className="lg:w-1/2 m-auto">
                        <p className="text-xl text-white">خدمات جامع</p>
                        <div className="w-full text-white lg:m-auto lg:mt-7">

                        در دنیای پیچیده و پویا امروز، داشتن یک پشتیبان همه‌جانبه برای توسعه دیجیتال کسب‌وکار ضروری است. خدمات جامع Sparkcode به‌گونه‌ای طراحی شده‌اند که تمام نیازهای فنی و مشاوره‌ای شما را در یک مسیر منسجم و هماهنگ پوشش دهند. از تحلیل اولیه و طراحی استراتژی گرفته تا توسعه، تست، استقرار و پشتیبانی مستمر، تیم ما با بهره‌گیری از تخصص‌های متنوع و فناوری‌های روز، اطمینان می‌دهد که پروژه‌های شما به شکل بهینه، امن و مقیاس‌پذیر اجرا شوند. هدف ما ایجاد تجربه‌ای یکپارچه و بدون دغدغه برای شماست تا بتوانید روی رشد و توسعه کسب‌وکارتان تمرکز کنید و ما مسئولیت فنی مسیر را بر عهده بگیریم.


                            </div>
                        {/* <Link href="#" className="bg-[#2E567D] lg:w-[153px] lg:h-[40px] lg:flex lg:justify-center lg:items-center lg:mt-7 rounded-md lg:gap-x-3 text-white">
                            مطالعه بیشتر <ArrowLeftService />
                        </Link> */}
                    </div>

                    <div className="lg:w-1/2 m-auto lg:flex lg:justify-center">
                    <img src="/image/Services.png" className=" lg-rounded-xl rounded-full w-[40%] m-auto mt-4 lg:w-[449px] lg:h-[425px] bg-cover bg-center lg:flex lg:justify-center lg:items-center text-white" alt="Success" />


                    </div>

                </div>

                <div className={`lg:w-[85%] w-full m-auto lg:mt-14 flex flex-col lg:flex-row`}>

                    <div className="lg:w-1/2 m-auto">
                        <p className="text-xl text-white">رزومه موفق</p>
                        <div className="w-full text-white lg:m-auto lg:mt-7">

                        رزومه‌ای موفق فراتر از فهرست کردن تجربیات کاری است؛ این نمایشی است از مهارت‌ها، دستاوردها و ارزش‌هایی که شما به سازمان می‌آورید. یک رزومه خوب با تمرکز بر شفافیت، ساختار منظم و بیان دقیق توانمندی‌ها، درهای فرصت‌های جدید را باز می‌کند و تصویر حرفه‌ای شما را به بهترین شکل به نمایش می‌گذارد. هدف اصلی، ایجاد ارتباط مؤثر با کارفرما و نشان دادن تناسب شما با نیازهای شغلی است تا مسیر موفقیت شغلی هموارتر شود.
                            </div>

                        {/* <Link href="#" className="bg-[#2E567D] lg:w-[153px] lg:h-[40px] lg:flex lg:justify-center lg:items-center lg:mt-7 rounded-md lg:gap-x-3 text-white">
                            مطالعه بیشتر <ArrowLeftService />
                        </Link> */}
                    </div>

                    <div className="lg:w-1/2 m-auto lg:flex lg:justify-center">
                        
                    <img src="/image/success.png" className="lg-rounded-xl rounded-full w-[40%] m-auto mt-4 lg:w-[449px] lg:h-[425px] bg-cover bg-center lg:flex lg:justify-center lg:items-center text-white" alt="Success" />

                        {/* <div className="lg:w-[449px] lg:h-[425px] bg-[url('/image/vector11.png')] bg-cover bg-center lg:flex lg:justify-center lg:items-center text-white">
                            SparkCode
                        </div> */}

                    </div>

                </div>

            </div>

        </>

    )

}


export default DescriptionServicesElement;