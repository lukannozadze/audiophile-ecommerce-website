import imgPath from "../../assets/First Model Earphone Images/first-image.png";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/store";
import { useDispatch } from "react-redux";
const CartModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="font-manrope w-[327px] bg-white pb-[31px] rounded-lg absolute md:w-[377px]">
      <div className="flex justify-center">
        <div className="w-[271px] md:w-[313px] ">
          <div className="flex justify-between py-8">
            <span className="uppercase font-bold text-[18px] leading-[25px] tracking-[1.3px]">
              cart (3)
            </span>
            <span className="font-bold text-[15px] leading-[25px] opacity-50 underline">
              Remove all
            </span>
          </div>
          <ul className="flex flex-col gap-6">
            <li className="flex justify-between items-center  ">
              <div className="flex gap-4 items-center ">
                <img src={imgPath} alt="" className="w-[64px] h-[64px]" />
                <div className="h-[50px]">
                  <h3 className="uppercase font-bold text-[15px] leading-[25px]">
                    xx99 mk II
                  </h3>
                  <span className="text-[14px] leading-[25px] font-bold">
                    $ 2,999
                  </span>
                </div>
              </div>
              <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex gap-5 items-center justify-center">
                <button className="font-bold text-[15px] leading-[18px] opacity-25 ">
                  -
                </button>
                <span className="font-bold text-[15px] leading-[18px] ">1</span>
                <button className="font-bold text-[15px] leading-[18px] opacity-25">
                  +
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center  ">
              <div className="flex gap-4 items-center ">
                <img src={imgPath} alt="" className="w-[64px] h-[64px]" />
                <div className="h-[50px]">
                  <h3 className="uppercase font-bold text-[15px] leading-[25px]">
                    xx99 mk II
                  </h3>
                  <span className="text-[14px] leading-[25px] font-bold">
                    $ 2,999
                  </span>
                </div>
              </div>
              <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex gap-5 items-center justify-center">
                <button className="font-bold text-[15px] leading-[18px] opacity-25 ">
                  -
                </button>
                <span className="font-bold text-[15px] leading-[18px] ">1</span>
                <button className="font-bold text-[15px] leading-[18px] opacity-25">
                  +
                </button>
              </div>
            </li>
            <div className="flex justify-between pt-2 pb-6">
              <span className="uppercase font-medium text-[15px] leading-[25px] opacity-50">
                total
              </span>
              <span className="font-bold text-[18px] leading-[25px]">
                $ 5,396
              </span>
            </div>
            <Link to="/checkout">
              <button
                onClick={() => dispatch(cartActions.modalOff())}
                className="uppercase text-[13px] leading-[18px] tracking-[1px] w-[271px] h-[48px] text-white font-bold bg-[#D87D4A] hover:bg-[#FBAF85] md:w-[313px] "
              >
                checkout
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CartModal;
