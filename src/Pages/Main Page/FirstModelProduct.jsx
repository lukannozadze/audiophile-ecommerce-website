import ZX9PatternPath from "../../assets/ZX9SPattern.png";
import ZX9SpeakerPath from "../../assets/ZX9-speaker.png";
const FirstModelProduct = () => {
  return (
    <div
      className="w-[327px] h-[600px] bg-[#D87D4A] flex flex-col items-center font-manrope rounded-[8px]"
      style={{
        backgroundImage: `url(${ZX9PatternPath})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <img className="mt-[50px]" src={ZX9SpeakerPath} alt="" />
      <div className="w-[180px] text-center">
        <h2 className="uppercase text-4xl font-bold tracking-[1.3px] text-white mt-[42px] mb-[24px] ">
          zx9 speaker
        </h2>
      </div>
      <p className="text-center w-[270px] font-medium text-white opacity-75 text-[15px] leading-[25px] mb-[24px]">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <button className="uppercase w-[160px] h-[48px] font-bold p-auto text-white text-[13px] leading-[18px] tracking-[1px] bg-black hover:bg-[#4C4C4C]">
        see product
      </button>
    </div>
  );
};
export default FirstModelProduct;
