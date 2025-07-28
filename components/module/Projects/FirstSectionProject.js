import Image from "next/image";

const FirstSecProject = () => {
    return(

        <div className="
        flex
        flex-col
        md:flex-row
        md:justify-around
        items-center
        mt-10
        ">
            <div className="
            md:w-1/2 w-full
            md:h-[300px] h-full
            flex
            flex-col
            ">
                <h1 className="
                text-white
                md:text-2xl
                font-bold
                mx-auto
                ">
                نمونه کارهای طراحی وب سایت اسپارک کد
                </h1>

                <p className="
                md:mx-32 px-7
                leading-7
                text-justify
                mt-10
                text-white
                ">
                ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه، با شفافیت و صداقت با شما در ارتباط است. این همکاری نزدیک به ما کمک می‌کند.
                </p>

            </div>

            <div className="
            md:w-1/2
            h-[500px]
           
            ">
                <Image
                src="/image/articleHeader.png" 
                alt="logo" 
                width={1000} 
                height={1000}
                className="
                w-full
                h-full
                "
                />
                
            </div>
        </div>
   
    )
}
export default FirstSecProject;