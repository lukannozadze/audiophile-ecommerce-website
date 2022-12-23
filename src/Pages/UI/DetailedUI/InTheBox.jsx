const InTheBox = (props) => {
  return (
    <div className="self-start mb-[88px] md:flex 1.5xl:flex-col ">
      <div className="md:w-[349px] md:text-left">
        <h2 className="uppercase font-bold text-2xl leading-9 tracking-[0.9px] mb-[24px]">
          in the box
        </h2>
      </div>
      <div className="flex gap-6  ">
        <ul className="text-[#D87D4A] text-[15px] leading-[25px] font-bold">
          {props.boxItemsQuantity.map((quantity) => (
            <li key={quantity.key}>{`${quantity.value}x`}</li>
          ))}
        </ul>
        <ul className="text-[15px] leading-[25px] font-medium opacity-50">
          {props.boxItemsNamesArr.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default InTheBox;
