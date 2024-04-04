export default function Home() {
  return (
    <main className="bg-gray-100 h-screen sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 flex items-center justify-center p-5">
      <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-md flex flex-col md:flex-row gap-2">
        <input
          className="w-full peer invalid:bg-red-100 invalid:focus:ring-red-500 rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
          type="text"
          required
          placeholder="Search here..."
        />
        <button className="bg-gradient-to-tr from-cyan-400 to-purple-400 peer-invalid:bg-red-100 text-white py-2 rounded-full active:scale-90 transition-transform font-medium outline-none md:px-10">
          Search
        </button>
      </div>
    </main>
  );
}
