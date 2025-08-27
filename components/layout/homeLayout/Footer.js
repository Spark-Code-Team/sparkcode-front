import Image from "next/image";
import Link from "next/link";

const Footer = ()=>{

    return(

        <>

            <div className="w-full lg:h-[338px] bg-[#12202F] lg:mt-32 mt-28 text-white">

                <div className="lg:w-[93%] w-full m-auto flex flex-wrap">

                    <div className="lg:w-1/4 w-full">

                        <div className="lg:w-[95%] w-full m-auto lg:mt-6 mt-6">
                            <Image src="/image/logo-footer.png" alt="" width={180} height={64} className="lg:m-0 m-auto"/>
                        </div>

                        <div className="lg:w-[95%] w-full m-auto lg:mt-6 mt-6 lg:pl-4 lg:pr-0 pr-6 pl-6 lg:text-right text-center">
                            <p className="text-sm text-[#d4e1f2]">تیم نرم افزاری اسپارک کد مرجع برنامه نویسی انواع اپلیکیشن ، وب سایت و نرم افزارهای تخصصی</p>
                        </div>

                        <div className="lg:w-[95%] w-full m-auto lg:mt-6 mt-6 lg:flex lg:justify-start lg:gap-x-3 flex justify-evenly">
                            <a
                                href="https://www.instagram.com/sparkcode_com?igsh=dXp2YnU4dGljd2xu"
                            >
                                <Image src="/image/insta-footer.png" alt="" width={20} height={20}/>
                            </a>

                            <a
                                href="https://www.linkedin.com/company/sparkcode-com/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B8nkW%2FiZdReqDjj4u%2BlNEgA%3D%3D"
                            >
                                <Image src="/image/linkedin-footer.png" alt="" width={20} height={20}/>
                            </a>

                        </div>

                    </div>

                    <div className="lg:w-1/4 w-1/2">

                        <div className="lg:w-[95%] w-full m-auto lg:mt-6 mt-12 lg:pr-0 pr-7">

                            <p className="font-bold">دسترسی مستقیم</p>

                            <Link href="/projects" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2] mt-5 block text-sm">پروژه ها</Link>
                            <Link href="/courses" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2] mt-5 block text-sm">دوره ها</Link>
                            <Link href="https://blog.sparkcode-service.com/" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2] mt-5 block text-sm">مقاله ها</Link>
                            <Link href="/contact" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2] mt-5 block text-sm">تماس با ما</Link>
                            <Link href="/about" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2] mt-5 block text-sm">درباره ما</Link>

                        </div>

                    </div>

                    <div className="lg:w-1/4 w-1/2">

                        <div className="lg:w-[95%] w-full m-auto lg:mt-6 mt-12 lg:pr-0 pr-7">

                            <p className="font-bold">خدمات ما</p>

                            <Link href="#" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2] mt-5 block text-sm">نرم افزار مدیریت ارتباط با مشتری</Link>
                            <Link href="#" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2] mt-5 block text-sm">قالب وردپرس</Link>
                            <Link href="#" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2] mt-5 block text-sm">طراحی سایت</Link>
                            <Link href="#" className="lg:mt-4 lg:block text-[15px] text-[#d4e1f2] mt-5 block text-sm">پشتیبانی</Link>

                        </div>

                    </div>

                    <div className="lg:w-1/4 w-full">

                        <div className="lg:w-[95%] w-full m-auto lg:mt-6 mt-12 lg:pr-0 pr-7">

                            <p className="font-bold">ارتباط با ما</p>

                            <div className="lg:mt-4 lg:flex lg:items-center text-[15px] text-[#d4e1f2] mt-5 flex items-center gap-x-2">
                                <Image src="/image/email-footer.png" alt="logo" width={20} height={20}/>
                                <p>spark.code.agance@gmail.com</p>
                            </div>

                            <div className="lg:mt-4 lg:flex lg:items-center text-[15px] text-[#d4e1f2] mt-5 flex items-center gap-x-2">
                                <Image src="/image/phone-footer.png" alt="logo" width={20} height={20}/>
                                <p>9961354854 021 </p>
                            </div>

                            <div className="lg:mt-4 lg:flex lg:items-center text-[15px] text-[#d4e1f2] mt-5 flex items-center gap-x-2">
                                <Image src="/image/map-footer.png" alt="logo" width={20} height={20}/>
                                <p>تهران، خیابان پاسداران، بوستان پنج</p>
                            </div>

                        </div>

                    </div>


                    <div className="lg:h-[1px] bg-[#d4e1f2] w-[95%] h-[1px] m-auto mt-10"> </div>

                    <div className="w-full m-auto text-center lg:mt-7 lg:mb-0 mt-7 mb-7 text-[#d4e1f2]">کلیه حقوق مادی و معنوی این سایت متعلق به اسپارک کد است.</div>

                </div>

            </div>

        </>

    )

}


export default Footer;