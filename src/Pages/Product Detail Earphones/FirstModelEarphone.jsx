import DetailedPage from "../UI/DetailedUI/DetailedPage";
import YX1Path from "../../assets/First Model Earphone Images/yx1.png";
import YX1TabletPath from "../../assets/First Model Earphone Images/yx1-tablet.png";
import YX1DesktopPath from "../../assets/First Model Earphone Images/yx1-desktop.png";
import firstImgPath from "../../assets/First Model Earphone Images/first-image.png";
import secondImgPath from "../../assets/First Model Earphone Images/second-image.png";
import thirdImgPath from "../../assets/First Model Earphone Images/third-image.png";
import firstImgDesktop from "../../assets/First Model Earphone Images/firstImgDesktop.png";
import secondImgDesktop from "../../assets/First Model Earphone Images/secondImgDesktop.png";
import thirdImgDesktop from "../../assets/First Model Earphone Images/thirdImgDesktop.png";

import firstOfferedPath from "../../assets/First Model Earphone Images/first-offered.png";
import secondOfferedPath from "../../assets/First Model Earphone Images/second-offered.png";
import thirdOfferedPath from "../../assets/First Model Earphone Images/third-offered.png";
import offered1Tablet from "../../assets/First Model Earphone Images/offered1-tablet.png";
import offered2Tablet from "../../assets/First Model Earphone Images/offered2-tablet.png";
import offered3Tablet from "../../assets/First Model Earphone Images/offered3-tablet.png";
import offered1Desktop from "../../assets/First Model Earphone Images/offered1-desktop.png";
import offered2Desktop from "../../assets/First Model Earphone Images/offered2-desktop.png";
import offered3Desktop from "../../assets/First Model Earphone Images/offered3-desktop.png";
import { useMediaQuery } from "react-responsive";

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

const FirstModelEarphone = () => {
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
    {
      path: firstOffered,
      title: "xx99 mark I",
      routePath: "/xx9-mark-one-headphones",
    },
    { path: secondOffered, title: "xx59", routePath: "/xx59-headphones" },
    { path: thirdOffered, title: "zx9 speaker", routePath: "/zx9-speaker" },
  ];
  return (
    <DetailedPage
      productImgPath={
        isDesktop ? YX1DesktopPath : isTabletOrMobile ? YX1TabletPath : YX1Path
      }
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
      firstPath={isDesktop ? firstImgDesktop : firstImgPath}
      secondPath={isDesktop ? secondImgDesktop : secondImgPath}
      thirdPath={isDesktop ? thirdImgDesktop : thirdImgPath}
      offeredSectionArr={offeredSectionArr}
      productId="e1"
    />
  );
};
export default FirstModelEarphone;
