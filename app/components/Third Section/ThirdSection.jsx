import React from 'react';

export default function ThirdSection() {
    const cardData = [
        {
            imgSrc: "https://i.postimg.cc/Fsg3cxMP/Group.png",
            title: "Why Choose Envobyte",
            subtitle: "Experienced & Trustworthy",
            description: "We’re experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success."
        },
        {
            imgSrc: "https://i.postimg.cc/SQ9WQ4Db/Frame-2.png",
            title: "What’s Your Benefit",
            subtitle: "No hassle with best price",
            description: "A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price."
        },
        {
            imgSrc: "https://i.postimg.cc/nctqCWPj/Frame-3.png",
            title: "What is Combo Offer",
            subtitle: "Get 9 services in one package",
            description: "You’re getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!"
        }
    ];

    return (
        <>
            <div className="text-center my-10 md:my-20">
                <p className="font-[Raleway] text-sm md:text-base text-[#0C89FF]">MORE DETAILS</p>
                <h2 className="text-2xl md:text-[48px] font-[inter] text-[#0A2C8C]">Get Your Answers</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6 p-4 ">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`w-full sm:w-[320px] md:w-[369px] h-auto shadow-lg py-16 rounded-xl overflow-hidden flex flex-col items-center justify-center p-6
                            ${index === 0 ? 'bg-[#0A2C8C] text-white' : 'bg-white'}`}
                    >
                        <img
                            src={card.imgSrc}
                            alt={card.title}
                            className="w-9/12 h-auto mx-auto"
                        />
                        <div className="mt-4 text-center">
                            <h3 className={`text-lg text-left md:text-xl font-bold ${index === 0 ? 'text-white' : 'text-gray-800'}`}>
                                {card.title}
                            </h3>
                            <h4 className={`text-sm text-left md:text-md font-semibold mt-2 ${index === 0 ? 'text-[#FFD700]' : 'text-[#0C89FF]'}`}>
                                {card.subtitle}
                            </h4>
                            <p className={`text-xs md:text-sm mt-2 text-justify  ${index === 0 ? 'text-gray-200' : 'text-gray-600'}`}>
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}



            </div>
            <div className='flex justify-center'>
                <button className="relative bg-[#FF693B] text-white font-[Inter] font-medium 
                                   text-[14px] leading-[20px] tracking-[0] text-center
                                   rounded-[4px] w-[238px] h-[50px] px-[18px] py-[14px] 
                                    items-center gap-[3px] hover:bg-black hover:text-white duration-300 transition-colors cursor-pointer flex justify-center mt-10">
                    See Pricing
                </button>
            </div>
        </>
    );
}
