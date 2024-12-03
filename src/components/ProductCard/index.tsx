import styles from "./ProductCard.module.scss";
import { FC } from "react";
import Button from "UI/Button";
import NoImage from "assets/no-image.png";

interface ProductCardProps {
    item: {
        title: string;
        price: number;
        discont_price: number;
        image?: string;
    };
}

const Index: FC<ProductCardProps> = ({ item }) => {
    return (
        <div className={styles.card}>
            <div className={styles.preview}>
                {item.discont_price && (
                    <span className={styles.discount}>
                        {Math.floor(
                            ((item.price - item.discont_price) / item.price) *
                                100,
                        )}
                    </span>
                )}
                <img
                    loading="lazy"
                    src={"http://localhost:3333/" + item.image || NoImage}
                    alt={item.title}
                />
                <div className={styles.buyButton}>
                    <Button>Add to cart</Button>
                </div>
            </div>
            <div className={styles.caption}>
                <p>{item.title}</p>
                <div className={styles.price}>
                    {item.discont_price ? (
                        <>
                            {Math.floor(item.discont_price)}
                            <span>{Math.round(item.price)}</span>
                        </>
                    ) : (
                        Math.round(item.price)
                    )}
                </div>
            </div>
        </div>
    );
};

export default Index;
