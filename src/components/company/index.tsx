import styles from "./company.module.scss";

type Props = {
    image: string,
    text: string,
}

export const Company: React.FC<Props> = ({ image, text }) => {

    return (
        <div className={styles.body}>
            <img src={image} className={styles.logo} alt="logo" />
            <p className={styles.text}>{text}</p>
        </div>
    )
}
