const CategoryProduct = (props) => {
  return (
    <div className="w-[327px] text-center font-manrope flex flex-col gap-8 mb-[120px]">
      <div>
        <img src={props.imgPath} alt="" />
      </div>
      <div>
        <h2 className="uppercase font-bold text-[28px] leading-[38px] tracking-[1px] py-[24px]">
          {props.title}
        </h2>
        <p className="font-medium text-[15px] leading-[25px] opacity-60 pb-[24px]">
          {props.description}
        </p>
        <button className="uppercase bg-[#D87D4A] text-white w-[160px] h-[48px] leading-[18px] text-[13px] font-bold tracking-[1px] hover:bg-[#FBAF85] ">
          see product
        </button>
      </div>
    </div>
  );
};
export default CategoryProduct;
