import styles from "./NoData.module.scss";
import Wrapper from "UI/Wrapper";
import { FC, ReactNode } from "react";

interface NoDataProps {
    children: ReactNode;
}

const Index: FC<NoDataProps> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Wrapper title="Error">{children}</Wrapper>
        </div>
    );
};

export default Index;
