import Header from "../Main Page/Header";
import ProductsCategory from "../Main Page/ProductsCategory";
import Description from "../Main Page/Description";
import Footer from "../Main Page/Footer";
import CategoryProduct from "../UI/CategoryUI/CategoryProduct";
import CategoryNewProduct from "../UI/CategoryUI/CategoryNewProduct";
import DropdownModal from "../UI/DropdownModal";
import ZX9SpeakerPath from "../../assets/Category Page Images/zx9-speaker.png";
import ZX7SpeakerPath from "../../assets/Category Page Images/zx7-speaker.png";
import { useSelector } from "react-redux";
import CartModal from "../UI/CartModal";
const SpeakersPage = () => {
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
        speakers
      </div>
      <main className="flex flex-col items-center">
        <CategoryNewProduct
          imgPath={ZX9SpeakerPath}
          title="ZX9
speaker"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          routePath="/zx9-speaker"
        />
        <section>
          <CategoryProduct
            imgPath={ZX7SpeakerPath}
            title="ZX7
SPEAKER"
            description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
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
