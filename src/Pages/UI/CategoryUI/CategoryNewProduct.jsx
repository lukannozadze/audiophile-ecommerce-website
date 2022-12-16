import { Link } from "react-router-dom";
const CategoryNewProduct = (props) => {
  return (
    <div className="w-[327px] text-center font-manrope flex flex-col gap-8 mb-[120px]">
      <div>
        <img src={props.imgPath} alt="" />
      </div>
      <div>
        <span className="text-sm tracking-[10px] text-[#D87D4A] uppercase">
          new product
        </span>
        <h2 className="uppercase font-bold text-[28px] leading-[38px] tracking-[1px] py-[24px]">
          {props.title}
        </h2>
        <p className="font-medium text-[15px] leading-[25px] opacity-90 pb-[24px]">
          {props.description}
        </p>
        <Link to={props.routePath}>
        <button className="uppercase bg-[#D87D4A] text-white w-[160px] h-[48px] leading-[18px] text-[13px] font-bold tracking-[1px] hover:bg-[#FBAF85] ">
          see product
        </button>
        </Link>
      </div>
    </div>
  );
};
export default CategoryNewProduct;
