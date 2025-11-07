import { useLoaderData } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import Countdown from "react-countdown";
import StatusBadge from "@/components/ui/status-badge";
import { getStatus } from "@/utils/get-status";
import { Agency, Launch } from "@/modules/api/launch-response-type";
import Loading from "@/components/ui/loading";
import ErrorResponse from "@/components/ui/error";
import demo from "@/demo/data-demo.json";
const LaunchDetails = () => {
  const launchId = useLoaderData();

  const { data, isLoading, error } = useQuery({
    queryKey: [launchId],
    queryFn: async () => {
      // const res = await api.get("/launches/" + launchId);
      // return res.data;
      const res = demo.results.find((i) => i.id === launchId);
      return res;
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorResponse error={error} />;
  }

  return (
    <div className="w-full bg-black text-white pb-20">
      <div
        className="w-full min-h-screen grid place-items-center bg-center bg-cover relative"
        style={{
          backgroundImage: `url(${data?.image.image_url})`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
        <div className="relative">
          <Countdown
            date={data?.net}
            className="text-3xl font-roboto-mono"
            zeroPadTime={2}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="flex gap-3">
                <div className="flex flex-col justify-center items-center">
                  <span className="text-sm">DAYS</span>
                  <span className="text-xl font-roboto-mono">
                    {String(days).padStart(2, "0")}
                  </span>
                </div>
                <div className="grid place-items-end">:</div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-sm">HOURS</span>
                  <span className="text-xl font-roboto-mono">
                    {String(hours).padStart(2, "0")}
                  </span>
                </div>
                <div className="grid place-items-end">:</div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-sm">MINUTES</span>
                  <span className="text-xl font-roboto-mono">
                    {String(minutes).padStart(2, "0")}
                  </span>
                </div>
                <div className="grid place-items-end">:</div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-sm">SECONDS</span>
                  <span className="text-xl font-roboto-mono">
                    {String(seconds).padStart(2, "0")}
                  </span>
                </div>
              </div>
            )}
          />
        </div>
      </div>
      <div className="w-full py-20 px-8 flex">
        <div className="flex flex-col gap-3">
          <h1 className="font-thin md:text-6xl text-4xl">{data?.name}</h1>
          <StatusBadge
            className="px-1 w-fit font-roboto-mono text-sm"
            variant={getStatus(data as Launch)}
          >
            {data?.status.name}
          </StatusBadge>
          <p className="font-roboto-mono">MISSION NAME: {data?.mission.name}</p>
          <p className="font-roboto-mono">TYPE: {data?.mission.type}</p>
          <p className="text-sm font-roboto-mono">
            DESCRIPTION: {data?.mission.description}
          </p>
        </div>
      </div>
      <div className="w-full px-8 flex gap-4 flex-col sm:flex-row">
        <img src={data?.pad.map_image} alt="" className="max-w-[300px]" />
        <div className="font-roboto-mono flex flex-col gap-3">
          <p>PAD NAME: {data?.pad.name}</p>
          <p>LOCATION: {data?.pad.country.name}</p>
          <p>DESC: {data?.pad.description || "-"}</p>
          <div>
            <p className="flex gap-2 justify-center items-center w-fit">
              AGENCIES:{" "}
              {data?.pad.agencies.length !== 0
                ? data?.pad.agencies.map((agency: Agency) => (
                    <span className="flex justify-center items-center gap-2">
                      {agency.name}{" "}
                      <img
                        src={agency?.logo?.image_url}
                        alt=""
                        className="max-w-10"
                      />
                    </span>
                  ))
                : "-"}
            </p>
          </div>
          <p>
            STATUS:{" "}
            <StatusBadge
              variant={data?.pad.active ? "green" : "red"}
              className="px-1"
            >
              {data?.pad.active ? "Active" : "Not active"}
            </StatusBadge>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaunchDetails;
