import correctionMarkPath from "../../assets/correction-mark.png";
import testImgPath from "../../assets/First Model Headphone Images/first-image.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CheckoutActions } from "../../store/store";
import { Link } from "react-router-dom";
const CheckoutModal = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="font-manrope w-[327px] bg-white pb-[31px] pt-[32px] rounded-lg border-2 px-8 absolute">
      <div className="w-16 h-16 rounded-full bg-[#D87D4A] flex justify-center items-center mb-[23px]">
        <img src={correctionMarkPath} alt="" />
      </div>
      <h2 className="uppercase font-bold text-[24px] leading-[27px] tracking-[0.9px] pb-[16px] ">
        thank you for your order
      </h2>
      <span className="font-medium text-[15px] leading-[25px] opacity-50">
        You will receive an email confirmation shortly.
      </span>
      <div className="pt-[24px] flex flex-col">
        <div className="bg-[#F1F1F1] pt-[33px] pl-[35px] pr-[24px]  pb-[25px] rounded-md">
          <ul>
            <li className="flex justify-between items-center  ">
              <div className="flex gap-4 items-center ">
                <img src={testImgPath} alt="" className="w-[50px] h-[50px]" />
                <div className="h-[50px]">
                  <h3 className="uppercase font-bold text-[15px] leading-[25px]">
                    xx99 mk II
                  </h3>
                  <span className="text-[14px] leading-[25px] font-bold">
                    $ 2,999
                  </span>
                </div>
              </div>
              <span className="font-bold text-[15px] leading-[25px] opacity-50">
                1x
              </span>
            </li>
            <div>
              {!isClicked && (
                <div
                  onClick={handleClick}
                  className="text-center border-t-[1px] mt-[12px] pt-[12px]"
                >
                  <span className="font-bold text-[12px] leading-[16px] opacity-50">
                    and 1 other item(s)
                  </span>
                </div>
              )}
              {isClicked && (
                <div>
                  <li className="flex justify-between items-center pt-[12px]">
                    <div className="flex gap-4 items-center ">
                      <img
                        src={testImgPath}
                        alt=""
                        className="w-[50px] h-[50px]"
                      />
                      <div className="h-[50px]">
                        <h3 className="uppercase font-bold text-[15px] leading-[25px]">
                          xx99 mk II
                        </h3>
                        <span className="text-[14px] leading-[25px] font-bold">
                          $ 2,999
                        </span>
                      </div>
                    </div>
                    <span className="font-bold text-[15px] leading-[25px] opacity-50">
                      1x
                    </span>
                  </li>
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
        <div className="bg-black text-white rounded-b-md mb-[23px] ">
          <div className="flex flex-col gap-2 pl-[24px] pt-[15px] pb-[19px]">
            <span className="uppercase font-medium text-[15px] leading-[25px] opacity-50">
              grand total
            </span>
            <span className="font-bold text-[18px] leading-[25px]">
              $ 5,546
            </span>
          </div>
        </div>
      </div>
      <Link to="/">
        <button
          onClick={() => dispatch(CheckoutActions.modalOff())}
          className="uppercase text-[13px] leading-[18px] tracking-[1px] w-[259px] h-[48px] text-white font-bold bg-[#D87D4A] hover:bg-[#FBAF85] "
        >
          back to home
        </button>
      </Link>
    </div>
  );
};
export default CheckoutModal;
