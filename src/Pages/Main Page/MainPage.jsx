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
      className={`${DropdownModalIsShown || CartModalIsShown ? "fixed" : ""}`}
    >
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
