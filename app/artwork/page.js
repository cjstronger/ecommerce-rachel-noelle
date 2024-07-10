"use server";

import ArtTab from "../_components/ArtTab";

export async function generateMetadata() {
  return { title: "Artwork" };
}

export default async function Page() {
  return (
    <div className="lg:mt-[7rem] mt-[6rem] flex flex-col items-center mb-5 mx-5">
      <h1 className="text-3xl">Rachel Noelle Artwork</h1>
      <ArtTab />
    </div>
  );
}
