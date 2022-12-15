import YX1EarphonesPath from "../../assets/YX1-earphones.png";
import { Link } from "react-router-dom";
const ThirdModelProduct = () => {
  return (
    <div className="flex flex-col gap-6 rounded-lg">
      <div>
        <img src={YX1EarphonesPath} alt="" />
      </div>
      <div className="rounded-lg pl-6 bg-[#F1F1F1] py-[41px]">
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
