import { atom } from "recoil";

export const jobDetails = atom({
  key: "jobDetails",
  default: {
    jobLocation: "",
    jobDetails: "",
    jobTitle: "",
  },
});
