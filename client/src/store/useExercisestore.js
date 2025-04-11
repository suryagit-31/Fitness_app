import { create } from "zustand";
import axiosInstance from "../libs/axios";

const useExercisesStore = create((set) => ({
  isgeneratingworkout: false,
  exercises: [],
  workoutgenerator: async (data) => {
    set({ isgeneratingworkout: true });
    try {
      const response = await axiosInstance.post("/workoutplan", data);
      console.log(response); // see full response here
      return response;
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useExercisesStore;
