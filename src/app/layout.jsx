import GoToTop from "../components/GoToTop";
import "./globals.css";
import MusicBackground from "../components/MusicBackground";
import Sidebar from "../components/Sidebar";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});
// Metadata
export const metadata = {
  title: "Hamna Liaquat",
  description: "Full-Stack Developer | Creative Coder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-[#0F0F0F] antialiased relative flex flex-col  `}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Background Music + Aurora */}
        <MusicBackground />
        {/* Go to top btn */}
        <GoToTop />

        {/* Scrollable Main Content */}
        <main className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden ">
          <div className="mx-auto max-w-5xl px-6 ">
            {children}
            {/* footer */}
          </div>
        </main>
        <Footer />
        {/* Bottom Gradient */}
        <div className="pointer-events-none fixed bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#0F0F0F] to-transparent z-10 drop-shadow-2xl  " />
      </body>
    </html>
  );
}
