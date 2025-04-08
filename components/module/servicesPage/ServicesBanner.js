import Image from "next/image"

const ServicesBanner = () => {

    return (

        <>

            <div className="lg:w-full lg:h-[600px] lg:pt-1 lg:mt-0">

                <div className="lg:w-[85%] w-full mx-auto lg:mt-24 flex justify-around">

                    <div className="lg:w-[553px] w-1/2 lg:block flex items-center">
                        <div className="lg:w-full lg:animate-spinSpring lg:text-[48px] font-bold text-white lg:leading-[90px] lg:mt-32 text-[24px]">
                            <span className="lg:pr-0 pr-3 animate-textColor">انتخاب مسیر درست، </span>
                            <br />
                            <span className="lg:pr-32 pr-10 animate-textColor2">برای موفقیت آنلاین</span>
                        </div>

                        <div className="lg:w-full lg:text-md lg:mt-12 lg:leading-9 lg:block text-white hidden">ما یک تیم انفورماتیک و برنامه‌نویسی هستیم که به کسب و کارها کمک می‌کنیم تا در دنیای دیجیتال بدرخشند. با طراحی وب‌سایت‌های مدرن و کاربرپسند، کدنویسی حرفه‌ای و ارائه مشاوره‌های تخصصی، شما را در مسیر درست موفقیت همراهی می‌کنیم.</div>

                    </div>

                    <div className="lg:w-[614px] w-1/2 animate-float">
                        <Image src="/image/spark-code.png" alt="" width={614} height={583} layout="responsive" />
                    </div>

                </div>

                <div className="w-full text-sm leading-7 text-white -mt-7 lg:hidden pr-3 pl-3 block">ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه، با شفافیت و صداقت با شما در ارتباط است. این همکاری نزدیک به ما کمک می‌کند.</div>

            </div>

        </>

    )

}


export default ServicesBanner;