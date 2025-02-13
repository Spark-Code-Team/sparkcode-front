import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "../../../public/icons/ArrowLeft";

const items = [1 , 2 , 3];

const Articles = ()=>{

    return(

        <>

            <div className="w-full bg-violet-400 lg:mt-24 mt-10">

                <div className="w-full bg-yellow-300 text-center lg:text-3xl text-xl opacity-90">Articles</div>
                <div className="w-full bg-yellow-600 text-center lg:text-2xl text-xl lg:mt-1">مقاله ها</div>

                <div className="lg:w-[85%] w-full bg-yellow-300 m-auto mt-9 lg:flex lg:flex-nowrap flex flex-wrap lg:gap-x-5">

                    {
                        items.map((item , index)=>(

                            <div key={index} className="lg:w-[392px] w-[75%] lg:m-0 lg:mt-0 m-auto mt-6 pb-4 bg-blue-600 rounded-2xl">

                                <div className="lg:w-[310px] lg:h-[175px] lg:w-[90%] h-[200px] bg-red-600 m-auto mt-4 flex justify-center items-center rounded-2xl">
                                    <Image src="/image/gallery.png" alt="" width={75} height={75}/>
                                </div>

                                <div className="lg:w-[310px] w-full bg-orange-400 m-auto mt-5 flex justify-between items-center lg:pr-0 lg:pl-0 pr-4 pl-4">

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


                                <div className="lg:w-[310px] w-full bg-orange-400 m-auto mt-6 lg:pr-0 lg:pl-0 pr-4 pl-4">دامنه چیست ؟</div>
                                <div className="lg:w-[310px] w-full bg-orange-400 m-auto mt-5 text-sm lg:pr-0 lg:pl-0 pr-4 pl-4">ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه .</div>

                                <div className="lg:w-[310px] w-full bg-orange-400 m-auto mt-5 flex justify-end lg:pr-0 lg:pl-0 pl-4">
                                    <Link href="#" className="flex items-center text-white">بخوانید <ArrowLeft/></Link>
                                </div>

                            </div>

                        ))
                    }

                </div>


                <div className="lg:w-[85%] w-full bg-lime-500 m-auto lg:mt-9 mt-7 flex justify-end lg:pl-0 pl-12">
                    <Link href="#" className="lg:w-[191px] w-[44%] lg:p-2 p-2 flex justify-center items-center rounded-lg bg-orange-400 text-white">مشاهده همه مقالات <ArrowLeft/></Link>
                </div>

            </div>

        </>

    )

}


export default Articles;