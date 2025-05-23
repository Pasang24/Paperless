import Link from "next/link";
import NavProfile from "./NavProfile";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-2 py-4 sm:px-4 border-b">
      <Link href="/forms" className="text-2xl font-semibold">
        Paperless
      </Link>
      <NavProfile />
    </nav>
  );
}

export default Navbar;
