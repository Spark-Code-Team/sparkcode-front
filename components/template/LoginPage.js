"use client"
import { useState } from "react";
import RegisterLogin from "../module/loginModule/RegisterLogin";
import VerificationCode from "../module/loginModule/VerificationCode";
import SignInPhone from "../module/signIn/SignInPhone";
const LoginPage = () => {
    const [loginRegisterState, setloginRegisterState] = useState ({
        state: 0,
        phone: '',
    })
    

    const [formData, setFormData] = useState({ 
        full_name: '',  
        username: '',  
        phone_number: '',  
        email: '',  
        password: '',  
        confirm_password: '' ,
        otp_code: '' ,
        // otp_for: ''
    });


    return(
        <>
        {loginRegisterState.state === 0 ? (
            <RegisterLogin setFormData={setFormData} formData={formData} setloginRegisterState={setloginRegisterState} />
        ) : loginRegisterState.state === 1 ? (
            <VerificationCode setFormData={setFormData} formData={formData} dynamicPhoneNumber={loginRegisterState.phone} setloginRegisterState={setloginRegisterState} />
        ) : (
            <SignInPhone />
        )}
    </>
    )
}
export default LoginPage;

