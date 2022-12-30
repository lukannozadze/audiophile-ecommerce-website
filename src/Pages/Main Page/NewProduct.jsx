import newProductImgPath from "../../assets/Bitmap.png";
import { Link } from "react-router-dom";
const NewProduct = () => {
  return (
    <section
      className=" bg-[#0E0E0E]
    flex justify-center mb-[40px] w-screen  "
    >
      <div
        id="newProduct"
        className="w-[375px] h-[600px] "
        style={{
          backgroundImage: `url(${newProductImgPath})`,
        }}
      >
        <div className=" 1.5xl:flex 1.5xl:justify-center 1.5xl:gap-[310px]">
          <div className="text-white w-[328px] m-auto font-manrope text-center pt-[180px] 1.5xl:text-left 1.5xl:w-[379px] 1.5xl:pt-[70px] ">
            <span className="text-[14px] leading-[19px] tracking-[10px] font-normal opacity-50">
              NEW PRODUCT
            </span>
            <h2 className="text-[36px] font-bold leading-[40px] tracking-[1.3px] text-white mt-[16px] mb-[24px] uppercase 1.5xl:text-[56px] 1.5xl:leading-[58px] 1.5xl:tracking-[2px] ">
              XX99 Mark II Headphones
            </h2>

            <p className="text-[15px]   leading-[25px] opacity-75 ">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/xx9-mark-two-headphones">
              <button className="mt-[28px] bg-[#D87D4A] w-[160px] h-[48px] p-auto text-[13px] font-bold tracking-[1px] hover:bg-[#FBAF85] duration-500 ">
                SEE PRODUCT
              </button>
            </Link>
          </div>

          <img
            className="hidden w-[100%] 1.5xl:block"
            src={newProductImgPath}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default NewProduct;
