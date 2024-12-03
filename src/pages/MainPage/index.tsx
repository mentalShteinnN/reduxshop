import styles from "./MainPage.module.scss";
import Categories from "components/Categories";
import Sale from "components/Sale";
import Button from "UI/Button";

import handsImg from "assets/hands.png";

const Index = () => {
    return (
        <main>
            <section className={styles.welcome}>
                <div className={styles.wrapper}>
                    <h1>Amazing Discounts on Garden Products!</h1>
                    <div className={styles.button}>
                        <Button>Check out</Button>
                    </div>
                </div>
            </section>
            <Categories extendButton={true} />
            <section className={styles.saleSection}>
                <div className={styles.saleBanner}>
                    <h2>5% off on the first order</h2>
                    <div className={styles.wrapper}>
                        <img src={handsImg} alt="hands" />
                        <form>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Phone number"
                                name="phone"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                required
                            />
                            <input type="submit" value="Get a discount" />
                        </form>
                    </div>
                </div>
            </section>
            <Sale extendButton={true} />
        </main>
    );
};

export default Index;
