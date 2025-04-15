import React from "react";
import { useNavigate } from "react-router-dom";
import useExercisesStore from "../store/useExercisestore";

const Exercises = () => {
  const { our_exercises } = useExercisesStore();
  return (
    <>
      {our_exercises.length > 0 && (
        <section className="p-8">
          <h1 className="mb-4 text-2xl font-bold font-mono ">Generated Exercises</h1>
          <ul className="space-y-4">
            {our_exercises.map((exercise) => (
              <li key={exercise._id} className="p-4 bg-white shadow border-black border-2 rounded">
                <h3 className="text-xl font-semibold text-blue-600">{exercise.name}</h3>
                <p>
                  <strong>Level:</strong> {exercise.level}
                </p>
                <p>
                  <strong>Force:</strong> {exercise.force}
                </p>
                <p>
                  <strong>Mechanic:</strong> {exercise.mechanic}
                </p>
                <p>
                  <strong>Equipment:</strong> {exercise.equipment}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default Exercises;
