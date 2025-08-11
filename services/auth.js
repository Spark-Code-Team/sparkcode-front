import api from "@/config/api"


export const sendOtp = async (formData) => {
    try{
        const response = await api.post('/users/auth/send-otp/', {
                phone_number: formData.mobileNumber,
        })
        console.log('user auth response --->', response)    
        return{response}
    } catch(error){
        console.log('user auth error --->', error)     
        return{error}
    }
}