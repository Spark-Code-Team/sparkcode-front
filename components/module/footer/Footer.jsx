import Image from "next/image";
import Link from "next/link";

const Footer = ()=>{

    return(

        <>

            <div className="w-full lg:h-[338px] bg-[#12202F] lg:mt-32 text-white">

                <div className="lg:w-[93%] w-full m-auto flex flex-wrap">

                    <div className="lg:w-1/4">

                        <div className="lg:w-[95%] m-auto lg:mt-6">
                            <Image src="/image/logo-footer.png" alt="" width={180} height={64}/>
                        </div>

                        <div className="lg:w-[95%] m-auto lg:mt-6">
                            <p className="text-sm text-[#d4e1f2]">تیم نرم افزاری اسپارک کد مرجع برنامه نویسی انواع اپلیکیشن ، وب سایت و نرم افزارهای تخصصی</p>
                        </div>

                        <div className="lg:w-[95%] m-auto lg:mt-6 flex gap-x-3">

                            <Image src="/image/insta-footer.png" alt="" width={20} height={20}/>

                            <Image src="/image/linkedin-footer.png" alt="" width={20} height={20}/>

                        </div>

                    </div>

                    <div className="lg:w-1/4">

                        <div className="lg:w-[95%] m-auto lg:mt-6">

                            <p className="font-bold">دسترسی مستقیم</p>

                            <Link href="#" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2]">پروژه ها</Link>
                            <Link href="#" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2]">دوره ها</Link>
                            <Link href="#" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2]">مقاله ها</Link>
                            <Link href="#" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2]">تماس با ما</Link>
                            <Link href="#" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2]">درباره ما</Link>

                        </div>

                    </div>

                    <div className="lg:w-1/4">

                        <div className="lg:w-[95%] m-auto lg:mt-6">

                            <p className="font-bold">خدمات ما</p>

                            <Link href="#" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2]">نرم افزار مدیریت ارتباط با مشتری</Link>
                            <Link href="#" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2]">قالب وردپرس</Link>
                            <Link href="#" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2]">طراحی سایت</Link>
                            <Link href="#" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2]">پشتیبانی</Link>

                        </div>

                    </div>

                    <div className="lg:w-1/4">

                        <div className="lg:w-[95%] m-auto lg:mt-6">

                            <p className="font-bold">ارتباط با ما</p>

                            <div className="lg:mt-4 lg:flex lg:items-center gap-x-2 text-[15px] text-[#d4e1f2]">
                                <Image src="/image/email-footer.png" alt="" width={20} height={20}/>
                                <p>Info@sparkcode-service.com</p>
                            </div>

                            <div className="lg:mt-4 lg:flex lg:items-center gap-x-2 text-[15px] text-[#d4e1f2]">
                                <Image src="/image/phone-footer.png" alt="" width={20} height={20}/>
                                <p>9961354854 98+ </p>
                            </div>

                            <div className="lg:mt-4 lg:flex lg:items-center gap-x-2 text-[15px] text-[#d4e1f2]">
                                <Image src="/image/map-footer.png" alt="" width={20} height={20}/>
                                <p>تهران، تهران، خیابان پاسداران، بوستان پنج</p>
                            </div>

                        </div>

                    </div>


                    <div className="w-full lg:h-[1px] mt-10 bg-[#d4e1f2]"> </div>

                    <div className="w-full m-auto text-center lg:mt-4 text-[#d4e1f2]">کلیه حقوق مادی و معنوی این سایت متعلق به اسپارک کد است.</div>

                </div>

            </div>

        </>

    )

}


export default Footer;