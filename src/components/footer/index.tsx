

import Link from "next/link";
import { socialMedia } from "../../types/navType";
import styles from './footer.module.scss';
import { Logo } from '../logo';
import { manufacturersType, aboutType, serviceType } from "../../types/navType";

type Props = {
    onClickBurger?: (burger: boolean) => void
}

export const Footer: React.FC<Props> = ({ onClickBurger }) => {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.wrapper_container + ' _container'}>
                <div className={styles.body}>
                    <Logo onClickBurger={onClickBurger}></Logo>
                    <ul className={styles.list}>
                        <h3 className={styles.list__name}>About us</h3>
                        {Object.values(aboutType).map((listItem, index) => (
                            <Link
                                href={'/'}
                                onClick={() => onClickBurger && onClickBurger(false)}
                                className={styles.list__item} 
                                key={index}>
                                {listItem}
                            </Link>
                        ))}
                    </ul>
    
                    <ul className={styles.list}>
                        <h3 className={styles.list__name}>Our service</h3>
                        {Object.values(serviceType).map((listItem, index) => (
                            <Link
                                href={'/'}
                                onClick={() => onClickBurger && onClickBurger(false)}
                                className={styles.list__item} 
                                key={index}>
                                {listItem}
                            </Link>
                        ))}
                    </ul>

                    <ul className={styles.list}>
                        <h3 className={styles.list__name}>Manufactures</h3>
                        {Object.values(manufacturersType).map((listItem, index) => (
                            <Link
                                href={'/'}
                                onClick={() => onClickBurger && onClickBurger(false)}
                                className={styles.list__item} 
                                key={index}>
                                {listItem}
                            </Link>
                        ))}
                    </ul>

                    <div className={styles.socialMedia}>
                        <h3 className={styles.list__name}>Follow us</h3>
                        <div className={styles.socialMedia__body}>
                            {socialMedia.map((listItem, index) => (
                                <Link className={styles.socialMedia__icon} 
                                    onClick={() => onClickBurger && onClickBurger(false)}
                                    key={index}
                                    href={'/'}> 
                                    <img
                                        src={listItem.icon.src}
                                        key={index}>
                                    </img>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <p className={styles.bottom_text}>© INDUSTRIAL AUTOMATION SEARCH ENGINE. <span>All right reserved</span></p>
            </div>
        </footer>
    )
}
