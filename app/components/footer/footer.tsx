'use server'

import Logotype from "../logotype/logotype";
import styles from "./footer.module.sass";

export default async function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.logoWrapper}><Logotype/></div>
                    <div className={styles.elemRow}>
                        <div className={styles.elem}>
                            <span>tg</span>
                        </div>
                        <div className={styles.elem}>
                            <span>tg</span>
                        </div>
                        <div className={styles.elem}>
                            <span>tg</span>
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <div>Контакты:</div>
                        <div>+7 (000)-000-00-00</div>
                        <div>mailmail@mail.ru</div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    ©ООО Персонта. ИНН 0000000000 ОГРН 000000000000. Все права защищены
                </div>
            </div>
        </footer>
    );
}
