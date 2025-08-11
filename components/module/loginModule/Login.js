// "use client"

// import ModalPage from '@/components/elements/Modals';
// import { validationResult } from '@/service/finance';
// import { UserProfile } from '@/stores/profileStore';
// import { convertToJalali } from '@/utils/setTime';
// import { selectCreditAmountInstallment } from '@/service/finance';
// import { useEffect, useState } from 'react';
// import Close from '../../../../public/icons/close';
// import Image from 'next/image';
// import { ThreeDots } from 'react-loader-spinner';


// const Login = () => {

//     const [ isLoading , setIsLoading ] = useState(true)
//     const [ credit , setCredit ] = useState() 
//     const [ userGradehistory , setUserGradeHistory ] = useState([])
//     const [ installment , setInstallment ] = useState();
//     const [ isAccepted , setIsAccepted ] = useState(false);
//     const [ isReloading , setIsReloading ] = useState(false)
//     const [ openModal , setOpenModal ] = useState(0)
    
//     const profileStore = UserProfile()

//     const gradeCredit = (grade) => {

//         if(grade == "A1" || grade == "A2" || grade == "A3") {
//             return 10
//         } else if(grade == "B1" || grade == "B2" || grade == "B3") {
//             return 7.5
//         } else {
//             return 5
//         }
        
//     }

//     useEffect(() => {
//         gradeCredit(profileStore.data.grade)        
//     }, [profileStore.data])

//     useEffect(()=>{
//         setIsReloading(false)
//     }, [isReloading])

//         const gradeAchivedAt = (date) => {
//         return (convertToJalali(date))}

//     useEffect(()=>{
//         const getGrade = async () =>{
//             const {response , error} = await validationResult()
//             setUserGradeHistory  (response.data.results);
//             setIsLoading(false)
//         }
//         getGrade()
//     },[])

//     const handleChange = (e) => {
//         const value = e.target.value;

//         const floatPattern = /^(\d+(\.\d{0,2})?)?$/;
    
//         if (value === '') {
//           setCredit('');
//           return;
//         }
    
//         if (floatPattern.test(value)) {
//           const num = parseFloat(value);
//           if (num <= gradeCredit(profileStore.data.grade)) {
//             setCredit(value);
//           }
//         }
//         };



//         const handleChangeInstallment = (event) => {
//             const inputValue = event.target.value;
//             if (inputValue === '') {
//                 setInstallment(''); 
//             }
//             if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 6) {
//                 setInstallment(inputValue);
//             }
//         };

//     const handleCheckboxChange = (e) => {
//        setIsAccepted(e.target.checked);
//     };   


//     const handleSubmitCredit = () => {
//         setOpenModal(2)
//     }

//     const handleSubmitInstallment = async () => {
//         const {response , error} = await selectCreditAmountInstallment({
//                 amount : credit ,
//                 installments : installment
//             })
//         if(response){
//             setOpenModal(3)
//         }else{
//             toast.error(error.response?.data.non_field_errors[0] || "مشکلی پیش آمده", { 
//                 position: "bottom-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 progress: undefined,
//                 theme: "light",
//                 transition: Bounce,
//               })
//         }
//     }

//     return(

//         <div className='flex flex-col w-[100%] '>

//         <div className=" border rounded-xl border-gray-200 h-min mx-[24px] pb-[24px] top-0 ">

//         <div className="w-full pr-8 font-bold text-[20px] border-b border-gray-200 p-[20px] ">تاریخچه اعتبار سنجی</div>

// {isLoading? <div className='mt-7' ><ThreeDots
//                       visible={true}
//                       height="10"
//                       width="80"
//                       color="#D2AB67"   
//                       radius="9"
//                       ariaLabel="three-dots-loading"
//                       /></div> : <>
//                                   {userGradehistory.length>0?<>
//                 {userGradehistory.map((p,index)=>{
    
//     if(p.status === "completed"){
//         if(!p.is_accepted){
//         return( 
//             <div className='border-b pb-2'>
//                 <div className="w-full px-2 font-bold mx-1 text-right mt-6">نتیجه اعتبار سنجی</div>

//                 <div className="w-full px-2 mt-6 mx-1 text-right  ">نتیجه اعتبار سنجی : امکان دریافت اعتبار تا {p?.max_amount} گرم طلا</div>

//                 <div className="w-full px-2 mt-6 mx-1 text-right ">تاریخ ثبت : {gradeAchivedAt(p?.achieved_at)}</div>

//                 <div className="w-full px-2 mt-6 mx-1 text-right text-red-600 ">تاریخ اعتبارسنجی تا 24 ساعت اعتبار دارد و پس از اتمام زمان دوباره باید اعتبار سنجی کنید.</div>

//                 <br/>  

//                 <div className=" 
//                 w-max
//                 m-auto
//                 md:mr-6
//                     p-[16px]
//                     bg-[#EDEDED] 
//                     rounded-xl 
//                   text-black
//                   hover:bg-primary
//                   hover:text-black
//                     text-xl
//                     md:text-base
//                     "
//                     onClick={() => {
//                         setOpenModal(1)
//                     }}
//                     >
//                         تایید و ادامه
//                 </div>
//             </div>
            
//         )}else{
//             return(
// <div className="w-full border-gray-200 border-b pb-2 mt-[16px] pt-[24px] px-[24px]">
//   <div className="w-full font-bold text-[20px] border-gray-200 mb-[enter text-right">
//     درخواست اعتبار
//   </div>
  
//   <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around gap-4 md:gap-0">
//     <span className="w-full md:w-auto mb-[12px] mx-1 text-right">
//       نتیجه اعتبار سنجی: امکان دریافت اعتبار تا {p?.max_amount} گرم طلا
//     </span>
//     <span className="w-full md:w-auto mb-[12px] mx-1 text-right">
//       تاریخ درخواست: {convertToJalali(p.achieved_at)}
//     </span>
//     <span className="w-full md:w-auto mb-[12px] mx-1 text-right">
//       تایید توسط شما: <span className='text-green-500'>تایید شده</span>
//     </span>
//   </div>
// </div>
//             )
//         }
//     }
//     else if(p.status === "in_progress"){
//         return(
//             <div className='border-b pb-2'>
//                 <div className="w-full mx-2 text-right font-bold mt-6">نتیجه اعتبار سنجی: در حال پردازش</div>

//                 <div className="w-full mx-2 text-right mt-6 ">تاریخ درخواست : {gradeAchivedAt(p?.created_at)}</div>

//                 <br/>
//             </div>
//         )
//     }
//     else{
//         return(
//             <>
//                 <div className="w-full pr-8 font-bold mt-6">نتیجه اعتبار سنجی:<span className='text-red-600' >درخواست منقضی شده</span></div>

//                 <div className="w-full pr-8 mt-6 ">تاریخ درخواست : {gradeAchivedAt(p?.achieved_at)}</div>

//                 <br/>
//             </>
//         )                }
    
// })}
// </>:<div className='px-[24px] pt-[24px]'>رکوردی موجود نمیباشد</div>}
// </> }



//         </div>
//             <ModalPage isOpen={openModal == 1}>
//             <div
//                 className="
//                 bg-white 
//                 w-full
//                 max-w-[640px]
//                 p-6 
//                 md:p-8
//                 rounded-xl 
//                 md:shadow-lg
//                 "
//             >
//                 <div
//                 className="
//                     flex
//                     justify-between
//                     items-center
//                     mb-4
//                 "
//                 >
//                 <Image
//                     src="/images/ticksabz.png"
//                     alt="sabz"
//                     width={56}
//                     height={56}
//                     className="
//                     w-14
//                     h-14
//                     bg-[#CCF1DD]
//                     rounded-lg
//                     "
//                 />

//                 <button
//                     onClick={() => {
//                     setOpenModal(0);
//                     }}
//                     className="font-bold py-2 px-4 rounded text-xl flex items-center justify-center"
//                 >
//                     <Close />
//                 </button>
//                 </div>

//                 <div
//                 className="
//                     w-full
//                     flex
//                     flex-col
//                     items-start
//                     gap-y-4
//                     md:gap-y-5
//                 "
//                 >
//                 <p className="text-xl md:text-2xl">میزان اعتبار</p>

//                 <p className="text-sm md:text-xl text-[#A6A6A6]">
//                     میزان اعتبار خود را تا {gradeCredit(profileStore.data.grade)} گرم طلا انتخاب کنید.
//                 </p>

//                 <div
//                     className="
//                     flex
//                     items-center
//                     w-full
//                     h-12
//                     rounded-xl
//                     border
//                     border-[#E1E1E1]
//                     "
//                 >
//                     <input
//                     className="
//                         border-none
//                         focus:outline-none
//                         focus:ring-0
//                         rounded-xl
//                         w-full
//                         px-4
//                     "
//                     placeholder="0.1 گرم طلا"
//                     type="text"
//                     name="credit"
//                     onChange={handleChange}
//                     value={credit}
//                     />
//                 </div>

//                 <div
//                     className="
//                     flex
//                     flex-col
//                     md:flex-row
//                     justify-between
//                     gap-3
//                     md:gap-12
//                     w-full
//                     "
//                 >
//                     <button
//                     className="
//                         w-full
//                         h-12 
//                         bg-[#EDEDED] 
//                         rounded-xl 
//                         text-black
//                         hover:bg-primary
//                         hover:text-black
//                         text-xl
//                     "
//                     onClick={() => {
//                         if (credit) {
//                         handleSubmitCredit();
//                         }
//                     }}
//                     >
//                     تایید و ادامه
//                     </button>

//                     <button
//                     className="
//                         w-full
//                         h-12 
//                         rounded-xl 
//                         border
//                         mt-3
//                         md:mt-0
//                         md:mr-3
//                         border-primary
//                         text-primary
//                         text-xl
//                     "
//                     onClick={() => {
//                         setOpenModal(0);
//                     }}
//                     >
//                     انصراف
//                     </button>
//                 </div>
//                 </div>
//             </div>
//             </ModalPage>


//             <ModalPage isOpen={openModal == 2}>
//             <div
//                 className="
//                 bg-white 
//                 w-full
//                 max-w-[664px]
//                 p-6
//                 md:p-8 
//                 rounded-xl 
//                 md:shadow-lg
//                 "
//             >
//                 <div
//                 className="
//                     flex
//                     justify-between
//                     items-center
//                     mb-4
//                 "
//                 >
//                 <Image
//                     src="/images/ticksabz.png"
//                     alt="sabz"
//                     width={56}
//                     height={56}
//                     className="
//                     w-14
//                     h-14
//                     bg-[#CCF1DD]
//                     rounded-lg
//                     "
//                 />

//                 <button
//                     onClick={() => {
//                     setOpenModal(0);
//                     }}
//                     className="font-bold py-2 px-4 rounded text-xl flex items-center justify-center"
//                 >
//                     <Close />
//                 </button>
//                 </div>

//                 <div
//                 className="
//                     w-full
//                     flex
//                     flex-col
//                     items-start
//                     gap-y-4
//                     md:gap-y-5
//                 "
//                 >
//                 <p className="text-xl md:text-2xl">اقساط</p>

//                 <p className="text-sm md:text-xl text-[#A6A6A6]">
//                     تعداد اقساط خود را انتخاب کنید.
//                 </p>

//                 <div
//                     className="
//                     flex
//                     items-center
//                     w-full
//                     h-12
//                     rounded-xl
//                     border
//                     border-[#E1E1E1]
//                     "
//                 >
//                     <input
//                     className="
//                         border-none
//                         focus:outline-none
//                         focus:ring-0
//                         rounded-xl
//                         w-full
//                         px-4
//                     "
//                     placeholder="حداکثر 6 قسط"
//                     type="text"
//                     name="installment"
//                     onChange={handleChangeInstallment}
//                     value={installment}
//                     />
//                 </div>

//                 <div
//                     className="
//                     flex
//                     flex-col
//                     md:flex-row
//                     justify-between
//                     gap-3
//                     md:gap-12
//                     w-full
//                     "
//                 >
//                     <button
//                     className="
//                         w-full
//                         h-12 
//                         bg-[#EDEDED] 
//                         rounded-xl 
//                         text-black
//                         hover:bg-primary
//                         hover:text-black
//                         text-xl
//                     "
//                     onClick={() => {
//                         if (installment) {
//                         handleSubmitInstallment();
//                         }
//                     }}
//                     >
//                     تایید و ادامه
//                     </button>

//                     <button
//                     className="
//                         w-full
//                         h-12 
//                         rounded-xl 
//                         border
//                         mt-3
//                         md:mt-0
//                         md:mr-3
//                         border-primary
//                         text-primary
//                         text-xl
//                     "
//                     onClick={() => {
//                         setOpenModal(0);
//                     }}
//                     >
//                     انصراف
//                     </button>
//                 </div>
//                 </div>
//             </div>
//             </ModalPage>


//             <ModalPage isOpen={openModal == 3}>
//             <div
//                 className="
//                 bg-white 
//                 w-full
//                 max-w-[664px]
//                 p-6
//                 md:p-8 
//                 rounded-xl 
//                 md:shadow-lg
//                 "
//             >
//                 <div
//                 className="
//                     flex
//                     justify-between
//                     items-center
//                     mb-4
//                 "
//                 >
//                 <Image
//                     src="/images/ticksabz.png"
//                     alt="sabz"
//                     width={56}
//                     height={56}
//                     className="
//                     w-14
//                     h-14
//                     bg-[#CCF1DD]
//                     rounded-lg
//                     "
//                 />

//                 <button
//                     onClick={() => {
//                     setOpenModal(0);
//                     }}
//                     className="font-bold py-2 px-4 rounded text-xl flex items-center justify-center"
//                 >
//                     <Close />
//                 </button>
//                 </div>

//                 <div
//                 className="
//                     w-full
//                     flex
//                     flex-col
//                     items-start
//                     gap-y-4
//                     md:gap-y-5
//                 "
//                 >
//                 <h2 className="text-xl md:text-3xl font-semibold">قوانین و مقررات</h2>

//                 <ul className="text-sm md:text-xl text-[#1E1E1E] list-disc pr-5 space-y-1">
//                     <li>در صورت دریافت اعتبار قسط اول نقدی پرداخت میشود.</li>
//                     <li>در صورت عدم پرداخت جریمه به اقساط اضافه میشود.</li>
//                     <li>در صورت دریافت اعتبار قسط اول نقدی پرداخت میشود.</li>
//                     <li>در صورت عدم پرداخت جریمه به اقساط اضافه میشود.</li>
//                     <li>در صورت دریافت اعتبار قسط اول نقدی پرداخت میشود.</li>
//                     <li>در صورت عدم پرداخت جریمه به اقساط اضافه میشود.</li>
//                 </ul>

//                 <label className="flex items-center gap-2 text-sm md:text-base mt-2">
//                     <input
//                     type="checkbox"
//                     id="termsCheckbox"
//                     onChange={handleCheckboxChange}
//                     />
//                     شرایط و قوانین را می‌پذیرم.
//                 </label>

//                 <div
//                     className="
//                     flex
//                     flex-col
//                     md:flex-row
//                     justify-between
//                     gap-3
//                     md:gap-12
//                     w-full
//                     mt-4
//                     "
//                 >
//                     <button
//                     className="
//                         w-full
//                         h-12 
//                         bg-[#EDEDED] 
//                         rounded-xl 
//                         text-black
//                         hover:bg-primary
//                         hover:text-black
//                         text-xl
//                     "
//                     onClick={() => {
//                         if (isAccepted) {
//                         handleSubmitData();
//                         }
//                     }}
//                     >
//                     پرداخت پیش قسط
//                     </button>

//                     <button
//                     className="
//                         w-full
//                         h-12 
//                         rounded-xl 
//                         border
//                         mt-3
//                         md:mt-0
//                         md:mr-3
//                         border-primary
//                         text-primary
//                         text-xl
//                     "
//                     onClick={() => {
//                         setOpenModal(0);
//                     }}
//                     >
//                     انصراف
//                     </button>
//                 </div>
//                 </div>
//             </div>
//             </ModalPage>
//         </div>

//     )

// }


// export default Login;
