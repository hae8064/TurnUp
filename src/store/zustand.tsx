import { create } from 'zustand';

interface PwdStoreInt {
  pwdModalVisibleZustand: boolean;
  pwdToggleZus: () => void;
  countState: number;
  countStateChange: () => void;
  signUpModalZus: boolean;
  signUpModalChange: () => void;
  signUpSuccess: boolean;
  signUpSuccessChange: () => void;
  currentUrl: boolean;
  currentUrlChange: () => void;
  userOut: boolean;
  setUserOut: () => void;
  editProfile: boolean;
  setEditProfile: () => void;
}

export const usePwdStore = create<PwdStoreInt>((set) => ({
  pwdModalVisibleZustand: false,
  signUpModalZus: false,
  signUpModalChange: () =>
    set((state) => ({ signUpModalZus: !state.signUpModalZus })),
  pwdToggleZus: () =>
    set((state) => ({ pwdModalVisibleZustand: !state.pwdModalVisibleZustand })),
  countState: 0,
  countStateChange: () =>
    set((state) => ({ countState: (state.countState += 1) })),
  signUpSuccess: false,
  signUpSuccessChange: () =>
    set((state) => ({ signUpSuccess: !state.signUpSuccess })),
  currentUrl: true,
  currentUrlChange: () => set((state) => ({ currentUrl: !state.currentUrl })),
  userOut: false,
  setUserOut: () => set((state) => ({ userOut: !state.userOut })),
  editProfile: false,
  setEditProfile: () => set((state) => ({ editProfile: !state.editProfile })),
}));
