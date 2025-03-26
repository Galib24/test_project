import Image from 'next/image';
import React from 'react';
import img from '../../../../public/homeimage.png';
import img2 from '../../../../public/funel.png';
import icon1 from '../../../../public/Image.png';
import icon2 from '../../../../public/like.png';
import icon3 from '../../../../public/people.png';
import icon4 from '../../../../public/profile.png';

export default function FirstSection() {
  return (
    <div className="relative py-5 sm:py-10 lg:py-5 flex flex-col justify-center items-center bg-[#03135B]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute lg:inset-11 sm:inset-0 z-0 bg-gradient-to-t from-[#03135B] via-transparent to-transparent opacity-20">
        <Image
          src={img2}
          alt="Background Image"
          layout="fill" // Ensures the image covers the entire container
          objectFit="cover" // Ensures the image does not stretch and covers the area
        />
      </div>

      {/* Content Below Funnel */}
      <div className="relative z-10 flex flex-col justify-center items-center text-white mb-16 sm:mb-24 lg:mb-36">
        <div className="flex flex-col sm:flex-row items-center gap-5 relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">DIGITAL SERVICES</h1>
        </div>

        {/* New Text: Building Your Empire Digitally */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-5 text-center">
          BUILDING YOUR EMPIRE DIGITALLY
        </h2>

        {/* Button Container */}
        <div className="flex flex-col sm:flex-row gap-5 mt-5">
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
          <button className="bg-transparent border text-white px-6 py-3 rounded-md text-lg font-semibold">
            Book an Appointment
          </button>
        </div>

        {/* New Section with Four Icons and Text */}
        <div className="mt-12 sm:mt-12 flex flex-col sm:flex-row gap-10 items-center sm:justify-between">
          {/* First Section */}
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center text-center">
            <Image src={icon1} alt="Websites Built" width={40} height={40} className="mb-3" />
            <h3 className="text-[16px] sm:text-[18px] text-left font-semibold">2K+ <br /> Websites Built</h3>
          </div>

          {/* Divider */}
          <div className="h-10 sm:h-12 border-t sm:border-l border-gray-300"></div>

          {/* Second Section */}
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center text-center">
            <Image src={icon2} alt="Client Satisfaction" width={40} height={40} className="mb-3" />
            <h3 className="text-[16px] sm:text-[18px] text-left font-semibold">97% <br /> Client Satisfaction</h3>
          </div>

          {/* Divider */}
          <div className="h-10 sm:h-12 border-t sm:border-l border-gray-300"></div>

          {/* Third Section */}
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center text-center">
            <Image src={icon3} alt="Team Members" width={40} height={40} className="mb-3" />
            <h3 className="text-[16px] sm:text-[18px] text-left font-semibold">25+ <br /> Team Members</h3>
          </div>

          {/* Divider */}
          <div className="h-10 sm:h-12 border-t sm:border-l border-gray-300"></div>

          {/* Fourth Section */}
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center text-center">
            <Image src={icon4} alt="Amazing Clients" width={40} height={40} className="mb-3" />
            <h3 className="text-[16px] sm:text-[18px] text-left font-semibold">500+ <br /> Amazing Clients</h3>
          </div>
        </div>

        {/* Image below text */}
        <div className="mt-6 sm:mt-8">
          <Image className="w-full sm:w-3/4 lg:w-full mx-auto" src={img} height={825} width={825} alt="main image" />
        </div>
      </div>
    </div>
  );
}




// import Image from 'next/image';
// import React from 'react';
// import img from '../../../../public/homeimage.png';
// import img2 from '../../../../public/funel.png';
// import icon1 from '../../../../public/Image.png';
// import icon2 from '../../../../public/like.png';
// import icon3 from '../../../../public/people.png';
// import icon4 from '../../../../public/profile.png';

// export default function FirstSection() {
//   return (
//     <div className="relative py-16 sm:py-24 lg:py-36 flex flex-col justify-center items-center bg-[#03135B]">
//       {/* Background Image with Gradient Overlay */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#03135B] via-transparent to-transparent opacity-20">
//         <Image
//           src={img2}
//           alt="Background Image"
//           layout="intrinsic" // Intrinsic keeps the original aspect ratio of the image
//           width={800} // You can adjust the width to make it smaller
//           height={400} // Set a custom height
//           objectFit="contain" // Keeps the image within the container, adjusting the size proportionally
//           objectPosition="center" // Ensures the image stays centered
//         />
//       </div>

//       {/* Content Below Funnel */}
//       <div className="relative z-10 flex flex-col justify-center items-center text-white mb-16 sm:mb-24 lg:mb-36">
//         <div className="flex flex-col sm:flex-row items-center gap-5 relative">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">DIGITAL SERVICES</h1>
//         </div>

//         {/* New Text: Building Your Empire Digitally */}
//         <h2 className="text-xl sm:text-2xl font-semibold mt-5 text-center">
//           BUILDING YOUR EMPIRE DIGITALLY
//         </h2>

//         {/* Button Container */}
//         <div className="flex flex-col sm:flex-row gap-5 mt-5">
//           {/* See Pricing Button */}
//           <div className="hidden md:block">
//             <button className="relative bg-[#FF693B] text-white font-[Inter] font-medium 
//                                    text-[14px] leading-[20px] tracking-[0] text-center
//                                    rounded-[4px] w-[238px] h-[50px] px-[18px] py-[14px] 
//                                    flex items-center justify-center gap-[3px]">
//               SEE PRICING
//             </button>
//           </div>

//           {/* Book Appointment Button */}
//           <button className="bg-transparent border text-white px-6 py-3 rounded-md text-lg font-semibold">
//             Book an Appointment
//           </button>
//         </div>

//         {/* New Section with Four Icons and Text */}
//         <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-10 items-center sm:justify-between">
//           {/* First Section */}
//           <div className="flex flex-col sm:flex-row items-center gap-5 justify-center text-center">
//             <Image src={icon1} alt="Websites Built" width={40} height={40} className="mb-3" />
//             <h3 className="text-[16px] sm:text-[18px] font-semibold">2K+ <br /> Websites Built</h3>
//           </div>

//           {/* Divider */}
//           <div className="h-10 sm:h-16 border-t sm:border-l border-gray-300"></div>

//           {/* Second Section */}
//           <div className="flex flex-col sm:flex-row items-center gap-5 justify-center text-center">
//             <Image src={icon2} alt="Client Satisfaction" width={40} height={40} className="mb-3" />
//             <h3 className="text-[16px] sm:text-[18px] font-semibold">97% <br /> Client Satisfaction</h3>
//           </div>

//           {/* Divider */}
//           <div className="h-10 sm:h-16 border-t sm:border-l border-gray-300"></div>

//           {/* Third Section */}
//           <div className="flex flex-col sm:flex-row items-center gap-5 justify-center text-center">
//             <Image src={icon3} alt="Team Members" width={40} height={40} className="mb-3" />
//             <h3 className="text-[16px] sm:text-[18px] font-semibold">25+ <br /> Team Members</h3>
//           </div>

//           {/* Divider */}
//           <div className="h-10 sm:h-16 border-t sm:border-l border-gray-300"></div>

//           {/* Fourth Section */}
//           <div className="flex flex-col sm:flex-row items-center gap-5 justify-center text-center">
//             <Image src={icon4} alt="Amazing Clients" width={40} height={40} className="mb-3" />
//             <h3 className="text-[16px] sm:text-[18px] font-semibold">500+ <br /> Amazing Clients</h3>
//           </div>
//         </div>

//         {/* Image below text */}
//         <div className="mt-6 sm:mt-8">
//           <Image className="w-full sm:w-3/4 lg:w-full mx-auto" src={img} height={400} width={400} alt="main image" />
//         </div>
//       </div>
//     </div>
//   );
// }

