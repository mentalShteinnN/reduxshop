import styles from "UI/Gallery/Gallery.module.scss";
import { ExtendButton } from "UI/Gallery/ExtendButton";
import { FC, ReactNode } from "react";

interface GalleryHeaderProps {
    children: ReactNode;
    extendButton?: boolean;
}

const GalleryHeader: FC<GalleryHeaderProps> = ({ children, extendButton }) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.header}>{children}</h2>
            {extendButton && (
                <ExtendButton
                    text={`All ${(children as string).toLowerCase()}`}
                />
            )}
        </div>
    );
};

export default GalleryHeader;
