const Loading = () => {
  return (
    <div
      className="lg:min-h-[60vh] h-[40vh] bg-gray-100 rounded-xl  dark:bg-gray-950  grid place-items-center"
      role="status"
    >
      <div className="loader w-24 h-24 before:border-blue-500  after:border-gray-800"></div>
    </div>
  );
};

export default Loading;
