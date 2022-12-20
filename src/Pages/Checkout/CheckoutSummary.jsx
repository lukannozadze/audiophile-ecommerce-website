import { useDispatch } from "react-redux";
import imgPath from "../../assets/First Model Earphone Images/first-image.png";
import { CheckoutActions } from "../../store/store";
const CheckoutSummary = () => {
  const dispatch = useDispatch();
  return (
    <div className="font-manrope w-[327px] bg-white pb-[31px] rounded-lg ">
      <div className="flex justify-center">
        <div className="w-[271px] ">
          <div className="my-8">
            <span className="uppercase font-bold text-[18px] leading-[25px] tracking-[1.3px]">
              summary
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
              <span className="font-bold text-[15px] leading-[25px] opacity-50">
                2x
              </span>
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
              <span className="font-bold text-[15px] leading-[25px] opacity-50">
                1x
              </span>
            </li>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="uppercase font-medium text-[15px] leading-[25px] opacity-50">
                  total
                </span>
                <span className="font-bold text-[18px] leading-[25px]">
                  $ 5,396
                </span>
              </div>
              <div className="flex justify-between ">
                <span className="uppercase font-medium text-[15px] leading-[25px] opacity-50">
                  shipping
                </span>
                <span className="font-bold text-[18px] leading-[25px]">
                  $ 50
                </span>
              </div>
              <div className="flex justify-between">
                <span className="uppercase font-medium text-[15px] leading-[25px] opacity-50">
                  var (included)
                </span>
                <span className="font-bold text-[18px] leading-[25px]">
                  $ 1,079
                </span>
              </div>
              <div className="flex justify-between mt-4">
                <span className="uppercase font-medium text-[15px] leading-[25px] opacity-50">
                  grand total
                </span>
                <span className="font-bold text-[18px] leading-[25px] text-[#D87D4A]">
                  $ 5,446
                </span>
              </div>
            </div>
            <button onClick={()=>dispatch(CheckoutActions.modalOn())} className="uppercase text-[13px] leading-[18px] tracking-[1px] w-[271px] h-[48px] text-white font-bold bg-[#D87D4A] hover:bg-[#FBAF85] ">
              continue & pay
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CheckoutSummary;
