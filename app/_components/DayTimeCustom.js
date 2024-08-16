"use client";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { isSaturday } from "date-fns";
import { toDate } from "date-fns-tz";
import { useCart } from "../_contexts/CartContext";

function CustomSlots({ onChange }) {
  const [value, setValue] = useState(null);
  return (
    <div className="mx-auto max-w-[200px] md:max-w-[250px]">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DemoContainer components={["DatePicker"]}>
          <DateTimePicker
            label="Pick a time"
            onChange={onChange}
            disablePast
            shouldDisableDate={isSaturday}
            value={value ? toDate(value) : null}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

export default function CoachingProductForm({ price, priceId }) {
  const [customSlotValue, setCustomSlotValue] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const { addCartItem, itemAdding } = useCart();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!customSlotValue) {
      setError("Please select a date and time.");
      return;
    } else if (!email) {
      setEmailError("Please enter an email.");
    } else {
      setError(null);
      setEmailError(null);
      await addCartItem(priceId);
    }
  };

  function handleChange(value) {
    setCustomSlotValue(value);
    setError(null);
  }

  function handleEmailChange(value) {
    setEmail(value);
    setEmailError(null);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex flex-col items-center gap-2"
    >
      <CustomSlots onChange={handleChange} />
      {error && <p className="text-red-600 text-center">{error}</p>}
      <input
        className="w-[50%] md:w-[20rem] text-lg p-2 font-satoshi bg-transparent border border-fadedBlack text-fadedBlack focus:outline-none placeholder-neutral-500 autofill-black autofill:bg-bg"
        type="email"
        placeholder="email"
        autoComplete="email"
        onChange={handleEmailChange}
      />
      {emailError && <p className="text-red-600">{emailError}</p>}
      <div className="flex justify-center items-center lg:flex-row flex-col text-center my-2 lg:gap-5">
        <p className="mb-2 lg:text-lg text-base">Price: ${price * 0.01}</p>
        <button className="font-satoshi lowercase border-fadedBlack border hover:bg-accent hover:text-white p-2 transition-all duration-400 text-lg lg:text-xl min-h-[50px] min-w-[125px] flex justify-center items-center">
          {itemAdding ? "added to cart" : "Lets get started"}
        </button>
      </div>
    </form>
  );
}
