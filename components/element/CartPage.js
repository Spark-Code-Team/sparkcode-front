'use client'

import { canselDiscount, cartGetItem, deleteItem, useDiscount } from "@/services/cart";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartPage = () => {
  const [reload, setReload] = useState(true);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();

  // استیت‌های جدید برای کد تخفیف
  const [discountIsUsed, setDiscountIsUsed] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discountResponse, setDiscountResponse] = useState();


  useEffect(() => {
    const getCart = async () => {
      const { response, error } = await cartGetItem();
      if (response) {
        setCartItems(response.data);
        setTotalPrice(response.data.total_price);
      } else {
        toast.error(error.response.data.error);
      }
    };
    getCart();
  }, [reload]);

  const handleDelete = async (id) => {
    const { response, error } = await deleteItem(id);
    if (response) {
      setReload(!reload);
    } else {
      toast.error(error.response.data.error);
    }
  };

  const applyDiscount = async (id) => {
    const { response, error } = await useDiscount({id , discountCode });
    if (response) {
      toast.success('کد تخفیف اعمال شد');
      setDiscountIsUsed(true)
      setDiscountResponse(response.data)
      setReload(!reload);
    } else {
      toast.error(error.response.data.error);
    }
  }

  const deletedDiscount = async (id) => {
    const { response, error } = await canselDiscount({id , discountCode });
    if (response) {
      toast.success('انصراف از اعمال کد تخفیف');
      setDiscountIsUsed(false)
      setReload(!reload);
    } else {
      toast.error(error.response.data.error);
    }
  }

  return (
    <div className="min-h-screen bg-navy text-white py-10 px-6">
      <div className="max-w-4xl mx-auto bg-darkBlue rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">🛒 سبد خرید</h1>

        {cartItems && cartItems.items?.length > 0 ? (
          <>
            <ul className="space-y-4">
              {cartItems.items.map((i) => (
                <li
                  key={i.id}
                  className="flex justify-between items-center border-b border-blue-900 pb-2"
                >
                  <div>
                    <h2 className="text-lg font-semibold">{i.course_title}</h2>
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
                {Number(totalPrice).toLocaleString()} تومان
              </span>
            </div>

            {/* بخش کد تخفیف */}
            <div className="mt-6 bg-blue-900/30 p-4 rounded-lg">
              {!showDiscount ? (
                <button
                  onClick={() => setShowDiscount(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
                >
                  افزودن کد تخفیف
                </button>
              ) : (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="کد تخفیف را وارد کنید"
                    className="w-full bg-black/0 border-gray-100/15 border px-3 py-2 rounded bg-navy text-white border-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={()=>applyDiscount(cartItems.id)}
                      className="flex-1 border-gray-100/15 border b-1 duration-300 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition"
                    >
                      اعمال تخفیف
                    </button>
                    <button
                      onClick={() => {
                        deletedDiscount(cartItems.id)
                        setShowDiscount(false)
                        setDiscountCode("")
                                }}
                      className="flex-1 border-gray-100/15 border b-1 duration-300 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition"
                    >
                        انصراف
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition">
                ادامه فرایند خرید
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-blue-300">سبد خرید شما خالی است.</p>
        )}
      </div>
    </div>
  );
};
export default CartPage;
