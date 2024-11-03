"use server";

import Link from "next/link";
import { getFiles } from "../_lib/data-services";
import { supabaseUrl } from "../_lib/supabase";
import ResourceModal from "../_components/ResourceModal";

export default async function page() {
  const { data } = await getFiles();

  return (
    <div className="mt-11">
      <h1 className="text-center text-3xl">Resources</h1>
      <div className="grid grid-cols-4 justify-center place-items-center">
        {data.map((file, i) => (
          <div key={i} className="flex gap-5 flex-col items-center mt-5">
            <ResourceModal />
            <h2 className="text-xl">{`${file.name
              .replaceAll("-", " ")
              .replace(".pdf", "")}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
