import api from "@/config/api"
import axios from "axios"



export const postContact = async (formData) => {

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}contact/cooperation/request/`,
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