import api from "@/config/api"


export const sendOtp = async (formData) => {
    try{
        const response = await api.post('/users/auth/send-otp/', {
                phone_number: formData.phone_number,
        })
        console.log('user otp response --->', response)    
        return{response}
    } catch(error){
        console.log('user otp error --->', error)     
        return{error}
    }
}

export const register = async (formData) => {
        try{
            const response = await api.post('/users/auth/register/',{    
                full_name: formData.full_name,
                username:formData.username ,
                phone_number: formData.phone_number,
                email: formData.email,
                password: formData.password,
                confirm_password: formData.confirm_password,
                otp_code: formData.otp_code,
            }            
        )
        console.log('user register response --->', response)     
        return {response}
    }catch(error){
        console.log('user register error --->', error)     
        return {error}
    }
}