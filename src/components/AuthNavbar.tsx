import Link from "next/link";
import { buttonVariants } from "./ui/button";

function AuthNavbar() {
  return (
    <nav className="flex justify-between items-center p-2 sm:px-4 border-b">
      <Link href="/" className="text-2xl font-semibold">
        Paperless
      </Link>
      <div className="flex items-center gap-2">
        <Link href="/login" className={buttonVariants({ variant: "ghost" })}>
          Login
        </Link>
        <Link href="/signup" className={buttonVariants({ variant: "default" })}>
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default AuthNavbar;
