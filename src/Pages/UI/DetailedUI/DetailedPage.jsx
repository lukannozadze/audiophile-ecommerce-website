import ProductsCategory from "../../Main Page/ProductsCategory";
import DropdownModal from "../DropdownModal";
import Description from "../../Main Page/Description";
import Footer from "../../Main Page/Footer";
import Header from "../../Main Page/Header";
import { useSelector } from "react-redux";
import DetailedProduct from "./DetailedProduct";
import InTheBox from "./InTheBox";
import OfferedProduct from "./OfferedProduct";
import CartModal from "../CartModal";

import { Link } from "react-router-dom";

const DetailedPage = (props) => {
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
          className="w-screen h-screen absolute bg-black z-10 bg-opacity-40 "
        >
          <DropdownModal />
        </div>
      )}
      {CartModalIsShown && (
        <div
          id="cart-modal-container"
          className="w-screen h-screen absolute bg-black z-10 bg-opacity-40 flex justify-center pt-6 md:justify-end md:pr-[65px] xl:pr-[190px] 1.5xl:pr-[140px] xxl:pr-[390px]"
        >
          <CartModal />
        </div>
      )}

      <div className=" flex flex-col items-center font-manrope ">
        <div className="self-start pl-[24px]  pt-[16px] pb-[24px] md:pl-[40px] 1.5xl:pl-[205px] 2xl:pl-[220px] xxl:pl-[410px]">
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
          productId={props.productId}
        />
        <div className="text-left px-6 flex flex-col gap-[88px]  md:w-[710px] 1.5xl:w-[1100px] 1.5xl:flex-row 1.5xl:px-[0] 1.5xl:gap-[125px] 1.5xl:pb-[160px]  ">
          <div>
            <h2 className="uppercase font-bold text-2xl leading-9 tracking-[0.9px] mb-[24px]">
              features
            </h2>
            <p className="font-medium text-[15px] leading-[25px] opacity-50 1.5xl:w-[635px]">
              {props.features}
            </p>
          </div>
          <InTheBox
            boxItemsQuantity={props.boxItemsQuantity}
            boxItemsNamesArr={props.boxItemsNamesArr}
          />
        </div>
        <section className="flex flex-col gap-5 pb-[120px] md:flex-row 1.5xl:pb-[160px] 1.5xl:gap-[30px]">
          <div className="flex flex-col gap-5 1.5xl:gap-[32px]">
            <img src={props.firstPath} alt="" />
            <img src={props.secondPath} alt="" />
          </div>
          <img src={props.thirdPath} alt="" />
        </section>
        <section className="text-center">
          <h2 className="uppercase font-bold text-2xl leading-[36px] tracking-[0.9] pb-[40px]">
            you may also like
          </h2>
          <div className="flex flex-col gap-[56px]  md:flex-row md:gap-[10px] 1.5xl:gap-6   pb-[120px]  1.5xl:pb-[160px]  ">
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
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default DetailedPage;
