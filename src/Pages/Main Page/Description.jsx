import descriptionImagePath from "../../assets/description-image.png";
const Description = () => {
  return (
    <div className="w-[327px] font-manrope text-center">
      <img src={descriptionImagePath} alt="" />
      <h2 className="uppercase font-bold text-[28px] leading-[38px] tracking-[1px] pt-[40px] pb-[32px]  ">
        bringing you the <span className="text-[#D87D4A]">best</span> audio gear
      </h2>
      <p className="font-medium opacity-50 text-[15px] leading-[25px]">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
};
export default Description;
