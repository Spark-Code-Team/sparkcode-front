import Image from "next/image";
import Link from "next/link";
import ArrowLeftRed from "@/public/icons/ArrowLeftRed";

const projects = [
  {
    id: 1,
    title: "ایوام",
    logo: "/image/logo-evaam.png",
    desc: "مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید...",
    link: "#",
  },
  {
    id: 2,
    title: "لونا",
    logo: null,
    desc: "مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید...",
    link: "#",
  },
  {
    id: 3,
    title: "متین خودرو",
    logo: "/image/logo-matin.png",
    desc: "مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید...",
    link: "#",
  },
  {
    id: 4,
    title: "نشان",
    logo: null,
    desc: "توضیحات پروژه نشان...",
    link: "#",
  },
  {
    id: 5,
    title: "پروژه تستی",
    logo: null,
    desc: "توضیحات پروژه تستی...",
    link: "#",
  },
  {
    id: 6,
    title: "پروژه تستی",
    logo: null,
    desc: "توضیحات پروژه تستی...",
    link: "#",
  },
  {
    id: 7,
    title: "پروژه تستی",
    logo: null,
    desc: "توضیحات پروژه تستی...",
    link: "#",
  },
];

const SecondSecSample = () => {
  return (
    <div className="
    w-full 
    flex 
    flex-col
    justify-center
    items-center
    ">
      
      <div className="
      w-full 
      text-center 
      md:text-3xl 
      text-xl 
      bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 
      opacity-80 
      text-transparent 
      bg-clip-text 
      animate-floatText
      ">
        Projects
      </div>

      <div className="
      w-full 
      text-center 
      md:text-2xl 
      text-xl 
      md:mt-1 
      text-white 
      font-bold
      mb-4
      ">
        پروژه ها
      </div>

      
      <div className="
      w-[380px]
      md:w-[90%] 
      md:m-auto 
      mt-14 
      grid 
      sm:grid-cols-2 
      md:grid-cols-3 
      gap-6
      ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
            pb-5 
            border-2 
            border-[#182128] 
            rounded-3xl 
            text-white 
            hover:animate-textGlow 
            flex 
            flex-col
            w-[380px]
            md:w-full
            "
          >
            
            <div className="
            w-full
            h-[200px] 
            bg-[#414141]/[0.27] 
            rounded-t-3xl
            "/>

           
            <div className="
            w-full 
            mt-8 
            min-h-[50px] 
            flex 
            items-center 
            gap-x-3 
            text-xl 
            font-bold 
            pr-5
            ">
              {project.logo && (
                <Image src={project.logo} alt={project.title} width={47} height={28} />
              )}
              <p>{project.title}</p>
            </div>

          
            <div className="
            w-full 
            mt-8 
            pr-5 
            pl-5 
            text-sm
            ">
              {project.desc}
            </div>

            
            <div className="
            w-full 
            mt-8 
            flex 
            justify-end 
            items-center 
            text-red-700 
            pl-4
            ">
              <Link href={project.link} className="flex items-center">
                مشاهده وب سایت <ArrowLeftRed />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondSecSample;