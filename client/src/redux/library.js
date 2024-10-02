import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
  name: "library",
  initialState: {
    modal: {
      status: false,
      id: null,
      isLibrary: false,
      formData: {},
    },
  },
  reducers: {
    setLibraryModal: (state, { payload }) => {
      if (payload?.isLibrary) {
        state.modal.isLibrary = true;
      } else {
        state.modal.isLibrary = false;
      }

      if (payload?.id) {
        state.modal.id = payload.id;
        state.modal.status = payload.status;
      } else {
        state.modal.id = null;
        state.modal = payload;
      }

      return state;
    },
  },
});

export const { setLibraryModal } = librarySlice.actions;
export default librarySlice.reducer;
