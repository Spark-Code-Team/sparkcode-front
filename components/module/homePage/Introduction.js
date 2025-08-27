import LogoSVG from "@/public/icons/logoLoading";
import Image from "next/image";

const Introduction = ()=>{

    return(

        <>
            <div className="lg:w-full lg:h-[750px] lg:pt-1 lg:mt-0 custom-background">

                <div className="lg:w-[85%] w-full mx-auto flex justify-around">

                    <div className="lg:w-[553px] w-1/2 lg:block flex items-center">
                        <div className="lg:w-full lg:animate-spinSpring lg:text-[48px] font-bold text-white lg:leading-[90px] lg:mt-32 text-[24px]">
                            <span className="lg:pr-0 pr-3 animate-textColor">خلاقیت بی حد</span>
                            <br/>
                            <span className="lg:pr-40 pr-10 animate-textColor2">فناوری بی مرز</span>
                        </div>

                        <div className="lg:w-full lg:text-md lg:mt-16 lg:leading-9 lg:block text-white hidden">ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه، با شفافیت و صداقت با شما در ارتباط است. این همکاری نزدیک به ما کمک می‌کند.</div>

                    </div>

                    <div className="lg:w-[614px] w-1/2 animate-float">
                        <Image src="/image/spark-code.png" alt="" width={614} height={583} layout="responsive"/>
                    </div>

                </div>

                <div className="w-full text-sm leading-7 text-white -mt-7 lg:hidden pr-3 pl-3 block">ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه، با شفافیت و صداقت با شما در ارتباط است. این همکاری نزدیک به ما کمک می‌کند.</div>

            </div>

        </>

    )

}


export default Introduction;