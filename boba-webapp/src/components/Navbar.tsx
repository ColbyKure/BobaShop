import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-blue-600 cursor-pointer">
            Boba Bear 🧋
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/menu" className="text-gray-700 hover:text-blue-600">
            Menu
          </Link>
          <Link href="/order" className="text-gray-700 hover:text-blue-600">
            Order
          </Link>
        </div>

        {/* Cart Icon */}
        <Link href="/cart" className="relative">
          <span className="text-gray-700 hover:text-blue-600 text-lg">
            🛒
          </span>
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
