import { formData } from "@/app/_lib/constants";
import {
  Body,
  Container,
  Head,
  Link,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Heading,
  Font,
} from "@react-email/components";
import React from "react";

export default function NoelleApplication() {
  const data = {
    first: "Clint",
    last: "Clint",
    email: "irsent",
  };
  let inputIndex = 1;
  const adjustedData = Object.keys(data).filter((key) => {
    return key !== "first" && key !== "last" && key !== "email";
  });
  const adjustedForm = formData.slice(1);
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <Preview>You have a new Application for Coaching!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img src={`/static/RN.png`} fill="true" alt="RN" />
            <Hr style={hr} />
            <Heading style={h1} as="h2">
              Your new applicants application is here!
            </Heading>
            {adjustedForm.map((formSections) => {
              return formSections.textAreas.map((question, questionIndex) => {
                const key = adjustedData[inputIndex - 1];
                const value = data[key];
                return (
                  <React.Fragment key={questionIndex}>
                    <Heading style={h1} as="h3">
                      <span className="text-xl">{inputIndex++}.</span>{" "}
                      {question.label}
                    </Heading>
                    <Text style={paragraph}>{value}</Text>
                  </React.Fragment>
                );
              });
            })}
          </Section>
        </Container>
      </Body>
    </html>
  );
}

const main = {
  color: "#e7e1d7",
  backgroundColor: "#28282b",
  fontFamily: "'Cormorant Garamond' serif",
};

const container = {
  backgroundColor: "#28282b",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e7e1d7",
  margin: "20px 0",
};

const h1 = {
  fontWeight: "540",
  fontFamily: "'Cormorant Garamond', serif",
};

const paragraph = {
  color: "#373633",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
  backgroundColor: "#e7e1d7",
  borderRadius: 10,
  padding: 5,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#b2b19f",
  borderRadius: "5px",
  color: "#f9f8f3",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
