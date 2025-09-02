import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../../../public/icons/ArrowRight";

const AboutSparkCode = () => {
  return (
    <>
      <div className="w-full lg:mt-24 mt-10">
        <div className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text animate-floatText">
          About Spark Code
        </div>
        <div className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">
          درباره اسپارک کد
        </div>

        <div className="lg:w-[85%] w-full lg:flex m-auto mt-14">
          <div className=" lg:w-1/2 w-full flex flex-wrap items-center text-base lg:pr-7 lg:pl-14 pr-7 pl-7">
            <p className="w-full leading-8 text-white text-justify">
              اسپارک‌کد یه تیم پر از آدم‌های جسور و بااستعداده! یه عالمه
              برنامه‌نویس حرفه‌ای، طراح خلاق و متخصص هوش مصنوعی که عاشق چالش‌های
              جدید هستن و با اشتیاق زیاد آماده‌‌ن تا بهتون کمک کنن در دنیای
              تکنولوژی موفق بشین. ما با هم کار می‌کنیم تا ایده‌هاتونو به واقعیت
              تبدیل کنیم و بهتون کمک کنیم تا از قالب‌های قدیمی خارج شین و یه
              تجربه جدید و هیجان‌انگیز داشته باشین. وقتشه که با اسپارک‌کد، یه
              قدم بزرگ به سمت آینده بردارین چون آینده از این‌جا شروع می‌شه!
            </p>

            <Link
              href="/about"
              className="
    w-full
    lg:w-auto
    flex
    justify-center
    items-center
    bg-[#2E567D]
    text-white
    rounded-lg
    px-4
    py-2
    gap-x-2
    whitespace-nowrap
    transition-all
    duration-300
    ease-in-out
    hover:bg-[#3F6FA3]
    hover:text-lg
  "
            >
              درباره ما
              <ArrowRight className="inline-block transition-transform duration-300 ease-in-out hover:translate-x-1" />
            </Link>
          </div>

          <div className="lg:w-1/2 w-full lg:mt-0 mt-10 flex justify-center lg:pr-10 lg:pl-10 pr-10 pl-10">
            <Image
              src="/image/about-spark.png"
              alt=""
              width={496}
              height={338}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSparkCode;
