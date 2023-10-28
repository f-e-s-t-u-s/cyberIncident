import { createSlice } from "@reduxjs/toolkit";

// what to stor
const initialState = {
  token: "",
  userDetails: {},
  logged: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    updateUserInfo: (state, action) => {
      state.userDetails = action.payload;
    },
    updateLoggedStatus: (state, action) => {
      state.logged = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { updateToken, updateUserInfo, updateLoggedStatus } =
  userSlice.actions;
