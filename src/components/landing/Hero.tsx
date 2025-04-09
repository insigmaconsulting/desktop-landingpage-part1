import React from "react";

export const Hero = () => {
  return (
    <section className="flex flex-col self-center relative min-h-[686px] w-[1388px] max-w-full overflow-hidden text-[70px] text-white font-normal leading-[1.1] pt-[379px] pb-[72px] px-20 rounded-[30px] max-md:text-[40px] max-md:pt-[100px] max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/63fa0e571f94f7ab9696610a2c8ff7001a9dd173?placeholderIfAbsent=true"
        alt="Hero Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-[530px] max-w-full flex-col max-md:text-[40px]">
        <h1 className="tracking-[-2.1px] max-md:text-[40px]">We are</h1>
        <div className="tracking-[-2.1px] self-stretch max-md:max-w-full max-md:text-[40px]">
          RCC Contractors
        </div>
        <button className="bg-[rgba(208,172,128,1)] text-sm text-[rgba(49,49,49,1)] leading-none mt-[35px] px-6 py-4 rounded-[25px] hover:bg-[rgba(188,152,108,1)] transition-colors max-md:px-5">
          Get in touch today
        </button>
      </div>
    </section>
  );
};
