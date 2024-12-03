import { FC } from "react";
import styles from "./Gallery.module.scss";

interface ExtendButtonProps {
    text: string;
}

export const ExtendButton: FC<ExtendButtonProps> = ({ text }) => {
    return (
        <>
            <span className={styles.hr} />
            <div>
                <span className={styles.extendButton}>{text}</span>
            </div>
        </>
    );
};
