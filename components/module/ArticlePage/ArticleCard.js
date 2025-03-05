import ArrowLeftRed from "@/public/icons/ArrowLeftRed"
import Union from "@/public/icons/Union"
import Image from "next/image"
import Link from "next/link"



export default function ArticleCard () {

    const alaki = ["", "", "", "", "", "", "", "", ""]

    return (
        <>
            <div
                className="
                    w-[85%]
                    mx-auto
                    flex
                    flex-wrap
                    items-center
                    justify-between
                    gap-2
                "
            >
                {
                    alaki.map((item, index) => (
                        <div
                            className="
                                border
                                border-white
                                rounded-[30px]
                                p-3
                                px-5
                                w-[372px]
                                h-[358px]
                                flex
                                flex-col
                                items-center
                                mb-3
                            "
                            key={index}
                        >
                            <div
                                className="
                                    relative
                                    w-[344px]
                                    rounded-[30px]
                                    overflow-hidden
                                "
                            >
                                <Image 
                                    src="/"
                                    alt="alt"
                                    width={500}
                                    height={500}
                                    className="
                                        w-full
                                        h-[175px]
                                    "
                                />
                                <div
                                    className="
                                        absolute
                                        bottom-0
                                        left-0
                                        w-full
                                        h-[81px]
                                        bg-gradient-to-t
                                        from-[#2E567D]
                                        to-[#0911194d]
                                    "
                                >

                                </div>
                            </div>

                            <div
                                className="
                                    w-full
                                    flex
                                    justify-end
                                "
                            >
                                <p
                                    className="
                                        text-white
                                        mt-4
                                    "
                                >
                                    12 خرداد 1403
                                </p>
                            </div>

                            <div
                                className="
                                    w-full
                                    flex
                                    items-center
                                    font-bold
                                    text-white
                                    my-6
                                "
                            >
                                دامنه چیست؟ کلید ورود به دنیای آنلاین را بشناسید
                            </div>

                            <div
                                className="
                                    flex
                                    text-white
                                    items-center
                                    justify-between
                                "
                            >
                                <p
                                    className="
                                    w-[70%] 
                                    "
                                >
                                    دامنه آدرس اینترنتی وب سایت شما است
                                    درباره دامنه بیشتر بخوانید
                                </p>
                                <Link
                                    href="#"
                                    className="
                                        text-red-600
                                        flex
                                        items-center
                                    "
                                >
                                    بخوانید
                                    <ArrowLeftRed />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div
                className="
                    w-full
                    flex
                    items-center
                "
            >
                <div
                    className="
                        w-[80%]
                        mx-auto
                        flex
                        items-center
                        justify-center
                        gap-3
                    "
                >
                    <div
                        className="
                            w-7
                            h-7
                            text-red-600
                            border
                            border-white
                            flex
                            items-center
                            justify-center
                            rounded-xl
                            p-3
                        "
                    >
                        <Union />
                    </div>
                    <div
                        className="
                            w-7
                            h-7
                            text-red-600
                            border
                            border-white
                            flex
                            items-center
                            justify-center
                            rounded-xl
                            p-3
                        "
                    >
                        1
                    </div>
                    <div
                        className="
                            w-7
                            h-7
                            text-red-600
                            border
                            border-white
                            flex
                            items-center
                            justify-center
                            rounded-xl
                            p-3
                        "
                    >
                        2
                    </div>
                    <div
                        className="
                            w-7
                            h-7
                            text-red-600
                            border
                            border-white
                            flex
                            items-center
                            justify-center
                            rounded-xl
                            p-3
                        "
                    >
                        3
                    </div>
                    <div
                        className="
                            w-7
                            h-7
                            text-red-600
                            border
                            border-white
                            flex
                            items-center
                            justify-center
                            rounded-xl
                            p-3
                        "
                    >
                        <Union />
                    </div>
                </div>
            </div>
        </>
    )
}