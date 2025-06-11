import api from "@/config/api"



export const LandingRequest = async (name, phone_number, question, answer) => {

    console.log({name, phone_number, question, answer});
    

    try {
        const response = await api.post("api/contacts/", {
            name,
            phone_number,
            question,
            answer
        })

        return { response }
    } catch(error) {
        return { error }
    }
}