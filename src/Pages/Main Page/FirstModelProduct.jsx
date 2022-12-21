import ZX9SpeakerPath from "../../assets/ZX9-speaker.png";
import ZX9DesktopPath from "../../assets/zx9-desktop.png";
import { Link } from "react-router-dom";
const FirstModelProduct = () => {
  return (
    <div
      id="firstModel"
      className="w-[327px] h-[600px] bg-[#D87D4A] flex flex-col items-center font-manrope rounded-[8px] md:w-[689px] 1.5xl:w-[1100px] 1.5xl:flex 1.5xl:flex-row 
       1.5xl:justify-start 1.5xl:pl-[140px]"
    >
      <div>
        <img
          className="mt-[50px] md:mt-[28px] 1.5xl:hidden"
          src={ZX9SpeakerPath}
          alt=""
        />
      </div>
      <div>
        <img
          className="hidden 1.5xl:block mt-[50px]  "
          src={ZX9DesktopPath}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center 1.5xl:w-[349px] 1.5xl:items-start 1.5xl:pl-[140px] ">
        <div className="w-[180px] text-center md:w-[261px] 1.5xl:text-left">
          <h2 className="uppercase text-4xl font-bold tracking-[1.3px] text-white mt-[42px] mb-[24px] md:text-[56px] md:leading-[58px] md:tracking-[2px]  ">
            zx9 speaker
          </h2>
        </div>
        <p className="text-center w-[270px] font-medium text-white opacity-75 text-[15px] leading-[25px] mb-[24px] md:w-[349px] 1.5xl:text-left">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to="/zx9-speaker">
          <button className="uppercase w-[160px] h-[48px] font-bold p-auto text-white text-[13px] leading-[18px] tracking-[1px] bg-black hover:bg-[#4C4C4C]">
            see product
          </button>
        </Link>
      </div>
    </div>
  );
};
export default FirstModelProduct;
