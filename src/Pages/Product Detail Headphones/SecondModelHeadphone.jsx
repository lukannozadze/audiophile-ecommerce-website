import DetailedPage from "../UI/DetailedUI/DetailedPage";
import XX91Path from "../../assets/Second Model Headphone Images/xx9-mark-one.png";
import XX991TabletPath from "../../assets/Second Model Headphone Images/xx991-tablet.png";
import XX91DesktopPath from "../../assets/Second Model Headphone Images/xx991-desktop.png";
import firstImgPath from "../../assets/Second Model Headphone Images/first-image.png";
import secondImgPath from "../../assets/Second Model Headphone Images/second-image.png";
import thirdImgPath from "../../assets/Second Model Headphone Images/third-image.png";
import firstImgDesktop from "../../assets/Second Model Headphone Images/firstImgDesktop.png";
import secondImgDesktop from "../../assets/Second Model Headphone Images/secondImgDesktop.png";
import thirdImgDesktop from "../../assets/Second Model Headphone Images/thirdImgDesktop.png";
import firstOfferedPath from "../../assets/Second Model Headphone Images/first-offered.png";
import secondOfferedPath from "../../assets/Second Model Headphone Images/second-offered.png";
import thirdOfferedPath from "../../assets/Second Model Headphone Images/third-offered.png";
import { useMediaQuery } from "react-responsive";
import offered1Tablet from "../../assets/Second Model Headphone Images/offered1-tablet.png";
import offered2Tablet from "../../assets/Second Model Headphone Images/offered2-tablet.png";
import offered3Tablet from "../../assets/Second Model Headphone Images/offered3-tablet.png";
import offered1Desktop from "../../assets/Second Model Headphone Images/offered1-desktop.png";
import offered2Desktop from "../../assets/Second Model Headphone Images/offered2-desktop.png";
import offered3Desktop from "../../assets/Second Model Headphone Images/offered3-desktop.png";

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

const SecondModelHeadphone = () => {
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
      title: "xx99 mark II",
      routePath: "/xx9-mark-two-headphones",
    },
    { path: secondOffered, title: "xx59", routePath: "/xx59-headphones" },
    { path: thirdOffered, title: "zx9 speaker", routePath: "/zx9-speaker" },
  ];
  return (
    <DetailedPage
      productImgPath={
        isDesktop
          ? XX91DesktopPath
          : isTabletOrMobile
          ? XX991TabletPath
          : XX91Path
      }
      productTitle="XX99 Mark I
  Headphones"
      productDescription="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
      price="1,750"
      features="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. 

      From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
      boxItemsQuantity={boxItemsQuantityArr}
      boxItemsNamesArr={boxItemsNamesArr}
      firstPath={isDesktop ? firstImgDesktop : firstImgPath}
      secondPath={isDesktop ? secondImgDesktop : secondImgPath}
      thirdPath={isDesktop ? thirdImgDesktop : thirdImgPath}
      offeredSectionArr={offeredSectionArr}
      productId="h2"
    />
  );
};
export default SecondModelHeadphone;
