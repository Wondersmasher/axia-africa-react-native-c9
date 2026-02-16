import {
  clearEntireStorage,
  getData,
  removeData,
  type StorageType,
  storeData,
} from "@/lib";
import { User } from "@/types";
import { create } from "zustand";

type UseSessionStoreType = {
  isLoading: boolean;
  key: string;
  storage: StorageType;
  user: User | undefined;
  actions: {
    logIn: (user: User) => Promise<void>;
    logOut: () => void;
    retrieveUserDetailsFromStorage: () => Promise<void>;
  };
};

const initialState = {
  user: undefined,
  isLoading: false,
  key: "axia-africa-user-detail-c9",
  storage: "keychain" as StorageType,
};

export const useSession = create<UseSessionStoreType>()((set, get) => ({
  ...initialState,
  actions: {
    logIn: async (user: User) => {
      set({ isLoading: true });
      setTimeout(async () => {
        set({
          user,
          isLoading: initialState.isLoading, //  Basically you are setting isLoading back to false
        });

        await storeData({
          data: {
            key: "axia-africa-user-detail-c9",
            value: user,
          },
          type: get().storage,
        });
      }, 4000);
    },
    retrieveUserDetailsFromStorage: async () => {
      const retrievedValue = await getData(get().key, get().storage);

      if (!retrievedValue) return;

      // await get().actions.logIn(retrievedValue as User); // valid approach

      set({ user: retrievedValue }); // this is the approach we will use
    },
    logOut: () => {
      clearEntireStorage();
      removeData(get().key, get().storage);
      set({ user: initialState.user });
    },
  },
}));
