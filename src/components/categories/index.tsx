'use client'

import { useState, useRef, useContext } from 'react'
import {TotalContext} from '../../app/layout'
import styles from './categories.module.scss'
import { useClickOutside } from '../../hooks/onClickOutside'
import ProductService from '../search/Product.service'

type Props = {
    category: string[]
    setCategory: (category: string[]) => void
    setDescription: (description: any) => void
}

export const Category: React.FC<Props> = ({ category, setCategory, setDescription } ) => {
    const [open, setOpen] = useState(false)
    const listRef = useRef(null)
    const categoryRef = useRef(category)
    const {categoryChilds, setCategoryChilds} = useContext(TotalContext)
    const {parentCategories, setParentCategories} = useContext(TotalContext)

    useClickOutside(listRef, () => setOpen(false))

    function onClickListItem(item: string, subItem = '') {
        subItem.length > 0 ? setCategory([item, subItem]) : setCategory([item])
    }

    return <>
        <div className={styles.body} ref={listRef}>
            <div 
                onClick={() => {
                    setOpen(!open)
                }}
                className={open ? styles.title_active : styles.title}>
                    Categories
            </div>
            <ul className={open ? styles.list_active : styles.list}>
                    {parentCategories.map((listItem: string, index: number) => (
                        <li key={index}>
                            <p
                                className={category.includes(listItem) ? styles.item_active : styles.item}
                                onClick={() => {
                                    setOpen(!open)
                                    const fetchData1 = async () => {
                                        const response = await ProductService.getCategoryChilds(listItem)
                                        if (response) {
                                            const getData: string[] = []
                                            response.forEach((element: any) => {
                                                getData.push(element.category)
                                            });
                                            setCategoryChilds(getData)
                                            setDescription(response[0])
                                        }
                                    }
                                    fetchData1()
                                    category.includes(listItem) ? setCategory([])
                                    : onClickListItem(listItem)}}
                                >{listItem}</p>
                            {category.includes(listItem) && <ul className={styles.sub_list}>
                                {categoryChilds.map((subListItem: string, subIndex: number) => (
                                    <li
                                        onClick={() => {
                                            setOpen(!open)
                                            category.includes(subListItem) ? setCategory([listItem])
                                            : onClickListItem(listItem, subListItem)}}
                                        className={category.includes(subListItem) ? styles.sub_item_active : styles.item}
                                        key={subIndex}
                                    >
                                        {subListItem}
                                    </li>
                                ))}
                            </ul>}
                        </li>
                    ))}
            </ul>
        </div>
    </>
}