import GridCol from "./GridCol";
import GridHolder from "./GridHolder";
import ApplyLink from "./ApplyLink";

export default function CoachingDetails() {
  return (
    <>
      <GridHolder>
        <GridCol colSpan="1" bg="accent" shadow="xl" z="10">
          <h1 className="text-8xl mx-10">Phase 1</h1>
          <p className="text-5xl mx-10">Clarity</p>
        </GridCol>
        <GridCol colSpan="1" bg="fadedBlack" textColor="primary">
          <p className="text-2xl">
            I will help you understand your purpose and bring awareness to the
            unseen power within you. Together we gain clarity around your
            desires, goals, and dreams
          </p>
        </GridCol>
      </GridHolder>
      <GridHolder>
        <GridCol colSpan="1" bg="fadedBlack" textColor="primary">
          <h1 className="text-8xl mx-10">Phase 2</h1>
          <p className="text-5xl mx-10">Reprogram</p>
        </GridCol>
        <GridCol
          colSpan="1"
          bg="accent"
          textColor="fadedBlack"
          shadow="xl"
          z="10"
        >
          <p className="text-2xl">
            Your subconscious won&apos;t let you get to your goals because it is
            scared. Let&apos;s uncover blocks and rewire your brain by
            integrating childhood fears and new beliefs that can set you free.
          </p>
          <div className="flex place-content-end ">
            <ApplyLink
              buttonText="Apply Now"
              hoverColor="primaryFaded"
              color="accent"
            />
          </div>
        </GridCol>
      </GridHolder>
      <GridHolder>
        <GridCol colSpan="1" bg="accent" shadow="xl" z="10">
          <h1 className="text-8xl mx-10">Phase 3</h1>
          <p className="text-5xl mx-10">Realignment</p>
        </GridCol>
        <GridCol
          colSpan="1"
          bg="fadedBlack"
          textColor="primary"
          shadow="xl"
          z="10"
        >
          <p className="text-2xl">
            Together we will find discover why you resist your dreams and then
            renavigate your internal compass. Up Leveling can be scary because a
            part of you has to die. I am here to walk you through this with
            ease.
          </p>
        </GridCol>
      </GridHolder>
      <GridHolder>
        <GridCol
          colSpan="1"
          bg="fadedBlack"
          shadow="xl"
          z="10"
          textColor="primary"
        >
          <h1 className="text-8xl mx-10">Phase 4</h1>
          <p className="text-5xl mx-10">Conviction</p>
        </GridCol>
        <GridCol
          colSpan="1"
          bg="accent"
          textColor="fadedBlack"
          shadow="xl"
          z="10"
        >
          <p className="text-2xl">
            Manifesting is all about confidence. Once you believe you have it.
            Its yours! I will help you believe in yourself again and develop
            unwavering self confidence so that you can create your own reality
            with ease.
          </p>
        </GridCol>
      </GridHolder>
      <GridHolder>
        <GridCol colSpan="1" bg="accent" shadow="xl" z="10">
          <h1 className="text-8xl mx-10">Phase 5</h1>
          <p className="text-5xl mx-10">Aligned Action</p>
        </GridCol>
        <GridCol
          colSpan="1"
          bg="fadedBlack"
          textColor="primary"
          shadow="xl"
          z="10"
        >
          <p className="text-2xl">
            Last Phase is where we integrate all that we have learned about you
            and all that we have reprogrammed. I help you to create a tangible
            plan that will get you to your desired outcome. You are here to make
            a difference. I will show you what you can you offer the world!
          </p>
        </GridCol>
      </GridHolder>
    </>
  );
}
