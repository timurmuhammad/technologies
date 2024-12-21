
import styles from './price.module.scss';

type Props = {
    price: string,
    shippingCost: string,
}

export const Price: React.FC<Props> = ({ price, shippingCost }) => {

    return (
        <div className={styles.body}>
            <p className={styles.number}>{`${price} €`}</p>
            <p className={styles.shipping_cost}>{`${shippingCost} € Shipping cost`}</p>
        </div>
    )
}
