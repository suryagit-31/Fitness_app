import { create } from "zustand";
import axiosInstance from "../libs/axios";

const useExercisesStore = create((set) => ({
  isgeneratingworkout: false,
  our_exercises: [],
  workoutgenerator: async (data) => {
    set({ isgeneratingworkout: true });
    try {
      const response = await axiosInstance.post("/workoutplan", data);
      console.log(response); // see full response here
      set({ our_exercises: response.data });
      set({ isgeneratingworkout: false });
      return response;
    } catch (error) {
      alert("Failed to generate workout. Try again!");
      set({ isgeneratingworkout: false });
      console.log(error);
    }
  },
}));

export default useExercisesStore;
