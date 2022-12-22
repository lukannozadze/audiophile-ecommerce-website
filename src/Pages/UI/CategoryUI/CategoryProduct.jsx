import { Link } from "react-router-dom";
const CategoryProduct = (props) => {
  return (
    <div className={props.className}>
      <div className="1.5xl:w-[560px]">
        <img src={props.imgPath} alt="" />
      </div>
      <div className="1.5xl:w-[445px] 1.5xl:text-left ">
        <h2 className="uppercase font-bold text-[28px] leading-[38px] tracking-[1px] py-[24px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px] ">
          {props.title}
        </h2>
        <p className="font-medium text-[15px] leading-[25px] opacity-60 pb-[24px]">
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
export default CategoryProduct;
