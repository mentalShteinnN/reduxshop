import { Link, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

import cactus from "assets/cactus.png";
import Button from "UI/Button";

interface ErrorType {
    status: number;
    statusText: string;
    message: string;
}

const Index = () => {
    const error = useRouteError() as ErrorType;
    console.error(error);

    return (
        <main>
            <div className={styles.wrapper}>
                {error.status === 404 && (
                    <div className={styles.notfound}>
                        4<img src={cactus} alt="0" />4
                    </div>
                )}
                <h1>
                    {error.statusText === "Not Found" &&
                        "Page " + error.statusText}
                </h1>
                <p>
                    {error.status === 404
                        ? "We’re sorry, the page you requested could not be found. Please go back to the homepage."
                        : error.message}
                </p>
                <Link to="/">
                    <Button>Go home</Button>
                </Link>
            </div>
        </main>
    );
};

export default Index;
