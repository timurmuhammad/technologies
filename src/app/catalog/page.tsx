'use client'

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import styles from '../../shared/static/catalogPage.module.scss'
import IProduct from './types/Product.interface';
import ProductService from '@/components/search/Product.service';
import { TotalContext } from '../../app/layout';
import { Button } from '@/components/button';
import { Price } from '@/components/price';
import { NameProduct } from '@/components/nameProduct';
import Pagination from '../../components/pagination';
import { Category } from '@/components/categories';

const Catalog = () => {
    const { searchString, setSearchString } = useContext(TotalContext)
    const [goods, setGoods] = useState<IProduct[]>([])
    const { category, setCategory } = useContext(TotalContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [amountPages, setAmountPages] = useState(1)
    const [ description, setDescription ] = useState<any>()
    const limitPage = 12

    useEffect(() => {
        if (searchString.length > 0) {
            const fetchData = async () => {
                const response = await ProductService.search(searchString, currentPage - 1, limitPage)
                if (response) {
                    setGoods(response.products )
                    response.pages && setAmountPages(response.pages)
                }
                setSearchString('')
            }
            fetchData()
        }
        }, [searchString, currentPage])
    useEffect(() => {
        if (category.length > 0) {
            const fetchData = async () => {
                const response = await ProductService.getProductsByCategory({
                    page: currentPage - 1,
                    size: limitPage,
                    isParent: category.length === 1,
                    category: category[category.length - 1]
                })
                if (response) {
                    setGoods(response.products.data);
                    response.pages && setAmountPages(response.pages)
                }
            }
        fetchData()

    }}, [currentPage, category])
    useEffect(() => {
    if (searchString.length === 0 && category.length === 0) {
        const fetchData = async () => {
            const response = await ProductService.getAll(currentPage - 1, limitPage)
            if (response) {
                setGoods(response.products)
                response.pages && setAmountPages(response.pages)
            }
        }
        fetchData()
    }
    }, [ currentPage, category ])

    return (
        <div className={styles.main__container + ' _container'}>
            {category.length > 0 && <ul className={styles.path_list}>
                {category.map((item: string, index: number) => 
                    <li key={index} onClick={() => {
                        const newCategory = category.filter((el: string, i: number) => i <= index)
                        setCategory(newCategory)
                    }} 
                    className={styles.path_item}><span>{item}</span> {index < category.length - 1 && '/'} </li> 
                )}
            </ul>}

            <h1 className={styles.title}>Suggestions gallery</h1>

            <div className={styles.body}>
                <Category
                    category={category}
                    setCategory={setCategory}
                    setDescription={setDescription}
                ></Category>

                <div className={styles.inner}>
                    <div className={styles.goods}>
                        {goods.map((item: IProduct) => (
                            item !== null && <div key={item.id} className={styles.product}>
                                <div className={styles.image}><img src={item.image} alt="img" /></div>                      
                                <NameProduct
                                    title={item.title}
                                ></NameProduct>
                                <p className={styles.info}>{item.info}</p>
                                <Price
                                    price={item.price + ''}
                                    shippingCost={item.shipping_cost + ''}
                                ></Price>
                                <Link href={`/product/${encodeURIComponent(item.id)}`}>
                                    <Button></Button>
                                </Link>
                                <p className={styles.offers}>13 offers</p>
                            </div>
                        ))}
    
                        
                    </div>

                    {amountPages > 1 && <Pagination
                        currentPage={currentPage}
                        lastPage={amountPages}
                        maxLength={5}
                        setCurrentPage={setCurrentPage}
                    ></Pagination>}
                    {category.length > 0 && description ? <div className={styles.text}>
                        <h2 className={styles.text__h2}>{description.title}</h2>
                        <p className={styles.text__p}>{description.description}</p>
                        {description.faq.length > 0 && <h2 className={styles.text__h2}>FAQ</h2>}
                        {description.faq.map((item: any)=> (
                            <div key={item.id}>
                                <h3 className={styles.text__h3}>{item.question}</h3>
                                <p className={styles.text__p}>{item.answer}</p>
                            </div>
                        ))}
                    </div>

                    : <div className={styles.text}>
                        <h2 className={styles.text__h2}>Welcome to iase24.com - Your Ultimate Industrial Automation Search Engine!</h2>
                        <h3 className={styles.text__h3}>Discover a Variety of High-Quality Products from Top Brands</h3>
                        <p className={styles.text__p}>Dive into the world of Industry 4.0 automation technology and discover a variety of high-quality products from top brands such as ABB, OMRON, ATI Industrial Automation, Siemens, Indramat, Rockwell Automation, FANUC, Control Techniques, Yaskawa, Mitsubishi Electric, Schneider Electric, Emerson, KUKA, Yokogawa, and many more.</p>
                        <h3 className={styles.text__h3}>An Unparalleled Selection of Products and Solutions</h3>
                        <p className={styles.text__p}>Our portal offers an unparalleled selection of products and solutions for industrial automation. Whether you're looking for robots, control systems, drive technology, sensors, or other components, you'll find everything you need for your automation projects with us.</p>
                        <p className={styles.text__p}>Thanks to our powerful search engine, you don't need to register to find the best deals. Our system automatically searches through a variety of online stores and presents you with the best prices and products at a glance. With iase24.com, you'll save time and money while ensuring you make the right decision for your automation projects.</p>
                    </div> 

                    
                    }
                </div>
            </div>
        </div>
    )
}

export default Catalog;
