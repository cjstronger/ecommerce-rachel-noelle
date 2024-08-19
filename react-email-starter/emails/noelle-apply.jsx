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
  Tailwind,
} from "@react-email/components";
import React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NoelleApply = ({ appFullName }) => (
  <Html>
    <Tailwind>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>Thank you for your application</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://nzszzpxpduixjugtfdla.supabase.co/storage/v1/object/public/email_images/RN.png"
            height="auto"
            width="100%"
            className="sm:max-w-[100px] max-w-[50px]"
            alt="RN"
          />
          <Hr style={hr} />
          <Heading style={h1} as="h2">
            Hey, {appFullName}
          </Heading>
          <Section className="relative">
            <Img
              src="https://nzszzpxpduixjugtfdla.supabase.co/storage/v1/object/public/email_images/beach.jpg"
              alt="RN"
              height="auto"
              width="100%"
            />
            <Section className="absolute bottom-[-52%] bg-[#28282b] p-2">
              <Text>
                I&apos;m so excited that you want to work with me! Lets see if
                we are a good fit! I will send you an email shortly to schedule
                a follow up call.
              </Text>
              <Text style={paragraph}>Much love, Rachel</Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default NoelleApply;

const main = {
  color: "#e7e1d7",
  backgroundColor: "#28282b",
  fontFamily: "'Cormorant Garamond'",
};

const container = {
  backgroundColor: "#28282b",
  margin: "0 auto",
  padding: "20px 20px 48px",
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
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
};
