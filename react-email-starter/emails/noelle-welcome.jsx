import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Heading,
} from "@react-email/components";
import React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NoelleWelcome = () => (
  <Html>
    <Head />
    <Preview>You're now subscribed to the Noelle Letter!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img src={`/static/RN.png`} fill="true" alt="RN" />
          <Hr style={hr} />
          <Heading style={h1} as="h1">
            Welcome, Beautiful Soul!
          </Heading>
          <Text style={paragraph}>
            I want to personally thank you for your confidence in joining this
            list. &#40;That is exactly why you are receiving this email. You
            either downloaded a product or joined my newsletter directly&#41;.
          </Text>
          <Text style={paragraph}>
            Newsletters can get crazy and clog up your inbox. I'm not a fan of
            that, so here's a bit of what to expect in this email.
          </Text>
          <Text style={paragraph}>
            I usually send 1 newsletter per week, but on a rare occasion, I will
            email you 2-3x in a week. Sometimes with a promotion, sometimes
            because I have news for you.
          </Text>
          <Text style={paragraph}>
            The newsletter is called The <strong>Noelle Letter</strong>.
          </Text>
          <Button style={button} href="https://dashboard.stripe.com/login">
            View the latest newsletter
          </Button>
          <Hr style={hr} />
          <Text style={paragraph}>
            It is where I let everything out and give you a fresh (hopefully
            mind-blowing) perspective on how to balance your energy and create
            the life you dream of.
          </Text>
          <Text style={paragraph}>
            These emails are 100% dedicated to helping you achieve clarity in
            your life. If it does not bring value to you, I will not email it to
            you.
          </Text>
          <Text style={paragraph}>No hard feelings if you do :&#41;</Text>
          <Text style={paragraph}>
            Now... In the meantime, I want to ask 3 things from you.
          </Text>
          <Heading style={h1} as="h2">
            1 - Can you hit the "reply" button to let me know that you received
            this email?
          </Heading>
          <Text style={paragraph}>
            <strong>Why?</strong> I clean out my email list often. I need to
            make sure you aren't a spam bot that automatically filled out the
            form on my site (Why do people create those bots in the first place?
            Beats me). All you gotta do is reply with "Got it." That's it.
          </Text>
          <Heading style={h1} as="h2">
            2 - Drag this email to your inbox if it ended up on the
            Spam/Promotions tab.
          </Heading>
          <Text style={paragraph}>
            <strong>Why?</strong> To help me out, and so you receive what you
            subscribed to.
          </Text>
          <Heading style={h1} as="h2">
            3 - You can read all previous Noelle Letters here. These build off
            of each other, so reading the latest letter will prepare you and set
            the foundation for the next.
          </Heading>
          <Text style={paragraph}>
            If you have any further questions, just let me know.
          </Text>
          <Text style={paragraph}>I'm glad to have you here. Much love.</Text>
          <Text style={paragraph}>— Rachel Noelle</Text>
          <Hr style={hr} />
          <Text style={footer}>Rachel Noelle Co. United States</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default NoelleWelcome;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    'rubik,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
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
