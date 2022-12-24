import CartIcon from "../../assets/CartIcon";
import AudiophileImgPath from "../../assets/audiophile.png";
import dropDownIconPath from "../../assets/dropdown-icon.png";
import { useDispatch } from "react-redux";
import { dropdownActions, cartActions } from "../../store/store";
import { Link } from "react-router-dom";

const navListArr = [
  { name: "home", routePath: "/" },
  { name: "headphones", routePath: "/headphones" },
  { name: "speakers", routePath: "/speakers" },
  { name: "earphones", routePath: "/earphones" },
];
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className=" w-screen h-[90px] bg-[#191919]  border-b-[1px] border-white border-opacity-10  flex items-center justify-center  ">
      <div className="flex justify-between items-center  w-[327px] md:w-[689px] xl:w-[900px] 1.5xl:w-[1150px] ">
        <div className="2xl:ml-[-75px]">
          <button
            onClick={() => {
              dispatch(dropdownActions.toggle());
              dispatch(cartActions.modalOff());
            }}
          >
            <img className="xl:hidden" src={dropDownIconPath} alt="" />
          </button>
        </div>
        <div className=" md:ml-[-440px] xl:ml-[-320px] xxl:ml-[-170px] xxl:-translate-x-20 2xl:translate-x-20">
          <Link to="/">
            <img src={AudiophileImgPath} alt="" />
          </Link>
        </div>
        <nav className="hidden xl:block ml-[-200px] 2xl:ml-[-5px] xxl:ml-[-215px] ">
          <ul className="flex  gap-4 items-center uppercase text-[13px] leading-[25px] text-white tracking-[2px] font-bold ">
            {navListArr.map((item) => (
              <Link key={item.name} to={item.routePath}>
                <li className="hover:text-[#D87D4A] cursor-pointer">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <div>
          <CartIcon />
        </div>
      </div>
    </header>
  );
};
export default Header;
