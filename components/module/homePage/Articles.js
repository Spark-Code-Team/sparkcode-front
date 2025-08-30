"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ArrowLeftBlue from "../../../public/icons/ArrowLeftBlue";
import ArrowLeft from "../../../public/icons/ArrowLeft";

const items = [1, 2, 3];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const Articles = () => {
  return (
    <div className="w-full lg:mt-24 mt-10 px-4 md:px-0">
      {/* تیتر */}
      <motion.div
        className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Articles
      </motion.div>

      <motion.div
        className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        مقاله ها
      </motion.div>

      {/* کارت‌ها */}
      <div className="lg:w-[85%] w-full m-auto mt-9 flex flex-wrap lg:flex-nowrap justify-center lg:gap-x-5 gap-y-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="border-2 border-[#182128] lg:w-[392px] w-full sm:w-[75%] lg:m-0 pb-4 rounded-2xl bg-[#0b0f16]/60 backdrop-blur-md hover:shadow-lg"
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
            <div className="bg-gradient-to-b from-[#091119] to-[#2E567D] shadow-lg lg:w-[310px] lg:h-[175px] w-[90%] h-[200px] m-auto mt-4 flex justify-center items-center rounded-2xl">
              <Image src="/image/gallery.png" alt="" width={75} height={75} />
            </div>

            <div className="lg:w-[310px] w-full m-auto mt-5 flex justify-between items-center px-4 lg:px-0">
              <div className="flex gap-x-1">
                <Image src="/image/star-1.png" alt="" width={18} height={18} />
                <Image src="/image/star-1.png" alt="" width={18} height={18} />
                <Image src="/image/star-1.png" alt="" width={18} height={18} />
                <Image src="/image/star-1.png" alt="" width={18} height={18} />
                <Image src="/image/star-0.png" alt="" width={18} height={18} />
              </div>

              <p className="text-sm text-white">12 خرداد 1403</p>
            </div>

            <div className="lg:w-[310px] w-full m-auto mt-6 px-4 lg:px-0 text-white font-bold">
              دامنه چیست؟
            </div>

            <div className="lg:w-[310px] w-full m-auto mt-5 px-4 lg:px-0 text-sm text-[#d4e1f2] leading-6">
              ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها
              و خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه.
            </div>

            <motion.div
              className="lg:w-[310px] w-full m-auto mt-5 flex justify-end lg:justify-end pr-4 lg:pr-0"
              whileHover={{ x: -5 }}
            >
              <Link href="#" className="flex items-center text-white">
                بخوانید <ArrowLeft />
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* دکمه مشاهده همه مقالات */}
      <motion.div
        className="lg:w-[85%] w-full m-auto lg:mt-9 mt-7 flex justify-center lg:justify-end px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Link
          href="#"
          className="
            w-full lg:w-[191px] sm:w-[44%]
            flex justify-center items-center
            p-2 lg:p-2
            rounded-lg
            text-[#2e567d] font-bold
            bg-white/10
            hover:bg-white/20
            transition
          "
        >
          مشاهده همه مقالات <ArrowLeftBlue className="ml-2" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Articles;
