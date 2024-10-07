import { Work_Sans } from "next/font/google";
import { MapPin } from "lucide-react";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function Loading() {
  return (
    <div>
      <div
        className={`prose-sm dark:prose-invert md:prose prose-img:max-h-96 flex flex-col items-center justify-center prose-img:mx-auto lg:prose-xl container py-16 ${worksans.className}`}
      >
        <div className="pt-10 w-full h-10 bg-gray-200 dark:bg-gray-700 animate-pulse mb-4"></div>
        <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 animate-pulse mb-2"></div>
        <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 animate-pulse mb-2"></div>
        <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 animate-pulse mb-2"></div>
        <div className="flex gap-2 flex-wrap place-self-start items-start pb-4 mt-4">
          <div className="w-20 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="w-20 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>
        <div className="flex justify-between items-center w-full mt-4">
          <div className="role w-32 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="flex gap-4">
            <div className="estimate w-20 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            •
            <div className="year w-20 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          </div>
        </div>
        <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 animate-pulse mt-6"></div>
        <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 animate-pulse mt-4"></div>
        <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 animate-pulse mt-2"></div>
        <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 animate-pulse mt-2"></div>
        <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 animate-pulse mt-2"></div>
      </div>
      <h2 className="font-manrope text-4xl font-bold text-center mb-14">
        Related Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-1 gap-3 md:mx-auto">
        {Array.from({ length: 3 }).map((_, i) => (
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
    </div>
  );
}
