import styles from ".//delivery.module.scss";
import { delivery } from "@/types/featuresType";

type Props = {
    icon?: string,
    amount: string,
}

export const Delivery: React.FC<Props> = ({ amount }) => {
    const selectDelivery = +amount >= 3 ? delivery.standart 
    : +amount >= 1 ? delivery.fast
    : delivery.unknown

    if (+amount >=3) {
        selectDelivery.speed = `${amount}+ working days`
    } else if (+amount >= 1) {
        selectDelivery.speed = `1-2 working days`
    } else {
        selectDelivery.speed = ''
    }

    return (
        <div className={styles.body}>
            <div className={styles.type}>
                <img src={selectDelivery.icon} className={styles.icon} alt="icon" />
                <p className={styles.text}>{selectDelivery.name}</p>
            </div>
            <p className={styles.amount}>{selectDelivery.speed}</p>
        </div>
    )
}
