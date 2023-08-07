import { atom } from "recoil";

export const requisitionDetails = atom({
  key: "requisitionDetails",
  default: {
    noOfOpenings: 0,
    requisitionTitle: "",
    urgency: "",
    gender: "",
  },
});
