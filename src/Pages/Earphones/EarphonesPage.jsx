import Header from "../Main Page/Header";
import ProductsCategory from "../Main Page/ProductsCategory";
import Description from "../Main Page/Description";
import Footer from "../Main Page/Footer";
import CategoryNewProduct from "../UI/CategoryUI/CategoryNewProduct";
import DropdownModal from "../UI/DropdownModal";
import YX1Path from "../../assets/Category Page Images/yx1-wireless-earphones.png";
import CartModal from "../UI/CartModal";
import YX1TabletPath from "../../assets/Category Page Images/yx1-tablet.png";
import YX1DesktopPath from "../../assets/Category Page Images/yx1-desktop.png";
import { useMediaQuery } from "react-responsive";

import { useSelector } from "react-redux";
const EarphonesPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
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
      <div className="uppercase text-white h-[102px] bg-[#191919] text-[28px] leading-[38px] font-manrope font-bold  tracking-[2px] flex justify-center items-center mb-16">
        earphones
      </div>
      <main className="flex flex-col items-center">
        <CategoryNewProduct
          imgPath={
            isDesktop
              ? YX1DesktopPath
              : isTabletOrMobile
              ? YX1TabletPath
              : YX1Path
          }
          title="YX1 WIRELESS
EARPHONES"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          routePath="/yx1-wireless-earphones"
        />
        <section className="pb-[120px]">
          <ProductsCategory />
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
export default EarphonesPage;
