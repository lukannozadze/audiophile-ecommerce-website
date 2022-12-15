import ProductsCategory from "../../Main Page/ProductsCategory";
import DropdownModal from "../MainPageUI/DropdownModal";
import Description from "../../Main Page/Description";
import Footer from "../../Main Page/Footer";
import Header from "../../Main Page/Header";
import { useSelector } from "react-redux";
import DetailedProduct from "./DetailedProduct";
import InTheBox from "./InTheBox";
import OfferedProduct from "./OfferedProduct";

import { Link } from "react-router-dom";

const DetailedPage = (props) => {
  const modalIsShown = useSelector((state) => state.dropdown.modalIsShown);
  return (
    <div className={`${modalIsShown ? "fixed" : ""}`}>
      <Header />
      {modalIsShown && (
        <div className="w-screen h-screen fixed bg-black z-10 bg-opacity-40 ">
          <DropdownModal />
        </div>
      )}

      <main className=" flex flex-col items-center font-manrope ">
        <div className="self-start pl-[24px]  pt-[16px] pb-[24px]">
          <Link to="/">
            <span className="text-[15px] leading-[25px] opacity-50">
              Go Back
            </span>
          </Link>
        </div>
        <DetailedProduct
          productImgPath={props.productImgPath}
          productTitle={props.productTitle}
          productDescription={props.productDescription}
          newProductText={props.newProductText}
          newProductClass={props.newProductClass}
          price={props.price}
        />
        <div className="text-left px-6 flex flex-col gap-[88px] ">
          <div>
            <h2 className="uppercase font-bold text-2xl leading-9 tracking-[0.9px] mb-[24px]">
              features
            </h2>
            <p className="font-medium text-[15px] leading-[25px] opacity-50 ">
              {props.features}
            </p>
          </div>
          <InTheBox
            boxItemsQuantity={props.boxItemsQuantity}
            boxItemsNamesArr={props.boxItemsNamesArr}
          />
        </div>
        <section className="flex flex-col gap-5 pb-[120px]">
          <img src={props.firstPath} alt="" />
          <img src={props.secondPath} alt="" />
          <img src={props.thirdPath} alt="" />
        </section>
        <section className="text-center">
          <h2 className="uppercase font-bold text-2xl leading-[36px] tracking-[0.9] pb-[40px]">
            you may also like
          </h2>
          <div className="flex flex-col gap-[56px] pb-[120px]">
            {props.offeredSectionArr.map((item) => (
              <OfferedProduct
                key={item.path}
                offeredImgPath={item.path}
                offeredTitle={item.title}
                offeredRoutePath={item.routePath}
              />
            ))}
          </div>
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
export default DetailedPage;
