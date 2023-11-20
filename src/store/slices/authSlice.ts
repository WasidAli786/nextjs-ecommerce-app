import { StateCreator } from "zustand";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const { getStorageItem } = useLocalStorage();

export interface IAuthState {
  user: any;
  setUser: (data: any) => void;
}

export const authSlice: StateCreator<IAuthState> = (set) => ({
  user: getStorageItem("user"),
  setUser: (userData: any) => set({ user: userData }),
});
