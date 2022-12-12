import CartIcon from "../../assets/CartIcon";
import AudiophileImgPath from "../../assets/audiophile.png";
import dropDownIconPath from "../../assets/dropdown-icon.png";
const Header = () => {
  return (
    <header className="w-screen h-[90px] bg-[#191919] flex justify-around items-center border-b-[1px] border-[#979797] ">
      <div>
        <img src={dropDownIconPath} alt="" />
      </div>
      <div>
        <img src={AudiophileImgPath} alt="" />
      </div>
      <div>
        <CartIcon />
      </div>
    </header>
  );
};
export default Header;
