import api from "@/config/api"



export const LandingRequest = async (name, last_name, phone_number, question) => {
    

    try {
        const response = await api.post("/contact/send/", {
            name,
            last_name,
            phone_number,
            question
        })

        return { response }
    } catch(error) {
        return { error }
    }
}