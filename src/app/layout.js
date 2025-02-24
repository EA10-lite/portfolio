import { Footer, Navbar } from "@/components/main";
import "./globals.css";

export const metadata = {
  title: "Emmanuel Anyigor",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary h-[100vh] w-full overflow-auto">
        <div className="">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
