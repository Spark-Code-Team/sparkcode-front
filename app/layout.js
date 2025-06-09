import "./globals.css";

import HomeLayout from "@/components/layout/homeLayout/HomeLayout";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

      </body>
    </html>
  );
}
