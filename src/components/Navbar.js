import Link from 'next/link';
import config from '../config';

const Navbar = () => {
  return (
    <nav className="bg-cyan-700 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link href="/">
            <span className="hover:text-gray-300">{config.productName}</span>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/about">
            <span className="hover:text-gray-300">About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
