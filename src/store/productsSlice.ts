import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "pages/AllProducts/types";

export interface ProductsState {
    allProducts: Product[];
    selectedProduct: Product | null;
}

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        selectedProduct: null,
    } as ProductsState,
    reducers: {
        setAllProducts: (state, action: PayloadAction<Product[]>) => {
            state.allProducts = action.payload;
        },
        setSelectedProduct: (state, action: PayloadAction<Product>) => {
            state.selectedProduct = action.payload;
        },
    },
});

export const { setAllProducts, setSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
