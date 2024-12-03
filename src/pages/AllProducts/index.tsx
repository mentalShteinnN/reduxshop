import styles from "./AllProducts.module.scss";
import Gallery from "UI/Gallery";
import { Link } from "react-router-dom";
import ProductCard from "components/ProductCard";
import PriceFilter from "components/Filters/PriceFilter";
import CheckboxFilter from "components/Filters/CheckboxFilter";
import NoData from "components/NoData";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ProductsState, setAllProducts } from "store/productsSlice";
import { Product } from "./types";

const Index = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:3333/products/all")
            .then((response) => response.json())
            .then((data) => {
                dispatch(setAllProducts(data));
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, [dispatch]);

    const productsData = useSelector(
        (state: { products: ProductsState }) => state.products.allProducts,
    );

    if (!productsData.length) {
        return <NoData>Failed to load products 😥</NoData>;
    }

    return (
        <main>
            <div className={styles.wrapper}>
                <h1>Tools and equipment</h1>
                <div className={styles.filters}>
                    <PriceFilter />
                    <CheckboxFilter label="Discounted items" />
                </div>
            </div>
            <Gallery>
                {productsData.map((item: Product) => (
                    <Link key={item.id} to={"/product/" + item.id}>
                        <ProductCard item={item} />
                    </Link>
                ))}
            </Gallery>
        </main>
    );
};

export default Index;
