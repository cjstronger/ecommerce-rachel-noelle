const data = {
  first: "clint",
  last: "strong",
  email: "clinntsentsent",
  textAreas1: "enstenst",
  textAreas2: "setnsetn",
};

const adjustedData = Object.keys(data).filter((key) => {
  return key !== "first" && key !== "last" && key !== "email";
});

const key = adjustedData[1];

console.log(data[key]);
