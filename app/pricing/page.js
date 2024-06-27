import Image from "next/image";
import LocoParalax from "../_components/LocoParalax";
import LocoParalaxItem from "../_components/LocoParalaxItem";
import Benefit from "../_components/Benefit";
import Button from "../_components/Button";
import Stripe from "stripe";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_KEY ?? "", {
    apiVersion: "2020-08-27",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const data = res.data;
  console.log(data);
  return data;
}

export default async function Page() {
  const products = await getStripeProducts();
  return (
    <>
      <div className="aspect-[4/3] md:aspect-[2/1] xl:aspect-[3/1] relative flex justify-end p-5">
        <Image
          src="/images/treepainting.jpg"
          fill
          alt="treepainting"
          className="object-cover"
          quality={100}
        />
        <LocoParalax textPosition="right">
          <LocoParalaxItem text="xl" lg="5xl">
            Sample
          </LocoParalaxItem>
          <LocoParalaxItem text="xl" lg="5xl">
            More Sample
          </LocoParalaxItem>
        </LocoParalax>
      </div>
      <div className="mt-5">
        <h1 className="text-center text-xl lg:text-2xl">Benefits</h1>
        <p className="text-center text-xs lg:text-md">
          Benefits examples and things
        </p>
        <div className="flex justify-center">
          <Benefit src="footprint.png" alt="steps">
            Practical Steps
          </Benefit>
          <Benefit src="child.png" alt="child">
            Inner Child Work
          </Benefit>
          <Benefit src="female.png" alt="female">
            Feminine Energy
          </Benefit>
          <Benefit src="sun.png" alt="sun">
            Spiritually Based
          </Benefit>
        </div>
      </div>
      <h1 className="ml-5 flex items-center">
        <span className="bg-fadedBlack px-2 text-[.6px] mr-2">-</span>
        <span className="text-lg lg:text2xl">Pricing</span>
      </h1>
      <div className="m-4">
        <div className="grid lg:grid-cols-2 max-w-[1000px] mx-auto">
          <div className="col-span-1 h-[55vh] aspect-auto lg:aspect-square relative flex p-5 py-8">
            <Image
              fill
              quality={100}
              src="/images/coaching.jpg"
              alt="pricing"
              className="object-cover"
            />
            <LocoParalax textPosition="left">
              <LocoParalaxItem text="xl">Life Coaching</LocoParalaxItem>
            </LocoParalax>
          </div>
          <div className="col-span-1 text-xl mt-3 lg:mt-0 ml-0 lg:ml-5">
            <h1 className="uppercase text-4xl lg:6xl">life coaching</h1>
            <h1 className="text-3xl lg:3xl">Program</h1>
            <p className="text-sm lg:text-lg">
              Are you ready to embark on a transformative journey that nurtures
              your mind, body, and spirit? My spiritually based coaching program
              offers a holistic approach to personal growth, combining expert
              guidance with affordable pricing to make profound transformation
              accessible to everyone. Each session is meticulously designed to
              build upon the last, ensuring a seamless and impactful experience.
              With personalized attention and practical tools, you&apos;ll
              cultivate inner peace, clarity, and a deep connection to your
              higher self. Join our supportive community of like-minded
              individuals and invest in a well-structured program that empowers
              you to live your truth and unlock your full potential. Start your
              journey to a more fulfilled and enlightened life today!
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col text-center my-2">
          <p className="mb-2">Price: $2400</p>
          <Button>Lets Get Started</Button>
        </div>
      </div>
    </>
  );
}
