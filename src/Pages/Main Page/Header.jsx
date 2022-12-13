import CartIcon from "../../assets/CartIcon";
import AudiophileImgPath from "../../assets/audiophile.png";
import dropDownIconPath from "../../assets/dropdown-icon.png";
import { useState } from "react";
const Header = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const toggleModal = () => {
    setModalIsShown(!modalIsShown);
    props.onGetModalStatus(modalIsShown);
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
