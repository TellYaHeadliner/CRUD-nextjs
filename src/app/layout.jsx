'use client'
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "@/components/App.Navbar";
import Footer from "@/components/App.Footer";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        <ToastContainer />
      </body>
    </html>
  );
}
