import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  headers: {
    "Cache-Control": "no-cache",
    Authorization: `Bearer ${process.env.GOOGLE_SECRET}`,
  },
});

export { supabase, supabaseUrl };
