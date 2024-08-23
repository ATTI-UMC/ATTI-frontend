import { create } from "zustand";

const useUserStore = create((set) => ({
  userid: null,
  setUserid: (id) => set({ userid: id }),
  clearUserid: () => set({ userid: null }), //로그아웃시
}));

export default useUserStore;
