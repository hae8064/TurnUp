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
}));
