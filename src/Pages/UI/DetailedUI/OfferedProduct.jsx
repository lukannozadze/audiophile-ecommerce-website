const OfferedProduct = (props) => {
  return (
    <div className=" flex flex-col gap-[32px] items-center">
      <img src={props.offeredImgPath} alt="" />
      <h2 className="uppercase font-bold text-2xl tracking-[1.7px]">
        {props.offeredTitle}
      </h2>
      <button className="uppercase text-white  bg-[#D87D4A] w-[160px] h-[48px]  text-[13px] font-bold tracking-[1px] hover:bg-[#FBAF85] ">
        see product
      </button>
    </div>
  );
};
export default OfferedProduct;
