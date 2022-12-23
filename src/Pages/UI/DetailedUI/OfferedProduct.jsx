import { Link } from "react-router-dom";
const OfferedProduct = (props) => {
  return (
    <div className=" flex flex-col gap-[32px] items-center ">
      <div>
        <img src={props.offeredImgPath} alt="" />
      </div>
      <h2 className="uppercase font-bold text-2xl tracking-[1.7px]">
        {props.offeredTitle}
      </h2>
      <Link to={props.offeredRoutePath}>
        <button className="uppercase text-white  bg-[#D87D4A] w-[160px] h-[48px]  text-[13px] font-bold tracking-[1px] hover:bg-[#FBAF85] ">
          see product
        </button>
      </Link>
    </div>
  );
};
export default OfferedProduct;
