import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white w-full fixed top-0 z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Your Logo</h1>
          <div className="space-x-4">
            <Link href="/" className="text-blue-500">index
            </Link>
            <Link href="/about" className="text-blue-500 hover:text-blue-700 cursor-pointer">About
            </Link>
            <Link href="/home" className="text-blue-500 hover:text-blue-700 cursor-pointer">Home
            </Link>
            <Link href="/service" className="text-blue-500 hover:text-blue-700 cursor-pointer">Service
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
