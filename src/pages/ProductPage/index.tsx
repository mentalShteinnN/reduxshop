import styles from "./ProductPage.module.scss";
import Counter from "UI/Counter";
import Button from "UI/Button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ProductsState, setSelectedProduct } from "store/productsSlice";

import NoImage from "assets/no-image.png";
import NoData from "components/NoData";

const Index = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`http://localhost:3333/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setSelectedProduct(data));
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, [dispatch, id]);

    const productData = useSelector((state: { products: ProductsState }) =>
        Array.isArray(state.products.selectedProduct)
            ? state.products.selectedProduct[0]
            : null,
    );

    console.table(productData);

    if (!productData) {
        return <NoData>Failed to load product 😥</NoData>;
    }

    return (
        <main>
            <div key={productData.id} className={styles.wrapper}>
                <img
                    src={
                        "http://localhost:3333/" + productData.image || NoImage
                    }
                    alt={productData.title}
                />
                <div className={styles.info}>
                    <h3>{productData.title}</h3>
                    <div className={styles.price}>
                        {productData.discont_price ? (
                            <>
                                {Math.floor(productData.discont_price)}
                                <span>{Math.round(productData.price)}</span>
                            </>
                        ) : (
                            Math.round(productData.price)
                        )}
                        {productData.discont_price && (
                            <span className={styles.discount}>
                                {Math.floor(
                                    ((productData.price -
                                        productData.discont_price) /
                                        productData.price) *
                                        100,
                                )}
                            </span>
                        )}
                    </div>
                    <div className={styles.addToCart}>
                        <Counter />
                        <Button>Add to cart</Button>
                    </div>
                    <div className={styles.description}>
                        <h5>Description</h5>
                        <p>{productData.description}</p>
                        <span>Read more</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Index;
