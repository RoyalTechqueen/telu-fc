// lib/action.ts
import { supabase } from "@/utils/supabaseClient";

export const signUpWithEmail = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
      },
    });

    if (error) throw error;

    // Return a success message indicating that the user should check their email
    return {
      data,

      error: null,
    };
  } catch (error: any) {
    return { data: null, message: null, error: error.message };
  }
};
