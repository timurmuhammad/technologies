import styles from "./nameProduct.module.scss";

type Props = {
    title: string,
}

export const NameProduct: React.FC<Props> = ({ title }) => {

    return (
        <div className={styles.body}>
            <p className={styles.text}>{title}</p>
        </div>
    )
}