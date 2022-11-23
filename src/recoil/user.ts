import { atom } from "recoil";
import { recoilKeys } from ".";

export const userState = atom<string | null>({
  key: recoilKeys.USER_STATE,
  default: null,
});
