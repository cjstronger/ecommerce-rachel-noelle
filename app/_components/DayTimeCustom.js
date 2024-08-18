"use client";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { isSaturday } from "date-fns";
import { toDate } from "date-fns-tz";
import { useCart } from "../_contexts/CartContext";
import { addClient } from "../_lib/data-services";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";

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
  const [userDate, setUserDate] = useState(null);
  const [email, setEmail] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const { addCartItem, itemAdding } = useCart();
  const user = { fullName, email, userDate };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userDate) {
      if (!email) {
        setEmailError("Please enter your email");
      }
      if (!fullName) {
        setNameError("Please enter your full name");
      }
      return setError("Please select a date and time for the consultation");
    } else if (!email) {
      if (!userDate) {
        setError("Please select a date and time for the consultation");
      }
      if (!fullName) {
        setNameError("Please enter your full name");
      }
      setEmailError("Please enter your email.");
    } else if (!fullName) {
      setNameError("Please enter your full name.");
    } else if (priceId) {
      console.log("here at the priceId");
      await addCartItem(priceId);
      localStorage.setItem(priceId, [fullName, email, userDate]);
    } else {
      setLoading(true);
      const { added } = await addClient(user);
      setLoading(false);
      added && setAdded(true);
    }
  };

  function handleChange(value) {
    setUserDate(value);
    setError(null);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailError(null);
  }

  function handleNameChange(e) {
    setFullName(e.target.value);
    setNameError(null);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex flex-col items-center gap-2"
    >
      <CustomSlots onChange={handleChange} />
      {error && (
        <p className="text-red-600 text-sm lg:text-base text-center">{error}</p>
      )}
      <input
        id="fullname"
        className="w-[50%] md:w-[20rem] text-lg p-2 font-satoshi bg-transparent border border-fadedBlack text-fadedBlack focus:outline-none placeholder-neutral-500 autofill-black autofill:bg-bg"
        type="text"
        placeholder="Full name"
        autoComplete="name"
        onChange={handleNameChange}
      />
      {nameError && (
        <p className="text-red-600 text-sm lg:text-base">{nameError}</p>
      )}
      <input
        id="email"
        className="w-[50%] md:w-[20rem] text-lg p-2 font-satoshi bg-transparent border border-fadedBlack text-fadedBlack focus:outline-none placeholder-neutral-500 autofill-black autofill:bg-bg"
        type="email"
        placeholder="Email"
        autoComplete="email"
        onChange={handleEmailChange}
      />
      {emailError && (
        <p className="text-red-600 text-sm lg:text-base text-center">
          {emailError}
        </p>
      )}
      <div className="flex justify-center items-center lg:flex-row flex-col text-center my-2 lg:gap-5">
        {price === "free" ? (
          <>
            <p className="mb-2 lg:text-lg text-base">Free</p>
            <Button>
              {loading ? (
                <SpinnerMini />
              ) : added ? (
                "Talk soon!"
              ) : (
                "Lets get started"
              )}
            </Button>
          </>
        ) : (
          <>
            <p className="mb-2 lg:text-lg text-base">Price: ${price * 0.01}</p>
            <button className="font-satoshi lowercase border-fadedBlack border hover:bg-accent hover:text-white p-2 transition-all duration-400 text-lg lg:text-xl min-h-[50px] min-w-[125px] flex justify-center items-center">
              {itemAdding ? "added to cart" : "Lets get started"}
            </button>
          </>
        )}
      </div>
    </form>
  );
}
