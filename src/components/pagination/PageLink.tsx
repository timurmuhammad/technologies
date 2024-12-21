    import { HTMLProps } from 'react';
    //import cn from 'classnames';
    //import './PageLink.css';
    import styles from './pageLink.module.scss'

    export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

    export default function PageLink({
    className,
    active,
    disabled,
    children,
    ...otherProps
    }: Props) {

    if (disabled) {
        return <span className={styles.page_link_disabled}>{children}</span>;
    }

    return (
        <a
        className={active ? styles.page_link_active : styles.page_link}
        {...otherProps}
        >
        {children}
        </a>
    );
    }