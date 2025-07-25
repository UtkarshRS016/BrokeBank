import { create } from "zustand";

export const useUserStore = create((set) => ({
 user: null,
 token: null, //jwt token
 isAuthenticated: false,
 login: (({ user, token }) => {
  localStorage.setItem("auth-token", token),
   set({ user, token, isAuthenticated: true })
 }),
 logout: () => {
  localStorage.removeItem("auth-token")
  set({ user: null, token: null, isAuthenticated: false })
 },
}
)
)