import DetailedPage from "../UI/DetailedUI/DetailedPage";
import XX992Path from "../../assets/Category Page Images/xx99-mark-2.png";
import XX992TabletPath from "../../assets/First Model Headphone Images/xx992-tablet.png";
import XX992DesktopPath from "../../assets/First Model Headphone Images/xx992-desktop.png";
import firstImgPath from "../../assets/First Model Headphone Images/first-image.png";
import secondImgPath from "../../assets/First Model Headphone Images/second-image.png";
import thirdImgPath from "../../assets/First Model Headphone Images/third-image.png";
import firstImgDesktop from "../../assets/First Model Headphone Images/firstImgDesktop.png";
import secondImgDesktop from "../../assets/First Model Headphone Images/secondImgDesktop.png";
import thirdImgDesktop from "../../assets/First Model Headphone Images/thirdImgDesktop.png";
import firstOfferedPath from "../../assets/First Model Headphone Images/first-offered.png";
import secondOfferedPath from "../../assets/First Model Headphone Images/second-offered.png";
import thirdOfferedPath from "../../assets/First Model Headphone Images/third-offered.png";
import { useMediaQuery } from "react-responsive";
import offered1Tablet from "../../assets/First Model Headphone Images/offered1-tablet.png";
import offered2Tablet from "../../assets/First Model Headphone Images/offered2-tablet.png";
import offered3Tablet from "../../assets/First Model Headphone Images/offered3-tablet.png";
import offered1Desktop from "../../assets/First Model Headphone Images/offered1-desktop.png";
import offered2Desktop from "../../assets/First Model Headphone Images/offered2-desktop.png";
import offered3Desktop from "../../assets/First Model Headphone Images/offered3-desktop.png";

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
        isDesktop
          ? XX992DesktopPath
          : isTabletOrMobile
          ? XX992TabletPath
          : XX992Path
      }
      productTitle="XX99 Mark II
  Headphones"
      productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      newProductText="new product"
      newProductClass="text-sm tracking-[10px] text-[#D87D4A] uppercase"
      price="2,999"
      features="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

      The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
      boxItemsQuantity={boxItemsQuantityArr}
      boxItemsNamesArr={boxItemsNamesArr}
      firstPath={isDesktop ? firstImgDesktop : firstImgPath}
      secondPath={isDesktop ? secondImgDesktop : secondImgPath}
      thirdPath={isDesktop ? thirdImgDesktop : thirdImgPath}
      offeredSectionArr={offeredSectionArr}
      productId="h1"
    />
  );
};

export default FirstModelHeadphone;
