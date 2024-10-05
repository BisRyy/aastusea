import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AllCourses } from "@/data/courses";
import { ArrowRight } from "lucide-react";
import { CourseList } from "@/components/sections/learning/CourseList";

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-12" id="learning">
      <h1 className="text-3xl font-bold mb-8 text-center">Courses</h1>
      <p className="text-lg text-center text-gray-600 mb-8 dark:text-gray-400">
        Browse our selection of online courses to enhance your skills and
        knowledge.
        <br />
        Start learning today!
      </p>
      {/* Upcoming */}
      <h2 className="text-2xl font-semibold my-10">New Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AllCourses.reverse()
          .slice(0, 3)
          .reverse()
          .map((course: any, index: number) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="relative w-full h-56">
                  <Image
                    src={course.image}
                    alt={`${course.title} course image`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <Link href={course.link} passHref target="_blank">
                  <CardTitle className="mb-2 hover:underline transition-shadow">
                    {course.title}
                  </CardTitle>
                </Link>
                <CardDescription className="mb-2">
                  Sponsored By:{" "}
                  <span className="font-semibold">{course.company}</span>
                </CardDescription>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {course.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 flex justify-end">
                <Link href={course.link} passHref target="_blank">
                  <Button className="w-full group/arrow">
                    Start Learning
                    <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>

      {/* All Courses */}
      <h2 className="text-2xl font-semibold my-10">All Courses</h2>
      <CourseList courses={AllCourses.reverse()} />
    </div>
  );
}
