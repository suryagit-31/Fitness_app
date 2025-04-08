import React from "react";


import { Dumbbell, Search as SearchIcon } from "lucide-react";
import { Search } from "../components/ui/search";
import { Button } from "../components/ui/button";
import { CategoryCard } from "../components/categorycard";


const categories = [
  { title: "Strength", icon: <Dumbbell className="h-8 w-8" /> },
  { title: "Cardio", icon: <Dumbbell className="h-8 w-8" /> },
  { title: "Flexibility", icon: <Dumbbell className="h-8 w-8" /> },
  { title: "Recovery", icon: <Dumbbell className="h-8 w-8" /> },
  { title: "CrossFit", icon: <Dumbbell className="h-8 w-8" /> },
  { title: "Yoga", icon: <Dumbbell className="h-8 w-8" /> },
  { title: "Bodyweight", icon: <Dumbbell className="h-8 w-8" /> },
  { title: "Sports", icon: <Dumbbell className="h-8 w-8" /> },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center gap-4 px-4">
          <h1 className="text-xl font-bold">FitFlow</h1>
          <div className="flex-1 px-4">
            <Search placeholder="Search exercises..." />
          </div>
          <Button>Generate Workout</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="relative h-[400px] overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=80"
              alt="Hero"
              className="absolute inset-0 h-full w-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="mb-4 text-4xl font-bold">
                  Transform Your Fitness Journey
                </h2>
                <p className="mb-8 text-lg">
                  Discover personalized workouts tailored to your goals
                </p>
                <Button className="bg-white text-black hover:bg-gray-100">
                  Start Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold">Browse Categories</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                icon={category.icon}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
