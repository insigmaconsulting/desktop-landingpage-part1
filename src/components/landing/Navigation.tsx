import React from "react";

export const Navigation = () => {
  return (
    <nav className="bg-white self-center flex w-[1388px] max-w-full items-center gap-5 text-[rgba(49,49,49,1)] flex-wrap justify-between pr-4 py-[17px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/e346a9808e42f9e3917fd17e5c7c29154828fd1c?placeholderIfAbsent=true"
        alt="Company Logo"
        className="aspect-[7.94] object-contain w-[167px] bg-blend-normal self-stretch shrink-0 max-w-full my-auto"
      />
      <div className="self-stretch flex items-stretch gap-[21px] text-[17px] leading-none flex-wrap my-auto max-md:max-w-full">
        <button className="grow hover:text-[rgba(208,172,128,1)] transition-colors">
          Our Services
        </button>
        <button className="basis-auto hover:text-[rgba(208,172,128,1)] transition-colors">
          Who We Are
        </button>
        <button className="basis-auto hover:text-[rgba(208,172,128,1)] transition-colors">
          Process Framework
        </button>
        <button className="hover:text-[rgba(208,172,128,1)] transition-colors">
          Why Us
        </button>
      </div>
      <div className="self-stretch flex items-stretch gap-[30px] text-sm leading-none">
        <button className="bg-[rgba(208,172,128,1)] px-[19px] py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors max-md:pr-5">
          About us
        </button>
        <button className="bg-[rgba(208,172,128,1)] whitespace-nowrap px-6 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors max-md:px-5">
          Socials
        </button>
        <button className="bg-[rgba(208,172,128,1)] px-[18px] py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors">
          Contact Us
        </button>
      </div>
    </nav>
  );
};
