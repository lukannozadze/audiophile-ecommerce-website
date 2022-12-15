import DetailedPage from "../UI/DetailedUI/DetailedPage";
import YX1Path from "../../assets/First Model Earphone Images/yx1.png";
import firstImgPath from "../../assets/First Model Earphone Images/first-image.png";
import secondImgPath from "../../assets/First Model Earphone Images/second-image.png";
import thirdImgPath from "../../assets/First Model Earphone Images/third-image.png";
import firstOfferedPath from "../../assets/First Model Earphone Images/first-offered.png";
import secondOfferedPath from "../../assets/First Model Earphone Images/second-offered.png";
import thirdOfferedPath from "../../assets/First Model Earphone Images/third-offered.png";

const boxItemsNamesArr = [
  "Earphone Unit",
  "Multi-size Earplugs",
  "User Manual",
  "USB-C Charging Cable",
  "Travel Pouch",
];
const boxItemsQuantityArr = [
  {
    key: "1",
    value: 2,
  },
  {
    key: "2",
    value: 6,
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
const offeredSectionArr = [
  {
    path: firstOfferedPath,
    title: "xx99 mark I",
    routePath: "/xx9-mark-one-headphones",
  },
  { path: secondOfferedPath, title: "xx59", routePath: "/xx59-headphones" },
  { path: thirdOfferedPath, title: "zx9 speaker", routePath: "zx9-speaker" },
];

const FirstModelEarphone = () => {
  return (
    <DetailedPage
      productImgPath={YX1Path}
      productTitle="YX1 WIRELESS
      EARPHONES"
      productDescription="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      newProductText="new product"
      newProductClass="text-sm tracking-[10px] text-[#D87D4A] uppercase"
      price="599"
      features="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.

      The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
      boxItemsQuantity={boxItemsQuantityArr}
      boxItemsNamesArr={boxItemsNamesArr}
      firstPath={firstImgPath}
      secondPath={secondImgPath}
      thirdPath={thirdImgPath}
      offeredSectionArr={offeredSectionArr}
    />
  );
};
export default FirstModelEarphone;
