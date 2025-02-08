"use client";
import Image from "next/image";
import Link from "next/link";
import IconLogin from "../../../public/icons/IconLogin";
import { GiHamburgerMenu } from "react-icons/gi";
import CloseMenu from "../../../public/icons/CloseMenu";
import {useState} from "react";

const Navbar = ()=>{

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

            <div className="lg:w-[1150px] lg:h-[83px] lg:mx-auto bg-indigo-400 lg:flex lg:justify-between lg:items-center lg:pl-7 lg:pr-7 hidden">

                <div className="flex">

                    <div>
                        <Image src={"/image/logo.png"} alt="" width={145} height={41}/>
                    </div>

                    <ul className="flex items-center lg:mr-16 gap-x-9">

                        <li>
                            <Link href="#">پروژه ها</Link>
                        </li>

                        <li>
                            <Link href="#">دوره ها</Link>
                        </li>

                        <li>
                            <Link href="#">مقالات</Link>
                        </li>

                        <li>
                            <Link href="#">تماس با ما</Link>
                        </li>

                        <li>
                            <Link href="#">درباره ما</Link>
                        </li>

                    </ul>

                </div>


                <div>
                    <Link href="#" className="bg-pink-400 text-white lg:w-[170px] lg:h-[48px] flex justify-center items-center gap-x-2 rounded-md">
                        ورود/ثبت نام
                        <IconLogin/>
                    </Link>
                </div>

            </div>



            {/*   Responsive Header or Navbar   */}

            <div className="w-full bg-lime-400 h-[50px] flex justify-between items-center pr-7 pl-7 lg:hidden">

                <button onClick={handleOpenMenu}>
                    <GiHamburgerMenu size={30}/>
                </button>

                <Link href="#" className="bg-pink-400 text-white w-[135px] h-[35px] flex justify-center items-center gap-x-2 rounded-md">
                    ورود/ثبت نام
                    <IconLogin/>
                </Link>

            </div>


            {/*  Hamberger Menu   */}

            {
                openMenu ? (
                    <div className={`w-[217px] h-[500px] bg-red-500 absolute top-0 right-7 rounded-2xl lg:hidden`}>

                        <div className="w-full h-[30px] bg-blue-400 flex justify-around items-center mt-5">

                            <div className="w-[20%]" onClick={handleCloseMenu}>
                                <CloseMenu/>
                            </div>

                            <div>
                                <Image src="/image/logo.png" alt="" width={81} height={16}/>
                            </div>

                        </div>


                        <div className="w-full">

                            <ul className="mt-7">

                                <li className=" pr-5 mt-3">
                                    <Link href="#">پروژه ها</Link>
                                </li>

                                <hr className="mt-3 mb-3"/>

                                <li className=" pr-5 mt-3">
                                    <Link href="#">دوره ها</Link>
                                </li>

                                <hr className="mt-3 mb-3"/>

                                <li className=" pr-5 mt-3">
                                    <Link href="#">مقالات</Link>
                                </li>

                                <hr className="mt-3 mb-3"/>

                                <li className=" pr-5 mt-3">
                                    <Link href="#">درباره ما</Link>
                                </li>

                                <hr className="mt-3 mb-3"/>

                                <li className=" pr-5 mt-3">
                                    <Link href="#">تماس با ما</Link>
                                </li>

                                <hr className="mt-3 mb-3"/>

                            </ul>

                        </div>

                    </div>
                ):null
            }

        </>

    )

}


export default Navbar;