import React from "react";
import { ArrowRight, Dumbbell, Calendar, Target } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to Your Fitness Journey
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Dumbbell className="w-12 h-12 mb-4 text-blue-400" />
            <h2 className="text-xl font-semibold mb-3">Custom Workouts</h2>
            <p className="text-gray-300">
              Generate personalized workout plans tailored to your goals and
              fitness level.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Calendar className="w-12 h-12 mb-4 text-green-400" />
            <h2 className="text-xl font-semibold mb-3">Track Progress</h2>
            <p className="text-gray-300">
              Monitor your fitness journey with detailed progress tracking and
              analytics.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Target className="w-12 h-12 mb-4 text-red-400" />
            <h2 className="text-xl font-semibold mb-3">Set Goals</h2>
            <p className="text-gray-300">
              Define and achieve your fitness goals with our guided goal-setting
              system.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => (window.location.href = "/generator")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
          >
            Create Workout
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
