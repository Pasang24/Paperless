import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between p-2 sm:px-4 border-b">
      <Link href="/forms" className="text-2xl font-semibold">
        Paperless
      </Link>
      <span>Pasang Lama</span>
    </nav>
  );
}

export default Navbar;
