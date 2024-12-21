'use client'

import React, { memo, useEffect, useState } from 'react'

import styles from "./filter.module.scss";
import galleryTile from '../../shared/icons/gallery_tile.svg'
import galleryList from '../../shared/icons/gallery_list.svg'
import filledArrow from '../../shared/icons/filled_arrow.svg'
import ProductService from '../search/Product.service';
import IProduct from '@/app/catalog/types/Product.interface';

type Props = {
    goods: IProduct[]
    setGoods: (goods: IProduct[]) => void
    productId: string
    page: number;
    size: number;
}

export const Filter: React.FC<Props> = memo(({ goods, setGoods, productId, page, size }) => {
    const [ galleryView, setGalleryView ] = useState(false)
    const [ shippingSpeed, setShippingSpeed ] = useState(false)
    const [ byPrice, setByPrice ] = useState<any>(100000)
    const [ inputValue, setInputValue ] = useState('')
    const [ priceSorting, setPriceSorting ] = useState(false)

    useEffect(() => {
        if (byPrice) {
            const fetchData = async () => {
            const response = await ProductService.getSameProducts(
                {
                    page: page,
                    size: size,
                    productId: productId,
                    flagSort: priceSorting,
                    flagDelivery: shippingSpeed,
                    price: byPrice
                })
            if (response) {
                setGoods(response.products)
            }
        }
            fetchData()
        } else {const fetchData1 = async () => {
            const response = await ProductService.getSameProducts(
                {
                    page: page,
                    size: size,
                    productId: productId,
                    flagSort: priceSorting,
                    flagDelivery: shippingSpeed,
                })
            if (response) {
                setGoods(response.products)
            }
        }
        fetchData1()}
    }, [shippingSpeed, byPrice, priceSorting])


    return (
        <div className={styles.body}>
            <div className={styles.left}>
                <div className={styles.item}>
                    <p className={styles.name}>Gallery view</p>
                    <div className={styles.change_box}>
                        <div onClick={() => setGalleryView(true)}
                        className={galleryView ? styles.gallery_icon_active : styles.gallery_icon}>
                            <img src={galleryList.src} alt="icon" />
                        </div>
                        <div onClick={() => setGalleryView(false)} 
                        className={!galleryView ? styles.gallery_icon_active : styles.gallery_icon}>
                            <img src={galleryTile.src} alt="icon" />
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <p className={styles.name}>Shipping speed</p>
                    <div onClick={() => setShippingSpeed(!shippingSpeed)} className={styles.change_box}>
                        <div
                        className={shippingSpeed ? styles.delivery_change_active : styles.delivery_change}></div>
                        <p className={styles.delivery_text}>Fast delivery</p>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.item}>
                    <p className={styles.name}>By price</p>
                    <div className={styles.change_box}>
                    <span onClick={() => byPrice && setByPrice(+inputValue)}
                    className={styles.by_rice_button}>€</span>
                    <div className={styles.input}>
                        <input
                            // ref={inputRef} 
                            // value={searchValue} 
                            onChange={event => setInputValue(event.target.value)} 
                            className={styles.input} 
                            type="number" 
                            placeholder="999999"
                        />
                    </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <p className={styles.name}>Price Sorting</p>
                    <div onClick={() => setPriceSorting(!priceSorting)} className={styles.change_box}>
                        <p className={styles.sorting_text}>{priceSorting ? 'Ascending' : 'Descending'}</p>
                        <div className={styles.sorting_icons}>
                            <img className={!priceSorting ? styles.sorting_icon_ative : styles.sorting_icon} src={filledArrow.src} alt="icon" />
                            <img className={priceSorting ? styles.sorting_icon_ative : styles.sorting_icon} src={filledArrow.src} alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
)