import Wrapper from "UI/Wrapper";
import styles from "./Contact.module.scss";
import instagramIco from "assets/ic-instagram.svg";
import whatAppIco from "assets/ic-whatsapp.svg";

const Index = () => {
    return (
        <footer className={styles.contact}>
            <h2 className={styles.header}>Contact</h2>
            <div className={styles.grid}>
                <Wrapper title="Phone">
                    <a href="tel:+74993506604">+7 (499) 350-66-04</a>
                </Wrapper>

                <Wrapper title="Socials">
                    <a href="#">
                        <img src={instagramIco} alt="Instagram ico" />
                    </a>
                    <a href="#">
                        <img src={whatAppIco} alt="WhatApp ico" />
                    </a>
                </Wrapper>
                <Wrapper title="Address">
                    Dubininskaya Ulitsa, 96, Moscow, Russia, 115093
                </Wrapper>
                <Wrapper title="Working Hours">24 hours a day</Wrapper>
            </div>

            <div className={styles.map}>
                <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=IThub%20college,%20%D0%94%D1%83%D0%B1%D0%B8%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB.,%2096,%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20115093+(ITHub%20college)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </footer>
    );
};

export default Index;
