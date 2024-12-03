import { FC, useState } from "react";
import styles from "./CheckboxFilter.module.scss";

interface CheckboxProps {
    label: string;
}

const Index: FC<CheckboxProps> = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className={styles.wrapper}>
            <label>
                <span>{label}</span>
                <input
                    className={isChecked ? styles.checked : ""}
                    name="checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                />
            </label>
        </div>
    );
};

export default Index;
