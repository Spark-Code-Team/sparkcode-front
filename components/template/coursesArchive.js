'use client'

import { useEffect, useState } from "react";
import { Courses_list } from "@/services/courses";
import LessonsCard from "../element/LessonsCard";
import Spinner from "../element/Loading";

export default function CoursesArchive() {

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    status: "",
    ordering: "-created_at", 
  });

  
  const [searchInput, setSearchInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  
  const SORTS = [
    { label: "جدیدترین", value: "-created_at" },
    { label: "قدیمی‌ترین", value: "created_at" },
    { label: "ارزان‌ترین", value: "price" },
    { label: "گران‌ترین", value: "-price" },
  ];

  
  const STATUS_OPTIONS = [
    { label: "همه دوره‌ها", value: "" },
    { label: "در حال بروزرسانی", value: "updating" },
    { label: "منتشر شده", value: "published" },
    { label: "تکمیل‌شده", value: "completed" },
  ];


  function buildQuery(obj) {
    const params = new URLSearchParams();
    if (obj.search) params.set("search", obj.search);
    if (obj.category) params.set("category", obj.category);
    if (obj.status) params.set("status", obj.status);
    if (obj.ordering) params.set("ordering", obj.ordering);
    const qs = params.toString();
    return qs ? `?${qs}` : "";
  }

 
  useEffect(() => {
    const id = setTimeout(() => {
      setFilters((p) => ({ ...p, search: searchInput.trim() }));
    }, 400);
    return () => clearTimeout(id);
  }, [searchInput]);


  useEffect(() => {
    const id = setTimeout(() => {
      setFilters((p) => ({ ...p, category: categoryInput.trim() }));
    }, 300);
    return () => clearTimeout(id);
  }, [categoryInput]);

 
  useEffect(() => {
    let ignore = false;
    (async () => {
      setLoading(true);
      setErr("");
      const { response, error } = await Courses_list(buildQuery(filters));
      if (ignore) return;
      if (response) setCourses(response.data);
      else setErr(error?.response?.data?.error || "خطا در دریافت اطلاعات");
      setLoading(false);
    })();
    return () => { ignore = true; };
  }, [JSON.stringify(filters)]);

  const clearFilters = () => {
    setSearchInput("");
    setCategoryInput("");
    setFilters({ search: "", category: "", status: "", ordering: "-created_at" });
  };

  return (

    <div className="w-full h-full">

      <div>
        
        <div className="mb-16 mt-6">
          <h1 className="
          text-2xl 
          font-bold 
          text-white
          ">آرشیو دوره‌ها
          </h1>
          <p className="
          text-sm 
          text-slate-300
          ">با دوره‌های اسپارکد هر مهارتی رو میخوای سریع یاد بگیر.</p>
        </div>

        <div className="flex">
       
          <div className="w-90">
            <div className="sticky top-24 space-y-4">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">فیلترها</h3>
                  <button onClick={clearFilters} 
                  className="text-xs text-indigo-400 hover:text-indigo-300">
                    حذف همه
                  </button>
                </div>

            
                <div className="space-y-2 mb-4">
                  <label className="text-sm text-slate-300">جستجو بین دوره‌ها</label>
                  <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="...جستجو"
                    className="
                    w-full 
                    rounded-xl 
                    bg-slate-900 
                    text-slate-200 
                    placeholder:text-slate-400 border 
                    border-slate-700 
                    px-3 py-2 
                    focus:outline-none 
                    focus:border-indigo-500
                    "
                  />
                </div>

         
                <div className="space-y-2 mb-4">
                  <label className="text-sm text-slate-300"> دسته‌بندی</label>
                  <input
                    value={categoryInput}
                    onChange={(e) => setCategoryInput(e.target.value)}
                    placeholder="مثلاً: javascript"
                    className="w-full rounded-xl bg-slate-900 text-slate-200 placeholder:text-slate-400 border border-slate-700 px-3 py-2 focus:outline-none focus:border-indigo-500"
                  />
                </div>

    
                <div className="space-y-2">
                  <label className="text-sm text-slate-300">وضعیت دوره</label>
                  <div className="space-y-2">
                    {STATUS_OPTIONS.map((s) => (
                      <label key={s.value} className="flex items-center gap-2 text-slate-200">
                        <input
                          type="radio"
                          name="status"
                          className="accent-indigo-600"
                          checked={filters.status === s.value}
                          onChange={() => setFilters((p) => ({ ...p, status: s.value }))}
                        />
                        <span className="text-sm">{s.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

            
              
            </div>
          </div>

          <div className="w-full pr-8">

        

            <div className="mb-4 flex items-center gap-2">
              {SORTS.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setFilters((p) => ({ ...p, ordering: s.value }))}
                  className={`px-4 py-2 rounded-xl transition
                    ${filters.ordering === s.value ? 
                      "bg-indigo-600 text-white" : "text-slate-300 bg-slate-900/60 hover:bg-slate-800 border border-slate-700"}`}
                >
                  {s.label}
                </button>
              ))}
              <span className="mr-auto text-slate-400 text-sm">
                نتیجه: <span className="text-white font-semibold">{courses?.results?.length || 0}</span> مورد
              </span>
            </div>

    
            {loading ? (
              <div className="w-full flex justify-center mt-20"><Spinner /></div>
            ) : err ? (
              <div className="text-rose-300 bg-rose-900/20 border border-rose-800 rounded-xl p-4">{err}</div>
            ) : (
              <div className="w-full grid grid-cols-3 gap-2 mt-10">
                {courses?.results?.length ? (
                  courses.results.map((p) => (
                    <LessonsCard
                      key={p.id}
                      slug={p.slug}
                      thumbnail={p.thumbnail}
                      title={p.title}
                      level={p.level}
                      status={p.status}
                      instructor={p.instructor}
                      price={p.price}
                      total_duration={p.total_duration}
                    />
                  ))
                ) : (
                  <div className="col-span-full p-6 text-center text-slate-300 bg-slate-800/60 border border-slate-700 rounded-2xl">
                    هیچ دوره‌ای یافت نشد.
                  </div>
                )}
              </div>
            )}
          </div>



        </div>

      </div>
    </div>
  );
}



// 'use state'

// import { Courses_list } from "@/services/courses";
// import { useState , useEffect } from "react";
// import LessonsCard from "../element/LessonsCard";
// import Spinner from "../element/Loading";

// export default function CoursesArchive() {

//   const [filter , setFilter] = useState('')
//   const [courses , setCourses] = useState()
//   const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//       const getData = async () => {
//           const {response , error} = await Courses_list(filter)
//           if (response){
//               setCourses(response.data)
//               setLoading(false)
//           }
//           else {
//               toast.error(error.response?.data.error)
//               setLoading(false)
//           }
      
//       }
//       getData()
//   } , [])

  
//   if (loading) return <div className="w-full flex justify-center mt-40" ><Spinner/></div>;

//   return (
//     <section className="min-h-screen py-8">
//       <div className="container mx-auto px-4">
//         <header className="mb-6">
//           <h1 className="text-2xl font-bold text-white">آرشیو دوره‌ها </h1>
//           <p className="text-sm text-white">
//             با دوره های اسپارکد هر مهارتی رو میخوای سریع یاد بگیر.
//           </p>
//         </header>

//         <div className="flex flex-col md:flex-row md:gap-6 flex-wrap">
//           {courses?.results?.length > 0 ? (
//             courses.results.map((p) => (
//               <div key={p.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-1">
//                 <LessonsCard
//                   slug={p.slug}
//                   thumbnail={p.thumbnail}
//                   title={p.title}
//                   level={p.level}
//                   status={p.status}
//                   instructor={p.instructor}
//                   price={p.price}
//                   total_duration={p.total_duration}
//                 />
//               </div>
//             ))
//           ) : (
//             <p className="text-white">هیچ دوره‌ای یافت نشد.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );

// }