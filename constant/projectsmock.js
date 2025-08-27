const projects = [
    {
      id: 1,
      name: "ایوام",
      logo: "/image/logo-evaam.png",
      mainImage: "/image/evaampic.png",
      gallery: ["/image/evaampic.png", "/image/tech.png", "/image/tech.png"],
      businessText:
        "ایوام بستری برای مدیریت مالی سازمان‌هاست که به کسب‌وکارها کمک می‌کند تا فرآیندهای پیچیده‌ی مالی را ساده‌تر و شفاف‌تر مدیریت کنند.",
      technicalText:
        "در این پروژه تمرکز اصلی روی طراحی تجربه کاربری ساده و استفاده از کتابخانه‌های UI بهینه بود.",
      challenges: [
        "پیاده‌سازی داشبورد مقیاس‌پذیر با داده‌های حجیم",
        "هماهنگی تجربه کاربری بین وب و موبایل",
      ],
      frontendStacks: ["Next.js", "TailwindCSS", "Framer Motion", "Chart.js"],
      website: "http://e-vaam.com/",
    },
    {
      id: 2,
      name: "لونا",
      logo: "/image/loanapic.png",
      mainImage: "/image/loanapic.png",
      gallery: ["/image/loanapic.png", "/image/tech.png"],
      businessText:
        "لونا اپلیکیشنی برای رزرو و مدیریت رویدادهای فرهنگی است که به کاربران امکان برنامه‌ریزی و خرید بلیت آنلاین می‌دهد.",
      technicalText:
        "تمرکز روی ریسپانسیو بودن و انیمیشن‌های نرم برای تجربه کاربری بهتر.",
      challenges: [
        "هماهنگ‌سازی سیستم پرداخت با API داخلی",
        "بهینه‌سازی سرعت لود صفحات",
      ],
      frontendStacks: ["React.js", "Redux Toolkit", "TailwindCSS"],
      website: "http://loana.com/",
    },
    {
      id: 3,
      name: "متین خودرو",
      logo: "/image/logo-matin.png",
      mainImage: "/image/matinpic.png",
      gallery: ["/image/tech.png"],
      businessText:
        "متین خودرو یک پلتفرم فروش خودروهای دست دوم با امکان بررسی آنلاین و ثبت درخواست خرید است.",
      technicalText:
        "رابط کاربری سریع با فیلترهای داینامیک و تجربه کاربری مناسب برای کاربران موبایل.",
      challenges: [
        "پیاده‌سازی سیستم جستجوی سریع",
        "هماهنگ‌سازی فیلترهای متعدد در UI",
      ],
      frontendStacks: ["Next.js", "SWR", "TailwindCSS"],
      website: "http://matinkhodroo.com/",
    },
  ];
  
  export default projects;
  