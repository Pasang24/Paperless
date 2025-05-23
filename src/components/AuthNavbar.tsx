import Link from "next/link";
import { buttonVariants } from "./ui/button";

function AuthNavbar() {
  return (
    <nav className="flex justify-between items-center px-2 py-4 sm:px-4 border-b">
      <Link href="/" className="text-2xl font-semibold">
        Paperless
      </Link>
      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className={`${buttonVariants({ variant: "ghost" })} font-semibold`}
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className={`${buttonVariants({
            variant: "default",
          })} font-semibold`}
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}

export default AuthNavbar;
