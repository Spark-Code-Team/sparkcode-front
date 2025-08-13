import Image from "next/image"

export default function AuthPageStruct ({children}) {
    return (
        <>
        <div className="
        md:flex
        md:justify-evenly
        mt-10
        p-3
        md:p-0
        ">
            <div className="
            md:w-[664px] w-full
            h-[561px]
            rounded-2xl
            bg-slate-800
            md:shadow-lg
            ">
                {children}

            </div>

            <div className="
            md:w-[520px] w-full
            md:h-[561px] 
            rounded-xl
            ">
                <Image
                src="/image/about-spark.png"
                alt="shemsh"
                width={520}
                height={561}
                className="hidden sm:block"
                />

            </div>

        </div>

        </>
    )
}