import { Link } from "react-router-dom";
const SecondModelProduct = () => {
  return (
    <div
      id="secondModel"
      className="min-w-[327px] m-auto h-[320px] rounded-lg font-manrope pl-6 pt-[101px] md:w-[689px] 1.5xl:w-[1100px] 1.5xl:pl-[95px] "
    >
      <div>
        <h2 className="uppercase text-[28px] leading-[38px] tracking-[2px] font-bold text-black mb-8">
          zx7 speaker
        </h2>
        <Link to="/zx7-speaker">
          <button className="uppercase w-[160px] h-[48px] p-auto text-[13px] leading-[18px] tracking-[1px] font-bold border-2 border-black hover:text-white hover:bg-black ">
            see product
          </button>
        </Link>
      </div>
    </div>
  );
};
export default SecondModelProduct;
