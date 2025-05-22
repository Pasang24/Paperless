import Link from "next/link";
import NavProfile from "./NavProfile";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-2 sm:px-4 border-b">
      <Link href="/forms" className="text-2xl font-semibold">
        Paperless
      </Link>
      <NavProfile />
    </nav>
  );
}

export default Navbar;
