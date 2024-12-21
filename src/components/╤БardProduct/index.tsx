import styles from "./сardProduct.module.scss";

type Props = {
    image: string,
    title: string,
    price: string,
}

export const CardProduct: React.FC<Props> = ({ image, title,  }) => {

    return (
        <div className={styles.body}>
            <img src={image} className={styles.logo} alt="logo" />
            <p className={styles.text}></p>
        </div>
    )
}
