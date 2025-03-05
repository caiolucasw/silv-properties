import "@/assets/styles/globals.css";
import AuthProvider from "@/components/client/AuthProvider";
import Footer from "@/components/server/Footer";
import Navbar from "@/components/client/Navbar";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "@/context/GlobalContext";

export const metadata: Metadata = {
  title: "Property Caio",
  keywords: "rental, properties, real estate",
};

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html>
          <body>
            <div className="flex flex-col">
              <Navbar />
              <main className="flex-1 main">{children}</main>
              <Footer />
              <ToastContainer />
            </div>
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default MainLayout;
