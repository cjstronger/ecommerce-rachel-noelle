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

export const NoelleGuide = ({ appFullName }) => (
  <Html>
    <Head />
    <Preview>Enjoy</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img src={`/static/RN.png`} fill="true" alt="RN" />
          <Hr style={hr} />
          <Heading style={h1} as="h1">
            Hello, {appFullName}
          </Heading>
          <Text style={paragraph}>Enjoy my free guide to eating healthy!</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

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
