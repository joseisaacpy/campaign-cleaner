const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen inset-0">
      <div className="border-t-green-600 border-b-green-600 border-t-4 border-b-4 rounded-full  w-30 h-30 animate-spin"></div>
      <h1 className="text-center text-2xl font-bold">Carregando...</h1>
    </div>
  );
};

export default Loader;
