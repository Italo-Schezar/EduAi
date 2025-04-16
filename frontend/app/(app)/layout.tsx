import AppNavbar from "@/components/AppNavbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AppNavbar />
      <Sidebar />
      <div className="p-4 md:ml-64 mt-16">
        <div className="p-4">
          {children}
        </div>
      </div>
      <div className="md:ml-64">
        <Footer />
      </div>
    </div>
  );
}
