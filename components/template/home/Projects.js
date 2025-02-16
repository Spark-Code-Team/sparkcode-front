import Image from "next/image";
import Link from "next/link";
import ArrowLeftRed from "../../../public/icons/ArrowLeftRed";

const Projects = ()=>{

    return(

        <>

            <div className="w-full lg:mt-24 mt-10">

                <div className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text animate-floatText">Projects</div>
                <div className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">پروژه ها</div>

                <div className="lg:w-[85%] w-full lg:flex m-auto mt-14 lg:gap-x-5">

                    <div className="lg:w-1/3 w-[75%] lg:m-0 m-auto lg:mt-0 mt-4 pb-5 border-2 border-[#182128] rounded-3xl text-white hover:animate-textGlow">

                        <div className="lg:w-full lg:h-[200px] w-full h-[200px] bg-[#414141]/[0.27] rounded-t-3xl">
                            {/*  image  */}
                        </div>

                        <div className="w-full mt-8 flex items-center gap-x-3 text-xl font-bold pr-5">

                            <Image src="/image/logo-evaam.png" alt="" width={47} height={28}/>
                            <p>ایوام</p>

                        </div>

                        <div className="w-full mt-8 pr-5 pl-5 text-sm">مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید. در حال حاضر هر ۶ماه یک‌بار، تعداد کاربران و درخواست‌ها به‌سمت نشان دو برابر می‌شود.</div>

                        <div className="w-full mt-8 flex justify-end items-center text-red-700 pl-4">
                            <Link href="#" className="flex items-center">مشاهده وب سایت <ArrowLeftRed/></Link>
                        </div>

                    </div>



                    <div className="lg:w-1/3 w-[75%] lg:m-0 m-auto lg:mt-0 mt-4 pb-5 border-2 border-[#182128] rounded-3xl text-white hover:animate-textGlow">

                        <div className="lg:w-full lg:h-[200px] w-full h-[200px] bg-[#414141]/[0.27] rounded-t-3xl">
                            {/*  image  */}
                        </div>

                        <div className="w-full mt-8 flex items-center gap-x-3 text-xl font-bold pr-5">

                            <p>لونا</p>

                        </div>

                        <div className="w-full mt-8 pr-5 pl-5 text-sm">مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید. در حال حاضر هر ۶ماه یک‌بار، تعداد کاربران و درخواست‌ها به‌سمت نشان دو برابر می‌شود.</div>

                        <div className="w-full mt-8 flex justify-end items-center text-red-700 pl-4">
                            <Link href="#" className="flex items-center">مشاهده وب سایت <ArrowLeftRed/></Link>
                        </div>

                    </div>



                    <div className="lg:w-1/3 w-[75%] lg:m-0 m-auto lg:mt-0 mt-4 pb-5 border-2 border-[#182128] rounded-3xl text-white hover:animate-textGlow">

                        <div className="lg:w-full lg:h-[200px] w-full h-[200px] bg-[#414141]/[0.27] rounded-t-3xl">
                            {/*  image  */}
                        </div>

                        <div className="w-full mt-8 flex items-center gap-x-3 text-xl font-bold pr-5">

                            <Image src="/image/logo-matin.png" alt="" width={47} height={28}/>
                            <p>متین خودرو</p>

                        </div>

                        <div className="w-full mt-8 pr-5 pl-5 text-sm">مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید. در حال حاضر هر ۶ماه یک‌بار، تعداد کاربران و درخواست‌ها به‌سمت نشان دو برابر می‌شود.</div>

                        <div className="w-full mt-8 flex justify-end items-center text-red-700 pl-4">
                            <Link href="#" className="flex items-center">مشاهده وب سایت <ArrowLeftRed/></Link>
                        </div>

                    </div>


                </div>

            </div>

        </>

    )

}


export default Projects;