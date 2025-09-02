"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ServicesBanner = () => {
  return (
    <div className="lg:w-full lg:h-[600px] lg:pt-1 lg:mt-0 custom-background overflow-hidden flex flex-col items-center">
      
      <div className="lg:w-[85%] w-full mx-auto flex flex-col lg:flex-row-reverse justify-around items-center">
        
        {/* تصویر */}
        <motion.div
          className="w-full ml-5 md:ml-0 lg:w-[614px] flex justify-center lg:justify-start order-1 relative mx-auto lg:mx-0"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* هاله محو پشت تصویر */}
          <div className="absolute -inset-12 rounded-3xl bg-white/5 blur-[200px] z-0"></div>

          <Image
            src="/image/spark-code.png"
            alt="services banner"
            width={614}
            height={583}
            layout="responsive"
            className="relative z-10"
          />
        </motion.div>

        {/* متن دسکتاپ */}
        <motion.div
          className="lg:w-[553px] w-full flex flex-col justify-center items-start order-2 px-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.4, delayChildren: 0.3 },
            },
          }}
        >
          <div className="hidden lg:block lg:mt-32">
            <motion.span
              className="lg:text-[48px] text-[24px] font-bold text-white lg:leading-[90px] block"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              انتخاب مسیر درست،
            </motion.span>

            <motion.span
              className="lg:text-[48px] text-[24px] font-bold text-white lg:leading-[90px] block"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
            >
              برای موفقیت آنلاین
            </motion.span>
          </div>

          <motion.p
            className="lg:w-full text-base lg:mt-12 mt-4 lg:leading-9 text-white hidden lg:block"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            <p className="text-justify">
            ما یک تیم انفورماتیک و برنامه‌نویسی هستیم که به کسب و کارها کمک می‌کنیم تا در دنیای دیجیتال بدرخشند. با طراحی وب‌سایت‌های مدرن و کاربرپسند، کدنویسی حرفه‌ای و ارائه مشاوره‌های تخصصی، شما را در مسیر درست موفقیت همراهی می‌کنیم.
            </p>

          </motion.p>
        </motion.div>
      </div>

      {/* متن موبایل زیر تصویر */}
      <motion.div
        className="w-full text-sm leading-7 text-white mt-4 lg:hidden px-3 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
         <p className="text-justify text-[15px] px-4">
            ما یک تیم انفورماتیک و برنامه‌نویسی هستیم که به کسب و کارها کمک می‌کنیم تا در دنیای دیجیتال بدرخشند. با طراحی وب‌سایت‌های مدرن و کاربرپسند، کدنویسی حرفه‌ای و ارائه مشاوره‌های تخصصی، شما را در مسیر درست موفقیت همراهی می‌کنیم.
            </p>
      </motion.div>

    </div>
  );
};

export default ServicesBanner;
