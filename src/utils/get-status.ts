import { Launch } from "@/modules/api/launch-response-type";

export const getStatus = (data: Launch) => {
  switch (data.status.name) {
    case "Launch Successful":
      return "green";
    default:
      return "yellow";
  }
};
