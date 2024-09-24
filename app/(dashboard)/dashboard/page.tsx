import TabsDemo from "@/components/sections/dashboard/tabs";
import RightSidebar from "@/components/layout/right-sidebar";
import Redirect from "../../../components/sections/dashboard/redirect";
import { currentUser } from "@clerk/nextjs/server";
import { CourseList } from "@/components/sections/learning/CourseList";
import { AllCourses } from "@/data/courses";
import CourseTable from "../../../components/sections/dashboard/course-table";
import { LoaderIcon } from "lucide-react";
import Greeting from "../../../components/sections/dashboard/greeting";

export default async function Page() {
  return (
    <div className="flex  h-full gap-2 m-4">
      <Redirect />
      <div className="flex-grow">
        <Greeting />
        <CourseTable courses={AllCourses} />
      </div>
      <RightSidebar className="w-full hidden md:block mx-2" />
    </div>
  );
}
