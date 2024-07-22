import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabaseAdminKey = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  headers: {
    Authorization: `Bearer ${process.env.GOOGLE_SECRET}`,
  },
});

const supabaseAdmin = createClient(supabaseUrl, supabaseAdminKey);

export { supabase, supabaseUrl, supabaseAdmin };
