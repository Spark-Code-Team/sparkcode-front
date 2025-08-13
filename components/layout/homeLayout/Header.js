"use client";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import CloseMenu from "../../../public/icons/CloseMenu";
import { useEffect, useState } from "react";
import { headerLink } from "@/constant/homeConstant";
import { Profile } from "@/services/profile";
import { UserProfile } from "@/stores/profileStore";

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const profile = UserProfile()

    useEffect(() => {  
        if(!profile.data.role){
            const fetchProfile = async () => {
            const {response , error} = await Profile()
            if (response){
                profile.setProfile(response.data); 
            }
        }
            fetchProfile()
        }
    }, [profile.data.role]); 

    const handleOpenMenu = () => {
        setOpenMenu(true);
    }

    const handleCloseMenu = () => {

        setOpenMenu(false);

    }

    return (

        <>


            <div 
                className="
                    bg-gradient-to-b
                    from-[#091119] 
                    via-[#172744] 
                    to-[#091119] 
                    shadow-xl 
                    text-white 
                    z-50  
                    lg:h-[83px] 
                    lg:mx-auto 
                    lg:rounded-xl 
                    flex 
                    justify-between 
                    items-center 
                    lg:pl-7 
                    lg:pr-7 
                    px-2
                    py-2
                    sticky
                    top-0
                    max-w-[1440px]
                "
            >

                <div className="lg:flex hidden">

                    <Link
                        href="/"
                    >
                        <Image src={"/image/logo.png"} alt="logo" width={145} height={41} />
                    </Link>

                    <ul className="flex items-center lg:mr-16 gap-x-9">
                            <div>                      
                                {profile.data.role?<>
                                    {profile.data.role == 2 ? 
                                        <Link href="/dashboard/user-account-dashboard">
                                            <Image alt="profile" onClick={() => Profile()} width={500} height={500} src={profile.profile_img} className="w-[42px] h-[42px] border-4 rounded-full"/>
                                            </Link> : <>{profile.data.role == 1 ? 
                                            <Link href="/admin/User-Account">
                                            <Image alt="profile" onClick={() => Profile()} width={500} height={500} src={profile.profile_img} className="w-[42px] h-[42px] border-4 rounded-full"/>
                                        </Link> : <></> }</>}
                                    </>:<>
                                    <div>
                                        <li
                                            className="
                                            text-white
                                            "
                                            >
                                            <Link
                                                href={'/Login'}
                                            >
                                                {
                                                    'ورود / ثبت نام'
                                                }
                                            </Link>
                                        </li>
                                    </div>
                                    </>}
                            </div>

                        {
                            headerLink.map((item, index) => (
                                <li key={index}>
                                    {
                                        item.external ? (
                                            <a href={item.link}>
                                                {item.title}
                                            </a>
                                        ) : (
                                            <Link href={item.link}>
                                                {item.title}
                                            </Link>
                                        )
                                    }
                                </li>
                            ))
                        }


                    </ul>

                </div>


                <div
                    className="
                        hidden
                    "
                >
                    {/* <Link href="#" className="bg-[#2e567d] text-white lg:w-[170px] lg:h-[48px] flex justify-center items-center gap-x-2 rounded-md">
                        ورود/ثبت نام
                        <IconLogin />
                    </Link> */}
                </div>

                <button 
                    className="
                        lg:hidden
                    "            
                    onClick={() => handleOpenMenu()}
                >
                    <GiHamburgerMenu size={30} color="white" />
                </button>

                <div
                    className="
                        lg:hidden
                    "
                >
                    <Image src={"/image/logo.png"} alt="logo" className=" w-32 h-10" width={145} height={41} />
                </div>
            </div>


            {/*  Hamberger Menu   */}
                    <div
                        className={`
                            w-screen
                            h-screen
                            fixed
                            top-0
                            bg-[#00000080]    
                            z-50
                            lg:hidden
                            transition-all
                            duration-300
                            ${openMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                        `}
                    >
                        <div className={`w-[217px] h-full z-10 bg-[#2e567d] absolute top-0 rounded-l-2xl`}>

                            <div className="w-full h-[30px] flex justify-around items-center mt-5">

                                <div className="w-fit cursor-pointer" onClick={() => handleCloseMenu()}>
                                    <CloseMenu />
                                </div>

                                <Link
                                    href="/"
                                    onClick={() => setOpenMenu(false)}
                                >
                                    <Image src="/image/logo.png" alt="logo" width={81} height={16} />
                                </Link>

                            </div>


                            <div className="w-full">

                                <ul className="mt-7">

                                    {
                                        headerLink.map((item, index) => (
                                            <div
                                                key={index}
                                                >
                                                <li
                                                    className="
                                                    pr-5 
                                                    mt-3
                                                    text-white
                                                    "
                                                    
                                                    >
                                                    <Link
                                                        onClick={() => setOpenMenu(false)}
                                                        key={index}
                                                        href={item.link}
                                                    >
                                                        {
                                                            item.title
                                                        }
                                                    </Link>
                                                </li>
                                                <hr className="mt-3 mb-3" />
                                            </div>
                                        ))
                                    }
                                        <div
                                                >
                                                <li
                                                    className="
                                                    pr-5 
                                                    mt-3
                                                    text-white
                                                    "
                                                    
                                                    >
                                                    <Link
                                                        onClick={() => setOpenMenu(false)}
                                                        href={'/'}
                                                    >
                                                        {
                                                            'حساب کاربری'
                                                        }
                                                    </Link>
                                                </li>
                                                <hr className="mt-3 mb-3" />
                                            </div>

                                </ul>

                            </div>

                        </div>
                    </div>

        </>

    )

}


export default Header;


// {true?<>
//     :

// }