import Image from "next/image";

const SparkCode = ()=>{

    return(

        <>

            <div className="w-full bg-violet-700">

                <div className="w-full bg-yellow-300 text-center lg:text-3xl opacity-90">? Why Spark Code</div>
                <div className="w-full bg-yellow-600 text-center lg:text-2xl lg:mt-1">چرا اسپارک کد ؟</div>

                <div className="lg:w-[85%] bg-violet-400 m-auto lg:mt-20 flex lg:gap-x-5">

                    <div className="lg:w-1/3 lg:h-[480px] bg-red-600 flex flex-wrap items-center lg:pb-4 relative rounded-2xl">

                        <p className="absolute -top-14 left-10 text-[64px] text-yellow-300">10</p>

                        <div className="w-[165px] h-[165px] m-auto mt-8 flex justify-center items-center">
                            <Image src="/image/profile.png" alt="" width={165} height={160} className="object-contain"/>
                        </div>

                        <div className="w-full bg-lime-400 mt-1 text-center text-md font-bold">درک عمیق از نیازهای مشتری</div>
                        <div className="w-full bg-lime-600 lg:mt-1 lg:pr-4 lg:pl-4 text-sm leading-7">ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه، با شفافیت و صداقت با شما در ارتباط است. این همکاری نزدیک به ما کمک می‌کند تا بهترین خروجی ممکن را ارائه دهیم و پروژه‌ها را به موقع و با هزینه‌های معقول به سرانجام برسانیم.</div>

                        <div className="absolute -bottom-20 -right-14">
                            <Image src="/image/arrow1.png" alt="" width={88} height={97}/>
                        </div>

                    </div>


                    <div className="lg:w-1/3 lg:h-[480px] bg-red-600 flex flex-wrap justify-center items-center lg:pb-4 relative rounded-2xl">

                        <p className="absolute -top-14 left-10 text-[64px] text-yellow-300">01</p>

                        <div className="w-[165px] h-[165px] m-auto mt-8 flex justify-center items-center">
                            <Image src="/image/shield.png" alt="" width={165} height={160} className="object-contain"/>
                        </div>
                        <div className="w-full bg-lime-400 mt-1 text-center text-md font-bold">تمرکز بر کیفیت و امنیت</div>
                        <div className="w-full bg-lime-600 lg:mt-1 lg:pr-4 lg:pl-4 text-sm leading-7">ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه، با شفافیت و صداقت با شما در ارتباط است. این همکاری نزدیک به ما کمک می‌کند تا بهترین خروجی ممکن را ارائه دهیم و پروژه‌ها را به موقع و با هزینه‌های معقول به سرانجام برسانیم.</div>

                    </div>


                    <div className="lg:w-1/3 lg:h-[480px] bg-red-600 flex flex-wrap items-center lg:pb-4 relative rounded-2xl">

                        <p className="absolute -top-14 left-10 text-[64px] text-yellow-300">00</p>

                        <div className="w-[165px] h-[165px] m-auto mt-8 flex justify-center items-center">
                            <Image src="/image/star.png" alt="" width={165} height={160} className="object-contain"/>
                        </div>
                        <div className="w-full bg-lime-400 mt-1 text-center text-md font-bold">تجربه و تخصص حرفه‌ای</div>
                        <div className="w-full bg-lime-600 lg:mt-1 lg:pr-4 lg:pl-4 text-sm leading-7">ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه، با شفافیت و صداقت با شما در ارتباط است. این همکاری نزدیک به ما کمک می‌کند تا بهترین خروجی ممکن را ارائه دهیم و پروژه‌ها را به موقع و با هزینه‌های معقول به سرانجام برسانیم.</div>

                        <div className="absolute -top-20 -left-14">
                            <Image src="/image/arrow2.png" alt="" width={88} height={97}/>
                        </div>

                    </div>


                </div>

            </div>

        </>

    )

}


export default SparkCode;