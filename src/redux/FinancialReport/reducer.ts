import { createSlice } from "@reduxjs/toolkit";
import { IInfo } from "../../interfaces";
import { fetchInfosAsync } from "./actions";

interface InfoState {
  infos: IInfo[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: InfoState = {
  infos: [],
  status: "idle",
  error: null,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfosAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInfosAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.infos = action.payload;
      })
      .addCase(fetchInfosAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred.";
      });
  },
});

export default infoSlice.reducer;
