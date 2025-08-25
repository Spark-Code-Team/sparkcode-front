import api from "@/config/api"
import { toast } from "react-toastify"

export const cartGetItem = async () => {
    try{
        const response = await api.get('/cart/orders/cart-detail/')
        console.log('get cart response --->', response)    
        return{response}
    } catch(error){
        console.log('get cart error --->', error) 
        toast.error(error.response?.data.error)     
        return{error}
    }
}

export const addItem = async (course_slug) => {
    try{
        const response = await api.post(`/cart/orders/add-item/` , {
            course_slug,
        })
        console.log('add to cart response --->', response) 
        toast.success('محصول به سبد خرید اضافه شد')        
        return{response}
    } catch(error){
        console.log('add to error --->', error)    
        toast.error(error.response?.data.error)      
        return{error}
    }
}

export const deleteItem = async (order_id) => {
    try{
        const response = await api.delete(`/cart/orders/remove-item/${order_id}/`)
        console.log('delete item response --->', response)    
        return{response}
    } catch(error){
        console.log('delete item error --->', error)     
        return{error}
    }
}



export const useDiscount = async ({id , discountCode }) => {
    try{
        const response = await api.post(`/cart/orders/apply-discount/${id}/`,
            { code : discountCode }
        )
        console.log('discount response --->', response)    
        return{response}
    } catch(error){
        console.log('discount error --->', error)     
        return{error}
    }
}

export const canselDiscount = async ({id , discountCode }) => {
    try{
        const response = await api.post(`/cart/orders/cancel-discount/${id}/`,
            { code : discountCode }
        )
        console.log('cansel discount response --->', response)    
        return{response}
    } catch(error){
        console.log('cansel discount error --->', error)     
        return{error}
    }
}
