import api from "@/config/api"


export const Courses_list = async (ordering = '') => {
    try {
        const response = await api.get(`/product/courses-list/${ordering}`)
        console.log('get courses response -------->' , response)
        return { response }
    } catch(error) {
        console.log('get courses error -------->' , error)
        return { error }
    }
}

export const Courses_detail = async (name = '') => {
    try {
        const response = await api.get(`/product/course-detail/${name}/`)
        console.log('get courses detail response -------->' , response)
        return { response }
    } catch(error) {
        console.log('get courses detail error -------->' , error)
        return { error }
    }
}

// export const buildCourseListQS = (filters = {}) => {
//     const { search, category, status, ordering, page, page_size } = filters;
//     const p = new URLSearchParams();
//     if (search)    p.set("search", search);
//     if (category)  p.set("category", category);   // slug
//     if (status)    p.set("status", status);
//     if (ordering)  p.set("ordering", ordering);   // "-created_at" | "price" | ...
//     if (page)      p.set("page", page);
//     if (page_size) p.set("page_size", page_size);
//     const s = p.toString();
//     return s ? `?${s}` : "";
//   };
  
//   // همون API قدیمی، فقط با QueryString ساخته‌شده صدا می‌زنیم
//   export const Courses_listByFilters = async (filters = {}) => {
//     const qs = buildCourseListQS(filters);    // => "?search=...&ordering=-price"
//     return Courses_list(qs);                  // => /product/courses-list/?...
//   };