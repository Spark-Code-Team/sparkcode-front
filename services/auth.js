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

export const forgetPassword  = async ({email , otp_code , password , confirm_password}) => {

    try {
        const response = await api.post('/users/forget-password/check-otp/', {
            email,
            otp_code,
            password,
            confirm_password
        })
        console.log('user register response --->', response)    
        console.log(response)
        return{response}
    } catch(error){
        console.log('user check-otp error --->' , error)
        return{error}
    }
}

export const loginOtp = async (checkOtp) => {
    try{
        const response = await api.post('/users/auth/login-check-otp/', {
                phone_number: checkOtp.phoneNumber,
                email: checkOtp.email,
                otp_code: checkOtp.otp,
                password:checkOtp.password
        })
        console.log('login-otp response --->' , response)
        return{response}
    } catch(error){
        console.log('login-otp error --->' , error)
        return{error}
    }
}

export const phoneLogin = async (checkOtp) => {
    try{
        const response = await api.post('/users/auth/phone-login/', {
                phone_number: checkOtp.phoneNumber,
                otp_code: checkOtp.otp,
        })
        console.log('phoneNumber-login response --->' , response)
        return{response}
    } catch(error){
        console.log('phoneNumber-login error --->' , error)
        return{error}
    }
}

// ارسال کد او تی پی با استفاده از آدرس ایمیل
export const sendForgetPassOtp = async ({email}) => {
    try{
        const response = await api.post('/users/forget-password/send-otp/' , {
            email
        })
        console.log('send-otp resonse --->' , response)
        return{response}

    }catch(error){
        console.log('send-otp error --->' , error)
        return {error}
    }
}

//برای لاگین کردن با یوزرنیم و ایمیل وقتی پسورد ست شده
export const checkPassword = async (userPass) =>{
    try {
        const response = await api.post('/users/auth/pass-login/',{
            username_email: userPass.username_email,
            password: userPass.password
        }) 
        console.log('password-login resonse --->' , response)
      return{response}
    } catch (error) {
        console.log('password-login error --->' , error)
        return{error}
        
    }
}