export const projects = [
    {
      slug: "evaam",
      id: 1,
      title: "ایوام",
      logo: "/image/logo-evaam.png",
      cover: "/projects/evaam/cover.jpg",
      gallery: [
        "/projects/evaam/shot-1.jpg",
        "/projects/evaam/shot-2.jpg",
        "/projects/evaam/shot-3.jpg",
      ],
      stacks: [
        "Next.js",
        "TailwindCSS",
        "Framer Motion",
        "Django",
        "PostgreSQL",
        "Docker",
      ],
      challenges: [
        "حفظ کارایی بالا با وجود انیمیشن‌ها",
        "طراحی ماژولار با پشتیبانی از RTL و LTR",
        "اینـتگریشن هدلس وردپرس برای بلاگ و سئو",
      ],
      desc: "پلتفرم فروشگاهی و محتوایی با تمرکز روی سرعت، سئو و تجربه کاربری نرم و لوکس. شامل ماژول‌های فروش، بلاگ هدلس، و پنل مدیریت مشتری.",
      url: "https://evaam.com",
    },
    {
      slug: "luna",
      id: 2,
      title: "لونا",
      logo: null,
      cover: "/projects/luna/cover.jpg",
      gallery: [
        "/projects/luna/shot-1.jpg",
        "/projects/luna/shot-2.jpg",
        "/projects/luna/shot-3.jpg",
      ],
      stacks: ["Next.js", "GSAP", "Redis", "Traefik"],
      challenges: [
        "پیاده‌سازی پارالاکس سنگین با GSAP ScrollTrigger",
        "بهینه‌سازی CLS و LCP برای Lighthouse",
      ],
      desc: "سایت لندینگ تعاملی با افکت‌های اسکرول، انیمیشن‌های روان و تجربه کاربری چشمگیر.",
      url: "https://luna.com",
    },
    {
      slug: "matin-motors",
      id: 3,
      title: "متین خودرو",
      logo: "/image/logo-matin.png",
      cover: "/projects/matin/cover.jpg",
      gallery: [
        "/projects/matin/shot-1.jpg",
        "/projects/matin/shot-2.jpg",
        "/projects/matin/shot-3.jpg",
      ],
      stacks: ["Next.js", "TailwindCSS", "Framer Motion", "Node.js", "MongoDB"],
      challenges: [
        "پیاده‌سازی فیلترگذاری سریع و ریل‌تایم روی لیست خودروها",
        "مدیریت تصاویر موک‌آپ با حجم بالا",
        "ایجاد پنل ادمین سبک و کارآمد",
      ],
      desc: "وب‌سایت شرکتی برای نمایش محصولات و خدمات خودرو، همراه با گالری تصاویر و امکان فیلتر پیشرفته.",
      url: "https://matinmotors.com",
    },
  ];
  
  export const getProjectBySlug = (slug) =>
    projects.find((p) => p.slug === slug);
  