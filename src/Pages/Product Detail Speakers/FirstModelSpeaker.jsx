import DetailedPage from "../UI/DetailedUI/DetailedPage";
import ZX9Path from "../../assets/First Model Speaker Images/zx9.png";
import ZX9TabletPath from "../../assets/First Model Speaker Images/zx9-tablet.png";
import ZX9DesktopPath from "../../assets/First Model Speaker Images/zx9-desktop.png";
import firstImgPath from "../../assets/First Model Speaker Images/first-image.png";
import secondImgPath from "../../assets/First Model Speaker Images/second-image.png";
import thirdImgPath from "../../assets/First Model Speaker Images/third-image.png";
import firstImgDesktop from "../../assets/First Model Speaker Images/firstImgDesktop.png";
import secondImgDesktop from "../../assets/First Model Speaker Images/secondImgDesktop.png";
import thirdImgDesktop from "../../assets/First Model Speaker Images/thirdImgDesktop.png";

import firstOfferedPath from "../../assets/First Model Speaker Images/first-offered.png";
import secondOfferedPath from "../../assets/First Model Speaker Images/second-offered.png";
import thirdOfferedPath from "../../assets/First Model Speaker Images/third-offered.png";
import { useMediaQuery } from "react-responsive";
import offered1Tablet from "../../assets/First Model Speaker Images/offered1-tablet.png";
import offered2Tablet from "../../assets/First Model Speaker Images/offered2-tablet.png";
import offered3Tablet from "../../assets/First Model Speaker Images/offered3-tablet.png";
import offered1Desktop from "../../assets/First Model Speaker Images/offered1-desktop.png";
import offered2Desktop from "../../assets/First Model Speaker Images/offered2-desktop.png";
import offered3Desktop from "../../assets/First Model Speaker Images/offered3-desktop.png";
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

const FirstModelSpeaker = () => {
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
    { path: firstOffered, title: "zx7 speaker", routePath: "/zx7-speaker" },
    {
      path: secondOffered,
      title: "xx99 mark I",
      routePath: "xx9-mark-one-headphones",
    },
    { path: thirdOffered, title: "xx59", routePath: "/xx59-headphones" },
  ];
  return (
    <DetailedPage
      productImgPath={
        isDesktop ? ZX9DesktopPath : isTabletOrMobile ? ZX9TabletPath : ZX9Path
      }
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
      firstPath={isDesktop ? firstImgDesktop : firstImgPath}
      secondPath={isDesktop ? secondImgDesktop : secondImgPath}
      thirdPath={isDesktop ? thirdImgDesktop : thirdImgPath}
      offeredSectionArr={offeredSectionArr}
      productId="s1"
    />
  );
};
export default FirstModelSpeaker;
