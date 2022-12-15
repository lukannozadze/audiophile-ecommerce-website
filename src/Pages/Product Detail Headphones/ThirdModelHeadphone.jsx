import DetailedPage from "../UI/DetailedUI/DetailedPage";
import XX59Path from "../../assets/Third Model Headphone Images/xx59.png";
import firstImgPath from "../../assets/Third Model Headphone Images/first-image.png";
import secondImgPath from "../../assets/Third Model Headphone Images/second-image.png";
import thirdImgPath from "../../assets/Third Model Headphone Images/third-image.png";
import firstOfferedPath from "../../assets/Third Model Headphone Images/first-offered.png";
import secondOfferedPath from "../../assets/Third Model Headphone Images/second-offered.png";
import thirdOfferedPath from "../../assets/Third Model Headphone Images/third-offered.png";

const boxItemsNamesArr = [
  "Headphone Unit",
  "Replacement Earcups",
  "User Manual",
  "3.5mm 5m Audio Cable",
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
];
const offeredSectionArr = [
  {
    path: firstOfferedPath,
    title: "xx99 mark II",
    routePath: "xx9-mark-two-headphones",
  },
  {
    path: secondOfferedPath,
    title: "xx99 mark I",
    routePath: "/xx9-mark-one-headphones",
  },
  { path: thirdOfferedPath, title: "zx9 speaker", routePath: "/zx9-speaker" },
];

const ThirdModelHeadphone = () => {
  return (
    <DetailedPage
      productImgPath={XX59Path}
      productTitle="XX59
      Headphones"
      productDescription="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
      price="899"
      features="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.

      More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
      boxItemsQuantity={boxItemsQuantityArr}
      boxItemsNamesArr={boxItemsNamesArr}
      firstPath={firstImgPath}
      secondPath={secondImgPath}
      thirdPath={thirdImgPath}
      offeredSectionArr={offeredSectionArr}
    />
  );
};
export default ThirdModelHeadphone;
