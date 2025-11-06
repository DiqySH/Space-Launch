import { useLoaderData } from "react-router";

const LaunchDetails = () => {
  const launchId = useLoaderData();
  return <div>{launchId}</div>;
};

export default LaunchDetails;
