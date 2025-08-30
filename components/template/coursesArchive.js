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
    { label: "در حال برگزاری", value: "ongoing" },
    { label: "خاتمه‌یافته", value: "finished" },
    { label: "به‌زودی", value: "coming_soon" },
  ];

  const CATEGORY_OPTIONS = [
    { label: "فرانت‌اند", value: "frontend" },
    { label: "ارتقای مهارت‌ها", value: "skills" },
    { label: "بک‌اند", value: "backend" },
    { label: "امنیت", value: "isms" },
    { label: "زبان", value: "language" },
    { label: "نود جی‌اس", value: "nodejs" },
  ];

  useEffect(() => {
    const id = setTimeout(() => {
      setFilters(p => ({ ...p, search: searchInput.trim() }));
    }, 400);
    return () => clearTimeout(id);
  }, [searchInput]);

  useEffect(() => {
    const id = setTimeout(() => {
      setFilters(p => ({ ...p, category: categoryInput.trim() }));
    }, 300);
    return () => clearTimeout(id);
  }, [categoryInput]);

  useEffect(() => {
    let ignore = false;
    (async () => {
      setLoading(true);
      setErr("");
      const { response, error } = await Courses_list(filters);
      if(ignore) return;
      if(response) setCourses(response.data);
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
    <div className="w-full min-h-screen p-4 md:p-10">

       <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">آرشیو دوره‌ها</h1>
        <p className="text-sm text-slate-300">با دوره‌های اسپارکد هر مهارتی رو میخوای سریع یاد بگیر.</p>
      </div>

       <div className="flex flex-col lg:flex-row gap-6">
        
         <div className="w-full lg:w-72">
          <div className="sticky top-4 bg-slate-800 border border-slate-700 rounded-2xl p-4 space-y-4">

            <div className="flex justify-between items-center">
              <h3 className="text-white font-semibold">فیلترها</h3>
              <button onClick={clearFilters} className="text-xs text-indigo-400 hover:text-indigo-300">حذف همه</button>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-300">جستجو بین دوره‌ها</label>
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="...جستجو"
                className="w-full rounded-xl bg-slate-900 text-slate-200 placeholder:text-slate-400 border border-slate-700 px-3 py-2 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-slate-300">دسته‌بندی</label>
                {filters.category && (
                  <button type="button" onClick={() => setFilters(p => ({ ...p, category: "" }))} className="text-xs text-indigo-400 hover:text-indigo-300">
                    حذف
                  </button>
                )}
              </div>
              <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                {CATEGORY_OPTIONS.map(cat => (
                  <label key={cat.value} className="flex items-center gap-2 text-slate-200">
                    <input
                      type="checkbox"
                      className="accent-indigo-600"
                      checked={filters.category === cat.value}
                      onChange={() => setFilters(p => ({ ...p, category: p.category === cat.value ? "" : cat.value }))}
                    />
                    <span className="text-sm">{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-300">وضعیت دوره</label>
              <div className="space-y-1">
                {STATUS_OPTIONS.map(s => (
                  <label key={s.value} className="flex items-center gap-2 text-slate-200">
                    <input
                      type="radio"
                      name="status"
                      className="accent-indigo-600"
                      checked={filters.status === s.value}
                      onChange={() => setFilters(p => ({ ...p, status: s.value }))}
                    />
                    <span className="text-sm">{s.label}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>
        </div>

         <div className="flex-1">
          
           <div className="mb-4 flex flex-wrap gap-2 items-center">
            {SORTS.map(s => (
              <button
                key={s.value}
                onClick={() => setFilters(p => ({ ...p, ordering: s.value }))}
                className={`px-4 py-2 rounded-xl transition text-sm ${
                  filters.ordering === s.value
                    ? "bg-indigo-600 text-white"
                    : "text-slate-300 bg-slate-900/60 hover:bg-slate-800 border border-slate-700"
                }`}
              >
                {s.label}
              </button>
            ))}
            <span className="text-sm text-slate-400 ml-auto">
              نتیجه: <span className="text-white font-semibold">{courses?.results?.length || 0}</span> مورد
            </span>
          </div>

          {loading ? (
            <div className="flex justify-center mt-20"><Spinner /></div>
          ) : err ? (
            <div className="text-rose-300 bg-rose-900/20 border border-rose-800 rounded-xl p-4">{err}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {courses?.results?.length ? (
                courses.results.map(p => (
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
  )
}






  // useEffect(() => {
  //   let ignore = false;
  //   (async () => {
  //     setLoading(true);
  //     setErr("");
  //     const { response, error } = await Courses_list(buildQuery(filters));
  //     if (ignore) return;
  //     if (response) setCourses(response.data);
  //     else setErr(error?.response?.data?.error || "خطا در دریافت اطلاعات");
  //     setLoading(false);
  //   })();
  //   return () => { ignore = true; };
  // }, [JSON.stringify(filters)]);