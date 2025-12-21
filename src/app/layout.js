import "./globals.css";
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
  description: "Full-Stack Developer | AI Enthusiast | Creative Coder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black antialiased`}>
        <Sidebar />
        <div className="flex h-screen overflow-hidden">
          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto ">
            <div className="mx-auto max-w-5xl px-6 py-8 lg:px-12 lg:py-12">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
