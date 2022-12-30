import { Link } from "react-router-dom";
const CategoryNewProduct = (props) => {
  return (
    <div className="w-[327px] text-center font-manrope flex flex-col gap-8 mb-[120px] md:w-[689px] 1.5xl:flex 1.5xl:flex-row 1.5xl:w-[1110px] 1.5xl:items-center 1.5xl:gap-[80px] ">
      <div className="1.5xl:w-[560px]">
        <img src={props.imgPath} alt="" />
      </div>
      <div className="1.5xl:w-[445px] 1.5xl:text-left">
        <span className="text-sm tracking-[10px] text-[#D87D4A] uppercase">
          new product
        </span>
        <h2 className="uppercase font-bold text-[28px] leading-[38px] tracking-[1px] py-[24px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px] ">
          {props.title}
        </h2>
        <p className="font-medium text-[15px] leading-[25px] opacity-90 pb-[24px]">
          {props.description}
        </p>
        <Link to={props.routePath}>
          <button className="uppercase bg-[#D87D4A] text-white w-[160px] h-[48px] leading-[18px] text-[13px] font-bold tracking-[1px] hover:bg-[#FBAF85] duration-500    ">
            see product
          </button>
        </Link>
      </div>
    </div>
  );
};
export default CategoryNewProduct;
