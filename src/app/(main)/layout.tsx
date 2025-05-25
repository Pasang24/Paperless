import Navbar from "@/components/custom/Navbar";
import { UserProvider } from "../context/UserProvider";

function FormsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <UserProvider>
        <Navbar />
        {children}
      </UserProvider>
    </div>
  );
}

export default FormsLayout;
