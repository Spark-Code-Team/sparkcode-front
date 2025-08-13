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