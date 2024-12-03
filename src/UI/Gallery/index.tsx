import { FC, ReactNode } from "react";
import styles from "./Gallery.module.scss";

import GalleryHeader from "UI/Gallery/GalleryHeader";

interface GalleryProps {
    extendButton?: boolean;
    title?: string;
    children: ReactNode;
}

const Index: FC<GalleryProps> = ({ extendButton, title, children }) => {
    return (
        <section className={styles.gallery}>
            {title && (
                <GalleryHeader extendButton={extendButton}>
                    {title}
                </GalleryHeader>
            )}
            <div className={styles.items}>{children}</div>
        </section>
    );
};

export default Index;
