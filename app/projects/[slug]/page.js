"use client";

import { getProjectBySlug } from "../_data";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectDetails({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
  
    if (!project) return notFound();

  return (
    <main className="min-h-screen text-[#d4e1f2]">
      {/* هدر/کاور پروژه */}
      <section className="max-w-6xl mx-auto px-4 pt-14">
        <div className="rounded-3xl overflow-hidden border border-[#2e567d]/40 bg-[#2e567d]/10">
          <div className="relative aspect-[16/8]">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(9,17,25)] via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text">
                {project.title}
              </h1>
              <p className="mt-2 text-sm md:text-base max-w-3xl">
                {project.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* توضیحات و چالش‌ها */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          className="lg:col-span-2"
        >
          <div className="rounded-2xl p-6 bg-[#2e567d]/10 border border-[#2e567d]/30">
            <h2 className="text-xl font-bold text-white">درباره پروژه</h2>
            <p className="mt-3 leading-7">{project.desc}</p>
          </div>

          <div className="mt-6 rounded-2xl p-6 bg-[#2e567d]/10 border border-[#2e567d]/30">
            <h2 className="text-xl font-bold text-white">چالش‌ها</h2>
            <ul className="mt-3 grid gap-2">
              {project.challenges.map((c, i) => (
                <li key={i} className="leading-7">
                  • {c}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* استک‌ها */}
        <motion.aside
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="h-fit"
        >
          <div className="rounded-2xl p-6 bg-[#bb86fc]/10 border border-[#bb86fc]/30">
            <h3 className="text-lg font-bold text-white mb-3">تکنولوژی‌ها</h3>
            <div className="flex flex-wrap gap-2">
              {project.stacks.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-[#2e567d]/30 border border-[#2e567d]/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.aside>
      </section>

      {/* گالری */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold text-white mb-4">گالری</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {project.gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.06,
                type: "spring",
                stiffness: 140,
                damping: 16,
              }}
              className="overflow-hidden rounded-2xl border border-[#2e567d]/30 bg-[#2e567d]/10"
            >
              <Image
                src={src}
                alt={`mock ${i + 1}`}
                width={900}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* لینک به سایت واقعی */}
      {project.url && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 py-10 flex justify-center"
        >
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#4899EB] text-white font-bold text-lg shadow-glow hover:scale-105 transition-transform duration-300"
          >
            مشاهده سایت واقعی پروژه 🚀
          </Link>
        </motion.div>
      )}
    </main>
  );
}


// "use client";

// import { getProjectBySlug } from "../_data";
// import { notFound } from "next/navigation";
// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Image from "next/image";

// export default function ProjectDetails({ params }) {
//   const project = getProjectBySlug(params.slug);
//   if (!project) return notFound();

//   const heroRef = useRef(null);
//   useEffect(() => {
//     gsap.fromTo(heroRef.current, { scale: .97, opacity: 0 }, { scale: 1, opacity: 1, duration: .7, ease: "power2.out" });
//   }, []);

//   return (
//     <main className="min-h-screen text-[#d4e1f2]">
//       {/* هرو */}
//       <section ref={heroRef} className="max-w-6xl mx-auto px-4 pt-14">
//         <div className="rounded-3xl overflow-hidden border border-[#2e567d]/40 bg-[#2e567d]/10">
//           <div className="relative aspect-[16/8]">
//             <Image src={project.cover} alt={project.title} fill className="object-cover" priority />
//             <div className="absolute inset-0 bg-gradient-to-t from-[rgb(9,17,25)] via-transparent to-transparent" />
//             <div className="absolute bottom-5 left-5 right-5">
//               <h1 className="text-3xl md:text-4xl font-extrabold text-white bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text">
//                 {project.title}
//               </h1>
//               <p className="mt-2 text-sm md:text-base max-w-3xl">{project.desc}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* محتوا */}
//       <section className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
//         {/* توضیحات و چالش‌ها */}
//         <motion.div
//           initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ type: "spring", stiffness: 140, damping: 18 }}
//           className="lg:col-span-2"
//         >
//           <div className="rounded-2xl p-6 bg-[#2e567d]/10 border border-[#2e567d]/30">
//             <h2 className="text-xl font-bold text-white">درباره پروژه</h2>
//             <p className="mt-3 leading-7">{project.desc}</p>
//           </div>

//           <div className="mt-6 rounded-2xl p-6 bg-[#2e567d]/10 border border-[#2e567d]/30">
//             <h2 className="text-xl font-bold text-white">چالش‌ها</h2>
//             <ul className="mt-3 grid gap-2">
//               {project.challenges.map((c, i) => (
//                 <li key={i} className="leading-7">• {c}</li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         {/* استک‌ها */}
//         <motion.aside
//           initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true, margin: "-80px" }}
//           className="h-fit"
//         >
//           <div className="rounded-2xl p-6 bg-[#bb86fc]/10 border border-[#bb86fc]/30">
//             <h3 className="text-lg font-bold text-white mb-3">تکنولوژی‌ها</h3>
//             <div className="flex flex-wrap gap-2">
//               {project.stacks.map((t) => (
//                 <span key={t} className="text-xs px-2 py-1 rounded-full bg-[#2e567d]/30 border border-[#2e567d]/40">
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </motion.aside>
//       </section>

//       {/* گالری / موک‌آپ‌ها */}
//       <section className="max-w-6xl mx-auto px-4 pb-16">
//         <h2 className="text-xl font-bold text-white mb-4">گالری</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {project.gallery.map((src, i) => (
//             <motion.div
//               key={src}
//               initial={{ scale: .96, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * .06, type: "spring", stiffness: 140, damping: 16 }}
//               className="overflow-hidden rounded-2xl border border-[#2e567d]/30 bg-[#2e567d]/10"
//             >
//               <Image src={src} alt={`mock ${i+1}`} width={900} height={600}
//                      className="w-full h-full object-cover hover:scale-105 transition duration-500" />
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
