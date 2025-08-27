import Image from "next/image";
import Link from "next/link";
import ArrowLeftRed from "../../../public/icons/ArrowLeftRed";
import projects from "@/constant/projectsmock";


const Projects = () => {
  return (
    <div className="w-full lg:mt-24 mt-10">
      <div className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text animate-floatText">
        Projects
      </div>
      <div className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">
        پروژه ها
      </div>

      <div className=" w-full flex flex-row justify-center gap-x-5 mt-14 lg:gap-x-5 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" w-96 h-[600px] pb-5 border-2 border-[#182128] rounded-3xl text-white hover:animate-textGlow flex flex-col"
          >
            
            <div className=" w-full h-[200px] bg-[#414141]/[0.27] rounded-t-3xl flex items-center justify-center overflow-hidden">
              <Image
                src={project.mainImage}
                alt={project.name}
                width={400}
                height={400}
                className="object-cover h-full w-full rounded-t-3xl"
              />
            </div>

           
            <div className="w-full mt-8 min-h-[50px] flex items-center gap-x-3 text-xl font-bold pr-5">
              {project.logo && (
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={47}
                  height={28}
                />
              )}
              <p>{project.name}</p>
            </div>

           
            <div className="w-full mt-6 pr-5 pl-5 text-sm flex-grow text-justify">
              {project.businessText}
            </div>

           
            <div className="w-full mt-4 pr-5 pl-5 text-xs text-gray-300">
              {project.technicalText}
            </div>

           
            <ul className="list-disc pr-8 mt-4 text-xs text-gray-400">
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>

           
            <div className="w-full mt-4 pr-5 pl-5 flex flex-wrap gap-2">
              {project.frontendStacks.map((stack, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-[#1f3a55] text-[11px] rounded-md"
                >
                  {stack}
                </span>
              ))}
            </div>

           
            <div className="w-full mt-4 flex justify-start items-center text-red-700 font-bold p-4">
              <Link href={project.website} className="flex items-center">
                مشاهده وب سایت <ArrowLeftRed />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;





// import Image from "next/image";
// import Link from "next/link";
// import ArrowLeftRed from "../../../public/icons/ArrowLeftRed";

// const Projects = ()=>{

//     return(

//         <>

//             <div className="w-full lg:mt-24 mt-10">

//                 <div className="w-full text-center lg:text-3xl text-xl bg-gradient-to-b from-[#4899EB] to-[#4899EB]/0 opacity-80 text-transparent bg-clip-text animate-floatText">Projects</div>
//                 <div className="w-full text-center lg:text-2xl text-xl lg:mt-1 text-white font-bold">پروژه ها</div>

//                 <div className="lg:w-[85%] w-full lg:flex m-auto mt-14 lg:gap-x-5">

//                     <div className="lg:w-1/3 w-[75%] lg:m-0 m-auto lg:mt-0 mt-4 pb-5 border-2 border-[#182128] rounded-3xl text-white hover:animate-textGlow flex flex-col">

//                         <div className="lg:w-full lg:h-[200px] w-full h-[200px] bg-[#414141]/[0.27] rounded-t-3xl">
//                             {/*  image  */}
//                         </div>

//                         <div className="w-full mt-8 min-h-[50px] flex items-center gap-x-3 text-xl font-bold pr-5 flex-grow">

//                             <Image src="/image/logo-evaam.png" alt="" width={47} height={28}/>
//                             <p>ایوام</p>

//                         </div>

//                         <div className="w-full mt-8 pr-5 pl-5 text-sm flex-grow">مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید. در حال حاضر هر ۶ماه یک‌بار، تعداد کاربران و درخواست‌ها به‌سمت نشان دو برابر می‌شود.</div>

//                         <div className="w-full mt-8 flex justify-end items-center text-red-700 pl-4">
//                             <Link href="#" className="flex items-center">مشاهده وب سایت <ArrowLeftRed/></Link>
//                         </div>

//                     </div>



//                     <div className="lg:w-1/3 w-[75%] lg:m-0 m-auto lg:mt-0 mt-4 pb-5 border-2 border-[#182128] rounded-3xl text-white hover:animate-textGlow flex flex-col">

//                         <div className="lg:w-full lg:h-[200px] w-full h-[200px] bg-[#414141]/[0.27] rounded-t-3xl">
//                             {/*  image  */}
//                         </div>

//                         <div className="w-full min-h-[50px] mt-8 flex items-center gap-x-3 text-xl font-bold pr-5">

//                             <p>لونا</p>

//                         </div>

//                         <div className="w-full mt-8 pr-5 pl-5 text-sm flex-grow">مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید. در حال حاضر هر ۶ماه یک‌بار، تعداد کاربران و درخواست‌ها به‌سمت نشان دو برابر می‌شود.</div>

//                         <div className="w-full mt-8 flex justify-end items-center text-red-700 pl-4">
//                             <Link href="#" className="flex items-center">مشاهده وب سایت <ArrowLeftRed/></Link>
//                         </div>

//                     </div>



//                     <div className="lg:w-1/3 w-[75%] lg:m-0 m-auto lg:mt-0 mt-4 pb-5 border-2 border-[#182128] rounded-3xl text-white hover:animate-textGlow flex flex-col">

//                         <div className="lg:w-full lg:h-[200px] w-full h-[200px] bg-[#414141]/[0.27] rounded-t-3xl">
//                             {/*  image  */}
//                         </div>

//                         <div className="w-full min-h-[50px] mt-8 flex items-center gap-x-3 text-xl font-bold pr-5 flex-grow">

//                             <Image src="/image/logo-matin.png" alt="" width={47} height={28}/>
//                             <p>متین خودرو</p>

//                         </div>

//                         <div className="w-full mt-8 pr-5 pl-5 text-sm flex-grow ">مقیاس‌پذیری زیرساخت‌های ابری کمک می‌کند تا به تناسب رشد یک کسب‌وکار، دغدغه‌های زیرساختی نداشته باشید. در حال حاضر هر ۶ماه یک‌بار، تعداد کاربران و درخواست‌ها به‌سمت نشان دو برابر می‌شود.</div>

//                         <div className="w-full mt-8 flex justify-end items-center text-red-700 pl-4">
//                             <Link href="#" className="flex items-center">مشاهده وب سایت <ArrowLeftRed/></Link>
//                         </div>

//                     </div>


//                 </div>

//             </div>

//         </>

//     )

// }


// export default Projects;