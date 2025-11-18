"use server";

import { supabase } from '../supabase/client';

export async function signInUser(data: { email: string; password: string }) {
  try {
    const result = await supabase.auth.signInWithPassword(data);
    return result;
  } catch (err) {
    console.error("Authentication error:", err);
    return {
      data: { user: null, session: null },
      error: {
        message: err instanceof Error ? err.message : "Unknown error occurred",
      },
    };
  }
}