import { api } from "@/lib/api";
import { Launch, LaunchesResponse } from "@/modules/api/launch-response-type";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import data from "@/demo/data-demo.json";
import { motion } from "framer-motion";
import { PreviewCardUpcomingLaunch } from "@/components/ui/card";

const Home = () => {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["upcomingLaunches"],
  //   queryFn: async () => {
  //     const res = await api.get<LaunchesResponse>(
  //       "/launches/upcoming/?limit=10&offset=1"
  //     );
  //     return res.data;
  //   },
  //   refetchOnWindowFocus: false,
  // });

  // useEffect(() => {
  //   console.log(data);
  // }, [data, isLoading, error]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error while fetching</div>;
  // }

  return (
    <div className="w-full min-h-screen bg-center flex bg-black flex-col gap-4 p-4 items-center">
      <h1 className="text-5xl text-white w-full text-center font-thin pt-10 pb-10">
        Upcoming Space Launches
      </h1>
      <div className="w-full flex flex-col max-w-300 pb-20">
        {data?.results.map((i) => (
          <PreviewCardUpcomingLaunch data={i as Launch} />
        ))}
      </div>
    </div>
  );
};

export default Home;
