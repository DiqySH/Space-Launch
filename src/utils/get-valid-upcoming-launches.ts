import { Launch } from "@/modules/api/launch-response-type";

export const getValidUpcomingLaunch = (launches?: Launch[]) => {
  if (!launches) return { validUpcoming: [], nextLaunch: undefined };

  const validUpcoming = launches
    .filter(
      (launch) =>
        new Date(launch.net) > new Date() &&
        !["Launch Successful", "Launch Failure", "Partial Failure"].includes(
          launch.status?.name
        )
    )
    .sort((a, b) => new Date(a.net).getTime() - new Date(b.net).getTime());

  const nextLaunch = validUpcoming[0];

  return { validUpcoming, nextLaunch };
};
