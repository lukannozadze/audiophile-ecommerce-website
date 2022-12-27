import { useState } from "react";
import walletImgPath from "../../assets/wallet.png";
const CheckoutForm = () => {
  const [emoneyIsChecked, setEmoneyIsChecked] = useState(false);
  const [cashIsChecked, setCashIsChecked] = useState(false);
  const handleChange = (e) => {
    if (e.target.id === "e-money") {
      setEmoneyIsChecked(!emoneyIsChecked);
      setCashIsChecked(false);
    } else {
      setCashIsChecked(!cashIsChecked);
      setEmoneyIsChecked(false);
    }
  };
  return (
    <div className="w-[327px] bg-white px-6 rounded-lg pt-6 pb-8 md:w-[689px] md:pt-[30px] 1.5xl:w-[730px] 1.5xl:px-[46px] ">
      <h1 className="uppercase text-[28px] font-bold leading-[38px] tracking-[1px] pb-6 md:text-[32px] md:leading-[32px] md:pb-[41px]">
        checkout
      </h1>
      <form>
        <div>
          <span className="uppercase text-[#D87D4A] font-bold text-[13px] leading-[25px] tracking-[1px] ">
            billing details
          </span>
          <div className="flex flex-col gap-6 pb-6 pt-4">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="flex flex-col gap-2">
                <label
                  className="text-[12px] font-bold leading-[17px]"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[309px]"
                  type="text"
                  name="name"
                  placeholder="Alexei Ward"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-[12px] font-bold leading-[17px]"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="alexei@mail.com"
                  className="w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[309px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-[12px] font-bold leading-[17px]"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="+1 202-555-0136"
                className="w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[309px]"
              />
            </div>
          </div>
        </div>

        <div>
          <span className="uppercase font-bold text-[13px] leading-[25px] tracking-[1px] text-[#D87D4A]">
            shipping info
          </span>
          <div className="flex flex-col gap-6 pt-4">
            <div className="flex flex-col gap-2">
              <label
                className="text-[12px] font-bold leading-[17px]"
                htmlFor="address"
              >
                Your Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="1137 Williams Avenue"
                className="w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[641px]"
              />
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="flex flex-col gap-2">
                <label
                  className="text-[12px] font-bold leading-[17px]"
                  htmlFor="zipCode"
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="10001"
                  className="w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[309px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[12px] font-bold leading-[17px]"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="New York"
                  className="w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[309px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label
                className="text-[12px] font-bold leading-[17px]"
                htmlFor="country"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                placeholder="United States"
                className="w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[309px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="uppercase font-bold text-[13px] leading-[25px] tracking-[1px] text-[#D87D4A] mb-4">
            payment details
          </span>
          <div className="md:flex md:flex-row md:justify-between">
            <span className="text-[14px] leading-[19px] font-bold mb-[17px]">
              Payment Method
            </span>
            <div>
              <div
                onClick={handleChange}
                id="e-money"
                className={`w-[280px] border-[1px] py-[19px] pl-4 border-[#CFCFCF] cursor-pointer rounded-md flex items-center gap-4 mb-4 md:w-[309px] hover:border-[#D87D4A]
                ${emoneyIsChecked ? "border-[#D87D4A]" : ""} `}
              >
                <div
                  id="e-money"
                  className="w-5 h-5
              rounded-full border-[1px] flex justify-center items-center"
                >
                  {emoneyIsChecked && (
                    <div
                      id="e-money"
                      className="w-[10px] h-[10px] bg-[#D87D4A] rounded-full "
                    ></div>
                  )}
                </div>
                <span
                  id="e-money"
                  className="text-[14px] leading-[19px] font-bold"
                >
                  e-Money
                </span>
              </div>
              <div
                onClick={handleChange}
                id="cash"
                className={`w-[280px] border-[1px] py-[17px] cursor-pointer pl-4 border-[#CFCFCF] rounded-md flex items-center gap-4 mb-8 md:w-[309px] hover:border-[#D87D4A] ${
                  cashIsChecked ? "border-[#D87D4A]" : ""
                }`}
              >
                <div
                  id="cash"
                  className="w-5 h-5 
              rounded-full border-[1px] flex justify-center items-center"
                >
                  {cashIsChecked && (
                    <div className="w-[10px] h-[10px] bg-[#D87D4A] rounded-full "></div>
                  )}
                </div>
                <span
                  id="cash"
                  className="text-[14px] leading-[19px] font-bold"
                >
                  Cash on Delivery
                </span>
              </div>
            </div>
          </div>
        </div>

        {emoneyIsChecked ? (
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <label
                className="text-[12px] font-bold leading-[17px]"
                htmlFor="emoney-number"
              >
                e-Money Number
              </label>
              <input
                type="text"
                name="emoney-number"
                placeholder="238521993"
                className="w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A]  md:w-[309px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-[12px] font-bold leading-[17px]"
                htmlFor="emoney-pin"
              >
                e-Money PIN
              </label>
              <input
                type="text"
                name="emoney-pin"
                placeholder="6891"
                className="w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[309px]"
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {cashIsChecked ? (
          <div className="flex gap-8">
            <img className="self-center" src={walletImgPath} alt="" />
            <p className="font-medium text-[15px] leading-[25px] opacity-50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};
export default CheckoutForm;
