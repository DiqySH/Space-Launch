import { api } from "@/lib/api";
import { LaunchesResponse } from "@/modules/api/launch-response";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Countdown from "react-countdown";

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["upcomingLaunches"],
    queryFn: async () => {
      const res = await api.get<LaunchesResponse>(
        "/launches/upcoming/?limit=2"
      );
      return res.data;
    },
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
    <div className="w-full min-h-screen bg-center flex gap-2">
      {data?.results.map((i) => (
        <div className="border h-fit flex flex-col p-2 max-w-[300px]">
          <img src={i.image?.image_url} alt="" className="w-full" />
          <span>{i.name}</span>
          <Countdown date={i.net} />
          <span>Status: {i.status.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Home;
