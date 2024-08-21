"use client";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { isSaturday, isSunday, isThisYear } from "date-fns";
import { toDate } from "date-fns-tz";
import { useCart } from "../_contexts/CartContext";
import { addClient, checkClient } from "../_lib/data-services";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import toast from "react-hot-toast";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#ffffff",
      paper: "#1d1d1d",
    },
    text: {
      primary: "#ffffff",
      secondary: "#737373",
    },
  },
});

function CustomSlots({ onChange, onError }) {
  const [value, setValue] = useState(null);

  const shouldDisableTime = (timeValue, clockType) => {
    const date = new Date(timeValue);
    if (clockType === "hours") {
      if (isSunday(date)) {
        return date.getHours() < 13 || date.getHours() > 16;
      } else {
        return date.getHours() < 6 || date.getHours() > 10;
      }
    }
    return false;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="mx-auto max-w-[200px] md:max-w-[250px]">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DemoContainer components={["DatePicker"]}>
            <MobileDateTimePicker
              label="Pick a time"
              onChange={onChange}
              className="bg-accent rounded-md"
              disablePast
              shouldDisableDate={isSaturday}
              shouldDisableTime={shouldDisableTime}
              value={value ? toDate(value) : null}
              views={["year", "month", "day", "hours"]}
              onError={onError}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}

export default function CoachingProductForm({ price, priceId }) {
  const [userdate, setUserDate] = useState(null);
  const [email, setEmail] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const { addCartItem, itemAdding } = useCart();
  const user = { fullName, email, userdate };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userdate) {
      if (!email) {
        setEmailError("Please enter your email");
      }
      if (!fullName) {
        setNameError("Please enter your full name");
      }
      return setError("Please select a date and time for the consultation");
    } else if (!email) {
      if (!userdate) {
        setError("Please select a date and time for the consultation");
      }
      if (!fullName) {
        setNameError("Please enter your full name");
      }
      return setEmailError("Please enter your email.");
    } else if (!fullName) {
      return setNameError("Please enter your full name.");
    } else if (error) {
      return;
    } else if (priceId) {
      const { check } = await checkClient(user);
      if (check?.length) {
        const consultationDate = new Date(check[0].userdate);
        return toast(
          `You already have an upcoming consultation on ${consultationDate.toLocaleString(
            "en-us",
            {
              day: "numeric",
              month: "long",
              hour: "numeric",
            }
          )}`,
          { className: "text-center" }
        );
      }
      await addCartItem(priceId);
      localStorage.setItem(priceId, [fullName, email, userdate]);
    } else {
      setLoading(true);
      const { check } = await checkClient(user);
      setLoading(false);
      if (check?.length) {
        const consultationDate = new Date(check[0].userdate);
        return toast(
          `You already have an upcoming consultation on ${consultationDate.toLocaleString(
            "en-us",
            {
              day: "numeric",
              month: "long",
              hour: "numeric",
            }
          )}`,
          { className: "text-center" }
        );
      }
      const { added } = await addClient(user);
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

  function onError(newError) {
    if (newError === "disablePast")
      return setError("Time must be sometime in the future");
    if (newError === "shouldDisableTime-hours")
      return setError(
        "Rachel's time range is Monday through Friday 6am-10am and on Sundays 1pm-4pm"
      );
    if (newError === "shouldDisableDate")
      return setError("Rachel is available Mon-Fri and Sundays");
    setError(newError);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex flex-col items-center gap-2"
    >
      <CustomSlots onChange={handleChange} onError={onError} />
      {error && (
        <p className="text-red-600 text-sm lg:text-base text-center px-11">
          {error}
        </p>
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
                "Lets Get Started"
              )}
            </Button>
          </>
        ) : (
          <>
            <p className="mb-2 lg:text-lg text-base">Price: ${price * 0.01}</p>
            <button className="font-satoshi border-fadedBlack border hover:bg-accent hover:text-white p-2 transition-all duration-400 text-lg lg:text-xl min-h-[50px] min-w-[125px] flex justify-center items-center">
              {itemAdding ? "Added to Cart" : "Lets Get Started"}
            </button>
          </>
        )}
      </div>
    </form>
  );
}
