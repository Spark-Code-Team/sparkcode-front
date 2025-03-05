"use client";
import Image from "next/image";
import Link from "next/link";
import IconLogin from "../../../public/icons/IconLogin";
import { GiHamburgerMenu } from "react-icons/gi";
import CloseMenu from "../../../public/icons/CloseMenu";
import {useState} from "react";
import { headerLink } from "@/constant/homeConstant";

const Header = ()=>{

    const [openMenu , setOpenMenu] = useState(false);

    const handleOpenMenu = ()=>{

        setOpenMenu(true);
        console.log("menu");

    }

    const handleCloseMenu = ()=>{

        setOpenMenu(false);

    }

    return(

        <>


            <div className="bg-gradient-to-b from-[#091119] via-[#172744] to-[#091119] shadow-xl text-white lg:absolute lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:z-50 lg:w-[1150px] z-100 lg:h-[83px] lg:mx-auto lg:mt-7 lg:rounded-xl lg:flex lg:justify-between lg:items-center lg:pl-7 lg:pr-7 hidden">

                <div className="flex">

                    <div>
                        <Image src={"/image/logo.png"} alt="" width={145} height={41}/>
                    </div>

                    <ul className="flex items-center lg:mr-16 gap-x-9">

                        {
                            headerLink.map((item, index) => (
                                <li>
                                    <Link 
                                        href={item.link}
                                        key={index}
                                    >
                                        {
                                            item.title
                                        }
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>

                </div>


                <div>
                    <Link href="#" className="bg-[#2e567d] text-white lg:w-[170px] lg:h-[48px] flex justify-center items-center gap-x-2 rounded-md">
                        ورود/ثبت نام
                        <IconLogin/>
                    </Link>
                </div>

            </div>



            {/*   Responsive Header or Navbar   */}

            <div className="w-full h-[50px] flex justify-between items-center pr-7 pl-7 lg:hidden">

                <button onClick={handleOpenMenu}>
                    <GiHamburgerMenu size={30} color="white"/>
                </button>

                <Link href="#" className="bg-[#2e567d] text-white w-[135px] h-[35px] flex justify-center items-center gap-x-2 rounded-md">
                    ورود/ثبت نام
                    <IconLogin/>
                </Link>

            </div>


            {/*  Hamberger Menu   */}

            {
                openMenu ? (
                    <div className={`w-[217px] h-[500px] z-10 bg-[#2e567d] absolute top-0 right-7 rounded-2xl lg:hidden`}>

                        <div className="w-full h-[30px] flex justify-around items-center mt-5">

                            <div className="w-[20%]" onClick={handleCloseMenu}>
                                <CloseMenu/>
                            </div>

                            <div>
                                <Image src="/image/logo.png" alt="" width={81} height={16}/>
                            </div>

                        </div>


                        <div className="w-full">

                            <ul className="mt-7">

                                {
                                    headerLink.map((item, index) => (
                                        <>
                                            <li 
                                                className="
                                                    pr-5 
                                                    mt-3
                                                "
                                            >
                                                <Link
                                                    key={index} 
                                                    href={item.link}
                                                >
                                                    {
                                                        item.title
                                                    }
                                                </Link>
                                            </li>
                                            <hr className="mt-3 mb-3"/>
                                        </>
                                    ))
                                }

                            </ul>

                        </div>

                    </div>
                ):null
            }

        </>

    )

}


export default Header;