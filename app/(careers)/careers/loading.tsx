import { MapPin } from "lucide-react";

export default function Loading() {
  return (
    <section className="container mx-auto py-12" id="positions">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Open Positions
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10 dark:text-gray-400">
        Check out our open positions and apply to join our team.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-1 gap-3 md:mx-auto">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="max-w-sm bg-white/40 dark:bg-gray-800/40 border border-gray-200 rounded-lg shadow dark:border-gray-700 p-2 animate-pulse"
          >
            <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="p-1">
              <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 mb-1"></div>
              <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 mb-2"></div>
            </div>
            <div className="p-1 flex gap-1 items-center">
              <MapPin className="w-5 h-5 mr-2 text-gray-200 dark:text-gray-700" />
              <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-manrope text-4xl font-bold my-14">
        Archived Positions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-1 gap-3 md:mx-auto">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="max-w-sm bg-white/40 dark:bg-gray-800/40 border border-gray-200 rounded-lg shadow dark:border-gray-700 p-2 animate-pulse"
          >
            <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="p-1">
              <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 mb-1"></div>
              <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 mb-2"></div>
            </div>
            <div className="p-1 flex gap-1 items-center">
              <MapPin className="w-5 h-5 mr-2 text-gray-200 dark:text-gray-700" />
              <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
