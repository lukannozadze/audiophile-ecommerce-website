import DetailedPage from "../UI/DetailedUI/DetailedPage";
import XX91Path from "../../assets/Second Model Headphone Images/xx9-mark-one.png";
import firstImgPath from "../../assets/Second Model Headphone Images/first-image.png";
import secondImgPath from "../../assets/Second Model Headphone Images/second-image.png";
import thirdImgPath from "../../assets/Second Model Headphone Images/third-image.png";
import firstOfferedPath from "../../assets/Second Model Headphone Images/first-offered.png";
import secondOfferedPath from "../../assets/Second Model Headphone Images/second-offered.png";
import thirdOfferedPath from "../../assets/Second Model Headphone Images/third-offered.png";

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
    routePath: "/xx9-mark-two-headphones",
  },
  { path: secondOfferedPath, title: "xx59", routePath: "/xx59-headphones" },
  { path: thirdOfferedPath, title: "zx9 speaker", routePath: "/zx9-speaker" },
];

const SecondModelHeadphone = () => {
  return (
    <DetailedPage
      productImgPath={XX91Path}
      productTitle="XX99 Mark I
  Headphones"
      productDescription="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
      price="1,750"
      features="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. 

      From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
      boxItemsQuantity={boxItemsQuantityArr}
      boxItemsNamesArr={boxItemsNamesArr}
      firstPath={firstImgPath}
      secondPath={secondImgPath}
      thirdPath={thirdImgPath}
      offeredSectionArr={offeredSectionArr}
    />
  );
};
export default SecondModelHeadphone;
