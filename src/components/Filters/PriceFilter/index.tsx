import styles from "./PriceFilter.module.scss";

const Index = () => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor="price">Price</label>
            <input name="price" placeholder="from" type="number" />
            <input placeholder="to" type="number" />
        </div>
    );
};

export default Index;
