import Header from "../Main Page/Header";
import ProductsCategory from "../Main Page/ProductsCategory";
import Description from "../Main Page/Description";
import Footer from "../Main Page/Footer";
import CategoryProduct from "../UI/CategoryUI/CategoryProduct";
import CategoryNewProduct from "../UI/CategoryUI/CategoryNewProduct";
import DropdownModal from "../UI/DropdownModal";
import ZX9SpeakerPath from "../../assets/Category Page Images/zx9-speaker.png";
import ZX7SpeakerPath from "../../assets/Category Page Images/zx7-speaker.png";
import ZX9TabletPath from "../../assets/Category Page Images/zx9-tablet.png";
import ZX7TabletPath from "../../assets/Category Page Images/zx7-tablet.png";
import ZX9DesktopPath from "../../assets/Category Page Images/zx9-desktop.png";
import ZX7DesktopPath from "../../assets/Category Page Images/zx7-desktop.png";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import CartModal from "../UI/CartModal";
const SpeakersPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const DropdownModalIsShown = useSelector(
    (state) => state.dropdown.modalIsShown
  );
  const CartModalIsShown = useSelector((state) => state.cart.modalIsShown);
  return (
    <div
      className={`${
        DropdownModalIsShown || CartModalIsShown
          ? "absolute top-0"
          : "overflow-x-hidden"
      }`}
    >
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
          className="w-screen h-screen absolute bg-black z-10 bg-opacity-40 flex justify-center pt-6 md:justify-end md:pr-[65px]"
        >
          <CartModal />
        </div>
      )}
      <div className="uppercase text-white h-[102px] bg-[#191919] text-[28px] leading-[38px] font-manrope font-bold  tracking-[2px] flex justify-center items-center mb-16">
        speakers
      </div>
      <main className="flex flex-col items-center">
        <CategoryNewProduct
          imgPath={
            isDesktop
              ? ZX9DesktopPath
              : isTabletOrMobile
              ? ZX9TabletPath
              : ZX9SpeakerPath
          }
          title="ZX9
speaker"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          routePath="/zx9-speaker"
        />
        <section>
          <CategoryProduct
            imgPath={
              isDesktop
                ? ZX7DesktopPath
                : isTabletOrMobile
                ? ZX7TabletPath
                : ZX7SpeakerPath
            }
            title="ZX7
SPEAKER"
            description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
            className="w-[327px] text-center font-manrope flex flex-col gap-8 mb-[120px] md:w-[689px] 1.5xl:flex 1.5xl:flex-row-reverse 1.5xl:w-[1110px] 1.5xl:items-center 1.5xl:gap-[80px]"
            routePath="/zx7-speaker"
          />
        </section>
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
export default SpeakersPage;
