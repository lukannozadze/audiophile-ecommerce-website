import Header from "../Main Page/Header";
import CategoryNewProduct from "../UI/CategoryUI/CategoryNewProduct";
import XX992Path from "../../assets/Category Page Images/xx99-mark-2.png";
import XX991Path from "../../assets/Category Page Images/xx99-mark-1.png";
import XX59Path from "../../assets/Category Page Images/xx59.png";
import ProductsCategory from "../Main Page/ProductsCategory";
import Description from "../Main Page/Description";
import Footer from "../Main Page/Footer";
import CategoryProduct from "../UI/CategoryUI/CategoryProduct";
import DropdownModal from "../UI/DropdownModal";
import { useSelector } from "react-redux";
import CartModal from "../UI/CartModal";
const HeadphonesPage = () => {
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
        headphones
      </div>
      <main className="flex flex-col items-center">
        <CategoryNewProduct
          imgPath={XX992Path}
          title="XX99 Mark II
Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          routePath="/xx9-mark-two-headphones"
        />
        <section>
          <CategoryProduct
            imgPath={XX991Path}
            title="XX99 Mark I
Headphones"
            description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
            routePath="/xx9-mark-one-headphones"
          />
          <CategoryProduct
            imgPath={XX59Path}
            title="XX59
Headphones"
            description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
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
