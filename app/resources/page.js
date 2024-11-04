"use server";

import { getFiles } from "../_lib/data-services";
import { supabaseUrl } from "../_lib/supabase";
import ResourceModal from "../_components/ResourceModal";

export default async function page() {
  const { data } = await getFiles();

  return (
    <div className="mt-11 mx-2">
      <h1 className="text-center text-3xl">Resources</h1>
      <div className="grid grid-cols-2 justify-center place-items-center md:grid-cols-4">
        <ResourceModal data={data} supabaseUrl={supabaseUrl} />
      </div>
    </div>
  );
}
