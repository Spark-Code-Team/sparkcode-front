"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ArrowLeftRed from "../../../public/icons/ArrowLeftRed";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.7, ease: "easeOut" },
  }),
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ایوام",
      img: "/image/logo-evaam.png",
      desc: "مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید. در حال حاضر هر ۶ماه یک‌بار، تعداد کاربران و درخواست‌ها به‌سمت نشان دو برابر می‌شود.",
      link: "#",
    },
    {
      id: 2,
      title: "لونا",
      img: null,
      desc: "مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید. در حال حاضر هر ۶ماه یک‌بار، تعداد کاربران و درخواست‌ها به‌سمت نشان دو برابر می‌شود.",
      link: "#",
    },
    {
      id: 3,
      title: "متین خودرو",
      img: "/image/logo-matin.png",
      desc: "مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید. در حال حاضر هر ۶ماه یک‌بار، تعداد کاربران و درخواست‌ها به‌سمت نشان دو برابر می‌شود.",
      link: "#",
    },
  ];

  return (
    <div className="w-full lg:mt-24 mt-10 px-3">
       <motion.div
        className="w-full text-center lg:text-3xl text-2xl sm:text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.div>

      <motion.div
        className="w-full text-center lg:text-2xl text-lg sm:text-base lg:mt-1 text-white font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        پروژه ها
      </motion.div>

       <div className="lg:w-[85%] w-full lg:flex-row flex-col flex m-auto mt-14 lg:gap-x-5 gap-y-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="lg:w-1/3 w-full pb-5 border-2 border-[#182128] rounded-3xl text-white flex flex-col bg-[#0b0f16]/60 backdrop-blur-sm"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 25px rgba(72,153,235,0.35)",
            }}
            transition={{ type: "spring", stiffness: 150 }}
          >
             <div className="w-full h-[180px] lg:h-[200px] bg-[#414141]/[0.27] rounded-t-3xl" />

             <div className="w-full mt-6 lg:mt-8 min-h-[50px] flex items-center gap-x-3 text-lg lg:text-xl font-bold pr-4 flex-grow">
              {p.img && <Image src={p.img} alt={p.title} width={47} height={28} />}
              <p>{p.title}</p>
            </div>

             <div className="w-full mt-4 lg:mt-8 pr-4 pl-4 text-sm sm:text-xs leading-6 text-[#d4e1f2] flex-grow">
              {p.desc}
            </div>

             <motion.div
              className="w-full mt-6 lg:mt-8 flex justify-end items-center text-red-700 pl-3 pr-4"
              whileHover="hover"
            >
              <Link href={p.link} className="flex items-center gap-1 group">
                مشاهده وب سایت
                <motion.span
                  variants={{
                    hover: { x: -5 },
                  }}
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <ArrowLeftRed />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
