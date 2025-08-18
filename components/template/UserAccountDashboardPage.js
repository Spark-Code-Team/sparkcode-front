"use client"


import { useEffect, useState } from "react";
import { getCookie } from "@/utils/cookies";
import { UserProfile } from "@/stores/profileStore";
import { setTime } from "@/utils/setTime";
import DashboardStyle from "../element/DashboardStyle";
import { getProfile } from "@/constant/profile";

const UserAccountDashboardPage = () => {

    const profileStore = UserProfile()
    const [expired, setExpired] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0); 
    const profile = getProfile(); 



          useEffect(() => {
                const inputTime = getCookie('expire_time');
                
                const totalSeconds = setTime(inputTime)
        
                setRemainingTime(totalSeconds);                
        
                if (totalSeconds <= 0) {
                  setExpired(true);
                  setRemainingTime(0);
                  return;
                }
        
                const timer = setInterval(() => {
                  setRemainingTime((prev) => {
                    if (prev <= 1) {
                      clearInterval(timer);
                      setExpired(true);
                      return 0;
                    }
                    return prev - 1;
                  });
                }, 1000);
            
                return () => clearInterval(timer); 
          },[ remainingTime , expired ]);
          
    return(
        <div className="mx-3 mt-10">
            <div>
            <div className="
            w-full
            h-max
            bg-slate-800
            rounded-xl        
            ">
                
                <DashboardStyle
                    title="اطلاعات"
                />

<div className="
    grid
    grid-cols-1      
    md:grid-cols-2 
    gap-4
    pt-6
    pb-6
    place-items-center
    px-6
">
  {
    profile.map(p => (
      <div key={p.id} className="flex flex-col">
        <label className="
          text-white
          text-[14px]
          font-normal
          pr-4
        ">
          {p.field_name}
        </label>

        <div className="
          flex
          items-center
          md:w-[392px]
          h-[56px]
          rounded-xl
          border-[1px]
          border-[#7A7A7A]
          bg-[#EDEDED]
        ">
          <span className="mr-4">
            {p.logo}
          </span>

          <input
            type="text"
            value={p.content}
            disabled
            className="
              w-full
              border-none
              focus:outline-none
              focus:ring-0
              focus:border-transparent
              bg-[#EDEDED]
            "
          />
        </div>
      </div>
    ))
  }
</div>
            </div>
            </div>
        </div>

    )
}
export default UserAccountDashboardPage;