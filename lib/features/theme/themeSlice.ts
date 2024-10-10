import { RootState } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeInitialState {
  sidebar: boolean;
  lockMenu: boolean;
}

const initialState: ThemeInitialState = {
  sidebar: true,
  lockMenu: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleSidebar(state, action: PayloadAction<boolean>) {
      state.sidebar = action.payload;
    },
    toggleLockMenu(state, action: PayloadAction<boolean>) {
      state.lockMenu = action.payload;
    },
  },
});

export const { toggleSidebar, toggleLockMenu } = themeSlice.actions;

export const selectCurrentSidebarState = (state: RootState) =>
  state.theme.sidebar;
export const selectLockMenu = (state: RootState) =>
  state.theme.lockMenu;

export default themeSlice.reducer;
