import { api } from "@/lib/api";
import { Launch, LaunchesResponse } from "@/modules/api/launch-response-type";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Countdown from "react-countdown";
// import data from "@/demo/data-demo.json";
import { PreviewCardUpcomingLaunch } from "@/components/ui/card";

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["upcomingLaunches"],
    queryFn: async () => {
      const res = await api.get<LaunchesResponse>(
        "/launches/upcoming/?limit=10&offset=1"
      );
      return res.data;
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    console.log(data);
  }, [data, isLoading, error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error while fetching</div>;
  }

  return (
    <div className="w-full min-h-screen bg-center flex bg-black flex-col gap-4 items-center">
      <div
        className="relative w-full min-h-screen bg-center bg-cover grid place-items-end"
        style={{
          backgroundImage: `url(${data?.results[1].image?.image_url})`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

        <div className="relative w-full px-8 text-white flex flex-col pb-25">
          <Countdown
            date={data?.results[1].net}
            className="text-white font-roboto-mono"
          />
          <span className="font-bold text-5xl uppercase">
            {data?.results[1].name}
          </span>
          <span className="text-2xl font-roboto-mono">
            {data?.results[1].mission?.name}
          </span>
        </div>
      </div>

      <h1 className="text-4xl text-white w-full font-thin pt-25 pb-4 px-8">
        Upcoming Space Launches
      </h1>
      <div className="w-full flex flex-col px-8 pb-20">
        {data?.results.map((i) => (
          <PreviewCardUpcomingLaunch data={i as Launch} />
        ))}
      </div>
    </div>
  );
};

export default Home;
