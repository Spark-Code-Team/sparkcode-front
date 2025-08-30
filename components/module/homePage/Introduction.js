"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="lg:w-full lg:h-[750px] lg:pt-1 lg:mt-0 custom-background overflow-hidden flex flex-col items-center">
      
       <div className="lg:w-[85%] w-full mx-auto flex flex-col lg:flex-row-reverse justify-around items-center">
        
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
           <div className="absolute -inset-12 rounded-3xl bg-white/5 blur-[200px] z-0"></div>

          <Image
            src="/image/spark-code.png"
            alt="creative code spark"
            width={614}
            height={583}
            layout="responsive"
            className="relative z-10"
          />
        </motion.div>

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
              خلاقیت بی حد
            </motion.span>

            <motion.span
              className="lg:text-[48px] text-[24px] font-bold text-white lg:leading-[90px] block"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
            >
              فناوری بی مرز
            </motion.span>
          </div>

           <motion.p
            className="lg:w-full text-base lg:mt-16 mt-4 lg:leading-9 text-white hidden lg:block"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و
            خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه، با شفافیت و صداقت با شما
            در ارتباط است. این همکاری نزدیک به ما کمک می‌کند.
          </motion.p>
        </motion.div>
      </div>

       <div className="w-full text-center mt-6 lg:hidden px-3">
        <motion.span
          className="text-[24px] font-bold text-white block"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          خلاقیت بی حد
        </motion.span>
        <motion.span
          className="text-[24px] font-bold text-white block"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
        >
          فناوری بی مرز
        </motion.span>
      </div>

       <motion.div
        className="w-full text-sm leading-7 text-white mt-4 lg:hidden px-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        ما به ارتباط نزدیک با مشتریان خود اعتقاد داریم. تیم ما با دقت به نیازها و
        خواسته‌های شما گوش می‌دهد و در طی فرآیند توسعه، با شفافیت و صداقت با شما در
        ارتباط است. این همکاری نزدیک به ما کمک می‌کند.
      </motion.div>
    </div>
  );
};

export default Introduction;
