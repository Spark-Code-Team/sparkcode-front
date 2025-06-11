import "./globals.css";

import HomeLayout from "@/components/layout/homeLayout/HomeLayout";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Bounce, ToastContainer } from "react-toastify";

export const metadata = {
  title: "spark code",
  description: "spark code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`bg-[#091119] font-dana`}>

        <HomeLayout>
          {children}        
        </HomeLayout>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
