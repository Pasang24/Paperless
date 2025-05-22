import AuthNavbar from "@/components/AuthNavbar";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AuthNavbar />
      {children}
    </div>
  );
}

export default AuthLayout;
