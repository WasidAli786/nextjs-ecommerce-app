// import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";

// const store = (set) => ({
//   tasks: [],
//   addTask: (title, status) =>
//     set(
//       (state) => ({ tasks: [...state.tasks, { title, status }] }),
//       false,
//       "addTask" // false and the function name like(addTask) will be add in the devtool extension when adding the task
//     ),
//   deleteTask: (title) =>
//     set((state) => ({
//       tasks: state.tasks.filter((items) => items.title !== title),
//     })),
// });

// export const useStore = create(persist(devtools(store), { name: "store" }));

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IAuthState } from "./slices/authSlice";
import { authSlice } from "./slices/authSlice";

export const useStore = create<IAuthState>()(
  devtools((...a) => ({
    ...authSlice(...a),
  }))
);
