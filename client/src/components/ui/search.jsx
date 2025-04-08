import { Search as SearchIcon } from "lucide-react";
import { cn } from "../../libs/util.js";

export function Search({ className, ...props }) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <input
        type="search"
        className={cn(
          "h-10 w-full rounded-full border border-gray-200 bg-white pl-10 pr-4 text-sm placeholder:text-gray-500 focus:border-black focus:outline-none",
          className
        )}
        {...props}
      />
    </div>
  );
}
