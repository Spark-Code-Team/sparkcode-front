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