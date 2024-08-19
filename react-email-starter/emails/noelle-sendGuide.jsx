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
        <Head />
        <Preview>Rachel's Free Ebook</Preview>
        <Body className="text-[#e7e1d7] bg-[#28282b]">
          <Container>
            <Section className="p-5">
              <Heading className="text-2xl">Hello, {firstName}</Heading>
              <Text className="text-lg">
                Here is the free ebook that explains the daily steps I take to
                prioritize myself and build a better life.
              </Text>
              <Text className="text-lg">Much love, Rachel</Text>
              <Text className="text-lg">Namaste</Text>
            </Section>
          </Container>
          <Link href="https://nzszzpxpduixjugtfdla.supabase.co/storage/v1/object/public/PDFs/Uplevel%20Using%20My%20Food%20Guide.pdf">
            <Img
              src="https://nzszzpxpduixjugtfdla.supabase.co/storage/v1/object/public/email_images/foodguidecover.jpg"
              alt="foodguidecover"
              width="100%"
              height="auto"
              className="mx-auto bg-[#28282b] w-full max-w-md"
            />
          </Link>
          {/* <Link
            className="p-3 active:p-4 border-[1px] border-neutral-100 text-neutral-100 mx-auto"
            href="https://nzszzpxpduixjugtfdla.supabase.co/storage/v1/object/public/PDFs/Uplevel%20Using%20My%20Food%20Guide.pdf"
          >
            Download Guide
          </Link> */}
        </Body>
      </Tailwind>
    </Html>
  );
};
export default NoelleGuide;
