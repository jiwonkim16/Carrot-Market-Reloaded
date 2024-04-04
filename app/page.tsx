export default function Home() {
  return (
    <main className="bg-gray-100 h-screen sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 flex items-center justify-center p-5">
      <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-md flex flex-col gap-3">
        {["Jiwon", "Me", "You", "Yourself"].map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-5 p-2.5 rounded-xl group"
          >
            <div className="size-10 bg-blue-400 rounded-full"></div>
            <span className="text-lg font-medium group-hover:text-red-400">
              {person}
            </span>
            <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full relative">
              <span className="z-10">{index}</span>
              <div className="size-6 bg-red-500 rounded-full absolute animate-ping"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
