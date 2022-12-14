import correctionMarkPath from "../../assets/correction-mark.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutActions } from "../../store/store";
import { Link } from "react-router-dom";
import { productsActions } from "../../store/store";
const CheckoutModal = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const productsArr = useSelector((state) => state.products.productsArr);
  const totalPrice = useSelector((state) => state.products.totalPrice);
  const cartItems = productsArr.filter((item) => item.quantity > 0);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="font-manrope w-[327px] bg-white pb-[31px] pt-[32px] rounded-lg border-2 px-8 absolute md:w-[540px] md:pt-[48px] md:pb-[48px] ">
      <div className="w-16 h-16 rounded-full bg-[#D87D4A] flex justify-center items-center mb-[23px] md:mb-[33px]">
        <img src={correctionMarkPath} alt="" />
      </div>
      <h2 className="uppercase font-bold text-[24px] leading-[27px] tracking-[0.9px] pb-[16px] md:text-[32px] md:leading-[36px] md:tracking-[1.14px] md:w-[284px] md:pb-[24px] ">
        thank you for your order
      </h2>
      <span className="font-medium text-[15px] leading-[25px] opacity-50">
        You will receive an email confirmation shortly.
      </span>
      <div className="pt-[24px] flex flex-col md:flex-row  md:pt-[33px]">
        <div className="bg-[#F1F1F1] pt-[33px] pl-[35px] pr-[24px]  pb-[25px] rounded-md md:min-h-[140px] md:w-[246px] md:rounded-tr-none md:rounded-br-none">
          <ul>
            <li className="flex justify-between items-center  ">
              <div className="flex gap-4 items-center ">
                <img
                  src={cartItems[0].imgPath}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
                <div className="h-[50px]">
                  <h3 className="uppercase font-bold text-[15px] leading-[25px]">
                    {cartItems[0].productShortName}
                  </h3>
                  <span className="text-[14px] leading-[25px] font-bold">
                    {`$ ${cartItems[0].price}`}
                  </span>
                </div>
              </div>
              <span className="font-bold text-[15px] leading-[25px] opacity-50">
                {`${cartItems[0].quantity}x`}
              </span>
            </li>
            <div>
              {!isClicked && (
                <div
                  onClick={handleClick}
                  className="text-center border-t-[1px] mt-[12px] pt-[12px]"
                >
                  <span className="font-bold text-[12px] leading-[16px] opacity-50">
                    and {cartItems.slice(1).length} other item(s)
                  </span>
                </div>
              )}
              {isClicked && (
                <div>
                  {cartItems.slice(1).map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="flex justify-between items-center pt-[12px]"
                      >
                        <div className="flex gap-4 items-center ">
                          <img
                            src={item.imgPath}
                            alt=""
                            className="w-[50px] h-[50px]"
                          />
                          <div className="h-[50px]">
                            <h3 className="uppercase font-bold text-[15px] leading-[25px]">
                              {item.productShortName}
                            </h3>
                            <span className="text-[14px] leading-[25px] font-bold">
                              {`$ ${item.price}`}
                            </span>
                          </div>
                        </div>
                        <span className="font-bold text-[15px] leading-[25px] opacity-50">
                          {`${item.quantity}x`}
                        </span>
                      </li>
                    );
                  })}
                  <div
                    onClick={handleClick}
                    className="text-center border-t-[1px] mt-[12px] pt-[12px]"
                  >
                    <span className="font-bold text-[12px] leading-[16px] opacity-50">
                      View less
                    </span>
                  </div>
                </div>
              )}
            </div>
          </ul>
        </div>
        <div className="bg-black text-white rounded-b-md mb-[23px] md:w-[198px] md:min-h-[140px] md:mb-0 md:flex md:items-center md:rounded-bl-none md:rounded-tr-md  ">
          <div className="flex flex-col gap-2 pl-[24px] pt-[15px] pb-[19px] md:pt-0 ">
            <span className="uppercase font-medium text-[15px] leading-[25px] opacity-50">
              grand total
            </span>
            <span className="font-bold text-[18px] leading-[25px]">
              {`$ ${new Intl.NumberFormat("en-US").format(
                Math.round(totalPrice + 50 + totalPrice / 5)
              )}`}
            </span>
          </div>
        </div>
      </div>
      <Link to="/">
        <button
          onClick={() => {
            dispatch(productsActions.deleteAllItems());
            dispatch(CheckoutActions.modalOff());
            localStorage.clear();
          }}
          className="uppercase text-[13px] leading-[18px] tracking-[1px] w-[259px] h-[48px] text-white font-bold bg-[#D87D4A] hover:bg-[#FBAF85] md:w-[444px] md:mt-[46px] duration-500 "
        >
          back to home
        </button>
      </Link>
    </div>
  );
};
export default CheckoutModal;
