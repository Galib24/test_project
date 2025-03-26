'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image"; // If you're using Next.js
import logo from "../../assets/logo.png"; // Adjust the path if needed

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#03135B] shadow-md px-6 py-4 flex items-center justify-between">
            {/* Logo with Image */}
            <div className="w-[120px] h-[40px]">
                <Image src={logo} alt="Logo" width={200} height={200}  />
            </div>

            {/* Menu for large screens */}
            <ul className="hidden text-white md:flex space-x-6 font-medium lg:ml-28">
                <li className="hover:text-[#FF693B] transition-all duration-300 cursor-pointer">HOME</li>
                <li className="hover:text-[#FF693B] transition-all duration-300 cursor-pointer">SERVICE</li>
                <li className="hover:text-[#FF693B] transition-all duration-300 cursor-pointer">COMBO SALES</li>
                <li className="hover:text-[#FF693B] transition-all duration-300 cursor-pointer">PORTFOLIO</li>
                <li className="hover:text-[#FF693B] transition-all duration-300 cursor-pointer">ABOUT</li>
                <li className="hover:text-[#FF693B] transition-all duration-300 cursor-pointer">BLOG</li>
            </ul>

            {/* SEE PRICING Button */}
            <div className="hidden md:block">
                <button className="relative bg-[#FF693B] text-white font-[Inter] font-medium 
                                   text-[14px] leading-[20px] tracking-[0] text-center
                                   rounded-[4px] w-[238px] h-[50px] px-[18px] py-[14px] 
                                   flex items-center justify-center gap-[3px]">
                    SEE PRICING
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="absolute font-[Inter] top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium md:hidden">
                    <li className="hover:text-gray-900 cursor-pointer">Home</li>
                    <li className="hover:text-gray-900 cursor-pointer">Service</li>
                    <li className="hover:text-gray-900 cursor-pointer">Combo Sales</li>
                    <li className="hover:text-gray-900 cursor-pointer">Portfolio</li>
                    <li className="hover:text-gray-900 cursor-pointer">About Us</li>
                    <li className="hover:text-gray-900 cursor-pointer">Blog</li>
                    <button className="bg-[#FF693B] px-6 py-2 text-white font-semibold rounded-md">
                        Contact
                    </button>
                </ul>
            )}
        </nav>
    );
}
