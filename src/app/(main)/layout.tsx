import Navbar from "@/components/Navbar";

function FormsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default FormsLayout;
