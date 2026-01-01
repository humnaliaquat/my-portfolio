import FloatingMusic from "./FloatingMusic";
import "./globals.css";
import MusicBackground from "./MusicBackground";
import Sidebar from "./Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata = {
  title: "Hamna Liaquat",
  description: "Full-Stack Developer | Creative Coder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black antialiased`}>
        <Sidebar />
        <div className="flex h-screen overflow-hidden">
          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto ">
            <div className="mx-auto max-w-5xl px-6  ">
              {children}
              <MusicBackground />
              <div className="fixed top-6 right-6 z-50 hidden md:block">
                <FloatingMusic />
              </div>
            </div>
            <div
              className="fixed bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-15
  pointer-events-none z-20
  bg-gradient-to-t from-black/70 via-black/40 to-transparent"
            />
          </main>
        </div>
      </body>
    </html>
  );
}
