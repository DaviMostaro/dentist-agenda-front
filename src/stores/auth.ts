import { setCookie, deleteCookie } from "cookies-next";
import { create } from "zustand";
import { User } from "@/types/user";

type Auth = {
    user: User | null;
    token: string;
    setUser: (newUser: User) => void;
    setToken: (newToken: string) => void;
    logout: () => void;
}

export const useAuth = create<Auth>((set) => ({
    user: null,

    token: "",

    setUser: (newUser: User) => set(state => ({ ...state, user: newUser })),

    setToken: (newToken: string) => set(state => {
        if(newToken) {
            setCookie('token', newToken)
        } else {
            deleteCookie('token')
        }

        return { ...state, token: newToken }
    }),

    logout: () => {
        set({ token: "" })
        deleteCookie('token')
    }
})) 