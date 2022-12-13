import ProductsCategory from "../Main Page/ProductsCategory";
import Description from "./Description";
import FirstModelProduct from "./FirstModelProduct";
import Footer from "./Footer";
import Header from "./Header";
import NewProduct from "./NewProduct";
import SecondModelProduct from "./SecondModelProduct";
import ThirdModelProduct from "./ThirdModelProduct";
const MainPage = () => {
  return (
    <div>
      <Header />
      <main className=" flex flex-col items-center">
        <NewProduct />
        <ProductsCategory />
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
