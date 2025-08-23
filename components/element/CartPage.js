'use client'

import { deleteItem } from "@/services/cart";
import { useState } from "react";

const CartPage = () =>{

    const [reload , setReload] = useState(true)

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'محصول اول', price: 250000, quantity: 2 },
    { id: 2, name: 'محصول دوم', price: 180000, quantity: 1 },
    { id: 3, name: 'محصول سوم', price: 90000, quantity: 3 },
  ]);

  const handleDelete = async(id) => {
    const {response , error} = await deleteItem(id)
    if(response){
        console.log(response)
        setReload(!reload)
    }else{
        toast.error(error.response.data.error)
    } 
};

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


    return(
        <div className="min-h-screen bg-navy text-white py-10 px-6">
            <div className="max-w-4xl mx-auto bg-darkBlue rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">🛒 سبد خرید</h1>

                {cartItems.length === 0 ? (
                <p className="text-center text-blue-300">سبد خرید شما خالی است.</p>
                ) : (
                <>
                    <ul className="space-y-4">
                    {cartItems.map((item) => (
                        <li
                        key={item.id}
                        className="flex justify-between items-center border-b border-blue-900 pb-2"
                        >
                        <div>
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <p className="text-sm text-blue-300">
                            تعداد: {item.quantity} × {item.price.toLocaleString()} تومان
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-blue-400">
                            {(item.price * item.quantity).toLocaleString()} تومان
                            </span>
                            <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-400 hover:text-red-600 text-xl transition"
                            title="حذف آیتم"
                            >
                            🗑️
                            </button>
                        </div>
                        </li>
                    ))}
                    </ul>

                    <div className="mt-6 flex justify-between items-center border-t border-blue-900 pt-4">
                    <span className="text-xl font-semibold">مبلغ کل:</span>
                    <span className="text-2xl font-bold text-green-400">
                        {total.toLocaleString()} تومان
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