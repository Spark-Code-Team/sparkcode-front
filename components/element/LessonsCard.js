"use client"

import { useEffect } from "react";
import { useState } from "react";

const LessonsCard = () => {

    useEffect(()=>{

    },[])

    return(              
        <article class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200 min-w-[260px] max-w-sm">
        <div class="aspect-w-16 aspect-h-9">
            <img
            src="/media/courses/thumbnails/picture-of-red-Santa-regensen-21.jpg"
            alt="جنگو مقدماتی"
            class="object-cover w-full h-full"
            />
        </div>
        <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 line-clamp-2 mb-1">
            جنگو مقدماتی
            </h3>

            <div class="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span class="flex items-center gap-2">
                <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                beginner
                </span>
                <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                ongoing
                </span>
            </span>
            <span class="ml-2">—</span>
            </div>

            <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-gray-200" aria-label="instructor-avatar"></span>
                <span class="text-sm text-gray-700">salman</span>
            </div>
            <span class="text-sm font-semibold text-gray-800">
                900,000 تومان
            </span>
            </div>

            <div class="flex items-center justify-between">
            <a
                href="/courses/django"
                class="inline-flex items-center px-3 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700"
            >
                مشاهده دوره
            </a>
            <span class="text-xs text-gray-500">id: 2</span>
            </div>
        </div>
        </article>
    )
}

export default LessonsCard;