const ServicesUs = () => {
    return (
      <div className="w-full lg:mt-20 mt-10">
  
        <div className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text animate-floatText">
          Our Services
        </div>
        <div className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">
          خدمات ما
        </div>
  
        <div className="lg:w-[85%] w-full m-auto lg:mt-16 flex flex-wrap justify-center gap-6">
  
          {/* کارت خدمات */}
          {[
            {
              title: "طراحی وب سایت",
              bgClass: "custom-background-blue",
              text: "ما در Sparkcode وب‌سایت‌هایی طراحی می‌کنیم که مبتنی بر نیاز واقعی کاربر هستند. تمرکز ما بر بهینه‌سازی تجربه کاربری و پیاده‌سازی دقیق‌ترین استانداردهای فرانت‌اند و بک‌اند است."
            },
            {
              title: "برنامه نویسی",
              bgClass: "custom-background-yellow",
              text: "در Sparkcode، توسعه نرم‌افزار را با معماری ماژولار، کدنویسی تمیز و تمرکز بر مقیاس‌پذیری انجام می‌دهیم. هر خط کد بر اساس نیاز واقعی محصول و اصول مهندسی نرم‌افزار نوشته می‌شود."
            },
            {
              title: "مشاوره",
              bgClass: "custom-background-red",
              text: "مشاوره برای ما یعنی تحلیل دقیق نیاز، انتخاب فناوری مناسب و طراحی مسیری که توسعه‌ی نرم‌افزار را از ابتدا با رشد و دیده شدن هم‌راستا می‌کند."
            },
            {
              title: "هوش مصنوعی",
              bgClass: "custom-background-blue",
              text: "ما از هوش مصنوعی برای حل مسائل واقعی استفاده می‌کنیم. از مدل‌سازی داده و یادگیری ماشین تا پیاده‌سازی سیستم‌های توصیه‌گر و پردازش زبان طبیعی، راه‌حل‌هایمان دقیق، قابل ‌اتکا و قابل ‌سفارشی‌سازی‌اند."
            },
            {
              title: "امنیت",
              bgClass: "custom-background-yellow",
              text: "امنیت در Sparkcode بخشی از فرآیند توسعه است، نه مرحله‌ای جدا. از طراحی معماری امن تا تست نفوذ و پیاده‌سازی سیاست‌های دسترسی، امنیت را در سطح کد و زیرساخت تضمین می‌کنیم."
            },
            {
              title: "زیرساخت",
              bgClass: "custom-background-red",
              text: "زیرساخت‌های ما بر پایه‌ی اتوماسیون، مقیاس‌پذیری و نظارت مداوم طراحی می‌شوند. از کانتینرسازی تا استقرار در فضای ابری، هر لایه برای پایداری و توسعه‌ی بی‌وقفه بهینه‌سازی شده است."
            }
          ].map((service, idx) => (
            <div key={idx} className="w-full sm:w-[48%] lg:w-1/3 flex flex-col items-center text-center mx-auto relative">
  
              {/* تیتر */}
              <div className="w-full text-white text-lg font-semibold mb-[-30px]">
                {service.title}
              </div>
  
              {/* باکس محتوا */}
              <div className={`${service.bgClass} p-4 rounded-lg w-full`}>
                <div className="text-white text-sm p-5 lg:text-base leading-relaxed">
                  {service.text}
                </div>
              </div>
  
            </div>
          ))}
  
        </div>
      </div>
    )
  }
  
  export default ServicesUs;
  