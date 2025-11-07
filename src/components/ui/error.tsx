const ErrorResponse = ({ error }: { error: Error }) => {
  return (
    <div className="w-full min-h-screen grid place-items-center bg-black">
      <span className="text-white">{error.message}</span>
    </div>
  );
};

export default ErrorResponse;
