import Image from "next/image";
import styles from "./logotype.module.sass";

export default async function Logotype({slogan}: {slogan?: string}) {
    return (
        <div className={styles.logotype}>
            <Image src="/logo.png" alt="logotype" width={128} height={128} className={styles.logo}/>
            <div className={styles.textBlock}>
                <div className={styles.title}>Персонта</div>
                {slogan && <div className={styles.slogan}>{slogan}</div>}
            </div>
        </div>
    );
}
