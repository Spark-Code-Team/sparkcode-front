"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ArrowLeftRed from "../../../public/icons/ArrowLeftRed";
import { projects } from "@/app/projects/_data"; // ⬅️ افزودنی

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const SecondSecSample = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* تیترها */
      /* گرادیان متنی همونی که خودت گذاشتی */}
      <motion.div
        className="w-full text-center md:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text animate-floatText"
        initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }}
      >
        Projects
      </motion.div>
      <motion.div
        className="w-full text-center md:text-2xl text-xl md:mt-1 text-white font-bold mb-4"
        initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }}
      >
        پروژه‌ها
      </motion.div>

      {/* گرید کارت‌ها */}
      <div className="w-[380px] md:w-[90%] md:m-auto mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            className="pb-5 border-2 border-[#182128] rounded-3xl text-white hover:animate-textGlow flex flex-col w-[380px] md:w-full bg-[#0b0f16]/60 backdrop-blur-sm"
            variants={cardVariants} initial="hidden" animate="visible" custom={i}
            whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(72,153,235,.35)" }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            {/* کاور بالای کارت */}
            <div className="relative w-full h-[200px] bg-[#414141]/[0.27] rounded-t-3xl overflow-hidden">
              <Image src={project.cover} alt={project.title} fill className="object-cover" />
            </div>

            {/* عنوان */}
            <div className="w-full mt-8 min-h-[50px] flex items-center gap-x-3 text-xl font-bold pr-5">
              {project.logo && <Image src={project.logo} alt={project.title} width={47} height={28} />}
              <p>{project.title}</p>
            </div>

            {/* توضیح کوتاه */}
            <div className="w-full mt-4 pr-5 pl-5 text-sm text-[#d4e1f2] line-clamp-3">
              {project.desc}
            </div>

            {/* لینک به صفحهٔ داینامیک */}
            <motion.div className="w-full mt-6 flex justify-end items-center pl-4"
              whileHover={{ scale: 1.05 }}>
              <Link href={`/projects/${project.slug}`} className="flex items-center gap-1 text-[#bb86fc]">
                مشاهده جزئیات
                <ArrowLeftRed />
              </Link>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default SecondSecSample;

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import ArrowLeftRed from "../../../public/icons/ArrowLeftRed";

// const projects = [
//   {
//     id: 1,
//     title: "ایوام",
//     logo: "/image/logo-evaam.png",
//     desc: "مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید...",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "لونا",
//     logo: null,
//     desc: "مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید...",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "متین خودرو",
//     logo: "/image/logo-matin.png",
//     desc: "مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید...",
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "نشان",
//     logo: null,
//     desc: "توضیحات پروژه نشان...",
//     link: "#",
//   },
//   {
//     id: 5,
//     title: "پروژه تستی",
//     logo: null,
//     desc: "توضیحات پروژه تستی...",
//     link: "#",
//   },
//   {
//     id: 6,
//     title: "پروژه تستی",
//     logo: null,
//     desc: "توضیحات پروژه تستی...",
//     link: "#",
//   },
//   {
//     id: 7,
//     title: "پروژه تستی",
//     logo: null,
//     desc: "توضیحات پروژه تستی...",
//     link: "#",
//   },
// ];

// const SecondSecSample = () => {

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
//     }),
//   };

//   return (
//     <div className="w-full flex flex-col justify-center items-center">
      
//       {/* عناوین */}
//       <motion.div
//         className="w-full text-center md:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text animate-floatText"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         Projects
//       </motion.div>

//       <motion.div
//         className="w-full text-center md:text-2xl text-xl md:mt-1 text-white font-bold mb-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//       >
//         پروژه ها
//       </motion.div>

//       {/* شبکه پروژه‌ها */}
//       <div className="w-[380px] md:w-[90%] md:m-auto mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {projects.map((project, i) => (
//           <motion.div
//             key={project.id}
//             className="pb-5 border-2 border-[#182128] rounded-3xl text-white hover:animate-textGlow flex flex-col w-[380px] md:w-full bg-[#0b0f16]/60 backdrop-blur-sm"
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             custom={i}
//             whileHover={{
//               scale: 1.03,
//               boxShadow: "0px 0px 25px rgba(72,153,235,0.35)",
//             }}
//             transition={{ type: "spring", stiffness: 150 }}
//           >
//             {/* تصویر بالای کارت */}
//             <div className="w-full h-[200px] bg-[#414141]/[0.27] rounded-t-3xl relative" />

//             {/* عنوان */}
//             <div className="w-full mt-8 min-h-[50px] flex items-center gap-x-3 text-xl font-bold pr-5">
//               {project.logo && (
//                 <Image src={project.logo} alt={project.title} width={47} height={28} />
//               )}
//               <p>{project.title}</p>
//             </div>

//             {/* توضیحات */}
//             <div className="w-full mt-8 pr-5 pl-5 text-sm text-[#d4e1f2]">
//               {project.desc}
//             </div>

//             {/* لینک */}
//             <motion.div
//               className="w-full mt-8 flex justify-end items-center text-red-700 pl-4"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Link href={project.link} className="flex items-center gap-1">
//                 مشاهده وب سایت
//                 <ArrowLeftRed />
//               </Link>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SecondSecSample;