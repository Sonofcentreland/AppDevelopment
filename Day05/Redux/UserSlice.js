import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
      console.log(action.payload);
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { signin, logout } = UserSlice.actions;

export const selectUser = (state) => state.user.user;

export default UserSlice.reducer;