import { create } from 'zustand'



export const UserProfile = create((set) => ({
    data: {
        id: null,
        username:null,
        phone_number:null,
        full_name:null,
        email:null,
        role:null,
        profile_img:null,

    },
    
    setProfile: (data) => {
        set(() => ({
            data: data
        }))
    },

    setProfileToNull: () => {
        set(() => ({
            data: {
                id: null,
                username:null,
                phone_number:null,
                full_name:null,
                email:null,
                role:null,
                profile_img:null,
            },
        }))
    }

}))
