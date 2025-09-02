"use client"

import Image from "next/image";
import { useRef, useState } from "react";
import { postContact } from "@/services/contactUsPage";

const colabForm = [
  { name: "name", placeholder: "نام", type: "text" },
  { name: "last_name", placeholder: "نام خانوادگی", type: "text" },
  { name: "phone_number", placeholder: "شماره تماس", type: "text" },
  { name: "website", placeholder: "وب سایت خود را وارد کنید", type: "text" },
  { name: "description", placeholder: "توضیحات", type: "text" },
  { name: "file", placeholder: "فایل رزومه خود را وارد کنید", type: "file" }
];

const ContactUsPage = () => {
  const ref = useRef(null);
  const [formState, setFormState] = useState({
    file: null,
    description: "",
    website: "",
    phone_number: "",
    name: "",
    last_name: ""
  });

  const handelForms = (e) => {
    const value = e.target.value;
    setFormState(last => ({ ...last, [e.target.name]: value }));
  }

  const sendData = async () => {
    const formData = new FormData();
    for (let item in formState) formData.append(item, formState[item]);
    const { response, error } = await postContact(formData);
    if(response) console.log(response);
    else console.log(error);
  }

  return (
    <div className="p-4 md:p-10 bg-[#0B1D3A] min-h-screen">
      {/* بنر */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1270px] h-[250px] md:h-[400px] rounded-2xl overflow-hidden custom-border animate-textGlow">
          <Image 
            src="/image/banner3.jpg" 
            alt="banner" 
            width={1270} 
            height={400} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* فرم و اطلاعات تماس */}
      <div className="flex flex-col md:flex-row justify-center mt-12 gap-6 md:gap-10">
        
        {/* اطلاعات تماس */}
        <div className="w-full md:w-[447px] rounded-xl custom-border animate-textGlow p-6 md:p-8 bg-[#091119]/20">
          <h2 className="text-white font-bold text-lg mb-4"> راه‌های ارتباطی ما </h2>

          <div className="flex items-center gap-2 text-[#d4e1f2] mb-3">
            <Image src="/image/phone-footer.png" alt="phone" width={20} height={20} />
            <p>021-9961354854</p>
          </div>

          <div className="flex items-center gap-2 text-[#d4e1f2] mb-3">
            <Image src="/image/email-footer.png" alt="email" width={20} height={20} />
            <p>spark.code.agance@gmail.com</p>
          </div>

          <div className="flex items-center gap-2 text-[#d4e1f2] mb-3 border-b border-[#dcdcdc26] pb-3">
            <Image src="/image/map-footer.png" alt="map" width={20} height={20} />
            <p>تهران، خیابان پاسداران، بوستان پنج</p>
          </div>

          {/* مدیر موسسه */}
          <p className="text-white mt-4 font-semibold">مدیر موسسه</p>
          <p className="text-[#d4e1f2]">نام و نام خانوادگی: محسن پورپاک</p>
          <div className="flex items-center gap-2 text-[#d4e1f2] border-b border-[#dcdcdc26] pb-3 mt-3">
            <Image src="/image/phone-footer.png" alt="phone" width={20} height={20} />
            <p>021-9961354854</p>
          </div>

          {/* مدیر آموزش */}
          <p className="text-white mt-4 font-semibold">مدیر آموزش</p>
          <p className="text-[#d4e1f2]">نام و نام خانوادگی: محسن پورپاک</p>
          <div className="flex items-center gap-2 text-[#d4e1f2] mt-3">
            <Image src="/image/phone-footer.png" alt="phone" width={20} height={20} />
            <p>021-9961354854</p>
          </div>
        </div>

        {/* فرم همکاری */}
        <div className="w-full md:w-[600px] rounded-xl custom-border animate-textGlow p-6 md:p-8 bg-[#091119]/20">
        <p className="text-white font-bold text-lg mb-4">
        پیام بزار برامون !
        </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {colabForm.map((item, idx) => {
              if(item.type === "file") {
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <input 
                      type="file" 
                      className="hidden" 
                      ref={ref} 
                      onChange={(e) => setFormState(last => ({ ...last, file: e.target.files[0] }))}
                    />
                    <div
                      className="w-[250px] text-[#d4e1f2] text-[15px] border border-[#dcdcdc26] p-2 ml-2 bg-[#091119] rounded-md cursor-pointer "
                      onClick={() => ref.current.click()}
                    >
                      آپلود رزومه (اختیاری)
                    </div>
                    <p className="text-white mt-1">{formState.file?.name}</p>
                  </div>
                )
              } else if(item.name === "description") {
                return (
                  <textarea
                    key={idx}
                    name={item.name}
                    placeholder={item.placeholder}
                    className="w-full md:w-[250px] h-[80px] px-2 py-1 rounded-md bg-[#091119] border border-[#dcdcdc26] text-white"
                    onChange={handelForms}
                  />
                )
              } else {
                return (
                  <input
                    key={idx}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    className="w-full md:w-[250px] h-[40px] px-2 rounded-md bg-[#091119] border border-[#dcdcdc26] text-white"
                    onChange={handelForms}
                  />
                )
              }
            })}
          </div>

          <div className="flex justify-center mt-6">
            <button
              className="w-full md:w-[530px] h-[40px] bg-[#2E567D] hover:bg-[#3F6FA3] text-white rounded-md transition"
              onClick={sendData}
            >
              ارسال
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage;
