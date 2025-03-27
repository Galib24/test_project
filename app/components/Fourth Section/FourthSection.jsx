"use client";

import React from 'react';
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Dynamic import with `ssr: false`
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function FourthSection() {
    const firstRowImages = [
        "https://i.postimg.cc/hjXKDJRg/images.png",
        "https://i.postimg.cc/0NQsn6Qm/image-1.png",
        "https://i.postimg.cc/g0TPTYX7/image-28.png",
        "https://i.postimg.cc/P5VctSXp/image-2.png"
    ];

    const secondRowImages = [
        "https://i.postimg.cc/sfPNBjfR/image-3.png",
        "https://i.postimg.cc/K8WqX4ft/image-4.png",
        "https://i.postimg.cc/0NJt9xXF/image-5.png",
        "https://i.postimg.cc/Nffp5RP1/image-6.png"
    ];

    const sliderSettingsWithoutDots = {
        dots: false, // ❌ No dots for the first slider
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    const sliderSettingsWithDots = {
        dots: true, // ✅ Dots for the second slider
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <div className="my-10 px-6 md:px-20 py-16 md:py-24">
            <div>
                <p className="font-[Raleway] text-[14px] text-[#0C89FF]">UI/UX PORTFOLIO</p>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <p className="text-[28px] md:text-[48px] font-semibold text-[#0A2C8C] text-center md:text-left">
                        Check Our Previous Work
                    </p>

                    <button className="relative bg-[#FF693B] text-white font-[Inter] font-medium 
                        text-[14px] leading-[20px] tracking-[0] text-center
                        rounded-[4px] w-[238px] h-[50px] px-[18px] py-[14px] 
                        flex items-center justify-center gap-[3px] hover:bg-black hover:text-white 
                        duration-300 transition-colors cursor-pointer mt-4 md:mt-0">
                        All Portfolio
                    </button>
                </div>
            </div>

            {/* Horizontal Line */}
            <div className="w-full h-[1px] bg-[#0C89FF] mx-auto mt-6 md:mt-8 rounded-full"></div>

            {/* Services List */}
            <ul className="flex flex-wrap text-[16px] gap-4 md:gap-10 mt-6 text-[#0A2C8C] font-medium text-lg font-[inter]">
                <li className='text-[#0C89FF]'>UI/UX</li>
                <li>WEBSITE</li>
                <li>SEO</li>
                <li>LOGO DESIGN</li>
                <li>BANNER DESIGN</li>
                <li>GOOGLE ADS</li>
            </ul>

            {/* Image Sliders */}
            <div className="mt-10">
                {/* First Slider (Without Dots) */}
                <Slider {...sliderSettingsWithoutDots}>
                    {firstRowImages.map((src, index) => (
                        <div key={index} className="px-2 flex justify-center">
                            <img src={src} alt={`Project ${index + 1}`}
                                className="w-[400px] h-[250px] object-cover rounded-lg shadow-lg" />
                        </div>
                    ))}
                </Slider>

                {/* Second Slider (With Dots) */}
                <Slider {...sliderSettingsWithDots} className="mt-8">
                    {secondRowImages.map((src, index) => (
                        <div key={index} className="px-2 flex justify-center">
                            <img src={src} alt={`Project ${index + 5}`}
                                className="w-[400px] h-[250px] object-cover rounded-lg shadow-lg" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
