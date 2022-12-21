const Description = () => {
  return (
    <div className="1.5xl:flex 1.5xl:flex-row-reverse 1.5xl:gap-[125px] 1.5xl:items-center">
      <div
        id="description"
        className="w-[327px] h-[300px] md:w-[689px] 1.5xl:w-[540px] 1.5xl:h-[588px]"
      ></div>
      <div className="w-[327px] font-manrope text-center md:w-[689px] 1.5xl:w-[445px] 1.5xl:text-left ">
        <div className="flex justify-center">
          <h2 className="uppercase font-bold text-[28px] leading-[38px] tracking-[1px] pt-[40px] pb-[32px] md:w-[640px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px]  ">
            bringing you the <span className="text-[#D87D4A]">best</span> audio
            gear
          </h2>
        </div>
        <p className="font-medium opacity-50 text-[15px] leading-[25px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};
export default Description;
