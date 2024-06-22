import ApplyForm from "../_components/ApplyForm";

export const metadata = { title: "Apply" };

export default function Page() {
  return (
    <div className="m-[2rem]">
      <div className="z-10 mt-[5rem] flex flex-col max-w-[1200px] mx-auto">
        <ApplyForm />
      </div>
    </div>
  );
}
