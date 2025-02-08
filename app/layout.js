import "./globals.css";
import Navbar from "../components/module/navbar/Navbar";
import Footer from "../components/module/footer/Footer";

export const metadata = {
  title: "spark code",
  description: "spark code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>

        <Navbar/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}
