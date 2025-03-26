import React from 'react';
import Image from 'next/image';
import img1 from '../../../public/Rectangle 6050.png';
import img2 from '../../../public/Ellipse 578.png';
import img3 from '../../../public/Group1.png';
import img4 from '../../../public/Group2.png';
import img5 from '../../../public/Group3.png';
import img6 from '../../../public/Ellipse 578.png';
import img7 from '../../../public/Button Icon (1).png';
import img8 from '../../../public/Button Icon.png';

export default function SecondSection() {
    return (
        <>
            {/* first part */}
            <div className="relative">
                {/* Image 1 as the background, made smaller */}
                <Image
                    src={img1}
                    height={150}
                    width={150}
                    alt="background image"
                    className="w-full h-[800px]"
                />
                <div>

                    <p className='text-[#FF693B] text-[16px] absolute bottom-96 left-24'>
                        DIGITAL SERVICES
                    </p>
                    <p className=" text-4xl text-white text-[48px] font-inter font-bold leading-[24px] tracking-[2%] absolute bottom-80 left-24">
                        Check Our Available Services
                    </p>

                    {/* Image 2 with button and text */}
                    <div className="absolute top-0 right-0">

                        <Image
                            src={img2}
                            height={700}
                            width={700}
                            alt="side image"
                            className="w-full"
                        />

                        {/* Button & Text Beside Each Other */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">

                            <button className="bg-[#FF693B] text-white font-inter font-normal 
                                       text-[16px] leading-[42px] text-center
                                       rounded-[4px] w-[238px] h-[50px] px-[18px] py-[14px] 
                                       flex items-center justify-center cursor-pointer 
                                       hover:bg-black hover:text-white duration-300 transition-all">
                                ALL Services
                            </button>
                        </div>
                    </div>

                </div>
                <div className="w-11/12 ml-16 border-[1px] border-white absolute bottom-64"></div>
                {/* Add Links Over Image */}
                <div className="absolute bottom-48 left-24 text-white text-[16px]   leading-[22px] tracking-[0%] text-center uppercase">
                    <a href="#website" className="inline-block px-2 hover:underline font-[Inter] text-[#0C89FF]">Website</a>
                    <span className="mx-2"></span>
                    <a href="#uiux" className="inline-block px-2 hover:underline font-[Inter]">UI/UX</a>
                    <span className="mx-2"></span>
                    <a href="#seo" className="inline-block px-2 hover:underline font-[Inter]">SEO</a>
                    <span className="mx-2"></span>
                    <a href="#logo-design" className="inline-block px-2 hover:underline font-[Inter]">Logo Design</a>
                    <span className="mx-2"></span>
                    <a href="#banner-design" className="inline-block px-2 hover:underline font-[Inter]">Banner Design</a>
                    <span className="mx-2"></span>
                    <a href="#google-ads" className="inline-block px-2 hover:underline font-[Inter]">Google Ads</a>
                </div>

            </div>
            <div className='bg-[#001555] relative'>
                <div className="flex flex-wrap md:flex-nowrap ml-24 space-x-8 md:space-x-32 relative z-10"> {/* Use flex-wrap for mobile responsiveness */}

                    {/* First section */}
                    <div className="relative max-w-sm p-6 border border-[#FFFFFF38] rounded-lg backdrop-blur-lg bg-[#3158C733] z-20 mb-6 md:mb-0"> {/* Added margin bottom for mobile */}
                        <div className="flex flex-col items-center justify-center px-8 md:px-16"> {/* Adjusted padding for mobile */}
                            <div className="mb-4">
                                <Image height={400} width={400} src={img3} alt="Logo" className="w-36 object-contain" />
                            </div>
                            <h3 className="text-white font-inter text-[20px] md:text-[24px] font-[inter] mb-4 text-center">WordPress Website</h3> {/* Adjusted font size */}
                            <p className="text-white font-normal text-[14px] md:text-[16px] font-[inter] text-center">Design & Development</p> {/* Adjusted font size */}

                            <div className="mt-6 flex gap-4 flex-wrap justify-center"> {/* Added flex-wrap and justify-center */}
                                <button className="bg-[#0C89FF] text-white font-inter font-normal text-[14px] md:text-[16px] rounded-full px-6 py-2 hover:bg-black duration-300">
                                    Portfolio
                                </button>
                                <button className="bg-transparent text-[#0C89FF] border border-[#0C89FF] font-inter font-normal text-[14px] md:text-[16px] rounded-full px-6 py-2 hover:bg-black duration-300">
                                    Order
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Second section */}
                    <div className="relative max-w-sm p-6 border border-[#FFFFFF38] rounded-lg backdrop-blur-lg bg-[#3158C733] z-20 mb-6 md:mb-0">
                        <div className="flex flex-col items-center justify-center px-8 md:px-16">
                            <div className="mb-4">
                                <Image height={400} width={400} src={img4} alt="Logo" className="w-20 object-contain" />
                            </div>
                            <h3 className="text-white font-inter font-bold text-xl md:text-2xl mb-4 text-center">Content Writing</h3> {/* Adjusted font size */}
                            <p className="text-white font-normal text-base text-center">For entire project</p>

                            <div className="mt-6 flex gap-4 flex-wrap justify-center"> {/* Added flex-wrap and justify-center */}
                                <button className="bg-[#0C89FF] text-white font-inter font-normal text-[14px] md:text-[16px] rounded-full px-6 py-2 hover:bg-black duration-300">
                                    Portfolio
                                </button>
                                <button className="bg-transparent text-[#0C89FF] border border-[#0C89FF] font-inter font-normal text-[14px] md:text-[16px] rounded-full px-6 py-2 hover:bg-black duration-300">
                                    Order
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Third section */}
                    <div className="relative max-w-sm p-6 border border-[#FFFFFF38] rounded-lg backdrop-blur-lg bg-[#3158C733] z-20 mb-6 md:mb-0">
                        <div className="flex flex-col items-center justify-center px-8 md:px-16">
                            <div className="mb-4">
                                <Image height={400} width={400} src={img5} alt="Logo" className="w-9/12 object-contain" />
                            </div>
                            <h3 className="text-white font-inter font-bold text-xl md:text-2xl mb-4 text-center">Monthly SEO</h3> {/* Adjusted font size */}
                            <p className="text-white font-normal text-base text-center">Rank #1 on google </p>

                            <div className="mt-6 flex gap-4 flex-wrap justify-center"> {/* Added flex-wrap and justify-center */}
                                <button className="bg-[#0C89FF] text-white font-inter font-normal text-[14px] md:text-[16px] rounded-full px-6 py-2 hover:bg-black duration-300">
                                    Portfolio
                                </button>
                                <button className="bg-transparent text-[#0C89FF] border border-[#0C89FF] font-inter font-normal text-[14px] md:text-[16px] rounded-full px-6 py-2 hover:bg-black duration-300">
                                    Order
                                </button>
                            </div>
                        </div>
                    </div>

                </div>


                {/* img6 section (centered and behind the other sections) */}
                <div className="absolute inset-28 z-0 flex justify-center items-center right-0 ">
                    <Image height={400} width={400} src={img6} alt="Logo" className="w-72 object-contain" />
                </div>


                <div className="mt-4 flex  justify-center gap-4 w-full py-20">
                    <Image height={200}
                        width={200} alt="arrow 1" src={img7} className='w-10 h-10' />
                    <Image height={200}
                        width={200} alt="arrow 2" src={img8} className='w-10 h-10' />


                </div>
            </div>


        </>
    );
}
