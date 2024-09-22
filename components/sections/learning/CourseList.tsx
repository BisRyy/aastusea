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
import { ArrowRight } from "lucide-react";

interface Course {
  image: string;
  title: string;
  link: string;
  company: string;
  description: string;
}

interface CourseListProps {
  courses: Course[];
}

export const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {courses.map((course, index) => (
        <Card key={index} className="flex flex-col h-full border-gray-500">
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
          <CardContent className="flex-grow p-4 pb-2">
            <Link href={course.link} passHref target="_blank">
              <CardTitle className="mb-2 hover:underline transition-shadow line-clamp-2">
                {course.title}
              </CardTitle>
            </Link>
            <CardDescription className="mb-2">
              Sponsored By:{" "}
              <span className="font-semibold">{course.company}</span>
            </CardDescription>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
              {course.description}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-2 flex justify-end">
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
  );
};
