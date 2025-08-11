"use client"
import { useState } from "react";
import VerificationCode from "../modules/loginModule/VerificationCode";
import SignInPhone from "../modules/signIn/SignInPhone";
import RegisterLogin from "../module/loginModule/RegisterLogin";
const LoginPage = () => {
    const [loginRegisterState, setloginRegisterState] = useState ({
        state: 0,
        phone: '',
    })
    

    const [formData, setFormData] = useState({ 
        firstName: '',  
        lastName: '',  
        mobileNumber: '',  
        nationalCode: '',  
        shebaNumber: '',  
        bankName: '' ,
        otp: '' ,
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

