import { api } from "@/lib/api";
import { LaunchesResponse } from "@/modules/api/launch-response-type";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Countdown from "react-countdown";

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["upcomingLaunches"],
    queryFn: async () => {
      const res = await api.get<LaunchesResponse>(
        "/launches/upcoming/?limit=10"
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
    <div className="w-full min-h-screen bg-center flex bg-black flex-col">
      {data?.results.map((i) => (
        <div
          className="border min-h-screen p-2 bg-fil w-full relative bg-cover bg-center grid place-items-end"
          style={{
            backgroundImage: `url(${i.image?.image_url})`,
          }}
        >
          <div className="absolute inset-0 bg-black/25" />
          <div className="z-10 relative flex flex-col w-full">
            <span className="text-white text-4xl">{i.name}</span>
            <Countdown date={i.net} className="text-white" />
            <span className="text-white">Status: {i.status.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
