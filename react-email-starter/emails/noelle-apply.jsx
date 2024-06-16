import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Heading,
} from "@react-email/components";
import React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NoelleApply = ({ appFullName }) => (
  <Html>
    <Head />
    <Preview>Thank you for your application to my Coaching</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img src={`/static/RN.png`} fill="true" alt="RN" />
          <Hr style={hr} />
          <Heading style={h1} as="h1">
            Hello, {appFullName}
          </Heading>
          <Text style={paragraph}>
            Thank you for submitting your application to work with Rachel! We
            will get back to you as soon as possible to let you know if we are a
            good fit!
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default NoelleApply;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const h1 = {
  fontWeight: "540",
};

const paragraph = {
  color: "#373633",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
};
