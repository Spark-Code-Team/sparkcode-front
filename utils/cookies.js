export function setCookie(jwt) {
    if(!getCookie('refreshToken') || !getCookie('accessToken')){
        document.cookie = `refreshToken=; max-age=${0}`;
        document.cookie = `accessToken=; max-age=${0}`;
        document.cookie = `refreshToken=${jwt.refresh}; max-age=${30*24*60*60}`;
        document.cookie = `accessToken=${jwt.access}; max-age=${1*24*60*60} `;

    }
    }
//; secure ; HttpOnly 

export function getCookie(name) {  
    const value = `; ${document.cookie}`;  
    const parts = value.split(`; ${name}=`);  
    if (parts.length === 2) return parts.pop().split(';').shift();  
    
    return null; 
}  