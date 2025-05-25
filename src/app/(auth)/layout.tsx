import AuthNavbar from "@/components/custom/AuthNavbar";
import Footer from "@/components/custom/Footer";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-dvh">
      <AuthNavbar />
      {children}
      <Footer />
    </div>
  );
}

export default AuthLayout;
