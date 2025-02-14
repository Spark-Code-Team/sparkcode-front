import Image from "next/image";

const ContactUs = ()=>{

    return(

        <>

            <div className="w-full lg:mt-24 mt-10 bg-red-500">

                <div className="w-full bg-orange-400 text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text">About Spark Code</div>
                <div className="w-full bg-orange-300 text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">درباره اسپارک کد</div>

                <div className="lg:w-[85%] w-full flex m-auto mt-14 bg-lime-500">

                    <div className="lg:w-[60%] bg-blue-400 flex flex-wrap lg:relative custom-border-contact">

                        <div className="lg:w-1/2 bg-green-400 lg:mt-10">
                            <label className="w-full bg-pink-200 block">نام *</label>
                            <input type="text" name="" className="lg:w-[296px] lg:h-[54px] pr-3 rounded-xl mt-4" placeholder="نام خود را وارد کنید"/>
                        </div>

                        <div className="lg:w-1/2 bg-green-600 lg:mt-10">
                            <label className="w-full bg-pink-200 block">نام خانوادگی *</label>
                            <input type="text" name="" className="lg:w-[296px] lg:h-[54px] pr-3 rounded-xl mt-4" placeholder="نام خانوادگی خود را وارد کنید"/>
                        </div>

                        <div className="lg:w-1/2 bg-green-400 lg:mt-10">
                            <label className="w-full bg-pink-200 block">شماره تماس *</label>
                            <input type="tel" name="" className="lg:w-[296px] lg:h-[54px] pl-3 rounded-xl mt-4 text-left" placeholder="98+"/>
                        </div>

                        <div className="lg:w-1/2 bg-green-600 lg:mt-10">
                            <label className="w-full bg-pink-200 block">آدرس ایمیل *</label>
                            <input type="email" name="" className="lg:w-[296px] lg:h-[54px] pr-3 rounded-xl mt-4" placeholder="omid@gmail.com"/>
                        </div>

                        <div className="lg:w-full bg-green-600 lg:mt-10 flex flex-wrap justify-around">
                            <label className="w-full bg-pink-200 block">موضوع درخواست خود را مشخص کنید</label>

                            <label className="lg:mt-5">UI UX
                                <input type="radio" className=""/>
                            </label>

                            <label className="lg:mt-5">Wordpress
                                <input type="radio" className=""/>
                            </label>

                            <label className="lg:mt-5">Brand Identify
                                <input type="radio" className=""/>
                            </label>

                            <label className="lg:mt-5">Developing
                                <input type="radio" className=""/>
                            </label>

                        </div>


                        <div className="lg:w-full bg-green-600 lg:mt-10">

                            <label className="w-full bg-pink-200 block">درخواست خود را بنویسید *</label>
                            <textarea className="lg:w-[94%] lg:mt-5 lg:pr-4 pt-3 rounded-xl" placeholder="متن پیام را وارد کنید"> </textarea>

                        </div>

                        <div className="lg:w-full bg-green-600 lg:mt-10 flex justify-end lg:pl-11">
                            <button className="lg:w-[118px] lg:h-[45px] bg-[#2e567d] text-white rounded-lg">ارسال</button>
                        </div>

                    </div>

                    <div className="lg:w-[40%] bg-blue-600 pt-10 flex flex-wrap">

                        <div className="lg:w-[90%] bg-yellow-300 m-auto">

                            <div className="flex justify-end gap-x-2">
                                <p>omidataei1382@gmail.com</p>
                                <Image src="/image/email.png" alt="" width={22} height={25}/>
                            </div>

                            <div className="flex justify-end gap-x-2 lg:mt-4">
                                <p>پاسداران - بوستان 5 - پلاک 84</p>
                                <Image src="/image/location.png" alt="" width={22} height={25}/>
                            </div>

                        </div>


                        <div className="lg:w-[90%] bg-yellow-300 m-auto lg:mt-6 flex justify-around">

                            <div className="lg:w-[48px] lg:h-[48px] bg-orange-500">
                                <Image src="/image/telegram.png" alt="" width={48} height={48}/>
                            </div>

                            <div className="lg:w-[48px] lg:h-[48px] bg-orange-500">
                                <Image src="/image/linkedin.png" alt="" width={48} height={48}/>
                            </div>

                            <div className="lg:w-[48px] lg:h-[48px] bg-orange-500">
                                <Image src="/image/instagram.png" alt="" width={48} height={48}/>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}


export default ContactUs;