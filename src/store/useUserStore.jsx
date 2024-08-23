import { create } from "zustand";

const useUserStore = create((set) => ({
  userid: null,
  nickname: null,
  setUserInfo: (userInfo) =>
    set({ userid: userInfo.userid, nickname: userInfo.nickname }),
  clearUserInfo: () => set({ userid: null, nickname: null }), // 로그아웃 시 호출
}));

export default useUserStore;
