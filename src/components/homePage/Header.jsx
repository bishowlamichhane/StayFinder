import { useState } from "react";
import { FaBell, FaBars } from "react-icons/fa";

const Header = ({ ids }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const gotoId = () => {
    const id = document.getElementById(`${ids}`);
    id?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="border-b h-16 w-screen flex items-center justify-between px-5 lg:px-10 bg-white shadow-md">
      {/* Left section: Logo and Mobile Menu Icon */}
      <div className="flex items-center gap-10">
        <div className="text-2xl font-bold text-blue-800 cursor-pointer">
          EcoStay
        </div>
        {/* Mobile Menu Icon */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <FaBars size={24} />
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex text-lg gap-8 text-center">
          <p className="cursor-pointer hover:text-blue-800 text-red-900">
            Home
          </p>
          <p className="cursor-pointer hover:text-blue-800 " onClick={gotoId}>
            Destinations
          </p>
          <p className="cursor-pointer hover:text-blue-800 ">Deals</p>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col gap-4 py-4 px-5">
            <li className="cursor-pointer hover:text-blue-800 text-red-900">
              Home
            </li>
            <li className="cursor-pointer hover:text-blue-800" onClick={gotoId}>
              Destinations
            </li>
            <li className="cursor-pointer hover:text-blue-800">Deals</li>
          </ul>
        </div>
      )}

      {/* Right section: Notifications and Profile */}
      <div className="flex items-center gap-4 lg:gap-6">
        {/* Notifications Icon */}
        <div className="relative cursor-pointer">
          <FaBell size={20} />
          {/* Notification Badge (optional) */}
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Profile Section */}
        <div className="relative">
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={toggleDropdown}
          >
            <img
              src="/images/1.jpg"
              alt="Profile"
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
            />
            <p className="font-semibold text-orange-800 hidden lg:block">
              Robert D'nero
            </p>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Bookings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
