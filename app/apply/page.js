import ApplyForm from "../_components/ApplyForm";

export const metadata = { title: "Apply" };

export default function Page() {
  return (
    <div className="m-[2rem] mx-2">
      <div className="z-10 lg:mt-[4rem] mt-[3rem] flex flex-col max-w-[1200px] mx-auto">
        <ApplyForm />
      </div>
    </div>
  );
}
