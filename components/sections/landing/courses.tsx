import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AllCourses } from "@/data/courses";
import Link from "next/link";
import { CourseList } from "@/components/sections/learning/CourseList";

export const CourseSection: React.FC = () => {
  return (
    <section className="py-12 container mx-auto" id="learning">
      <h1 className="text-3xl font-bold mb-8 text-center">Courses</h1>
      <p className="text-lg text-center text-gray-600 mb-8 dark:text-gray-400">
        Browse our selection of online courses from our partners to enhance your
        skills and knowledge.
        <br />
        Start learning today!
      </p>
      <CourseList courses={AllCourses.reverse().slice(0, 4)} />
      <div className="flex justify-center mt-8">
        <Link href="/learning" passHref>
          <Button className="px-12 py-6 group/arrow">
            View All Courses
            <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
