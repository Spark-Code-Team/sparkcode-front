'use client'
import ModalPage from "@/components/element/Modals";
import { Courses_detail } from "@/services/courses";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SingleCourses = () => {
  const path = usePathname();
  const [ openModal , setOpenmodal ] = useState(false)
  const [ videoPath , setVideoPath ] = useState('')
  const [coursesDetail, setCoursesDetail] = useState(null);

  function getCourseName(input) {
    const parts = input.split('/').filter(Boolean); 
    return parts.length > 1 ? parts[1] : "";
  }

  useEffect(() => {
    const getData = async () => {
      const { response, error } = await Courses_detail(getCourseName(path));
      if (response) {
        setCoursesDetail(response.data);
      } else {
        console.error(error.response?.data.error || "خطا در دریافت اطلاعات");
      }
    };
    getData();
  }, [path]);

  if (!coursesDetail) return <p className="text-white/90">در حال بارگذاری...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#0b1220] text-white">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <h1 className="text-3xl font-bold text-white">{coursesDetail.title}</h1>
          <p className="text-gray-300">{coursesDetail.short_description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>دسته‌بندی: {coursesDetail.category}</span>
            <span>سطح: {coursesDetail.level}</span>
            <span>مدت دوره : {Math.floor(coursesDetail.total_duration/60)>0 ? <>{Math.floor(coursesDetail.total_duration/60)} ساعت و </>:<></>}{coursesDetail.total_duration%60} دقیقه</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {coursesDetail.instructor?.map((inst, i) => (
              <div key={i} className="flex items-center gap-2">
                {inst.avatar ? (
                  <img
                    src={inst.avatar}
                    alt={inst.full_name || 'Instructor Avatar'}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    {inst.full_name?.[0] ?? "ش"}
                  </div>
                )}
                <div>
                  <p className="font-medium text-white">{inst.full_name}</p>
                  <p className="text-xs text-gray-400">{inst.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-sm">
          <img
            src={coursesDetail.thumbnail || '/placeholder.png'}
            alt={coursesDetail.title || 'Course Thumbnail'}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-3">
            <p className="text-xl font-bold">
              {coursesDetail.discount_price ? (
                <>
                  <span className="line-through text-slate-400 mr-2">
                    {coursesDetail.price} تومان
                  </span>
                  <span className="text-white">{coursesDetail.discount_price} تومان</span>
                </>
              ) : (
                <span className="text-white">{coursesDetail.price} تومان</span>
              )}
            </p>
            <button className="w-full bg-indigo-700 text-white rounded-xl py-2 font-medium hover:bg-indigo-600 transition">
              ثبت‌نام در دوره
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="mt-10 bg-transparent">
        <h2 className="text-2xl font-semibold mb-3 text-slate-100">توضیحات دوره</h2>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {coursesDetail.description}
        </p>
      </section>

      {/* Chapters */}
      <section className="mt-10 bg-transparent">
  <h2 className="text-2xl font-semibold mb-3 text-slate-100">فصل‌ها</h2>
  <div className="space-y-4">
    {coursesDetail.chapters?.map((chapter) => (
      <div key={chapter.id} className="border border-slate-700 rounded-xl p-4 bg-slate-800/60">
        <h3 className="font-bold text-lg mb-2 text-white">{chapter.title}</h3>
        <ul className="space-y-2">
          {chapter.videos?.map((video , i) => (
            <li
              key={video.id}
              className={`flex flex-col md:flex-row md:items-center justify-between ${chapter.videos.length != i+1? 'border-b' : ''} border-slate-700 pb-2 text-gray-300`}
            >
                <div className="flex items-center gap-3">
                    <span className="font-medium">{video.title}</span>
                </div>
                <div onClick={()=>{
                    setOpenmodal(true)
                    setVideoPath(video?.file)
                }} className=" text-bold cursor-pointer text-blue-400">مشاهده</div>



            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

      {/* FAQs */}
      {coursesDetail.faqs?.length > 0 && (
        <section className="mt-10 bg-transparent">
          <h2 className="text-2xl font-semibold mb-3 text-slate-100">سوالات متداول</h2>
          <div className="space-y-3">
            {coursesDetail.faqs.map((faq, i) => (
              <details key={i} className="border border-slate-700 rounded-xl p-3 bg-slate-800">
                <summary className="cursor-pointer font-medium text-white">{faq.question}</summary>
                <p className="text-gray-300 mt-2">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Reviews */}
      {coursesDetail.reviews?.length > 0 && (
        <section className="mt-10 bg-transparent">
          <h2 className="text-2xl font-semibold mb-3 text-slate-100">نظرات کاربران</h2>
          <div className="space-y-4">
            {coursesDetail.reviews.map((review, i) => (
              <div key={i} className="border border-slate-700 rounded-xl p-4 bg-slate-800">
                <p className="font-bold text-white">{review.user}</p>
                <p className="text-yellow-400">امتیاز: {review.rating}/5</p>
                <p className="text-gray-300">{review.comment}</p>
                <span className="text-xs text-gray-400">
                  {new Date(review.created_at).toLocaleDateString("fa-IR")}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
        <ModalPage isOpen={openModal}>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
                {/* <span className="text-sm">{video.duration} دقیقه</span> */}

                {/* نمایش ویدیو با منوی سفارشی بدون امکان دانلود */}
                {videoPath? (
                    <div className="h-max rounded-xl p-5 bg-slate-400/30">
                    <div className="text-white w-max cursor-pointer m-1 "
                     onClick={()=>{
                        setOpenmodal(false)
                        setVideoPath('')}} 
                        src="image/close-menu.png"
                        >بازگشت</div>
                  <video
                    controls
                    width={320}
                    height={180}
                    style={{ maxWidth: '100%' }}
                    src={videoPath}
                    poster={videoPath}
                    onContextMenu={(e) => e.preventDefault()} // جلوگیری از راست‌کلیک دانلود
                  >
                    مرورگر شما ویدیو را پشتیبانی نمی‌کند.
                  </video></div>
                ) : (
                  <span className="text-sm text-yellow-300">فایل ویدیو در دسترس نیست</span>
                )}
              </div>
        </ModalPage>
    </div>
  );


};


export default SingleCourses;