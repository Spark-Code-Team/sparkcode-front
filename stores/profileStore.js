import { create } from 'zustand'



export const UserProfile = create((set) => ({
    data: {
        id: null,
        phone_number: null,
        sheba: null,
        national_code: null,
        is_active: null,
        email: null,
        first_name: null,
        last_name: null,
        role: null,
        is_2fa: null,
        profile_img: null,
        pending_loan: null,
        grade: null,
        grade_achieved_date: null
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
                phone_number: null,
                sheba: null,
                national_code: null,
                is_active: null,
                email: null,
                first_name: null,
                last_name: null,
                role: null,
                is_2fa: null,
                profile_img: null,
                pending_loan: null,
                grade: null,
                grade_achieved_date: null
            },
        }))
    }

}))
