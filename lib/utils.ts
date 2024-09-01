import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames : any[]) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs : any) => {
  return blogs
    .slice()
    .sort((a : any, b : any) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};