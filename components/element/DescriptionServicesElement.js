import Link from "next/link";
import ArrowLeftService from "@/public/icons/ArrowLeftService";

const DescriptionServicesElement = ({reverse = false}) => {

    return (

        <>

            <div className="w-full lg:mt-20 mt-10">

                <div className={`lg:w-[85%] w-full m-auto lg:mt-14 flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}>

                    <div className="lg:w-1/2 m-auto">
                        <p className="text-xl text-white">توسعه وب سایت</p>
                        <div className="w-full text-white lg:m-auto lg:mt-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی</div>
                        <Link href="#" className="bg-[#2E567D] lg:w-[153px] lg:h-[40px] lg:flex lg:justify-center lg:items-center lg:mt-7 rounded-md lg:gap-x-3 text-white">
                            مطالعه بیشتر <ArrowLeftService />
                        </Link>
                    </div>

                    <div className="lg:w-1/2 m-auto lg:flex lg:justify-center">

                        <div className="lg:w-[449px] lg:h-[425px] bg-[url('/image/vector11.png')] bg-cover bg-center lg:flex lg:justify-center lg:items-center text-white">
                            SparkCode
                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}


export default DescriptionServicesElement;