import YX1EarphonesResponsive from "../../assets/yx1.res.png";
import { Link } from "react-router-dom";
const ThirdModelProduct = () => {
  return (
    <div className="flex flex-col gap-6 rounded-lg md:flex-row md:gap-[11px] 1.5xl:gap-[24.5px]">
      <div className="md:w-[339px] md:h-[320px] 1.5xl:w-[540px]">
        <img
          className="md:w-[100%] md:h-[100%] 1.5xl:w-[100%] 1.5xl:h-[100%]"
          src={YX1EarphonesResponsive}
          alt=""
        />
      </div>
      <div className="rounded-lg pl-6 bg-[#F1F1F1] py-[41px] md:w-[339px] md:h-[320px] md:flex md:flex-col md:justify-center 1.5xl:w-[540px] 1.5xl:pl-[95px]">
        <h2 className="uppercase text-[28px] leading-[38px] tracking-[2px] font-bold text-black mb-8 ">
          yx1 earphones
        </h2>
        <Link to="/yx1-wireless-earphones">
          <button className="uppercase w-[160px] h-[48px] p-auto text-[13px] leading-[18px] tracking-[1px] font-bold border-2 border-black hover:text-white hover:bg-black">
            see product
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ThirdModelProduct;
