import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUsers, () => {
      return [];
    });
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
