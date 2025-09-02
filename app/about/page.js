"use client";

import { motion } from "framer-motion";

const About = () => {
  const missionVision = [
    {
      title: " تاریخچه  ",
      desc: " اسپارک‌کد از همون اول با هدف تغییر دادن دنیای فناوری و کمک به افراد برای ارتقای مهارت‌هاشون شروع به کار کرد. ما می‌خواستیم پلتفرمی باشیم که توش هر کسی بتونه یاد بگیره، همکاری کنه و از جدیدترین تکنولوژی‌ها استفاده کنه. از طراحی سایت و کدنویسی گرفته تا امنیت و خدمات IT، تیم ما همیشه دنبال نوآوری و راه‌حل‌های خلاقانه بوده. باور ما اینه که فناوری قدرت تغییر دنیا رو داره و ما همیشه برای خلق این تغییر تلاش می‌کنیم ",
    },
    {
      title: "چشم‌انداز ما",
      desc: "چشم‌انداز اسپارک‌کد ارائه پلتفرمی پیشرو در سطح جهانی برای یادگیری و همکاری در زمینه فناوری، و ماموریت ما ارتقای سطح تکنولوژی و کمک به افراد برای بهبود مهارت‌های فنی و دستیابی به اهداف حرفه‌ای‌شونه. ما به قدرت فناوری برای تغییر جهان اعتقاد داریم و می‌خوایم به افراد کمک کنیم تا از اون برای ساخت آینده‌ای بهتر بهره‌برداری کنن.",
    },
  ];

  const teamMembers = [
    { name: "امیر علی ارشاد", profile:"image/amirAli.jpg", role: "توسعه‌دهنده بک‌اند" },
    { name: "محسن پورپاک", profile:"image/mohsen.jpg", role: "مدیر تیم تکنولوژی" },
    { name: "علیرضا سلمان", profile:"image/aliReza.jpg", role: "برنامه نویس فرانت‌اند" },
    { name: "فاطمه صباغ", profile:"image/fateme.jpg", role: "برنامه نویس فرانت‌اند" },
    { name: "محمد مهدی تهامی", profile:"image/mahdi.jpg", role: "برنامه نویس فرانت‌اند" },
  ];

  const memberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen mt-10 p-8">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-[#1e2a78] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          درباره ما
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          اسپارکد با هدف ارائه خدمات حرفه‌ای در زمینه طراحی وب و توسعه برنامه‌های کاربردی، از سال 1400 فعالیت خود را آغاز کرده است...
        </motion.p>

        {/* ماموریت و چشم انداز */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-justify">
          {missionVision.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#1e2a78] bg-opacity-20 rounded-2xl p-6 shadow-lg hover:shadow-blue-700/50 transition cursor-pointer"
              custom={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.3, duration: 0.7, ease: "easeOut" },
                }),
              }}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03, boxShadow: "0px 0px 25px rgba(72,153,235,0.5)" }}
            >
              <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="text-2xl font-bold text-center text-[#1e2a78] mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          اعضای تیم
        </motion.h2>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              className="bg-[#1e2a78]/40 rounded-xl p-4 w-full md:w-1/3 text-center hover:bg-[#1e2a78]/80 transition duration-500"
              custom={i}
              variants={memberVariants}
              initial="hidden"
              animate="visible"
            >
              <img className="w-24 h-24 mx-auto mb-4 rounded-full" src={member.profile} />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
