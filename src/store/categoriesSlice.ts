import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        data: [],
    },
    reducers: {
        setAllCategories: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setAllCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
