import { useState } from "react";
import { useDispatch } from "react-redux";
import { productsActions } from "../../../store/store";

const DetailedProduct = (props) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
  };
  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };
  const addBtnHandler = () => {
    dispatch(
      productsActions.addItemToCart({ id: props.productId, quantity: counter })
    );
  };

  return (
    <div
      id={props.productId}
      className="w-[327px] text-left font-manrope flex flex-col gap-8 mb-[88px] md:flex-row md:w-[689px] md:gap-[69px] md:items-center 1.5xl:w-[1100px] 1.5xl:gap-[125px]  "
    >
      <div>
        <img src={props.productImgPath} alt="" />
      </div>
      <div className="md:w-[339px] 1.5xl:w-[445px]">
        <span className={props.newProductClass}>{props.newProductText}</span>
        <h2 className="uppercase font-bold text-[28px] leading-[38px] tracking-[1px] py-[24px] 1.5xl:text-[40px] 1.5xl:leading-[44px]">
          {props.productTitle}
        </h2>
        <p className="font-medium text-[15px] leading-[25px] opacity-90 pb-[24px]">
          {props.productDescription}
        </p>
        <span className="font-bold text-lg tracking-[1.3px] ">
          {`$ ${props.price}`}
        </span>
        <div className="flex gap-4 mt-[31px]">
          <div className="w-[120px] h-[48px] bg-[#F1F1F1] flex gap-5 items-center justify-center">
            <button
              onClick={handleDecrement}
              className="font-bold text-[15px] leading-[18px] opacity-25 hover:text-[#D87D4A] "
            >
              -
            </button>
            <span className="font-bold text-[15px] leading-[18px] ">
              {counter}
            </span>
            <button
              onClick={handleIncrement}
              className="font-bold text-[15px] leading-[18px] opacity-25 hover:text-[#D87D4A]"
            >
              +
            </button>
          </div>
          <button
            onClick={addBtnHandler}
            className="uppercase bg-[#D87D4A] text-white w-[160px] h-[48px] leading-[18px] text-[13px] font-bold tracking-[1px] hover:bg-[#FBAF85] duration-500 "
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default DetailedProduct;
