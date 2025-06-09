import Image from "next/image";

const ContactUs = ()=>{

    return(

        <>

            <div className="w-full lg:mt-24 mt-10 text-white relative">

                <div className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text animate-floatText">About Spark Code</div>
                <div className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">درباره اسپارک کد</div>

                <div className="glass-background lg:w-[85%] w-[90%] lg:flex m-auto mt-14 border-2 border-[#182128] rounded-3xl">

                    <div className="lg:w-[65%] w-full lg:pr-10 flex flex-wrap lg:relative custom-border-contact">

                        <div className="lg:w-1/2 lg:mt-10 w-full mt-5">
                            <label className="w-full block">نام *</label>
                            <input type="text" name="" className="lg:w-[296px] lg:h-[54px] w-full p-2 pr-3 rounded-xl mt-4 bg-transparent border-2 border-[#182128] outline-none" placeholder="نام خود را وارد کنید"/>
                        </div>

                        <div className="lg:w-1/2 lg:mt-10 w-full mt-5">
                            <label className="w-full block">نام خانوادگی *</label>
                            <input type="text" name="" className="lg:w-[296px] lg:h-[54px] w-full p-2 pr-3 rounded-xl mt-4 bg-transparent border-2 border-[#182128] outline-none" placeholder="نام خانوادگی خود را وارد کنید"/>
                        </div>

                        <div className="lg:w-1/2 lg:mt-10 w-full mt-5">
                            <label className="w-full block">شماره تماس *</label>
                            <input type="tel" name="" className="lg:w-[296px] lg:h-[54px] w-full p-2 pl-3 rounded-xl mt-4 text-left bg-transparent border-2 border-[#182128] outline-none" placeholder="09120000000"/>
                        </div>

                        <div className="lg:w-1/2 lg:mt-10 w-full mt-5">
                            <label className="w-full block">آدرس ایمیل *</label>
                            <input type="email" name="" className="lg:w-[296px] lg:h-[54px] w-full p-2 pr-3 rounded-xl mt-4 bg-transparent border-2 border-[#182128] outline-none" placeholder="email-address@gmail.com"/>
                        </div>

                        <div className="lg:w-full lg:mt-10 w-full mt-10 flex flex-wrap">
                            <label className="w-full block">موضوع درخواست خود را مشخص کنید</label>

                            <label className="lg:mt-5 flex items-center gap-1 mt-6 lg:w-1/3 w-full">
                                <input type="radio" className=""/>
                                درخواست همکاری
                            </label>

                            <label className="lg:mt-5 flex items-center gap-1 mt-6 lg:w-1/3 w-full">
                                <input type="radio" className=""/>
                                انتقادات و پیشنهادات
                            </label>

                            <label className="lg:mt-5 flex items-center gap-1 mt-6 lg:w-1/3 w-full">
                                <input type="radio"/>
                                نظرات
                            </label>

                        </div>


                        <div className="lg:w-full lg:mt-10 w-full mt-10">

                            <label className="w-full block">درخواست خود را بنویسید *</label>
                            <textarea className="lg:w-[94%] lg:mt-5 lg:pr-4 pt-3 rounded-xl bg-transparent border-2 border-[#182128] outline-none w-full mt-5" defaultValue="" /> 

                        </div>

                        <div className="lg:w-full lg:mt-10 lg:mb-10 mt-10 flex justify-end lg:pl-11">
                            <button className="lg:w-[118px] h-[45px] w-32 bg-[#2e567d] text-white rounded-lg">ارسال</button>
                        </div>

                    </div>

                    <div className="lg:w-[35%] pt-4 flex flex-wrap w-full lg:mt-0 mt-10">

                        <div className="lg:w-[90%] m-auto lg:pr-7 w-full">

                            <div className="flex gap-x-2 lg:mt-6 mt-6">
                                <Image src="/image/email.png" alt="" width={22} height={25}/>
                                <p>spark.code.agance@gmail.com</p>
                            </div>

                            <div className="flex gap-x-2 lg:mt-6 mt-6">
                                <Image src="/image/location.png" alt="" width={22} height={25}/>
                                <p>پاسداران - بوستان 5 </p>
                            </div>

                        </div>


                        <div className="lg:w-[90%] m-auto lg:mt-80 flex justify-around w-full mt-20">

                            {/* <div className="lg:w-[48px] lg:h-[48px]">
                                <Image src="/image/telegram.png" alt="" width={48} height={48}/>
                            </div> */}

                            <a 
                                href="https://www.linkedin.com/company/sparkcode-com/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B8nkW%2FiZdReqDjj4u%2BlNEgA%3D%3D"
                                className="lg:w-[48px] lg:h-[48px]"
                            >
                                <Image src="/image/linkedin.png" alt="" width={48} height={48}/>
                            </a>

                            <a 
                                href="https://www.instagram.com/sparkcode_com?igsh=dXp2YnU4dGljd2xu"
                                className="lg:w-[48px] lg:h-[48px]"
                            >
                                <Image src="/image/instagram.png" alt="" width={48} height={48}/>
                            </a>

                        </div>

                    </div>

                </div>

                <div className="lg:w-[132px] lg:h-[132px] rounded-full bg-[#2e567d] absolute left-40 top-14 -z-10 animate-floatAndColor"> </div>
                <div className="lg:w-[162px] lg:h-[162px] rounded-full bg-[#2e567d] absolute left-80 top-40 -z-10 animate-floatAndColor"> </div>
                <div className="lg:w-[250px] lg:h-[250px] rounded-full bg-[#2e567d] absolute left-0 -bottom-20 -z-10 animate-floatAndColor"> </div>

            </div>

        </>

    )

}


export default ContactUs;