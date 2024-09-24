import "./globals.css";
import Navbar from "@/components/App.Navbar";
import Footer from "@/components/App.Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <link rel="stylesheet" href="globals.css" />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
