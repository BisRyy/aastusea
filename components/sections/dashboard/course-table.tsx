"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lock, Search } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Course {
  image: string;
  title: string;
  link: string;
  company: string;
  level: string;
  locked?: boolean;
  requiredMembership?: string;
}

interface CourseTableProps {
  courses: Course[];
}

const CourseTable: React.FC<CourseTableProps> = ({ courses }) => {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");

  const uniqueLevels = Array.from(
    new Set(courses.map((course) => course.level))
  );
  const uniqueCompanies = Array.from(
    new Set(courses.map((course) => course.company))
  );

  useEffect(() => {
    const filtered = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (levelFilter === "" ||
          levelFilter === "all" ||
          course.level === levelFilter) &&
        (companyFilter === "" ||
          companyFilter === "all" ||
          course.company === companyFilter)
    );
    setFilteredCourses(filtered);
  }, [searchTerm, levelFilter, companyFilter, courses]);

  return (
    <div>
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-1/3">
          <Input
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10"
          />
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex flex-row gap-4 w-full md:w-3/5">
          <Select value={levelFilter} onValueChange={setLevelFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              {uniqueLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={companyFilter} onValueChange={setCompanyFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by company" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Companies</SelectItem>
              {uniqueCompanies.map((company) => (
                <SelectItem key={company} value={company}>
                  {company.charAt(0).toUpperCase() + company.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course, index) => (
          <Card key={index} className="flex flex-col h-full relative">
            {Number(course?.requiredMembership) > 1 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="hover:cursor-pointer absolute top-2 right-2 z-10 bg-gray-800 text-white p-1 rounded-full">
                      <Lock size={16} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Required Membership: {course.requiredMembership}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            <CardHeader className="p-0">
              <div className="relative w-full h-40">
                <Image
                  src={course.image}
                  alt={`${course.title} course image`}
                  fill
                  style={{ objectFit: "cover" }}
                  className={`rounded-t-lg ${
                    Number(course?.requiredMembership) > 1 ? "opacity-50" : ""
                  }`}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              {Number(course?.requiredMembership) > 1 ? (
                <CardTitle
                  className={`mb-2 text-lg font-medium line-clamp-2 text-gray-500`}
                >
                  {course.title}
                </CardTitle>
              ) : (
                <Link href={course.link} passHref target="_blank">
                  <CardTitle
                    className={`mb-2 text-lg font-medium hover:underline transition-shadow line-clamp-2`}
                  >
                    {course.title}
                  </CardTitle>
                </Link>
              )}
              <div
                className={`text-sm flex justify-between ${
                  course.locked
                    ? "text-gray-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                <p>
                  <strong>Company:</strong> {course.company}
                </p>
                <p>
                  {" "}
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseTable;