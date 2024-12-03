import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store";
import "./index.css";

import Layout from "components/Layout";

import MainPage from "pages/MainPage";
import ErrorPage from "pages/ErrorPage";
import CategoriesPage from "pages/CategoriesPage";
import ProductPage from "pages/ProductPage";
import AllProducts from "pages/AllProducts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "categories",
                element: <CategoriesPage />,
            },
            {
                path: "product/:id",
                element: <ProductPage />,
            },
            {
                path: "allProducts",
                element: <AllProducts />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
);
