import DetailedPage from "../UI/DetailedUI/DetailedPage";
import ZX9Path from "../../assets/First Model Speaker Images/zx9.png";
import firstImgPath from "../../assets/First Model Speaker Images/first-image.png";
import secondImgPath from "../../assets/First Model Speaker Images/second-image.png";
import thirdImgPath from "../../assets/First Model Speaker Images/third-image.png";
import firstOfferedPath from "../../assets/First Model Speaker Images/first-offered.png";
import secondOfferedPath from "../../assets/First Model Speaker Images/second-offered.png";
import thirdOfferedPath from "../../assets/First Model Speaker Images/third-offered.png";
const boxItemsNamesArr = [
  "Speaker Unit",
  "Speaker Cloth Panel",
  "User Manual",
  "3.5mm 5m Audio Cable",
  "10m Optical Cable",
];
const boxItemsQuantityArr = [
  {
    key: "1",
    value: 2,
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
const offeredSectionArr = [
  { path: firstOfferedPath, title: "zx7 speaker", routePath: "/zx7-speaker" },
  {
    path: secondOfferedPath,
    title: "xx99 mark I",
    routePath: "xx9-mark-one-headphones",
  },
  { path: thirdOfferedPath, title: "xx59", routePath: "/xx59-headphones" },
];

const FirstModelSpeaker = () => {
  return (
    <DetailedPage
      productImgPath={ZX9Path}
      productTitle="ZX9
      SPEAKER"
      productDescription="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
      newProductText="new product"
      newProductClass="text-sm tracking-[10px] text-[#D87D4A] uppercase"
      price="4,500"
      features="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

      Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
      boxItemsQuantity={boxItemsQuantityArr}
      boxItemsNamesArr={boxItemsNamesArr}
      firstPath={firstImgPath}
      secondPath={secondImgPath}
      thirdPath={thirdImgPath}
      offeredSectionArr={offeredSectionArr}
    />
  );
};
export default FirstModelSpeaker;
