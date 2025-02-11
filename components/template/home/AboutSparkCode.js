import Image from "next/image";

const AboutSparkCode = ()=>{

    return(

        <>

            <div className="w-full bg-violet-400 lg:mt-24 mt-10">

                <div className="w-full bg-yellow-300 text-center lg:text-3xl text-xl opacity-90">About Spark Code</div>
                <div className="w-full bg-yellow-600 text-center lg:text-2xl text-xl lg:mt-1">درباره اسپارک کد</div>

                <div className="lg:w-[85%] w-full bg-yellow-300 m-auto mt-9">

                    <div className="w-full bg-pink-400 lg:leading-8 leading-8 lg:text-base text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیردلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آ</div>

                    <div className="w-full bg-pink-700 flex mt-14 gap-x-5">

                        <div className="lg:w-[392px] lg:h-[253px] bg-orange-400 flex justify-center items-center rounded-2xl">
                            <Image src="/image/gallery.png" alt="" width={75} height={75}/>
                        </div>

                        <div className="lg:w-[392px] lg:h-[253px] bg-orange-400 flex justify-center items-center rounded-2xl">
                            <Image src="/image/gallery.png" alt="" width={75} height={75}/>
                        </div>

                        <div className="lg:w-[392px] lg:h-[253px] bg-orange-400 flex justify-center items-center rounded-2xl">
                            <Image src="/image/gallery.png" alt="" width={75} height={75}/>
                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}


export default AboutSparkCode;