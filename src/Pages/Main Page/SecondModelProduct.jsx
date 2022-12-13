import ZX7SpeakerPath from "../../assets/ZX7-speaker.png";
const SecondModelProduct = () => {
  return (
    <div
      className="w-[327px] h-[320px] rounded-lg font-manrope pl-6 pt-[101px]"
      style={{ backgroundImage: `url(${ZX7SpeakerPath})` }}
    >
      <div>
        <h2 className="uppercase text-[28px] leading-[38px] tracking-[2px] font-bold text-black mb-8">
          zx7 speaker
        </h2>
        <button className="uppercase w-[160px] h-[48px] p-auto text-[13px] leading-[18px] tracking-[1px] font-bold border-2 border-black hover:text-white hover:bg-black ">
          see product
        </button>
      </div>
    </div>
  );
};
export default SecondModelProduct;
