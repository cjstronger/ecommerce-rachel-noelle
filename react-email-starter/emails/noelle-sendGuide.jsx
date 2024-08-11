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
    <Preview>Rachel's Free Ebook</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img src={`/static/RN.png`} fill="true" alt="RN" />
          <Hr style={hr} />
          <Heading style={h1} as="h2">
            Hello, {appFullName}
          </Heading>
          <Text style={paragraph}>
            Is is time to get serious about your health?
          </Text>
          <Text style={paragraph}>
            This is where the journey begins in improving your life.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  color: "#e7e1d7",
  backgroundColor: "#28282b",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
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
};

const paragraph = {
  color: "#e7e1d7",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
};
