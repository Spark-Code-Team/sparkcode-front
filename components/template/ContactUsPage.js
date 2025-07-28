import Image from "next/image";
import ContactUs from "../module/homePage/ContactUs";
import CollaborationForm from "../module/Collaboration/CollaborationForm";

const ContactUsPage = ()  =>{
    return(
        <div className="
        flex 
        flex-col 
        items-center 
        justify-center 
        w-full 
        h-full
        mt-10
        ">
        
        <div className="
        md:w-[1270px] w-[380px]
        md:h-[400px] h-[250px]
        custom-border  
        animate-textGlow
        rounded-2xl
        ">
             <Image src="/image/banner3.jpg" 
             alt="logo" 
             width={1270} 
             height={250} 
             className="
             md:w-[1270px] w-[380px]
             rounded-2xl 
             md:h-[400px] h-[250px]
             "/>

        </div>

        <div className="
        flex 
        flex-col
        md:flex-row
        justify-center 
        md:w-[1270px] w-[380px]
        mt-24
        ">
            <div className="
             w-full 
             rounded-xl
             custom-border  
             animate-textGlow
             md:ml-5
             ">

                <div className="md:w-[447px] w-full m-2 p-8">

                        <p className="text-white">
                        ارتباط با ما
                        </p>

                        <div className="
                        flex 
                        text-[15px] 
                        text-[#d4e1f2] 
                        mt-5 
                        items-center 
                        gap-x-2
                        ">
                            <Image 
                            src="/image/phone-footer.png" 
                            alt="logo" 
                            width={20} 
                            height={20}
                            />

                            <p>9961354854 021 </p>

                        </div>

                       <div className="
                       text-[15px] 
                       text-[#d4e1f2] 
                       mt-5 
                       flex 
                       items-center 
                       gap-x-2
                       ">
                            <Image 
                            src="/image/email-footer.png" 
                            alt="logo" 
                            width={20} 
                            height={20}
                            />

                            <p>spark.code.agance@gmail.com</p>

                        </div>

                         <div className="
                         text-[15px] 
                         text-[#d4e1f2] 
                         mt-5 
                         flex 
                         items-center 
                         gap-x-2
                         border-b-[1px]
                         border-[#dcdcdc26]
                         pb-5
                         ">
                            <Image 
                            src="/image/map-footer.png" 
                            alt="logo" 
                            width={20} 
                            height={20}
                            />

                            <p>تهران، خیابان پاسداران، بوستان پنج</p>

                        </div>

                        <div className="
                         text-[15px] 
                         text-[#d4e1f2] 
                         mt-5 
                         flex 
                         items-center 
                         gap-x-2
                         ">
                           
                            <p className="text-white">  مدیر موسسه </p>
                        </div>

                        <div className="
                         text-[15px] 
                         text-[#d4e1f2] 
                         mt-5 
                         flex 
                         items-center 
                         gap-x-2
                         ">
                        <p> نام و نام خانوادگی: محسن پورپاک </p>

                       
                        </div>

                        <div className="
                         text-[15px] 
                         text-[#d4e1f2] 
                         mt-5 
                         flex 
                         items-center 
                         gap-x-2
                         border-b-[1px]
                         border-[#dcdcdc26]
                         pb-5
                         ">
                         <Image 
                         src="/image/phone-footer.png" 
                         alt="logo" 
                         width={20} 
                         height={20}
                         />

                         <p> 9961354854 021 </p>

                        </div>

                        <div className="
                         text-[15px] 
                         text-[#d4e1f2] 
                         mt-5 
                         flex 
                         items-center 
                         gap-x-2
                         ">
                            <p className="text-white">  مدیر آموزش </p>

                        </div>
                        <div className="
                         text-[15px] 
                         text-[#d4e1f2] 
                         mt-5 
                         flex 
                         items-center 
                         gap-x-2
                         ">
                            <p> نام و نام خانوادگی: محسن پورپاک </p>

                            </div>
                        <div className="
                         text-[15px] 
                         text-[#d4e1f2] 
                         mt-5 
                         flex 
                         items-center 
                         gap-x-2
                         ">
                            <Image 
                            src="/image/phone-footer.png" 
                            alt="logo" 
                            width={20} 
                            height={20}
                            />

                            <p> 9961354854 021 </p>
                        </div>
                   
                </div>

            </div>
            
            <div className="
             md:w-full w-[380px]
             rounded-xl
             custom-border  
             animate-textGlow
             md:mr-5
             mt-10
             md:mt-0 
            ">

                <div className="
                w-full 
                mt-8 
                flex 
                flex-col 
                justify-center 
                items-center
                ">

                    <div className="
                    md:grid 
                    md:grid-cols-2 
                    md:gap-y-12
                    md:gap-x-7
                    ">

                    <div>
                       
                      <input
                        type="text" 
                        className="
                        w-[250px]
                        h-[40px] 
                        mt-2 
                        rounded-[4px] 
                        px-2 
                        text-[15px]
                      text-white
                      bg-[#091119]
                      border-[1px]
                      border-[#dcdcdc26]
                      "
                        placeholder="   نام و نام خانوادگی  "  />

                    </div>

                    <div>
                       
                      <input
                        type="text" 
                        className="
                        w-[250px] 
                        h-[40px] 
                        mt-2 
                        rounded-[4px] 
                        px-2 
                        text-[15px]
                      text-white
                      bg-[#091119]
                      border-[1px]
                      border-[#dcdcdc26]
                      "
                        placeholder="   شماره تماس  "/>
                        
                    </div>
                    <div>
                       
                      <input
                        type="text" 
                        className="
                        w-[250px] 
                        h-[40px] 
                        mt-2 
                        rounded-[4px] 
                        px-2 
                        text-[15px]
                      text-white
                      bg-[#091119]
                      border-[1px]
                      border-[#dcdcdc26]
                      "
                        placeholder="   ایمیل "/>
                        
                    </div>

                    <div>
                       
                      <input
                        type="text" 
                        className="
                        w-[250px] 
                        h-[40px] 
                        mt-2 
                        rounded-[4px] 
                        px-2 
                        text-[15px]
                      text-white
                      bg-[#091119]
                      border-[1px]
                      border-[#dcdcdc26]
                      "
                        placeholder="  عنوان   " />
                        
                    </div>

                    </div>

                    <div className="
                    w-full 
                    flex 
                    flex-col 
                    items-center 
                    justify-center
                    ">
                       
                       <textarea
                        type="text" 
                        className="
                        md:w-[530px] w-[250px]
                        h-32 
                        mt-8 
                        rounded-[4px] 
                        text-[15px]
                       text-white
                       bg-[#091119]
                       border-[1px]
                       border-[#dcdcdc26]
                       "
                         placeholder=" توضیحات   " />
                         
                    </div>

                    <div className="
                    w-full 
                    flex 
                    flex-col 
                    items-center 
                    justify-center
                    ">
                       
                      <button 
                      className="
                      md:w-[530px] w-[250px]
                      border-[1px]
                      border-[#dcdcdc26]
                      h-[40px] 
                      mt-8 
                      mb-10
                      md:mb-0
                      rounded-[4px] 
                      text-white
                      "
                      >
                        ارسال
                      </button>

                         
                    </div>
                 
              
                </div>
              
            </div>

        </div>


        <CollaborationForm/>
        
        </div>
    )
}
export default ContactUsPage;