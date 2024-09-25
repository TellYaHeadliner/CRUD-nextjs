import "./globals.css";
import Navbar from "@/components/App.Navbar";
import Footer from "@/components/App.Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
