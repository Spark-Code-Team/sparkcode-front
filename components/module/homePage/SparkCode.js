"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const SparkCode = () => {
  const cards = [
    {
      id: "10",
      title: "درک عمیق از نیازهای مشتری",
      text: "ما به صدای شما گوش می‌دهیم. درک درست از نیازها و دغدغه‌های مشتری، پایه تصمیم‌گیری‌های ماست. با تحلیل دقیق رفتار کاربران و شناخت بازار هدف، خدماتی طراحی می‌کنیم که دقیقا با خواسته‌های واقعی شما هم‌راستا باشد. این ارتباط نزدیک، کلید موفقیت پروژه‌های ماست.",
      img: "/image/profile.png",
      arrow: "/image/arrow1.png",
      arrowPos: "absolute -bottom-20 -right-14 hidden lg:block",
    },
    {
      id: "01",
      title: "تمرکز بر کیفیت و امنیت",
      text: "ما به کیفیت در تمام سطوح پروژه پایبند هستیم. امنیت اطلاعات شما اولویت ماست و با رعایت استانداردهای روز دنیا، تلاش می‌کنیم تا بستری مطمئن برای کسب‌وکار شما فراهم کنیم. کیفیت بالا در طراحی و اجرا، همراه با تست‌های دقیق، باعث می‌شود پروژه‌ای پایدار و قابل‌اعتماد تحویل بگیرید.",
      img: "/image/shield.png",
    },
    {
      id: "00",
      title: "تجربه و تخصص حرفه‌ای",
      text: "ما با تکیه بر سال‌ها تجربه در اجرای پروژه‌های متنوع، نیازهای شما را به‌خوبی درک می‌کنیم. تیم ما از متخصصانی تشکیل شده که با دانش فنی به‌روز، بهترین راه‌حل‌ها را با کیفیت بالا و دقت کامل در اختیارتان می‌گذارند. این تخصص باعث می‌شود تا در تمامی مراحل پروژه، از تحلیل تا اجرا، در کنار شما باشیم و خروجی دقیق و مطمئن ارائه دهیم.",
      img: "/image/star.png",
      arrow: "/image/arrow2.png",
      arrowPos: "absolute -top-20 -left-14 hidden lg:block",
    },
  ];

  return (
    <div className="w-full lg:mt-0 mt-10">
      <motion.div
        className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ? Why Spark Code
      </motion.div>

      <motion.div
        className="w-full text-center lg:text-2xl text-lg mt-2 text-white font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        چرا اسپارک کد ؟
      </motion.div>

      <div className="lg:w-[85%] w-full m-auto lg:mt-20 mt-10 flex flex-col lg:flex-row lg:gap-x-5 gap-y-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="border-2 border-[#182128] custom-border lg:w-1/3 w-[92%] m-auto flex flex-col items-center relative rounded-2xl bg-[#0b0f16]/60 backdrop-blur-md p-5"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 20px rgba(72,153,235,0.5)",
            }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <motion.p
              className="absolute -top-10 left-5 text-[40px] lg:text-[64px] text-yellow-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.4, type: "spring", stiffness: 120 }}
            >
              {card.id}
            </motion.p>

            <motion.div
              className="w-[90px] h-[90px] lg:w-[165px] lg:h-[165px] flex justify-center items-center mt-5 lg:mt-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={card.img}
                alt={card.title}
                width={165}
                height={160}
                className="object-contain opacity-80"
              />
            </motion.div>

            <div className="w-full mt-5 text-center text-md lg:text-lg font-bold z-10 text-white">
              {card.title}
            </div>

            <div className="w-full mt-3 lg:mt-5 text-justify text-[13px] lg:text-sm leading-6 lg:leading-7 text-[#d4e1f2]">
              {card.text}
            </div>

            {card.arrow && (
              <motion.div
                className={card.arrowPos}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.6 }}
              >
                <Image src={card.arrow} alt="arrow" width={88} height={97} />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SparkCode;
