import TabsDemo from "@/components/sections/dashboard/tabs";
import RightSidebar from "@/components/layout/right-sidebar";
import Redirect from "../../../components/sections/dashboard/redirect";
import { currentUser } from "@clerk/nextjs/server";
import { CourseList } from "@/components/sections/learning/CourseList";
import { AllCourses } from "@/data/courses";
import CourseTable from "../../../components/sections/dashboard/course-table";
import { LoaderIcon, ShareIcon } from "lucide-react";
import Greeting from "../../../components/sections/dashboard/greeting";
import { Button } from "@/components/ui/button";
import { QuestionMarkCircledIcon, Share1Icon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default async function Page() {
  const linkedinShareUrl = process.env.NEXT_PUBLIC_LINKEDIN_SHARE_URL;
  return (
    <div className="flex h-full gap-2 m-4">
      <Redirect />
      <div className="flex-grow">
        <div className="flex items-start justify-between m-4">
          <Greeting />
          <div className="flex items-end justify-end gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">
                    <QuestionMarkCircledIcon className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="text-xs">
                  This website is in active development
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button className="rounded-full flex gap-2" asChild>
              <a
                href={linkedinShareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hidden md:block">Spread the word</span>
                <Share1Icon className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
        <CourseTable courses={AllCourses} />
      </div>
      <RightSidebar className="w-full hidden md:block mx-2" />
    </div>
  );
}
