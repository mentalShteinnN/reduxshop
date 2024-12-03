import logo from "assets/logo.svg";
import chartIco from "assets/cart.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <header>
            <Link to="/" className={styles.logo}>
                <img src={logo} alt="logo" />
            </Link>
            <ul>
                <li>
                    <Link to="/">Main Page</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
                <li>
                    <Link to="/allProducts">All products</Link>
                </li>
                <li>
                    <Link to="/allSales">All sales</Link>
                </li>
            </ul>
            <Link to="#" className={styles.cart}>
                <img src={chartIco} alt="cart ico" />
            </Link>
        </header>
    );
};

export default Index;
