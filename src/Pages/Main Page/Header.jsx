import CartIcon from "../../assets/CartIcon";
import AudiophileImgPath from "../../assets/audiophile.png";
import dropDownIconPath from "../../assets/dropdown-icon.png";
import { useDispatch } from "react-redux";
import { dropdownActions } from "../../store/store";

const Header = () => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(dropdownActions.toggle());
  };
  return (
    <header className="w-screen h-[90px] bg-[#191919] flex justify-around items-center border-b-[1px] border-[#979797] ">
      <div>
        <button onClick={toggleModal}>
          <img src={dropDownIconPath} alt="" />
        </button>
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
