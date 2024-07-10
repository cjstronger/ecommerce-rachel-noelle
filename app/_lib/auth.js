import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function getUser() {
  try {
    const supabaseClient = getSupabaseAuth();
    const { data, error } = await supabaseClient.auth.getUser();

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

export const getSupabaseAuth = () => {
  const cookieStore = cookies();
  return createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            console.error(`Error setting cookie: ${name}`, error);
          }
        },
        remove(name, options) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            console.error(`Error removing cookie: ${name}`, error);
          }
        },
      },
    }
  );
};
