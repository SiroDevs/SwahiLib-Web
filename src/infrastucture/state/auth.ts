import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";
import { User } from "@supabase/supabase-js";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  userId: string | null;
}

interface AuthActions {
  setLoginState: (user: User) => void;
  resetPassword: () => void;
  logoutUser: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      isLoading: true,
      user: null,
      userId: null,

      setLoginState: async (user: User) => {
        set({
          isAuthenticated: true,
          user: user,
          userId: user.id,
          isLoading: false
        });
      },

      resetPassword: () => {
        set({
          isAuthenticated: false,
          user: null,
          userId: null,
          isLoading: false
        });
      },

      logoutUser: async () => {
        set({
          isAuthenticated: false,
          user: null,
          userId: null,
          isLoading: false
        });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },
    }),
    {
      name: "swahilib:auth",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isLoading = false;
        }
      },
    }
  )
);