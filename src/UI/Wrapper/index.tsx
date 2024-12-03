import { FC, ReactNode } from "react";
import styles from "./Wrapper.module.scss";

interface Wrapper {
    title: string;
    children: ReactNode;
}

const Index: FC<Wrapper> = ({ title, children }) => {
    return (
        <div className={styles.wrapper}>
            <span>{title}</span>
            <div className={styles.text}>{children}</div>
        </div>
    );
};

export default Index;
