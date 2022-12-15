import DetailedPage from "../UI/DetailedUI/DetailedPage";
import ZX7Path from "../../assets/Second Model Speaker Images/zx7.png";
import firstImgPath from "../../assets/Second Model Speaker Images/first-image.png";
import secondImgPath from "../../assets/Second Model Speaker Images/second-image.png";
import thirdImgPath from "../../assets/Second Model Speaker Images/third-image.png";
import firstOfferedPath from "../../assets/Second Model Speaker Images/first-offered.png";
import secondOfferedPath from "../../assets/Second Model Speaker Images/second-offered.png";
import thirdOfferedPath from "../../assets/Second Model Speaker Images/third-offered.png";
const boxItemsNamesArr = [
  "Speaker Unit",
  "Speaker Cloth Panel",
  "User Manual",
  "3.5mm 5m Audio Cable",
  "7.5m Optical Cable",
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
  { path: firstOfferedPath, title: "zx9 speaker", routePath: "/zx9-speaker" },
  {
    path: secondOfferedPath,
    title: "xx99 mark I",
    routePath: "/xx9-mark-one-headphones",
  },
  { path: thirdOfferedPath, title: "xx59", routePath: "/xx59-headphones" },
];

const SecondModelSpeaker = () => {
  return (
    <DetailedPage
      productImgPath={ZX7Path}
      productTitle="ZX7
      SPEAKER"
      productDescription="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
      price="3,500"
      features="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. 

      The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
      boxItemsQuantity={boxItemsQuantityArr}
      boxItemsNamesArr={boxItemsNamesArr}
      firstPath={firstImgPath}
      secondPath={secondImgPath}
      thirdPath={thirdImgPath}
      offeredSectionArr={offeredSectionArr}
    />
  );
};
export default SecondModelSpeaker;
