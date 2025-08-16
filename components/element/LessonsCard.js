
const LessonsCard = ({slug , thumbnail , title , level , status , instructor , price , total_duration}) => {

    return(              
        <article class="bg-slate-300/30 backdrop-blur-md backdrop-filter rounded-xl shadow-md overflow-hidden text-white p-2 hover:shadow-lg transition-shadow duration-200 min-w-[260px] max-w-sm">
        <div class="aspect-w-16 aspect-h-9 rounded-lg">
            <img
            src={thumbnail}
            alt="جنگو مقدماتی"
            class=""
            className="w-full aspect-video object-cover rounded-lg "
            />
        </div>
        <div class="p-4">
            <h3 class="text-lg font-semibold text-white line-clamp-2 mb-1">
            {title}
            </h3>

            <div class="flex items-center justify-between text-sm text-white mb-2">
            <span class="flex items-center gap-2">
                <span class="inline-flex items-center p-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                {level}
                </span>
                <span class="inline-flex items-center p-2 py-0.5 rounded-full bg-green-100 text-green-700">
                {status}
                </span>
            </span>
            </div>

            <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2"> مدرس : 
                <span class="text-white">{instructor.map((p)=>{
                    return <div className="">{p}</div>
                })}</span>
            </div>
            <span class="text-sm font-semibold text-white">
                {price} تومان
            </span>
            </div>

            <div class="flex items-center justify-between">
            <a
                href={`/courses/${slug}`}
                class="inline-flex items-center px-3 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700"
            >
                مشاهده دوره
            </a>
            <span class="text-xs text-white">زمان دوره : {Math.floor(total_duration/60)>0 ? <>{Math.floor(total_duration/60)} ساعت و </>:<></>}{total_duration%60} دقیقه</span>
            </div>
        </div>
        </article>
    )
}

export default LessonsCard;