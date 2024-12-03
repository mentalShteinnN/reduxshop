import { FC, useEffect } from "react";
import Gallery from "UI/Gallery";
import ProductCard from "components/ProductCard";
import NoData from "components/NoData";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductsState, setAllProducts } from "store/productsSlice";
import { Product } from "pages/AllProducts/types";

interface SaleProps {
    extendButton?: boolean;
}

const Index: FC<SaleProps> = ({ extendButton }) => {
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

    console.table(
        productsData.filter((item: Product) => item.discont_price !== null),
    );

    if (!productsData.length) {
        return <NoData>Failed to load sales 😥</NoData>;
    }

    return (
        <Gallery extendButton={extendButton} title="Sale">
            {productsData
                .filter((item: Product) => item.discont_price !== null)
                .map((item: Product) => (
                    <Link key={item.id} to={"/product/" + item.id}>
                        <ProductCard item={item} />
                    </Link>
                ))}
        </Gallery>
    );
};

export default Index;
