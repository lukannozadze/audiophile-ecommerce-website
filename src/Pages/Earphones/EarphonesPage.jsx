import Header from "../Main Page/Header";
import ProductsCategory from "../Main Page/ProductsCategory";
import Description from "../Main Page/Description";
import Footer from "../Main Page/Footer";
import CategoryNewProduct from "../UI/CategoryNewProduct";
import DropdownModal from "../UI/DropdownModal";
import YX1Path from "../../assets/Category Page Images/yx1-wireless-earphones.png";

import { useSelector } from "react-redux";
const EarphonesPage = () => {
  const modalIsShown = useSelector((state) => state.dropdown.modalIsShown);
  return (
    <div className={`${modalIsShown ? "fixed" : ""}`}>
      <Header />
      {modalIsShown && (
        <div className="w-screen h-screen fixed bg-black z-10 bg-opacity-40 ">
          <DropdownModal />
        </div>
      )}
      <div className="uppercase text-white h-[102px] bg-[#191919] text-[28px] leading-[38px] font-manrope font-bold  tracking-[2px] flex justify-center items-center mb-16">
        earphones
      </div>
      <main className="flex flex-col items-center">
        <CategoryNewProduct
          imgPath={YX1Path}
          title="YX1 WIRELESS
EARPHONES"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
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
