import { createBrowserClient } from "@supabase/ssr";

const supabase_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56c3p6cHhwZHVpeGp1Z3RmZGxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwNDg0MTcsImV4cCI6MjAzMjYyNDQxN30.BYYb6B42TKUjeOhw1O14_DeUfj6jDA7h0Ubla6OqjQM";
const supabase_url = "https://nzszzpxpduixjugtfdla.supabase.co";

export function createClient() {
  return createBrowserClient(supabase_url, supabase_key);
}
