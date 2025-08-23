import api from "@/config/api"


export const cartAddItem = async (order_id) => {
    try{
        const response = await api.get(`/cart/orders/cart-details/${order_id}`)
        console.log('get cart response --->', response)    
        return{response}
    } catch(error){
        console.log('ger cart error --->', error)     
        return{error}
    }
}

export const addItem = async ({id , course , course_title , price}) => {
    try{
        const response = await api.post(`/cart/orders/add-item/` , {
            id,
            course,
            course_title,
            price,
        })
        console.log('add to cart response --->', response)    
        return{response}
    } catch(error){
        console.log('add to error --->', error)     
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