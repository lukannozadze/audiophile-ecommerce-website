import audiophilePath from "../../assets/audiophile.png";
import FacebookIcon from "../UI/FacebookIcon";
import TwitterIcon from "../UI/TwitterIcon";
import InstagramIcon from "../UI/InstagramIcon";

const navListArr = ["home", "headphones", "speakers", "earphones"];
const Footer = () => {
  return (
    <div className=" bg-[#101010] text-white font-manrope  flex flex-col items-center gap-12">
      <div className="wrapper h-1 w-[101px]  bg-[#D87D4A]"></div>
      <img className="self-center" src={audiophilePath} alt="" />
      <nav>
        <ul className="flex flex-col gap-4 items-center uppercase text-[13px] leading-[25px] tracking-[2px] font-bold">
          {navListArr.map((name) => (
            <li key={name} className="hover:text-[#D87D4A] cursor-pointer">
              {name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-center text-[15px] w-[327px] leading-[25px] opacity-50 font-medium">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>
      <span className="font-bold text-[15px] leading-[25px] opacity-50">
        Copyright 2021. All Rights Reserved
      </span>
      <div className="flex gap-4 pb-[38px] items-center">
        <a href="https://www.facebook.com/">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com/">
          <TwitterIcon />
        </a>
        <a href="https://instagram.com/">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
