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
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export default async function Page() {
  return (
    <div className="flex h-full gap-2 m-4">
      <Redirect />
      <div className="flex-grow">
        <div className="flex items-start justify-between mx-4 my-4">
          <Greeting />
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">
                    <QuestionMarkCircledIcon className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="text-xs">This website is in active development</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <CourseTable courses={AllCourses} />
      </div>
      <RightSidebar className="w-full hidden md:block mx-2" />
    </div>
  );
}
