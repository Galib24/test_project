import Image from 'next/image';
import React from 'react';
import img from '../../../../public/image.png';
import img2 from '../../../../public/funel.png';

export default function FirstSection() {
  return (
    <div className="relative py-36 flex flex-col justify-center items-center bg-[#03135B]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-32 z-0 bg-gradient-to-t from-[#03135B] via-transparent to-transparent opacity-20">
        <Image
          src={img2}
          alt="Background Image"
          layout="fill" // Ensures the image covers the entire container
          objectFit="cover" // Ensures the image does not stretch and covers the area
        />
      </div>

      {/* Content Below Funnel */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white mb-36">
        <div className="flex items-center gap-5 relative">
          <h1 className="text-6xl font-bold">DIGITAL</h1>
          <h1 className="text-6xl font-bold">SERVICES</h1>
        </div>

        {/* New Text: Building Your Empire Digitally */}
        <h2 className="text-xl font-semibold mt-5">
          BUILDING YOUR EMPIRE DIGITALLY
        </h2>

          {/* Button Container */}
          <div className="flex gap-5 mt-5">
          {/* See Pricing Button */}
          <div className="hidden md:block">
                <button className="relative bg-[#FF693B] text-white font-[Inter] font-medium 
                                   text-[14px] leading-[20px] tracking-[0] text-center
                                   rounded-[4px] w-[238px] h-[50px] px-[18px] py-[14px] 
                                   flex items-center justify-center gap-[3px]">
                    SEE PRICING
                </button>
            </div>
          
          {/* Book Appointment Button */}
          <button className="bg-transparent border  text-white px-6 py-3 rounded-md text-lg font-semibold">
            Book an Appointment
          </button>
        </div>

        {/* Image below text */}
        <div className="mt-6">
          <Image className="w-full" src={img} height={400} width={400} alt="main image" />
        </div>

      
      </div>
    </div>
  );
}
