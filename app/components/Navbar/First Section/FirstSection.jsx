import React from 'react';

export default function FirstSection() {
  return (
    <div className="bg-[#03135B] py-48 flex justify-center items-center">

      {/* Second Section with Light White & #03135B Gradient */}
      <div 
        className="py-20 flex justify-center items-center relative"
        style={{
          background: "linear-gradient(to top, rgba(300, 300, 300, 0.4), #03135B)",
           borderTopRightRadius: "60px",
          borderTopLeftRadius: "10px"
        }}
      >
        {/* Text with Divider */}
        <div className="flex items-center gap-5 relative">
          <h1 className="text-[#03135B] text-3xl font-bold">
            DIGITAL
          </h1>

      

          <h1 className="text-[#03135B] text-3xl font-bold">
            SERVICES
          </h1>
        </div>
      </div>

    </div>
  );
}
