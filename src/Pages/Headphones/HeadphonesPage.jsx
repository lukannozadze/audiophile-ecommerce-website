import Header from "../Main Page/Header";
import CategoryNewProduct from "../UI/CategoryUI/CategoryNewProduct";
import XX992Path from "../../assets/Category Page Images/xx99-mark-2.png";
import XX991Path from "../../assets/Category Page Images/xx99-mark-1.png";
import XX59Path from "../../assets/Category Page Images/xx59.png";
import XX992TabletPath from "../../assets/Category Page Images/xx99-mark-2-tablet.png";
import XX991TabletPath from "../../assets/Category Page Images/xx99-mark-1-tablet.png";
import XX59TabletPath from "../../assets/Category Page Images/xx59-tablet.png";
import XX991Desktop from "../../assets/Category Page Images/xx991-desktop.png";
import XX59Desktop from "../../assets/Category Page Images/xx59-desktop.png";
import XX992Desktop from "../../assets/Category Page Images/xx992-desktop.png";
import ProductsCategory from "../Main Page/ProductsCategory";
import Description from "../Main Page/Description";
import Footer from "../Main Page/Footer";
import CategoryProduct from "../UI/CategoryUI/CategoryProduct";
import DropdownModal from "../UI/DropdownModal";
import { useSelector } from "react-redux";
import CartModal from "../UI/CartModal";
import { useMediaQuery } from "react-responsive";

const HeadphonesPage = () => {
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
          ? "absolute top-0 "
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
      <div className="uppercase text-white h-[102px] bg-[#191919] text-[28px] leading-[38px] font-manrope font-bold  tracking-[2px] flex justify-center items-center mb-16 w-screen">
        headphones
      </div>
      <main className="flex flex-col items-center m-auto">
        <CategoryNewProduct
          imgPath={
            isDesktop
              ? XX992Desktop
              : isTabletOrMobile
              ? XX992TabletPath
              : XX992Path
          }
          title="XX99 Mark II
Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          routePath="/xx9-mark-two-headphones"
        />
        <section>
          <CategoryProduct
            imgPath={
              isDesktop
                ? XX991Desktop
                : isTabletOrMobile
                ? XX991TabletPath
                : XX991Path
            }
            title="XX99 Mark I
Headphones"
            description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
            className="w-[327px] text-center font-manrope flex flex-col gap-8 mb-[120px] md:w-[689px] 1.5xl:flex 1.5xl:flex-row-reverse 1.5xl:w-[1110px] 1.5xl:items-center 1.5xl:gap-[80px]"
            routePath="/xx9-mark-one-headphones"
          />
          <CategoryProduct
            imgPath={
              isDesktop
                ? XX59Desktop
                : isTabletOrMobile
                ? XX59TabletPath
                : XX59Path
            }
            title="XX59
Headphones"
            description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
            className="w-[327px] text-center font-manrope flex flex-col gap-8 mb-[120px] md:w-[689px] 1.5xl:flex 1.5xl:flex-row 1.5xl:w-[1110px] 1.5xl:items-center 1.5xl:gap-[80px]"
            routePath="/xx59-headphones"
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
export default HeadphonesPage;
