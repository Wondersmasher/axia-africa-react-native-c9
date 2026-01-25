import { User } from "@/types";
import { create } from "zustand";

type UseSessionStoreType = {
  user: User | undefined;
  actions: {
    logIn: (user: User) => void;
    logOut: () => void;
  };
};

const initialState = {
  user: undefined,
};

export const useSession = create<UseSessionStoreType>()((set) => ({
  ...initialState,
  actions: {
    logIn: (user: User) => set({ user }),
    logOut: () => set({ user: initialState.user }),
  },
}));
