import { Launch } from "@/modules/api/launch-response-type";
import { motion } from "framer-motion";
import { useState } from "react";
import Countdown from "react-countdown";
import StatusBadge from "./status-badge";
import { useNavigate } from "react-router";
import { getStatus } from "@/utils/get-status";

export const PreviewCardUpcomingLaunch = ({ data }: { data: Launch }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      className="p-2 bg-fil w-full relative bg-cover bg-center flex max-h-[150px] h-fit gap-2 hover:cursor-pointer font-roboto-mono"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate("/launch/" + data.id)}
      key={data.id}
      initial={{
        opacity: 0.8,
        scale: 0.95,
        y: 10,
        borderTop: "1px solid rgba(255, 255, 255, 0.5)",
      }}
      whileInView={{
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      whileHover={{
        borderTop: "1px solid rgba(255, 255, 255, 0.8)",
        opacity: 1,
      }}
    >
      <div className="min-w-[250px] min-h-[120px] overflow-hidden grid place-items-center relative">
        <motion.img
          src={data.image?.thumbnail_url}
          alt=""
          className="object-cover object-center min-w-[200px] absolute"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            ease: "linear",
            duration: 0.1,
          }}
        />
      </div>
      {/* <div className="absolute inset-0 bg-black/25" /> */}
      <div className="z-10 relative flex w-full justify-between">
        <div className="flex flex-col h-full justify-between text-sm">
          <div>
            <span className="text-white font-medium uppercase">
              {data.name}
            </span>
            <p className="text-white">{data.mission?.name}</p>
          </div>
          <p className="text-white">
            STATUS:{" "}
            <StatusBadge variant={getStatus(data)} className="px-1">
              {data.status.name}
            </StatusBadge>
          </p>
        </div>
        <Countdown date={data.net} className="text-white text-sm" />
      </div>
    </motion.div>
  );
};
