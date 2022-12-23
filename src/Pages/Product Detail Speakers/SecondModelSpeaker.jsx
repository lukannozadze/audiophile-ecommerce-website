import DetailedPage from "../UI/DetailedUI/DetailedPage";
import ZX7Path from "../../assets/Second Model Speaker Images/zx7.png";
import ZX7TabletPath from "../../assets/Second Model Speaker Images/zx7-tablet.png";
import ZX7DesktopPath from "../../assets/Second Model Speaker Images/zx7-desktop.png";
import firstImgPath from "../../assets/Second Model Speaker Images/first-image.png";
import secondImgPath from "../../assets/Second Model Speaker Images/second-image.png";
import thirdImgPath from "../../assets/Second Model Speaker Images/third-image.png";
import firstImgDesktop from "../../assets/Second Model Speaker Images/firstImgDesktop.png";
import secondImgDesktop from "../../assets/Second Model Speaker Images/secondImgDesktop.png";
import thirdImgDesktop from "../../assets/Second Model Speaker Images/thirdImgDesktop.png";
import firstOfferedPath from "../../assets/Second Model Speaker Images/first-offered.png";
import secondOfferedPath from "../../assets/Second Model Speaker Images/second-offered.png";
import thirdOfferedPath from "../../assets/Second Model Speaker Images/third-offered.png";
import offered1Tablet from "../../assets/Second Model Headphone Images/offered1-tablet.png";
import offered2Tablet from "../../assets/Second Model Headphone Images/offered2-tablet.png";
import offered3Tablet from "../../assets/Second Model Headphone Images/offered3-tablet.png";
import offered1Desktop from "../../assets/Second Model Speaker Images/offered1-desktop.png";
import offered2Desktop from "../../assets/Second Model Speaker Images/offered2-desktop.png";
import offered3Desktop from "../../assets/Second Model Speaker Images/offered3-desktop.png";
import { useMediaQuery } from "react-responsive";
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

const SecondModelSpeaker = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const firstOffered = isDesktop
    ? offered1Desktop
    : isTabletOrMobile
    ? offered1Tablet
    : firstOfferedPath;
  const secondOffered = isDesktop
    ? offered2Desktop
    : isTabletOrMobile
    ? offered2Tablet
    : secondOfferedPath;
  const thirdOffered = isDesktop
    ? offered3Desktop
    : isTabletOrMobile
    ? offered3Tablet
    : thirdOfferedPath;
  const offeredSectionArr = [
    { path: firstOffered, title: "zx9 speaker", routePath: "/zx9-speaker" },
    {
      path: secondOffered,
      title: "xx99 mark I",
      routePath: "/xx9-mark-one-headphones",
    },
    { path: thirdOffered, title: "xx59", routePath: "/xx59-headphones" },
  ];
  return (
    <DetailedPage
      productImgPath={
        isDesktop ? ZX7DesktopPath : isTabletOrMobile ? ZX7TabletPath : ZX7Path
      }
      productTitle="ZX7
      SPEAKER"
      productDescription="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
      price="3,500"
      features="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. 

      The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
      boxItemsQuantity={boxItemsQuantityArr}
      boxItemsNamesArr={boxItemsNamesArr}
      firstPath={isDesktop ? firstImgDesktop : firstImgPath}
      secondPath={isDesktop ? secondImgDesktop : secondImgPath}
      thirdPath={isDesktop ? thirdImgDesktop : thirdImgPath}
      offeredSectionArr={offeredSectionArr}
    />
  );
};
export default SecondModelSpeaker;
