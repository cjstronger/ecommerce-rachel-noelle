import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export async function getUser() {
  try {
    const supabaseClient = await getSupabaseAuth();
    const { data, error } = await supabaseClient.getUser();

    if (error) {
      console.error("Error fetching user:", error);
      return null;
    }

    const { user } = data;
    console.log(user);
    return user;
  } catch (error) {
    console.error("Unexpected error:", error);
    return null;
  }
}

export async function getSupabaseAuth() {
  const cookieStore = cookies();
  const supabaseClient = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
    {
      cookies: {
        get(name) {
          const value = cookieStore.get(name)?.value;
          console.log(`Cookie get: ${name} = ${value}`);
          return value;
        },
        set(name, value, options) {
          try {
            cookieStore.set({ name, value, ...options });
            console.log(`Cookie set: ${name} = ${value}`);
          } catch (error) {
            console.error(`Error setting cookie: ${name}`, error);
          }
        },
        remove(name, options) {
          try {
            cookieStore.delete({ name, ...options });
            console.log(`Cookie removed: ${name}`);
          } catch (error) {
            console.error(`Error removing cookie: ${name}`, error);
          }
        },
      },
    }
  );
  return supabaseClient.auth;
}
