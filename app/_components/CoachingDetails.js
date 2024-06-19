import GridCol from "./GridCol";
import GridHolder from "./GridHolder";
import ApplyLink from "./ApplyLink";

export default function CoachingDetails() {
  return (
    <>
      <div className="grid grid-cols-3 lg:mx-10">
        <GridCol colSpan="1" bg="accent" shadow="xl" z="10">
          <h1 className="lg:text-8xl text-3xl">Phase 1</h1>
          <p className="lg:text-5xl text-center">Clarity</p>
        </GridCol>
        <GridCol colSpan="1" bg="fadedBlack" textColor="primary">
          <h1 className="lg:text-8xl text-3xl">Phase 2</h1>
          <p className="lg:text-5xl text-center">Reprogram</p>
        </GridCol>
        <GridCol colSpan="1" bg="accent" shadow="xl" z="10">
          <h1 className="lg:text-8xl text-3xl">Phase 3</h1>
          <p className="lg:text-5xl text-center">Realignment</p>
        </GridCol>
      </div>
      <div className="grid grid-cols-3 lg:mx-10">
        <GridCol colSpan="1" bg="fadedBlack" textColor="primary">
          <p className="text-md lg:text-2xl">
            I will help you understand your purpose and bring awareness to the
            unseen power within you. Together we gain clarity around your
            desires, goals, and dreams
          </p>
        </GridCol>
        <GridCol
          colSpan="1"
          bg="accent"
          textColor="fadedBlack"
          shadow="xl"
          z="10"
        >
          <p className="text-md lg:text-2xl">
            Your subconscious won&apos;t let you get to your goals because it is
            scared. Let&apos;s uncover blocks and rewire your brain by
            integrating childhood fears and new beliefs that can set you free.
          </p>
          <div className="flex place-content-end ">
            <ApplyLink
              buttonText="Apply"
              hoverColor="primaryFaded"
              color="accent"
            />
          </div>
        </GridCol>
        <GridCol
          colSpan="1"
          bg="fadedBlack"
          textColor="primary"
          shadow="xl"
          z="10"
        >
          <p className="text-md lg:text-2xl">
            Together we will discover why you resist your dreams and then
            renavigate your internal compass. Up Leveling can be scary because a
            part of you has to die. I am here to walk you through this with
            ease.
          </p>
        </GridCol>
      </div>
      <div className="grid grid-cols-2 lg:mx-10">
        <GridCol
          colSpan="1"
          bg="fadedBlack"
          shadow="xl"
          z="10"
          textColor="primary"
        >
          <h1 className="lg:text-8xl text-5xl">Phase 4</h1>
          <p className="lg:text-5xl text-center">Conviction</p>
        </GridCol>
        <GridCol colSpan="1" bg="accent" shadow="xl" z="10">
          <h1 className="lg:text-8xl text-5xl">Phase 5</h1>
          <p className="lg:text-5xl text-center">Aligned Action</p>
        </GridCol>
      </div>
      <div className="grid grid-cols-2 lg:mx-10">
        <GridCol
          colSpan="1"
          bg="accent"
          textColor="fadedBlack"
          shadow="xl"
          z="10"
        >
          <p className="text-md lg:text-2xl">
            Manifesting is all about confidence. Once you believe you have it.
            Its yours! I will help you believe in yourself again and develop
            unwavering self confidence so that you can create your own reality
            with ease.
          </p>
        </GridCol>
        <GridCol
          colSpan="1"
          bg="fadedBlack"
          textColor="primary"
          shadow="xl"
          z="10"
        >
          <p className="text-md lg:text-2xl">
            Last Phase is where we integrate all that we have learned about you
            and all that we have reprogrammed. I help you to create a tangible
            plan that will get you to your desired outcome. You are here to make
            a difference. I will show you what you can you offer the world!
          </p>
        </GridCol>
      </div>
    </>
  );
}
