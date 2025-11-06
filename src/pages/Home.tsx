import { api } from "@/lib/api";
import { LaunchesResponse } from "@/modules/api/launch-response-type";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Countdown from "react-countdown";
import data from "@/demo/data-demo.json";
import { motion } from "framer-motion";

const Home = () => {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["upcomingLaunches"],
  //   queryFn: async () => {
  //     const res = await api.get<LaunchesResponse>(
  //       "/launches/upcoming/?limit=10"
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
      <h1 className="text-6xl text-white w-full text-center font-thin pt-10 pb-10">
        Upcoming Space Launches
      </h1>
      <div className="w-full flex flex-col max-w-300">
        {data?.results.map((i) => (
          <motion.div
            className="p-2 bg-fil w-full relative bg-cover bg-center flex max-h-[150px] h-fit gap-2 hover:cursor-pointer"
            key={i.id}
            initial={{
              opacity: 0.5,
              scale: 0.95,
              y: 10,
              borderTop: "1px solid rgba(255, 255, 255, 0.5)",
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            whileHover={{
              borderTop: "1px solid rgba(255, 255, 255, 0.8)",
            }}
          >
            <div className="max-w-[250px] overflow-hidden">
              <img src={i.image?.image_url} alt="" className="object-cover" />
            </div>
            {/* <div className="absolute inset-0 bg-black/25" /> */}
            <div className="z-10 relative flex flex-col w-full">
              <span className="text-white font-medium">{i.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
