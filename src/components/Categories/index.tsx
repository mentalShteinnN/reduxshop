import { FC, useEffect } from "react";
import Gallery from "UI/Gallery";
import styles from "./Categories.module.scss";
import { CategoriesProps, Category } from "components/Categories/types";
import NoData from "components/NoData";
import NoImage from "assets/no-image.png";
import { useDispatch, useSelector } from "react-redux";
import { setAllCategories } from "store/categoriesSlice";

const Index: FC<CategoriesProps> = ({ extendButton }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:3333/categories/all")
            .then((response) => response.json())
            .then((data) => {
                dispatch(setAllCategories(data));
                console.table(data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, [dispatch]);

    const categoriesData: Category[] = useSelector(
        (state: { categories: { data: Category[] } }) => state.categories.data,
    );

    if (!categoriesData.length) {
        return <NoData>Failed to load categories 😥</NoData>;
    }

    return (
        <Gallery title="Categories" extendButton={extendButton}>
            {categoriesData.map((item) => (
                <div key={item.id} className={styles.item}>
                    <img
                        loading="lazy"
                        src={"http://localhost:3333/" + item.image || NoImage}
                        alt={item.title}
                    />
                    <span>{item.title}</span>
                </div>
            ))}
        </Gallery>
    );
};

export default Index;
