import TabsDemo from "@/components/sections/dashboard/tabs";
import RightSidebar from "@/components/layout/right-sidebar";
import Redirect from "../../../components/sections/dashboard/redirect";
import { currentUser } from "@clerk/nextjs/server";
import { CourseList } from "@/components/sections/learning/CourseList";
import { AllCourses } from "@/data/courses";
import CourseTable from "../../../components/sections/dashboard/course-table";
import { LoaderIcon } from "lucide-react";
import Greeting from "../../../components/sections/dashboard/greeting";
import { Button } from "@/components/ui/button";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

export default async function Page() {
  return (
    <div className="flex  h-full gap-2 m-4">
      <Redirect />
      <div className="flex-grow">
        <div className="flex items-start justify-between mx-4 my-4">
          <Greeting />
          <div className="flex items-center gap-2">
            <Button variant="ghost">
              <QuestionMarkCircledIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <CourseTable courses={AllCourses} />
      </div>
      <RightSidebar className="w-full hidden md:block mx-2" />
    </div>
  );
}
