import Image from "next/image";

const Introduction = ()=>{

    return(

        <>

            <div className="lg:w-full lg:h-[750px] bg-green-800 pt-1">

                <div className="lg:w-[85%] bg-red-600 mx-auto lg:mt-32 flex justify-around">

                    <div className="lg:w-[553px] bg-pink-400">
                        <div className="lg:w-full bg-orange-400 lg:text-[48px] lg:font-bold lg:leading-[90px] lg:mt-32">
                            <span>خلاقیت بی حد</span>
                            <br/>
                            <span className="lg:pr-40">فناوری بی مرز</span>
                        </div>

                        <div className="lg:w-full bg-orange-300 lg:text-md lg:mt-16 lg:leading-9">ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه، با شفافیت و صداقت با شما در ارتباط است. این همکاری نزدیک به ما کمک می‌کند.</div>
                    </div>

                    <div className="lg:w-[614px] bg-pink-600">
                        <Image src="/image/spark-code.png" alt="" width={614} height={583}/>
                    </div>

                </div>

            </div>

        </>

    )

}


export default Introduction;