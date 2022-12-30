import Header from "../Main Page/Header";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Footer from "../../Pages/Main Page/Footer";
import CheckoutSummary from "./CheckoutSummary";
import { useSelector } from "react-redux";
import DropdownModal from "../UI/DropdownModal";
import CartModal from "../UI/CartModal";
import CheckoutModal from "../UI/CheckoutModal";

const CheckoutPage = () => {
  const DropdownModalIsShown = useSelector(
    (state) => state.dropdown.modalIsShown
  );
  const CartModalIsShown = useSelector((state) => state.cart.modalIsShown);
  const CheckoutModalIsShown = useSelector(
    (state) => state.checkout.modalIsShown
  );
  return (
    <div
      className={`${
        DropdownModalIsShown || CartModalIsShown || CheckoutModalIsShown
          ? "absolute top-0"
          : ""
      }`}
    >
      <div id="modals-container" className="font-manrope h-screen">
        <Header />
        {DropdownModalIsShown && (
          <div
            id="dropdown-modal-container"
            className="w-screen h-screen absolute bg-black z-10 bg-opacity-40 "
          >
            <DropdownModal />
          </div>
        )}
        {CartModalIsShown && (
          <div
            id="cart-modal-container"
            className="w-screen h-screen absolute bg-black z-10 bg-opacity-40 flex justify-center pt-6 md:justify-end  md:pr-[65px] xl:pr-[190px] 1.5xl:pr-[140px] xxl:pr-[390px]"
          >
            <CartModal />
          </div>
        )}
        {CheckoutModalIsShown && (
          <div
            id="checkout-modal-container"
            className="w-screen h-screen absolute bg-black z-10 bg-opacity-40 pt-[142px] flex justify-center"
          >
            <CheckoutModal />
          </div>
        )}
        <div className="bg-[#F2F2F2]  flex flex-col items-center ">
          <div className="self-start pl-[24px]  pt-[16px] pb-[24px] md:pl-[40px] 1.5xl:pl-[205px] 2xl:pl-[220px] xxl:pl-[410px]">
            <Link to="/">
              <span className="text-[15px] leading-[25px] opacity-50">
                Go Back
              </span>
            </Link>
          </div>
          <div className="mb-8 flex flex-col gap-6 md:mb-[116px] 1.5xl:flex-row 1.5xl:gap-[30px] ">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default CheckoutPage;
