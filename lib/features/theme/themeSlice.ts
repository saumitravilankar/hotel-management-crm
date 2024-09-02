import { RootState } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeInitialState {
  sidebar: boolean;
}

const initialState: ThemeInitialState = {
  sidebar: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleSidebar(state, action: PayloadAction<boolean>) {
      state.sidebar = action.payload;
    },
  },
});

export const { toggleSidebar } = themeSlice.actions;

export const selectCurrentSidebarState = (state: RootState) =>
  state.theme.sidebar;

export default themeSlice.reducer;
