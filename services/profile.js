import api from "@/config/api"


export const Profile = async () =>{

    try {
        const response = await api.get('/users/profile/')
        console.log('user profile response ---->',response)
        return {response}
    } catch (error) {
        console.log('user profile error ----->', error)
        return {error}
    }


}
