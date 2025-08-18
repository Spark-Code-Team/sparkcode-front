'use state'

import { Courses_list } from "@/services/courses";
import { useState , useEffect } from "react";
import LessonsCard from "../element/LessonsCard";
import Spinner from "../element/Loading";

export default function CoursesArchive() {

  const [filter , setFilter] = useState('')
  const [courses , setCourses] = useState()
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
      const getData = async () => {
          const {response , error} = await Courses_list(filter)
          if (response){
              setCourses(response.data)
              setLoading(false)
          }
          else {
              toast.error(error.response?.data.error)
              setLoading(false)
          }
      
      }
      getData()
  } , [])

  
  if (loading) return <Spinner />;

  return (
    <section className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-white">آرشیو دوره‌ها </h1>
          <p className="text-sm text-white">
            با دوره های اسپارکد هر مهارتی رو میخوای سریع یاد بگیر.
          </p>
        </header>

        <div className="flex flex-col md:flex-row md:gap-6 flex-wrap">
          {courses?.results?.length > 0 ? (
            courses.results.map((p) => (
              <div key={p.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-1">
                <LessonsCard
                  slug={p.slug}
                  thumbnail={p.thumbnail}
                  title={p.title}
                  level={p.level}
                  status={p.status}
                  instructor={p.instructor}
                  price={p.price}
                  total_duration={p.total_duration}
                />
              </div>
            ))
          ) : (
            <p className="text-white">هیچ دوره‌ای یافت نشد.</p>
          )}
        </div>
      </div>
    </section>
  );

}