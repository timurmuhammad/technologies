import styles from "./logo.module.scss";
import titleImage from "../../shared/static/img/title.png";
import iconImage from "../../shared/static/img/logo-cont.png";
import Link from "next/link";

type Props = {
    onHeader?: boolean
    onClickBurger?: (burger: boolean) => void
}

export const Logo: React.FC<Props> = ({onHeader = false, onClickBurger}) => (
    <Link href={'/'} 
    onClick={() => onClickBurger && onClickBurger(false)}
    className={onHeader ? styles.body_onHeader : styles.body}>
        <img className={styles.icon} src={iconImage.src} alt="icon"/>
        <div className={styles.name}>
            <p className={styles.string}>INDUSTRIAL</p>
            <p className={styles.string}>AUTOMATION</p>
            <p className={styles.string}>SEARCH ENGINE</p>
        </div>
    </Link>
)
