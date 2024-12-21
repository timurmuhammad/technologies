
import styles from './button.module.scss';
import vectorGo from "../../shared/icons/vector-go.svg";


export const Button = () => {

    return (
        <div className={styles.body}>
            <p className={styles.text}>Go to store</p>
            <img src={vectorGo.src} className={styles.icon} alt="icon" />
        </div>
    )
}
