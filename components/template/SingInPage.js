"use client"

import { useState } from "react";
import SignInPhone from "../module/signIn/SignInPhone";
import VerificationCodeSignIn from "../module/signIn/VerificationCodeSignIn";
import ForgetPasswordSignIn from "../module/signIn/ForgetPasswordSignIn";
import ResendPasswordSignIn from "../module/signIn/ResendPasswordSignIn";
import NewPasswordSignIn from "../module/signIn/NewPasswordSignIn";
import PasswordSignIn from "../module/signIn/PasswordSignIn";


const SignInPage = () => {
    const [loginState, setLoginState] = useState({
        state: "password",
        phoneNumber: 0,
        is_2fa: false,
        // forget pass section
        email: '',
        forgetPassword_otp:'',
        password:'',
        confirm_password:'',
        otp_code: ""
    });

    return(
        <>
            {loginState.state === "phone" && <SignInPhone loginState={loginState} setLoginState={setLoginState} />}
            {loginState.state === "verification" && <VerificationCodeSignIn loginState={loginState} setLoginState={setLoginState} />}
            {loginState.state === "password" && <PasswordSignIn loginState={loginState} setLoginState={setLoginState} />}
            {loginState.state === "forgetPassword" && <ForgetPasswordSignIn loginState={loginState} setLoginState={setLoginState} />}
            {loginState.state === "resendCode" && <ResendPasswordSignIn loginState={loginState} setLoginState={setLoginState} />}
            {loginState.state === "newPassword" && <NewPasswordSignIn loginState={loginState} setLoginState={setLoginState} />}
        </>



      
    )
}
export default SignInPage;