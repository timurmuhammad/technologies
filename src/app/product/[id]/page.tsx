'use client'

import Link from "next/link"
import { useContext, useEffect, useState } from "react"

import ProductService from "@/components/search/Product.service"
import styles from  '../../../shared/static/productPage.module.scss'
import { Button } from "@/components/button"
import { Company } from "@/components/company"
import { Price } from "@/components/price"
import { Delivery } from "@/components/delivery"
import { NameProduct } from "@/components/nameProduct"
import IProduct from '../../catalog/types/Product.interface'
import { TotalContext } from "@/app/layout"
import { Filter } from "@/components/filter"

type Props = {
    params: {
        id: string
    }
}

const Product = (({ params }: Props) => {
    const [ productData, setProductData ] = useState<IProduct>()
    const { category, setCategory } = useContext(TotalContext)
    const [goods, setGoods] = useState<IProduct[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [amountPages, setAmountPages] = useState(1)
    const limitPage = 8

    useEffect(() => {
        const fetchData = async () => {
            const response = await ProductService.findById(params.id)
            if (response) {
                setProductData(response)
            }
        }
        fetchData()
    }, [])

    return <div className={styles.main__container + ' _container'}>
        {category.length > 0 && <ul className={styles.path_list}>
            {category.map((item: string, index: number) => 
                <Link href={'/catalog'} key={index} onClick={() => {
                    const newCategory = category.filter((el: string, i: number) => i <= index)
                    setCategory(newCategory)
                }} 
                className={styles.path_item}><span>{item}</span> {index < category.length - 1 && '/'} </Link> 
            )}
        </ul>}

        { productData && <div className={styles.productId}>
            <div className={styles.image}>
                <div className={styles.image_item}><img src={productData.image} alt="img" /></div>
                <Link href={productData.link_production}>
                    Direct to manufacturer <span>{productData.title.split(' ')[0]}</span>
                </Link>
            </div>
            <div className={styles.data}>
                <div className={styles.name_wrapper}>
                    <NameProduct
                        title={productData.title}
                    ></NameProduct>
                </div>
                <p className={styles.name}></p>
                <p className={styles.number}>{`Item number: ${productData.unique_number}`}</p>
                <div className={styles.description}>
                    <p className={styles.title_description}>Technical details</p>
                    <ul className={styles.description_body}>
                        {productData.info.split(',').map((item, index) => (
                            <li key={index} className={styles.description_item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <p className={styles.title_description}>Prices</p>
                <div className={styles.features}>
                    <div className={styles.price_wrapper}>
                        <Price
                            price={`${productData.price}`}
                            shippingCost={`${productData.shipping_cost}`}
                        ></Price>
                        <p className={styles.avg_price}>
                            {`${productData.price} €`}
                        </p>
                    </div>
                    <div className={styles.features_inner}>
                        <div className={styles.save}>
                            <p className={styles.save_string}>You save:</p>
                            <p className={styles.save_number}>0%</p>
                        </div>
                        <Delivery
                            amount={'2'}
                        ></Delivery>
                        <Link href={`https:${productData.name_seller}`} 
                        className={styles.company_wrapper}>
                            <Company
                                text={productData.name_seller}
                                image={productData.logo} 
                            ></Company>
                        </Link>
                    </div>
                </div>
                <Link href={productData.link_product}><Button></Button></Link>
            </div>
        </div>}

        <h1 className={styles.title}>Suggestions gallery</h1>

        <Filter
            goods={goods}
            setGoods={setGoods}
            productId={params.id}
            page={currentPage - 1}
            size={limitPage}
        ></Filter>

        <div className={styles.goods}>
            {goods[0] !== null && goods.map((item: any) => (
                <div key={item.id} className={styles.product}>
                    <div className={styles.image}><img src={item.image} alt="img" /></div>                      
                    <NameProduct
                        title={item.title}
                    ></NameProduct>
                    <Price
                        price={item.price}
                        shippingCost={item.shipping_cost}
                    ></Price>
                    <Delivery
                        amount={item.delivery_speed}
                    ></Delivery>
                    <Link href={`/product/${encodeURIComponent(item.id)}`}>
                        <Button></Button>
                    </Link>
                    <Company
                        text={item.name_seller}
                        image={item.logo} 
                    ></Company>
                </div>
            ))}                      
        </div>
        <Link href={'/catalog'} className={styles.button_wrapper}><span>Show more</span></Link>
    </div>
}
)
export default Product