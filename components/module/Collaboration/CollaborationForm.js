import Image from "next/image";

const CollaborationForm = () =>{
    return(
        
        <div className="
        w-full 
        lg:mt-24 
        mt-10 
        text-white 
        relative
        ">
        
            <div className="
            w-full 
            text-center 
            text-xl 
            bg-gradient-to-b 
            from-[#4899EB] 
            to-[#4899EB]/0 
            opacity-80 
            text-transparent 
            bg-clip-text 
            animate-floatText
            ">
                درخواست همکاری باما
            </div>

                <div className="
                w-full 
                text-center 
                text-xl 
                text-white 
                font-bold
                "> 
                جهت همکاری با اسپارک کد فرم زیر را تکمیل نمایید

                </div>

                
    <div id="bottom" 
                    className="
                    glass-background 
                    md:w-[90%] w-[380px]
                    flex 
                    flex-col
                    md:flex-row
                    m-auto 
                    mt-14 
                    border-2 
                    border-[#182128] 
                    rounded-3xl
                    ">
        
                    <div className="
                    w-full 
                    md:pr-10 
                    flex 
                    md:flex-wrap 
                    md:relative 
                    custom-border-contact
                    ">
                     <div className="
                     w-full 
                     md:mt-10 
                     md:mb-10 
                     mt-10 
                     flex 
                     md:justify-end 
                     md:pl-11
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
                        placeholder="  نام مجموعه / آدرس سایت   " />
                        
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
        
    <div className="
        md:w-[35%] 
        pt-4 
        flex 
        flex-col
        md:flex-wrap 
        w-full 
        md:mt-0 
        ">
        
        <div className="
        md:w-[90%] 
        m-auto 
        md:pr-7 
        w-full
        ">
        
        <div className="
        flex 
        gap-x-2 
        mt-6 
        ">
            <Image src="/image/email.png" alt="" width={22} height={25}/>
            <p>spark.code.agance@gmail.com</p>

        </div>
        
        <div className="
        flex 
        gap-x-2 
        mt-6 
        ">
            <Image src="/image/location.png" alt="" width={22} height={25}/>
            <p>پاسداران - بوستان 5 </p>
        </div>
        
    </div>
        
    <div className="
    md:m-auto 
    md:mt-80 
    mt-10
    flex 
    md:justify-around 
    w-full 
    ">
        
                                   
    <a 
        href="https://www.linkedin.com/company/sparkcode-com/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B8nkW%2FiZdReqDjj4u%2BlNEgA%3D%3D"
        className="w-[48px] h-[48px] ml-5 md:ml-0"
    >
        <Image src="/image/linkedin.png" alt="" width={48} height={48}/>
    </a>
        
    <a 
        href="https://www.instagram.com/sparkcode_com?igsh=dXp2YnU4dGljd2xu"
        className="w-[48px] h-[48px]"
    >
        <Image src="/image/instagram.png" alt="" width={48} height={48}/>
    </a>
        
    </div>
        
    </div>
        
    </div>
        
    <div className="w-[132px] h-[132px] rounded-full bg-[#2e567d] absolute left-40 top-14 -z-10 animate-floatAndColor"> </div>
    <div className="w-[162px] h-[162px] rounded-full bg-[#2e567d] absolute left-80 top-40 -z-10 animate-floatAndColor"> </div>
    <div className="w-[250px] h-[250px] rounded-full bg-[#2e567d] absolute left-0 -bottom-20 -z-10 animate-floatAndColor"> </div>
        
  </div>
        
    )
}
export default CollaborationForm;