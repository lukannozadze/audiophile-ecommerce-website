import newProductImgPath from "../../assets/Bitmap.png";
const NewProduct = () => {
  return (
    <section
      className=" bg-[#0E0E0E]
    flex justify-center mb-[40px]"
    >
      <div>
        <img src={newProductImgPath} alt="" />
        <div className="text-white font-manrope text-center absolute top-48">
          <span className="text-[14px] leading-[19px] tracking-[10px] font-normal opacity-50">
            NEW PRODUCT
          </span>
          <h2 className="text-[36px] font-bold leading-[40px] tracking-[1.3px] text-white mt-[32px] mb-[32px] uppercase">
            XX99 Mark II Headphones
          </h2>

          <p className="text-[17px]  leading-[25px] opacity-75 ">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <button className="mt-[32px] bg-[#D87D4A] w-[160px] h-[48px] p-auto text-[13px] font-bold tracking-[1px] hover:bg-[#FBAF85] ">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </section>
  );
};
export default NewProduct;
