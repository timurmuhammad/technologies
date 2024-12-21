'use client'

import { useState, useRef } from 'react'

import styles from './popupList.module.scss'
import { useClickOutside } from '../../hooks/onClickOutside'
import { allTypes } from '../../types/navType'
import arrow from '../../shared/icons/arrow.svg'
import Link from 'next/link'
import ProductService from '../search/Product.service'

type Props = {
    popupList: any
    title: string
    category?: boolean 
    setCategory?: (category: string[]) => void
    setCategoryChilds?: (categoryChilds: string[]) => void
    onClickBurger?: (click: boolean) => void
}

export const PopupList: React.FC<Props> = ({ popupList, title, category = false, setCategory, setCategoryChilds, onClickBurger } ) => {
    const [open, setOpen] = useState(false)
    const listRef = useRef(null)

    useClickOutside(listRef, () => setOpen(false))

    function onClickListItem() {
        setOpen(false)
    }

    return <>
        <div className={styles.body} ref={listRef}>
            <div 
                onClick={() => setOpen(!open)} 
                className={
                    styles.name
                }>

                <p>{title}</p>
                <div className={open ? styles.icon_active : styles.icon}>
                    <img className={styles.arrow} src={arrow.src} alt="icon" />
                </div>
            </div>

            <ul className={open ? styles.on_click_active : styles.on_click}>
                    {category ?  
                    popupList.map((listItem: string, index: number) => (
                        <Link
                            href={'/catalog'}
                            className={styles.item} 
                            key={index} 
                            onClick={() => {
                                onClickBurger && onClickBurger(false)
                                const fetchData = async () => {
                                    const response = await ProductService.getCategoryChilds(listItem)
                                    if (response) {
                                        setCategoryChilds && setCategoryChilds(response)
                                    }
                                }
                                fetchData()
                                open && onClickListItem()
                                setCategory && setCategory([listItem])
                                }}>
                            {listItem}
                        </Link>
                    )) :
                    Object.values(popupList).map((listItem: any, index) => (
                        <Link
                            href={'/'}
                            className={styles.item} 
                            key={index} 
                            onClick={() => open && onClickListItem()}>
                            {listItem}
                        </Link>
                    ))}
            </ul>
        </div>
    </>
}