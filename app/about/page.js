const About = ()=>{

    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen mt-10 p-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-[#1e2a78] mb-6">
              درباره ما
            </h1>
    
            <p className="text-lg text-gray-300 text-center mb-12">
            اسپارکد با هدف ارائه خدمات حرفه‌ای در زمینه طراحی وب و توسعه برنامه‌های کاربردی، از سال 1400 فعالیت خود را آغاز کرده است. تیم ما متشکل از توسعه‌دهندگان، طراحان و متخصصان فنی حرفه ای است که همواره در تلاش برای خلق راه‌حل‌های نوآورانه و متناسب با نیازهای مشتریان هستیم. مهم‌ترین هدف ما افزایش حضور دیجیتال کسب‌وکارهای مختلف و ایجاد تجربه‌ای کاربرپسند و جذاب است. با تمرکز بر کیفیت، امنیت، خلاقیت و رضایت مشتری، به همراه استفاده از فناوری‌های روز دنیا، همواره در پی ارائه بهترین خدمات هستیم.
            </p>
    
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1e2a78] bg-opacity-20 rounded-2xl p-6 shadow-lg hover:shadow-blue-700/50 transition">
                <h2 className="text-xl font-semibold mb-4">ماموریت ما</h2>
                <p className="text-gray-400">
                تاکید بر ارائه راه‌حل‌های نوآورانه و با کیفیت در زمینه طراحی وب و برنامه‌نویسی برای رشد و موفقیت مشتریان.
                </p>
              </div>
    
              <div className="bg-[#1e2a78] bg-opacity-20 rounded-2xl p-6 shadow-lg hover:shadow-blue-700/50 transition">
                <h2 className="text-xl font-semibold mb-4">چشم‌انداز ما</h2>
                <p className="text-gray-400">
                هدف ما تبدیل شدن به یکی از برترین شرکت‌های فناوری در منطقه با ارائه خدمات مبتنی بر نوآوری و رضایت‌مندی مشتریان است.
                </p>
              </div>
            </div>
    
            <h2 className="text-2xl font-bold text-center text-[#1e2a78] mt-16 mb-8">
              اعضای تیم
            </h2>
    
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { name: "امیر علی ارشاد",profile:"image/amirAli.jpg", role: "توسعه‌دهنده بک‌اند" },
                { name: "محسن پورپاک",profile:"image/mohsen.jpg", role: "مدیر تیم تکنولوژی" },
                { name: "علیرضا سلمان",profile:"image/aliReza.jpg", role: "برنامه نویس فرانت‌اند" },
                { name: "فاطمه صباغ",profile:"image/fateme.jpg", role: "برنامه نویس فرانت‌اند" },
                { name: "محمد مهدی تهامی",profile:"image/mahdi.jpg", role: "برنامه نویس فرانت‌اند" },

              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-[#1e2a78]/40 rounded-xl p-4 md:w-1/3 text-center hover:bg-[#1e2a78]/80 transition duration-500"
                >
                  <img className="w-24 h-24 mx-auto mb-4 rounded-full" src={member.profile}/>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      );
    
}


export default About;