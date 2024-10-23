import { Work_Sans } from "next/font/google";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function Loading() {
  return (
    <div
      className={`prose-sm dark:prose-invert md:prose prose-ul:list-disc  prose-img:max-h-96 flex flex-col  prose-img:mx-auto lg:prose-xl container py-16 ${worksans.className}`}
    >
      <Breadcrumb className="place-self-start items-start">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/careers">Positions</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="rounded-md pt-10 w-full h-10 bg-transparent"></div>
      <div className="rounded-md w-96 h-12 pb-10 bg-gray-200 dark:bg-gray-700 animate-pulse mt-4"></div>
      <div className="rounded-md w-46 h-12 bg-gray-200 dark:bg-gray-700 animate-pulse mt-2"></div>
      <div className="rounded-md flex gap-6 flex-wrap place-self-start items-start pb-4 mt-4">
        <div className="rounded-md w-20 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        <div className="rounded-md w-20 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      </div>
      <div className="rounded-md flex justify-between items-center w-full mt-4">
        <div className="rounded-md role w-32 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        <div className="rounded-md flex gap-4">
          <div className="rounded-md estimate w-20 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          •
          <div className="rounded-md year w-20 h-6 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>
      </div>
      <div className="rounded-md w-full h-96 bg-gray-200 dark:bg-gray-700 animate-pulse mt-6"></div>
      <div className="rounded-md w-full h-6 bg-gray-200 dark:bg-gray-700 animate-pulse mt-4"></div>
      <div className="rounded-md w-full h-6 bg-gray-200 dark:bg-gray-700 animate-pulse mt-2"></div>
      <div className="rounded-md w-full h-6 bg-gray-200 dark:bg-gray-700 animate-pulse mt-2"></div>
      <div className="rounded-md w-full h-6 bg-gray-200 dark:bg-gray-700 animate-pulse mt-2"></div>
    </div>
  );
}
