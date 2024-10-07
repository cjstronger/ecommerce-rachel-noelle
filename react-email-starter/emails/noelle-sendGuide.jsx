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
  Link,
  Button,
} from "@react-email/components";
import React from "react";

export const NoelleGuide = ({ firstName }) => {
  return (
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
        <Preview>Rachel's Free Guide</Preview>
        <Body style={fontStyle} className="text-[#e7e1d7] bg-[#28282b]">
          <Container>
            <Section>
              <Img
                src="https://nzszzpxpduixjugtfdla.supabase.co/storage/v1/object/public/email_images/RN.png"
                height="auto"
                width="100%"
                className="lg:max-w-[75px] max-w-[60px]"
                alt="RN"
              />
              <Hr />
            </Section>
            <Section className="p-5">
              <Heading className="text-2xl">Hello, {firstName}</Heading>
              <Text className="text-lg">
                Here is my free Ebook, with a quick five minute guide to reset
                your feminine energy.
              </Text>
              <Text className="text-lg">Much love, Rachel</Text>
              <Text className="text-lg">Namaste</Text>
            </Section>
          </Container>
          <Link href="https://nzszzpxpduixjugtfdla.supabase.co/storage/v1/object/public/PDFs/Five-Minute-Reset-Guide.pdf">
            <Img
              src="https://nzszzpxpduixjugtfdla.supabase.co/storage/v1/object/public/email_images/rachel-guide-cover.jpg"
              alt="five-minute-reset"
              width="100%"
              height="auto"
              className="mx-auto bg-[#28282b] w-full max-w-md"
            />
          </Link>
        </Body>
      </Tailwind>
    </Html>
  );
};

const fontStyle = {
  fontFamily: "'Cormorant Garamond'",
  padding: "20px 10px 48px",
};
export default NoelleGuide;
