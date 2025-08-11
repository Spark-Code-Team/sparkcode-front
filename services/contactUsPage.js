import api from "@/config/api"

export const postContact = async (formData) => {

    try {
        const response = await api.post(`${process.env.NEXT_PUBLIC_BASE_URL}contact/cooperation/request/`,
            formData,
            {
                heders: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )

        return { response }
    } catch(error) {
        return { error }
    }
} 