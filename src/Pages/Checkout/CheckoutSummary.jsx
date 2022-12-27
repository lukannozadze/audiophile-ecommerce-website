import { useDispatch, useSelector } from "react-redux";
import { CheckoutActions } from "../../store/store";

const CheckoutSummary = () => {
  const productsArr = useSelector((state) => state.products.productsArr);
  const totalPrice = useSelector((state) => state.products.totalPrice);
  const cartItems = productsArr.filter((item) => item.quantity > 0);
  const dispatch = useDispatch();
  return (
    <div className="font-manrope w-[327px] bg-white pb-[31px] rounded-lg md:w-[698px] 1.5xl:w-[350px]  h-fit  ">
      <div className="flex justify-center">
        <div className="w-[271px] md:w-[632px] 1.5xl:w-[284px] ">
          <div className="my-8">
            <span className="uppercase font-bold text-[18px] leading-[25px] tracking-[1.3px]">
              summary
            </span>
          </div>

          <ul className="flex flex-col gap-6 ">
            {cartItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex justify-between items-center  "
                >
                  <div className="flex gap-4 items-center  ">
                    <img
                      src={item.imgPath}
                      alt=""
                      className="w-[64px] h-[64px] rounded-md"
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

            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="uppercase font-medium text-[15px] leading-[25px] opacity-50">
                  total
                </span>
                <span className="font-bold text-[18px] leading-[25px]">
                  {`$ ${new Intl.NumberFormat("en-US").format(totalPrice)}`}
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
                  {`$ ${new Intl.NumberFormat("en-US").format(
                    Math.round(totalPrice / 5)
                  )}`}
                </span>
              </div>
              <div className="flex justify-between mt-4">
                <span className="uppercase font-medium text-[15px] leading-[25px] opacity-50">
                  grand total
                </span>
                <span className="font-bold text-[18px] leading-[25px] text-[#D87D4A]">
                  {`$ ${new Intl.NumberFormat("en-US").format(
                    Math.round(totalPrice + 50 + totalPrice / 5)
                  )}`}
                </span>
              </div>
            </div>
            <button
              onClick={() => dispatch(CheckoutActions.modalOn())}
              className="uppercase text-[13px] leading-[18px] tracking-[1px] w-[271px] h-[48px] text-white font-bold bg-[#D87D4A] hover:bg-[#FBAF85] md:w-[632px] 1.5xl:w-[284px] "
            >
              continue & pay
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CheckoutSummary;
