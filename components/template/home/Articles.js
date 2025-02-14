import Image from "next/image";
import Link from "next/link";
import ArrowLeftBlue from "../../../public/icons/ArrowLeftBlue";
import ArrowLeft from "../../../public/icons/ArrowLeft";

const items = [1 , 2 , 3];

const Articles = ()=>{

    return(

        <>

            <div className="w-full lg:mt-24 mt-10">

                <div className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text">Articles</div>
                <div className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">مقاله ها</div>

                <div className="lg:w-[85%] w-full m-auto mt-9 lg:flex lg:flex-nowrap flex flex-wrap lg:gap-x-5">

                    {
                        items.map((item , index)=>(

                            <div key={index} className="border-2 border-[#182128] lg:w-[392px] w-[75%] lg:m-0 lg:mt-0 m-auto mt-6 pb-4 rounded-2xl">

                                <div className="bg-gradient-to-b from-[#091119] to-[#2E567D] shadow-lg lg:w-[310px] lg:h-[175px] lg:w-[90%] h-[200px] m-auto mt-4 flex justify-center items-center rounded-2xl">
                                    <Image src="/image/gallery.png" alt="" width={75} height={75}/>
                                </div>

                                <div className="lg:w-[310px] w-full m-auto mt-5 flex justify-between items-center lg:pr-0 lg:pl-0 pr-4 pl-4">

                                    <div className="flex gap-x-1">
                                        <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                        <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                        <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                        <Image src="/image/star-1.png" alt="" width={18} height={18}/>
                                        <Image src="/image/star-0.png" alt="" width={18} height={18}/>
                                    </div>

                                    <div>
                                        <p className="text-sm text-white">12 خرداد 1403</p>
                                    </div>

                                </div>


                                <div className="lg:w-[310px] w-full m-auto mt-6 lg:pr-0 lg:pl-0 pr-4 pl-4 text-white">دامنه چیست ؟</div>
                                <div className="lg:w-[310px] w-full m-auto mt-5 text-sm lg:pr-0 lg:pl-0 pr-4 pl-4 text-white">ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه .</div>

                                <div className="lg:w-[310px] w-full m-auto mt-5 flex justify-end lg:pr-0 lg:pl-0 pl-4">
                                    <Link href="#" className="flex items-center text-white">بخوانید <ArrowLeft/></Link>
                                </div>

                            </div>

                        ))
                    }

                </div>


                <div className="lg:w-[85%] w-full m-auto lg:mt-9 mt-7 flex justify-end lg:pl-0 pl-12">
                    <Link href="#" className="lg:w-[191px] w-[44%] lg:p-2 p-2 flex justify-center items-center rounded-lg text-[#2e567d] font-bold">مشاهده همه مقالات <ArrowLeftBlue/></Link>
                </div>

            </div>

        </>

    )

}


export default Articles;