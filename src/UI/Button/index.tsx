import styles from "./Button.module.scss";
import { FC, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

const Index: FC<ButtonProps> = ({ children }) => {
    return <button className={styles.button}>{children}</button>;
};

export default Index;
