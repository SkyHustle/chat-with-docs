import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    // twMerge will mx-4 my-4 -> m-4
    // clsx inforces class order
    return twMerge(clsx(inputs));
}
