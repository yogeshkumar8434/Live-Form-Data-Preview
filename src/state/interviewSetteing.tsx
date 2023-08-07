import { atom } from "recoil";

export const interviewSetting = atom({
  key: "interviewSetting",
  default: {
    interviewDuration: "",
    interviewLanguage: "",
    interviewMode: "",
  },
});
