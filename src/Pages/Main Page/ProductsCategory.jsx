import headphonesPath from "../../assets/headphones.png";
import speakersPath from "../../assets/speakers.png";
import earphonesPath from "../../assets/earphones.png";
import arrowPath from "../../assets/arrow.png";
const ProductsCategory = () => {
  const iconsArr = [
    {
      id: "h1",
      path: headphonesPath,
      name: "headphones",
    },
    {
      id: "h2",
      path: speakersPath,
      name: "speakers",
    },
    {
      id: "h3",
      path: earphonesPath,
      name: "earphones",
    },
  ];
  return (
    <section>
      <ul className="flex flex-col gap-[62px] items-center mt-[40px] font-manrope">
        {iconsArr.map((item) => (
          <li key={item.id}>
            <div className="w-[327px] h-[165px] bg-[#F1F1F1]  flex flex-col items-center rounded-lg">
              <img
                className="-translate-y-[2.5rem]  w-[147px] h-[133px] "
                src={item.path}
                alt=""
              />
              <h3 className="uppercase text-[15px] font-bold leading-[21px] tracking-[1px] mt-[-42px] mb-[17px]  ">
                {item.name}
              </h3>
              <div className="flex  justify-center gap-[13px] ">
                <span className="uppercase text-[13px] leading-[18px] tracking-[1px] text-black font-bold opacity-50 hover:text-[#D87D4A] cursor-pointer">
                  shop
                </span>
                <button>
                  <img src={arrowPath} alt="" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ProductsCategory;
