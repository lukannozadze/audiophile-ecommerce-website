import ProductsCategory from "../Main Page/ProductsCategory";
import DropdownModal from "../UI/DropdownModal";
import Description from "./Description";
import FirstModelProduct from "./FirstModelProduct";
import Footer from "./Footer";
import Header from "./Header";
import NewProduct from "./NewProduct";
import SecondModelProduct from "./SecondModelProduct";
import ThirdModelProduct from "./ThirdModelProduct";
import { useSelector } from "react-redux";
import CartModal from "../UI/CartModal";
const MainPage = () => {
  const DropdownModalIsShown = useSelector(
    (state) => state.dropdown.modalIsShown
  );
  const CartModalIsShown = useSelector((state) => state.cart.modalIsShown);

  return (
    <div
      className={`${
        DropdownModalIsShown || CartModalIsShown ? "absolute top-0" : ""
      }`}
    >
      <Header />
      {DropdownModalIsShown && (
        <div
          id="dropdown-modal-container"
          className="w-screen h-screen absolute bg-black z-10 bg-opacity-40  "
        >
          <DropdownModal />
        </div>
      )}
      {CartModalIsShown && (
        <div
          id="cart-modal-container"
          className="w-screen h-screen absolute  bg-black z-10 bg-opacity-40 flex justify-center pt-6 md:justify-end md:pr-[65px] xl:pr-[190px] 1.5xl:pr-[140px] xxl:pr-[390px] "
        >
          <CartModal />
        </div>
      )}
      <main className=" flex flex-col items-center ">
        <NewProduct />
        <section className="pb-[120px]">
          <ProductsCategory />
        </section>
        <section className="flex flex-col gap-[24px] pb-[120px]">
          <FirstModelProduct />
          <SecondModelProduct />
          <ThirdModelProduct />
        </section>
        <section className="pb-[120px]">
          <Description />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default MainPage;
