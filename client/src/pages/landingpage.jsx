import React from "react";
import { useNavigate } from "react-router-dom";
import { Dumbbell } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")',
          filter: "brightness(0.4)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center items-center text-white">
        <div className="flex items-center gap-2 mb-8">
          <Dumbbell size={40} className="text-secondary" />
          <h1 className="text-4xl font-bold">FitFlow</h1>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          Transform Your Fitness Journey
        </h2>
        <p className="text-xl text-center mb-12 max-w-2xl">
          Personalized workouts, expert guidance, and real results
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/home")}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/home")}
            className="bg-white hover:bg-gray-100 text-text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
