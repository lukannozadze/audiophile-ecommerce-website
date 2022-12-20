import CartIcon from "../../assets/CartIcon";
import AudiophileImgPath from "../../assets/audiophile.png";
import dropDownIconPath from "../../assets/dropdown-icon.png";
import { useDispatch } from "react-redux";
import { dropdownActions, cartActions } from "../../store/store";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className=" w-screen h-[90px] bg-[#191919] flex justify-around items-center border-b-[1px] border-white border-opacity-10 md:justify-start">
      <div className="md:pl-[40px]">
        <button
          onClick={() => {
            dispatch(dropdownActions.toggle());
            dispatch(cartActions.modalOff());
          }}
        >
          <img src={dropDownIconPath} alt="" />
        </button>
      </div>
      <div className="md:pl-[30px]">
        <Link to="/">
          <img src={AudiophileImgPath} alt="" />
        </Link>
      </div>
      <div className="md:pl-[480px]">
        <CartIcon />
      </div>
    </header>
  );
};
export default Header;
