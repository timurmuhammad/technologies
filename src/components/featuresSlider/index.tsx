'use client'

import { useState } from "react";
import { featuresType } from "../../types/featuresType";
import styles from './featuresSlider.module.scss'
import Link from "next/link";
import arrowSlider from "../../shared/icons/arrow-slider.svg";
import arrow from '../../shared/icons/arrow-left.svg'

import { Button } from '../../components/button';
import { Company } from '../../components/company';
import { Price } from '../../components/price';
import { Delivery } from '../../components/delivery';
import { NameProduct } from '../../components/nameProduct';

export function FeaturesSlider() {
    const [ item, setItem ] = useState(0)
    const items =  Object.entries(featuresType[0])
    const byItems = featuresType[0]
    const byItems1 = featuresType[1]
    const byItems2 = featuresType[2]

    function forward() {
        item < items.length - 1 && setItem(item + 1)
    }

    function back() {
        item > 0 && setItem(item - 1)
    }

    function active(index: number) {
        index !== item && setItem(index)
    }   

    return <div className={styles.wrapper}>
        <ul className={styles.card}>
            <div className={item === 0 ? styles.inner_active : styles.inner} 
            onClick={() => active(0)}>
                <div className={styles.pointer}><p>Item Name</p></div>
                <NameProduct                   
                    title={byItems.name}
                ></NameProduct>
            </div>
            <div className={item === 1 ? styles.inner_active : styles.inner} 
            onClick={() => active(1)}>
                <div className={styles.pointer}><p>Item Price</p></div>
                <Price                  
                    price={byItems.price[0]}
                    shippingCost={byItems.price[1]}
                ></Price>
            </div>
            <div className={item === 2 ? styles.inner_active : styles.inner} 
            onClick={() => active(2)}>
                <div className={styles.pointer}><p>Shipping Time</p></div>
                <Delivery                   
                    amount={byItems.shipping[2]}
                ></Delivery>
            </div>
            <div className={item === 3 ? styles.inner_active : styles.inner} 
            onClick={() => active(3)}>
                <div className={styles.pointer}><p>Store Name</p></div>
                <Company                    
                    image={byItems.company[0]}
                    text={byItems.company[1]}
                ></Company>
            </div>
            <div className={item === 4 ? styles.inner_active : styles.inner} 
            onClick={() => active(4)}>
                <div className={styles.pointer}><p>Way to buy</p></div>
                <Button></Button>
            </div>
        </ul>

        <div className={styles.pagination}>
            <div onClick={() => back()}><img src={arrowSlider.src} className={item > 0 ? styles.arrow : styles.arrow_not_click} alt="icon" /></div>
            <ul className={styles.changes}>
                {items.map(([ key, value ], index) => (
                    <li key={index} className={item === index ? styles.change_active : styles.change} onClick={() => active(index)}><div></div></li>
                ))}
            </ul>
            <div onClick={(event) => {forward()}}><img className={item < items.length - 1 ? styles.arrow : styles.arrow_not_click} src={arrowSlider.src} alt="icon" /></div>
        </div>

        <div className={styles.other_cards}>
            <div className={styles.card_wrapper}>
                <ul className={styles.card}>
                    <div className={styles.inner} >
                        <NameProduct                   
                            title={byItems1.name}
                        ></NameProduct>
                    </div>
                    <div className={styles.inner} >
                        <Price                  
                            price={byItems1.price[0]}
                            shippingCost={byItems1.price[1]}
                        ></Price>
                    </div>
                    <div className={styles.inner} >
                        <Delivery                   
                            amount={byItems1.shipping[2]}
                        ></Delivery>
                    </div>
                    <div className={styles.inner} >
                        <Company                    
                            image={byItems1.company[0]}
                            text={byItems1.company[1]}
                        ></Company>
                    </div>
                    <div className={styles.inner}><Button></Button></div>
                </ul>
            </div>

            <div className={styles.card_wrapper}>
                <ul className={styles.card}>
                    <div className={styles.inner} >
                        <NameProduct                   
                            title={byItems2.name}
                        ></NameProduct>
                    </div>
                    <div className={styles.inner} >
                        <Price                  
                            price={byItems2.price[0]}
                            shippingCost={byItems2.price[1]}
                        ></Price>
                    </div>
                    <div className={styles.inner} >
                        <Delivery                   
                            amount={byItems2.shipping[2]}
                        ></Delivery>
                    </div>
                    <div className={styles.inner}>
                        <Company                    
                            image={byItems2.company[0]}
                            text={byItems2.company[1]}
                        ></Company>
                    </div>
                    <div className={styles.inner}><Button></Button></div>
                </ul>
            </div>
        </div>
    </div>
}