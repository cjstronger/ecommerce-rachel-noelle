import GridCol from "./GridCol";
import GridHolder from "./GridHolder";
import ApplyLink from "./ApplyLink";

export default function CoachingDetails() {
  return (
    <>
      <GridHolder>
        <GridCol colSpan="1" bg="accent" shadow="xl" z="10">
          <h1 className="text-8xl mx-10">Section 1</h1>
          <p className="text-2xl mx-10">Subtitle for section 1</p>
        </GridCol>
        <GridCol colSpan="1" bg="fadedBlack" textColor="primary">
          <h2 className="text-5xl">Title to details of section 1</h2>
          <p className="text-2xl">Details of section 1</p>
        </GridCol>
      </GridHolder>
      <GridHolder>
        <GridCol colSpan="1" bg="fadedBlack" textColor="primary">
          <h1 className="text-8xl mx-10">Section 2</h1>
          <p className="text-2xl mx-10">Subtitle for section 2</p>
        </GridCol>
        <GridCol
          colSpan="1"
          bg="accent"
          textColor="fadedBlack"
          shadow="xl"
          z="10"
        >
          <h2 className="text-5xl">Title to details of section 2</h2>
          <p className="text-2xl">Details of section 2</p>
          <div className="flex flex-end">
            <ApplyLink buttonText="Apply Now" hoverColor="primary" />
          </div>
        </GridCol>
      </GridHolder>
      <GridHolder>
        <GridCol colSpan="1" bg="accent" shadow="xl" z="10">
          <h1 className="text-8xl mx-10">Section 3</h1>
          <p className="text-2xl mx-10">Subtitle for section 3</p>
        </GridCol>
        <GridCol
          colSpan="1"
          bg="fadedBlack"
          textColor="primary"
          shadow="xl"
          z="10"
        >
          <h2 className="text-5xl">Title to details of section 3</h2>
          <p className="text-2xl">Details of section 3</p>
        </GridCol>
      </GridHolder>
    </>
  );
}
