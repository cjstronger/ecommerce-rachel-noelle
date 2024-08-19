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
} from "@react-email/components";
import React from "react";

export const NoelleGuide = ({ firstName }) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Preview>Rachel's Free Ebook</Preview>
        <Body className="bg-neutral-900 text-neutral-100 overflow-x-hidden">
          <Container>
            <Section className="absolute bg-neutral-900 h-[12rem] w-[15rem] md:size-full mt-[5rem] p-5">
              <Heading className="text-4xl">Hello, {firstName}</Heading>
              <Text className="text-2xl text-center">
                Is is time to get serious about your health?
              </Text>
              <Text className="text-2xl text-center">
                This is where the journey begins in improving your life.
              </Text>
            </Section>
          </Container>
          <Img
            src="https://nzszzpxpduixjugtfdla.supabase.co/storage/v1/object/public/email_images/IMG_2759%20(1).jpg"
            alt="beach"
            width="auto"
            height="800"
            className="mx-auto"
          />
        </Body>
      </Tailwind>
    </Html>
  );
};
export default NoelleGuide;
