import { cn } from "../../libs/util.js";

export function Button({ className, variant = "default", ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-colors",
        variant === "default" && "bg-black text-white hover:bg-gray-900",
        variant === "outline" &&
          "border border-gray-200 bg-white hover:bg-gray-50",
        className
      )}
      {...props}
    />
  );
}
