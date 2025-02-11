import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "../../../public/icons/ArrowLeft";

const Articles = ()=>{

    return(

        <>

            <div className="w-full bg-violet-400 lg:mt-24 mt-10">

                <div className="w-full bg-yellow-300 text-center lg:text-3xl text-xl opacity-90">Articles</div>
                <div className="w-full bg-yellow-600 text-center lg:text-2xl text-xl lg:mt-1">مقاله ها</div>

                <div className="lg:w-[85%] w-full bg-yellow-300 m-auto mt-9 flex gap-x-5">

                    <div className="lg:w-[392px] pb-4 bg-blue-600 rounded-2xl">

                        <div className="lg:w-[310px] lg:h-[175px] bg-red-600 m-auto mt-4 flex justify-center items-center rounded-2xl">
                            <Image src="/image/gallery.png" alt="" width={75} height={75}/>
                        </div>

                        <div className="lg:w-[310px] bg-orange-400 m-auto mt-5 flex justify-between items-center">

                            <div className="flex gap-x-1 bg-red-600">
                                <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                <Image src="/image/star-0.png" alt="" width={18} height={18}/>
                            </div>

                            <div>
                                <p className="text-sm">12 خرداد 1403</p>
                            </div>

                        </div>


                        <div className="w-[310px] bg-orange-400 m-auto mt-6">دامنه چیست ؟</div>
                        <div className="w-[310px] bg-orange-400 m-auto mt-5 text-sm">ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه .</div>

                        <div className="w-[310px] bg-orange-400 m-auto mt-5 flex justify-end">
                            <Link href="#" className="flex items-center text-white">بخوانید <ArrowLeft/></Link>
                        </div>

                    </div>

                    <div className="lg:w-[392px] pb-4 bg-blue-600 rounded-2xl">

                        <div className="lg:w-[310px] lg:h-[175px] bg-red-600 m-auto mt-4 flex justify-center items-center rounded-2xl">
                            <Image src="/image/gallery.png" alt="" width={75} height={75}/>
                        </div>

                        <div className="lg:w-[310px] bg-orange-400 m-auto mt-5 flex justify-between items-center">

                            <div className="flex gap-x-1 bg-red-600">
                                <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                <Image src="/image/star-0.png" alt="" width={18} height={18}/>
                            </div>

                            <div>
                                <p className="text-sm">12 خرداد 1403</p>
                            </div>

                        </div>


                        <div className="w-[310px] bg-orange-400 m-auto mt-6">دامنه چیست ؟</div>
                        <div className="w-[310px] bg-orange-400 m-auto mt-5 text-sm">ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه .</div>

                        <div className="w-[310px] bg-orange-400 m-auto mt-5 flex justify-end">
                            <Link href="#" className="flex items-center text-white">بخوانید <ArrowLeft/></Link>
                        </div>

                    </div>

                    <div className="lg:w-[392px] pb-4 bg-blue-600 rounded-2xl">

                        <div className="lg:w-[310px] lg:h-[175px] bg-red-600 m-auto mt-4 flex justify-center items-center rounded-2xl">
                            <Image src="/image/gallery.png" alt="" width={75} height={75}/>
                        </div>

                        <div className="lg:w-[310px] bg-orange-400 m-auto mt-5 flex justify-between items-center">

                            <div className="flex gap-x-1 bg-red-600">
                                <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                <Image src="/image/star-0.png" alt="" width={18} height={18}/>
                            </div>

                            <div>
                                <p className="text-sm">12 خرداد 1403</p>
                            </div>

                        </div>


                        <div className="w-[310px] bg-orange-400 m-auto mt-6">دامنه چیست ؟</div>
                        <div className="w-[310px] bg-orange-400 m-auto mt-5 text-sm">ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه .</div>

                        <div className="w-[310px] bg-orange-400 m-auto mt-5 flex justify-end">
                            <Link href="#" className="flex items-center text-white">بخوانید <ArrowLeft/></Link>
                        </div>

                    </div>

                </div>


                <div className="lg:w-[85%] w-full bg-lime-500 m-auto mt-10 flex justify-end">
                    <Link href="#" className="lg:w-[191px] lg:p-2 flex justify-center items-center rounded-lg bg-orange-400 text-white">مشاهده همه مقالات <ArrowLeft/></Link>
                </div>

            </div>

        </>

    )

}


export default Articles;