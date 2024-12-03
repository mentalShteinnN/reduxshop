import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoriesReducer from "./categoriesSlice";

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
    },
});

export default store;
