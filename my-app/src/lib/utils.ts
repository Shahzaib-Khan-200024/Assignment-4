import { clsx, type ClassValue } from "clsx";
import { code } from "framer-motion/client";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const compareArrays = (a: any[], b: any[]) => {
  return a.toString() === b.toString();
};



// updated code
// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// export const compareArrays = <T>(a: T[], b: T[]) => {
//   return a.toString() === b.toString();
// };
