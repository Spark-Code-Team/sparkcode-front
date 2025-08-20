import api from "@/config/api"


// export const Courses_list = async (ordering = '') => {
//     try {
//         const response = await api.get(`/product/courses-list/${ordering}`)
//         console.log('get courses response -------->' , response)
//         return { response }
//     } catch(error) {
//         console.log('get courses error -------->' , error)
//         return { error }
//     }
// }

export const Courses_list = async (filters = {}) => {
    try {
      const { search, category, status, ordering, page, page_size } = filters || {};
      console.log("[Courses_list] filters =>", { search, category, status, ordering, page, page_size });
  
      const response = await api.get("/product/courses-list/", {
        params: {
          ...(search?.trim() ? { search: search.trim() } : {}),
          ...(category?.trim() ? { category: category.trim() } : {}),
          ...(status?.trim() ? { status: status.trim() } : {}),
          ...(ordering?.trim() ? { ordering: ordering.trim() } : {}),
          ...(page !== undefined && page !== null ? { page } : {}),               
          ...(page_size !== undefined && page_size !== null ? { page_size } : {}),
        },
      });
      console.log("[Courses_list] requested URL =>", response.config?.url, "params =>", response.config?.params);
      return { response };
    } catch (error) {
        console.log("[Courses_list] ERROR =>", error?.response?.status, error?.response?.data || error?.message);
      return { error };
    }
  };

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

