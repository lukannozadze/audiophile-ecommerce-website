import audiophilePath from "../../assets/audiophile.png";
import FacebookIcon from "../UI/SocialMediaIcons/FacebookIcon";
import TwitterIcon from "../UI/SocialMediaIcons/TwitterIcon";
import InstagramIcon from "../UI/SocialMediaIcons/InstagramIcon";
import { NavLink } from "react-router-dom";

const navListArr = [
  { name: "home", routePath: "/" },
  { name: "headphones", routePath: "/headphones" },
  { name: "speakers", routePath: "/speakers" },
  { name: "earphones", routePath: "/earphones" },
];
const Footer = () => {
  return (
    <div className=" bg-[#101010] text-white font-manrope  flex flex-col items-center gap-12 md:gap-8 md:items-start md:pl-[39px] lg:pl-[50px] 1.5xl:pl-[160px] 2xl:pl-[390px]">
      <div className="wrapper h-1 w-[101px]  bg-[#D87D4A]"></div>
      <div className="flex flex-col gap-12 md:gap-8 lg:flex-row lg:gap-[400px] xl:gap-[600px]">
        <img
          className="self-center md:self-start"
          src={audiophilePath}
          alt=""
        />
        <nav>
          <ul className="flex flex-col gap-4 items-center uppercase text-[13px] leading-[25px] tracking-[2px] font-bold md:flex-row">
            {navListArr.map((item) => (
              <NavLink
                key={item.name}
                to={item.routePath}
                activeClassName="text-[#D87D4A]"
                exact={true}
              >
                <li className="hover:text-[#D87D4A] cursor-pointer duration-500">
                  {item.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
      <div className="text-center text-[15px] w-[327px] leading-[25px] opacity-50 font-medium md:w-[689px] md:text-left">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[48px] md:flex-row md:gap-[327px] md:items-start md:mt-[32px] lg:gap-[560px] xl:gap-[760px]">
        <span className="font-bold text-[15px] leading-[25px] opacity-50">
          Copyright 2021. All Rights Reserved
        </span>
        <div className="flex gap-4 pb-[38px] items-center ">
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
    </div>
  );
};

export default Footer;
