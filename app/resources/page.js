"use server";

import Link from "next/link";
import { getFiles } from "../_lib/data-services";
import { supabaseUrl } from "../_lib/supabase";

export default async function page() {
  const { data } = await getFiles();

  return (
    <div className="mt-11">
      <h1 className="text-center text-3xl">Resources</h1>
      <div className="grid grid-cols-4 justify-center place-items-center">
        {data.map((file) => (
          <div className="bg-accent text-neutral-300 w-[200px] h-[300px]">
            <Link
              href={`${supabaseUrl}/storage/v1/object/public/PDFs/${file.name}`}
            />
            <h2>{`${file.name.replaceAll("-", " ").replace(".pdf", "")}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
