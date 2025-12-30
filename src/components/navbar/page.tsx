"use client";

import { useState, useRef, useEffect, useContext } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { CartContext } from "../context/CartContext";
import { useWishlist } from "@/components/WishlistContext/WishlistContext";
import {
  ShoppingCartIcon,
  HeartIcon,
  MenuIcon,
  XIcon,
  UserIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { data: session } = useSession();
  const { cartData, isLoading } = useContext(CartContext);
  const { wishlist } = useWishlist();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setUserDropdown(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md`}
   style={{
  backgroundColor: scrolled ? "rgba(230, 210, 180, 0.9)" : "rgba(230, 210, 180, 0.75)",
  boxShadow: scrolled
    ? "0 4px 12px rgba(0,0,0,0.15)"
    : "0 0px 0px rgba(0,0,0,0)",
}}

      animate={{ height: scrolled ? 64 : 72 }}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-full">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#8b5e3c] hover:text-[#a16d4c] transition"
        >
          ShopMart
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-[#4a3f35]">
          <Link href="/products" className="hover:text-[#a16d4c] transition-colors duration-200">
            Products
          </Link>
          <Link href="/brands" className="hover:text-[#a16d4c] transition-colors duration-200">
            Brands
          </Link>
          <Link href="/categories" className="hover:text-[#a16d4c] transition-colors duration-200">
            Categories
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
       {/* User Dropdown */}
<div className="relative" ref={dropdownRef}>
  <button
    onClick={() => setUserDropdown(!userDropdown)}
    className="flex items-center gap-2 px-3 py-1 hover:bg-[#f0e0d8] rounded-lg transition-all duration-200"
  >
    <UserIcon className="w-6 h-6 text-[#8b5e3c]" />
    {session?.user?.name && (
      <span className="hidden md:inline text-[#4a3f35] font-medium">
        {session.user.name}
      </span>
    )}
  </button>

  <AnimatePresence>
    {userDropdown && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="absolute right-0 mt-2 w-48 bg-[#f5e9de]/90 border border-[#d9c7b7] rounded-lg shadow-lg z-50 backdrop-blur-md"
      >
        {/* My Account Title */}
        <p className="block px-4 py-2 text-gray-700 font-medium border-b border-[#d9c7b7]">
          My Account
        </p>

        {session?.user ? (
          <>
            <Link
              href="/profile"
              className="block px-4 py-2 hover:bg-[#e6d6c3] transition-colors duration-200"
              onClick={() => setUserDropdown(false)}
            >
              Profile
            </Link>
            <button
              className="w-full text-left px-4 py-2 hover:bg-[#e6d6c3] text-red-600 font-medium transition-colors duration-200"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="block px-4 py-2 hover:bg-[#e6d6c3] transition-colors duration-200"
            onClick={() => setUserDropdown(false)}
          >
            Login
          </Link>
        )}
      </motion.div>
    )}
  </AnimatePresence>
</div>


          {/* Wishlist */}
          <div className="relative">
            <Link href="/wishlist" className="relative">
              <HeartIcon className="w-6 h-6 text-[#8b5e3c] hover:text-[#a16d4c] transition-colors duration-200" />
              <Badge className="absolute -top-2 -right-2 h-5 min-w-5 rounded-full px-1 text-xs font-mono bg-[#a16d4c] text-white">
                {wishlist.length}
              </Badge>
            </Link>
          </div>

          {/* Cart */}
          <div className="relative">
            <Link href="/cart" className="relative">
              <ShoppingCartIcon className="w-6 h-6 text-[#8b5e3c] hover:text-[#a16d4c] transition-colors duration-200" />
              <Badge className="absolute -top-2 -right-2 h-5 min-w-5 rounded-full px-1 text-xs font-mono bg-[#8b5e3c] text-white">
                {isLoading ? <Loader2 className="animate-spin w-4 h-4 mx-auto" /> : cartData?.numOfCartItems}
              </Badge>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded hover:bg-[#f0e0d8] transition-all duration-200"
            onClick={toggleMobileMenu}
          >
            {mobileOpen ? <XIcon className="w-6 h-6 text-[#8b5e3c]" /> : <MenuIcon className="w-6 h-6 text-[#8b5e3c]" />}
          </button>
        </div>
      </div>

{/* Mobile Menu */}
<AnimatePresence>
  {mobileOpen && (
    <motion.div
      ref={mobileMenuRef}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-[#f5e9de]/95 shadow-lg border-t border-[#d9c7b7] backdrop-blur-md overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center px-4 py-6 gap-4">
        {/* Main Links */}
        <Link
          href="/products"
          onClick={() => setMobileOpen(false)}
          className="w-full text-center py-3 rounded-lg hover:bg-[#e6d6c3] transition-all duration-200 font-medium text-[#4a3f35]"
        >
          Products
        </Link>
        <Link
          href="/brands"
          onClick={() => setMobileOpen(false)}
          className="w-full text-center py-3 rounded-lg hover:bg-[#e6d6c3] transition-all duration-200 font-medium text-[#4a3f35]"
        >
          Brands
        </Link>
        <Link
          href="/categories"
          onClick={() => setMobileOpen(false)}
          className="w-full text-center py-3 rounded-lg hover:bg-[#e6d6c3] transition-all duration-200 font-medium text-[#4a3f35]"
        >
          Categories
        </Link>

        <hr className="w-full border-[#d9c7b7]" />

        {/* User Section */}
        <p className="w-full text-center px-4 py-2 text-gray-700 font-medium border-b border-[#d9c7b7]">
          My Account
        </p>

        {session?.user ? (
          <>
            <Link
              href="/profile"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-3 rounded-lg hover:bg-[#e6d6c3] transition-all duration-200 text-[#4a3f35] font-medium"
            >
              Profile
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full text-center py-3 rounded-lg hover:bg-[#e6d6c3] text-red-600 font-medium transition-all duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            onClick={() => setMobileOpen(false)}
            className="w-full text-center py-3 rounded-lg hover:bg-[#e6d6c3] transition-all duration-200 text-[#4a3f35] font-medium"
          >
            Login
          </Link>
        )}
      </div>
    </motion.div>
  )}
</AnimatePresence>



    </motion.nav>
  );
}
