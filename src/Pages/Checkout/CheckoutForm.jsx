import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import walletImgPath from "../../assets/wallet.png";
import { CheckoutActions } from "../../store/store";
import { useDispatch } from "react-redux";
const CheckoutForm = () => {
  const dispatch = useDispatch();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    email: yup.string().email("Wrong Format").required("Email is Required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Wrong Format")
      .required("Phone Number is Required"),
    address: yup.string().required("Address is Required"),
    zipCode: yup
      .string()
      .required("ZIP Code is Required")
      .length(5, "Must be Exactly 5 Characters")
      .matches(/^[0-9]{5}/, "Wrong Format"),

    city: yup.string().required("City is Required"),
    country: yup.string().required("Country is Required"),
    emoneyNumber: yup
      .string()
      .matches(phoneRegExp, "Wrong Format")
      .required("e-Money Number is Required"),
    emoneyPin: yup
      .string()
      .required("e-Money PIN is Required")
      .length(4, "Must be Exactly 4 Characters")
      .matches(/^[0-9]{4}/, "Wrong Format"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [emoneyIsChecked, setEmoneyIsChecked] = useState(true);
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
  const submitForm = () => {
    dispatch(CheckoutActions.setPermission());
  };

  return (
    <div className="w-[327px] bg-white px-6 rounded-lg pt-6 pb-8 md:w-[689px] md:pt-[30px] 1.5xl:w-[730px] 1.5xl:px-[46px] ">
      <h1 className="uppercase text-[28px] font-bold leading-[38px] tracking-[1px] pb-6 md:text-[32px] md:leading-[32px] md:pb-[41px]">
        checkout
      </h1>
      <form onSubmit={handleSubmit(submitForm)} id="checkout">
        <div>
          <span className="uppercase text-[#D87D4A] font-bold text-[13px] leading-[25px] tracking-[1px] ">
            billing details
          </span>
          <div className="flex flex-col gap-6 pb-6 pt-4">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label
                    className={`${
                      errors.name?.message && "text-[#CD2C2C]"
                    } text-[12px] font-bold leading-[17px]`}
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <span className="text-[#CD2C2C] text-[12px] font-medium leading-[17px]">
                    {errors.name?.message}
                  </span>
                </div>
                <input
                  {...register("name")}
                  className={`${
                    errors.name?.message && "!border-2 !border-[#CD2C2C]"
                  }
                  w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md     md:w-[309px]"
                  `}
                  type="text"
                  placeholder="Alexei Ward"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label
                    className={`${
                      errors.email?.message && "text-[#CD2C2C]"
                    } text-[12px] font-bold leading-[17px]`}
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <span className="text-[#CD2C2C] text-[12px] font-medium leading-[17px]">
                    {errors.email?.message}
                  </span>
                </div>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="alexei@mail.com"
                  className={`${
                    errors.email?.message && "!border-2 !border-[#CD2C2C]"
                  } w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[309px]`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-[280px] md:w-[309px]">
              <div className="flex items-center justify-between">
                <label
                  className={` ${
                    errors.phone?.message && "text-[#CD2C2C]"
                  } text-[12px] font-bold leading-[17px]`}
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <span className="text-[#CD2C2C] text-[12px] font-medium leading-[17px]">
                  {errors.phone?.message}
                </span>
              </div>

              <input
                {...register("phone")}
                type="text"
                placeholder="+1 202-555-0136"
                className={` ${
                  errors.phone?.message && "!border-2 !border-[#CD2C2C]"
                } w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[309px]`}
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
              <div className="flex items-center justify-between">
                <label
                  className={` ${
                    errors.address?.message && "text-[#CD2C2C]"
                  } text-[12px] font-bold leading-[17px]`}
                  htmlFor="address"
                >
                  Your Address
                </label>
                <span className="text-[#CD2C2C] text-[12px] font-medium leading-[17px]">
                  {errors.address?.message}
                </span>
              </div>
              <input
                {...register("address")}
                type="text"
                placeholder="1137 Williams Avenue"
                className={`  ${
                  errors.address?.message && "!border-2 !border-[#CD2C2C]"
                }  w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[641px]`}
              />
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label
                    className={` ${
                      errors.zipCode?.message && "text-[#CD2C2C]"
                    } text-[12px] font-bold leading-[17px]`}
                    htmlFor="zipCode"
                  >
                    ZIP Code
                  </label>
                  <span className="text-[#CD2C2C] text-[12px] font-medium leading-[17px]">
                    {errors.zipCode?.message}
                  </span>
                </div>
                <input
                  {...register("zipCode")}
                  type="text"
                  placeholder="10001"
                  className={` ${
                    errors.zipCode?.message && "!border-2 !border-[#CD2C2C]"
                  }   w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[309px]`}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label
                    className={` ${
                      errors.city?.message && "text-[#CD2C2C]"
                    } text-[12px] font-bold leading-[17px]`}
                    htmlFor="city"
                  >
                    City
                  </label>
                  <span className="text-[#CD2C2C] text-[12px] font-medium leading-[17px]">
                    {errors.city?.message}
                  </span>
                </div>
                <input
                  {...register("city")}
                  type="text"
                  placeholder="New York"
                  className={`${
                    errors.city?.message && "!border-2 !border-[#CD2C2C]"
                  } w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[309px]`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex items-center justify-between w-[280px] md:w-[309px]">
                <label
                  className={` ${
                    errors.country?.message && "text-[#CD2C2C]"
                  } text-[12px] font-bold leading-[17px]`}
                  htmlFor="country"
                >
                  Country
                </label>
                <span className="text-[#CD2C2C] text-[12px] font-medium leading-[17px]">
                  {errors.country?.message}
                </span>
              </div>
              <input
                {...register("country")}
                type="text"
                placeholder="United States"
                className={` ${
                  errors.country?.message && "!border-2 !border-[#CD2C2C]"
                } w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[309px]`}
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

        {emoneyIsChecked && (
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label
                  className={` ${
                    errors.emoneyNumber?.message && "text-[#CD2C2C]"
                  } text-[12px] font-bold leading-[17px]`}
                  htmlFor="emoneyNumber"
                >
                  e-Money Number
                </label>
                <span className="text-[#CD2C2C] text-[12px] font-medium leading-[17px]">
                  {errors.emoneyNumber?.message}
                </span>
              </div>
              <input
                {...register("emoneyNumber")}
                type="text"
                placeholder="238521993"
                className={`${
                  errors.emoneyNumber?.message && "!border-2 !border-[#CD2C2C]"
                } w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A]  md:w-[309px]`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label
                  className={` ${
                    errors.emoneyPin?.message && "text-[#CD2C2C]"
                  } text-[12px] font-bold leading-[17px]`}
                  htmlFor="emoneyPin"
                >
                  e-Money PIN
                </label>
                <span className="text-[#CD2C2C] text-[12px] font-medium leading-[17px]">
                  {errors.emoneyPin?.message}
                </span>
              </div>
              <input
                {...register("emoneyPin")}
                type="text"
                placeholder="6891"
                className={` ${
                  errors.emoneyPin?.message && "!border-2 !border-[#CD2C2C]"
                } w-[280px] placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-bold py-[17px] pl-6 border-[1px] border-[#CFCFCF] rounded-md outline-[#D87D4A] md:w-[309px]`}
              />
            </div>
          </div>
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
