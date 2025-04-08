import { cn } from "../libs/util.js";

export function CategoryCard({ title, icon, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-2xl transition-all hover:border-black",
        className
      )}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-medium">{title}</h3>
    </button>
  );
}


