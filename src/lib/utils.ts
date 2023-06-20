import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
