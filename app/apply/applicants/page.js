import Applicant from "@/app/_components/Applicant";
import { getApplicants } from "@/app/_lib/data-services";

export const revalidate = 0;

export default async function Page() {
  const { data: applicants } = await getApplicants();
  return (
    <div className="mt-[3rem] lg:mt-[4rem] mx-2">
      <h1 className="text-3xl lg:text-5xl lg:text-center">Applicants</h1>
      <div className="bg-accent h-[35rem] w-full shadow-md rounded-lg max-w-[1200px] mx-auto mt-2">
        <div className="pt-5 px-8 grid grid-cols-3 gap-2 relative text-lg text-bg">
          <p className="border-x-[1px] px-2 border-bg">Name</p>
          <p className="border-r-[1px] border-bg">Email</p>
          <p className="border-r-[1px] border-bg">Approved</p>
        </div>
        {applicants.map((applicant, i) => (
          <Applicant
            key={i}
            fullName={applicant.appFullName}
            email={applicant.appEmail}
            approved={applicant.approved}
            id={applicant?.appId}
          />
        ))}
      </div>
    </div>
  );
}
