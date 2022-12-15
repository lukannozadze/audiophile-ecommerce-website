import DetailedPage from "../UI/DetailedUI/DetailedPage";
import XX992Path from "../../assets/Category Page Images/xx99-mark-2.png";
import firstImgPath from "../../assets/First Model Headphone Images/first-image.png";
import secondImgPath from "../../assets/First Model Headphone Images/second-image.png";
import thirdImgPath from "../../assets/First Model Headphone Images/third-image.png";
const boxItemsNamesArr = [
  "Headphone Unit",
  "Replacement Earcups",
  "User Manual",
  "3.5mm 5m Audio Cable",
  "Travel Bag",
];
const boxItemsQuantityArr = [
  {
    key: "1",
    value: 1,
  },
  {
    key: "2",
    value: 2,
  },
  {
    key: "3",
    value: 1,
  },
  {
    key: "4",
    value: 1,
  },
  {
    key: "5",
    value: 1,
  },
];
const FirstModelHeadphone = () => {
  return (
    <DetailedPage
      productImgPath={XX992Path}
      productTitle="XX99 Mark II
  Headphones"
      productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      price="2,999"
      features="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

      The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
      boxItemsQuantity={boxItemsQuantityArr}
      boxItemsNamesArr={boxItemsNamesArr}
      firstPath={firstImgPath}
      secondPath={secondImgPath}
      thirdPath={thirdImgPath}
    />
  );
};

export default FirstModelHeadphone;
