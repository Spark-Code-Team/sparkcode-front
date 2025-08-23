'use client'

import { cartAddItem, deleteItem } from "@/services/cart";
import { useEffect, useState } from "react";

const CartPage = () =>{

    const [reload , setReload] = useState(true)
    const [cartItems, setCartItems] = useState();
    const [totalPrice , setTotalPrice] = useState()

    useEffect(()=>{
        const getCart = async(id) => {
        const {response , error} = await cartAddItem()
            if(response){
                setCartItems(response.data)
            }else{
                toast.error(error.response.data.error)
            } 
        };
        getCart()
    },[reload])

    const handleDelete = async(id) => {
    const {response , error} = await deleteItem(id)
        if(response){
            setReload(!reload)
        }else{
            toast.error(error.response.data.error)
        } 
    };



    return(
        <div className="min-h-screen bg-navy text-white py-10 px-6">
            <div className="max-w-4xl mx-auto bg-darkBlue rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">🛒 سبد خرید</h1>

                {cartItems? (
                <p className="text-center text-blue-300">سبد خرید شما خالی است.</p>
                ) : (
                <>
                    <ul className="space-y-4">
                    {cartItems?.items.map((i) => (
                        <li
                        key={i.id}
                        className="flex justify-between items-center border-b border-blue-900 pb-2"
                        >
                        <div>
                            <h2 className="text-lg font-semibold">{i.course_title}</h2>
                            <p className="text-sm text-blue-300">

                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-blue-400">
                            {i.price} تومان 
                            </span>
                            <button
                            onClick={() => handleDelete(i.id)}
                            className="text-red-400 hover:text-red-600 text-xl transition"
                            title="حذف آیتم"
                            >
                            🗑️
                            </button>
                        </div>
                        </li>
                    ))}
                    </ul>

                    <div className="mt-6 flex justify-between items-center pt-4">
                    <span className="text-xl font-semibold">مبلغ کل:</span>
                    <span className="text-2xl font-bold text-green-400">
                        {/* {total.toLocaleString()} تومان */}
                    </span>
                    </div>

                    <div className="mt-8 text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition">
                        ادامه فرایند خرید
                    </button>
                    </div>
                </>
                )}
            </div>
        </div>

    )
}
export default CartPage;