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
          ? "fixed"
          : ""
      }`}
    >
      <div className="font-manrope h-screen">
        <Header />
        {DropdownModalIsShown && (
          <div className="w-screen h-screen fixed bg-black z-10 bg-opacity-40 ">
            <DropdownModal />
          </div>
        )}
        {CartModalIsShown && (
          <div className="w-screen h-screen fixed bg-black z-10 bg-opacity-40 flex justify-center pt-6">
            <CartModal />
          </div>
        )}
        {CheckoutModalIsShown && (
          <div className="w-screen h-screen fixed bg-black z-10 bg-opacity-40 pt-[142px] flex justify-center">
            <CheckoutModal />
          </div>
        )}
        <div className="bg-[#F2F2F2]  flex flex-col items-center ">
          <div className="self-start pl-[24px]  pt-[16px] pb-[24px]">
            <Link to="/">
              <span className="text-[15px] leading-[25px] opacity-50">
                Go Back
              </span>
            </Link>
          </div>
          <div className="mb-8 flex flex-col gap-6 ">
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
