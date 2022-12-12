import ProductsCategory from "../ProductsCategory";
import Header from "./Header";
import NewProduct from "./NewProduct";
const MainPage = () => {
  return (
    <div>
      <Header />
      <main className=" flex flex-col items-center">
        <NewProduct />
        <ProductsCategory />
      </main>
    </div>
  );
};
export default MainPage;
