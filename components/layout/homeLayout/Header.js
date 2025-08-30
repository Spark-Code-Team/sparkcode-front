"use client";

import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import CloseMenu from "../../../public/icons/CloseMenu";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { headerLink } from "@/constant/homeConstant";
import { Profile } from "@/services/profile";
import { UserProfile } from "@/stores/profileStore";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const profile = UserProfile();

  useEffect(() => {
    if (!profile.data.role) {
      const fetchProfile = async () => {
        const { response } = await Profile();
        if (response) profile.setProfile(response.data);
      };
      fetchProfile();
    }
  }, [profile.data.role]);

  return (
    <>
      <div className="hidden lg:flex justify-between items-center px-7 py-2 bg-gradient-to-b from-[#091119] via-[#172744] to-[#091119] shadow-xl text-white sticky top-0 z-50 rounded-xl max-w-[1440px] mx-auto h-[83px]">

        <ul className="flex items-center gap-x-9">

        {profile.data.role ? (
            <>
                          <li>
                {profile.data.role === 2 ? (
                  <Link href="/dashboard/user-account-dashboard">
                    <Image
                      src={profile.profile_img}
                      alt="profile"
                      width={42}
                      height={42}
                      className="rounded-full border-2"
                    />
                  </Link>
                ) : profile.data.role === 1 ? (
                  <Link href="/admin/User-Account">
                    <Image
                      src={profile.profile_img}
                      alt="profile"
                      width={42}
                      height={42}
                      className="rounded-full border-2"
                    />
                  </Link>
                ) : null}
              </li>
              <li>
                <Link href="/cart">سبد خرید</Link>
              </li>

            </>
          ) : (
            <li>
              <Link href="/Login">ورود / ثبت نام</Link>
            </li>
          )}
          {headerLink.map((item, idx) =>
            item.external ? (
              <li key={idx}>
                <a href={item.link}>{item.title}</a>
              </li>
            ) : (
              <li key={idx}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            )
          )}

          
        </ul>

        <Link href="/">
          <Image src="/image/logo.png" alt="logo" width={145} height={41} />
        </Link>
      </div>

      <div className="flex justify-between items-center lg:hidden px-4 py-2 bg-gradient-to-b from-[#091119] via-[#172744] to-[#091119] shadow-xl sticky top-0 z-50">
        <button onClick={() => setOpenMenu(true)}>
          <GiHamburgerMenu size={28} color="white" />
        </button>

        <Link href="/">
          <Image src="/image/logo.png" alt="logo" width={145} height={41} />
        </Link>

        <div className="w-8" /> 
      </div>

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: openMenu ? 0 : "100%", opacity: openMenu ? 1 : 0 }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 w-screen h-screen bg-black/70 z-50 lg:hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-full bg-[#2e567d] rounded-l-2xl p-5">
          <div className="flex justify-between items-center mb-6">
            <div onClick={() => setOpenMenu(false)} className="cursor-pointer">
              <CloseMenu />
            </div>
            <Link href="/" onClick={() => setOpenMenu(false)}>
              <Image src="/image/logo.png" alt="logo" width={81} height={16} />
            </Link>
          </div>

          <ul className="flex flex-col gap-4">
            {profile.data.role ? (
              <li className="text-white mt-4">
                {profile.data.role === 2 ? (
                  <Link
                    href="/dashboard/user-account-dashboard"
                    onClick={() => setOpenMenu(false)}
                  >
                    <Image
                      src={profile.profile_img}
                      alt="profile"
                      width={42}
                      height={42}
                      className="rounded-full border-2"
                    />
                  </Link>
                ) : profile.data.role === 1 ? (
                  <Link
                    href="/admin/User-Account"
                    onClick={() => setOpenMenu(false)}
                  >
                    <Image
                      src={profile.profile_img}
                      alt="profile"
                      width={42}
                      height={42}
                      className="rounded-full border-2"
                    />
                  </Link>
                ) : null}
              </li>
            ) : (
              <li className="text-white mt-4">
                <Link href="/Login" onClick={() => setOpenMenu(false)}>
                  ورود / ثبت نام
                </Link>
              </li>
            )}
          {profile.data.role && (
              <li className="text-white mt-2">
                <Link href="/cart" onClick={() => setOpenMenu(false)}>
                  سبد خرید
                </Link>
              </li>
            )}
            {headerLink.map((item, idx) => (
              <li key={idx} className="text-white">
                {item.external ? (
                  <a href={item.link} onClick={() => setOpenMenu(false)}>
                    {item.title}
                  </a>
                ) : (
                  <Link href={item.link} onClick={() => setOpenMenu(false)}>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}


          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
