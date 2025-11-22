"use server";

import { supabase } from '../supabase/client';

export async function signInUser(data: { email: string; password: string }) {
  try {
    const result = await supabase.auth.signInWithPassword(data);
    
    if (result.error) {
      console.error("Authentication error:", result.error);
      return {
        data: { user: null, session: null },
        error: {
          message: result.error.message || "Authentication failed",
        },
      };
    }
    
    return result;
  } catch (err) {
    console.error("Unexpected authentication error:", err);
    return {
      data: { user: null, session: null },
      error: {
        message: "An unexpected error occurred during authentication",
      },
    };
  }
}