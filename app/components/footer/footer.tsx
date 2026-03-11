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
                        <div>+79186810978</div>
                        <div>personta.info@yandex.ru</div>
                    </div>
                </div>
                <div className={styles.links}>
                    <a href="#" target="_blank" rel="noopener noreferrer">Политика обработки персональных данных</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Политика использования файлов cookie</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Согласие на обработку персональных данных</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Согласие на получение рассылки</a>
                </div>
                <p className={styles.disclaimer}>
                    Вся информация на сайте носит информационный характер и не является публичной офертой (ст. 437 ГК РФ). Стоимость и состав услуг определяются индивидуально и уточняются до момента оплаты. <br/> Обработка персональных данных осуществляется в соответствии с действующим законодательством.
                </p>
                <div className={styles.bottom}>
                    ©ИП Нестеров А.А. ИНН 0000000000. Все права защищены.
                </div>
            </div>
        </footer>
    );
}
