import Link from "next/link";

import { FeaturesSlider } from "@/components/featuresSlider"; 
import { Search } from "../components/search";
import { ReviewsSlider } from "@/components/reviews-slider";
import { featuresType } from "@/types/featuresType";
import { delivery } from "@/types/featuresType";

import styles from "../shared/static/mainPage.module.scss";
import banner from "../shared/static/img/banner.png";
import bolt from "../shared/static/img/bolt.png";
import arrowLeft from "../shared/icons/arrow-left.svg";
import arrowRight from "../shared/icons/arrow-right.svg";
import arrowBlue from "../shared/icons/arrow-blue.svg";
import vectorGo from "../shared/icons/vector-go.svg";
import check from '../shared/icons/check.svg'
import quickSearch from "../shared/icons/quickSearch.svg";
import shipping from '../shared/icons/shipping.svg'
import priceComparison from "../shared/icons/priceComparison.svg";
import articles from "../shared/icons/articles.svg";
import background from "../shared/static/img/background.jpg";
console.log(true)
export default function Main() {

  return (
      <div className={styles.main}>
        <div className={styles.banner}>

          <div className={styles.banner__body}>
            <img src={banner.src} alt="banner" />
          </div>

          <div className={styles.banner__title}>
            <h1 className={styles.banner__h1}>INDUSTRIAL AUTOMATION
              <span>SEARCH ENGINE</span>
            </h1>

            <p className={styles.banner__p}>The largest search site
              <span>for Industrial Automation parts</span>
            </p>

            <img className={styles.banner__bolt} src={bolt.src} alt="img" />
          </div>
          
        </div>

        <div className={styles.main__container + ' _container'}>
          <div className={styles.subtitle}>
            <h2 className={styles.subtitle__h2}><span className={styles.subtitle__underline}>Find the right product</span> <span>at the right price</span></h2>

            <Search></Search>

            <div className={styles.subtitle__description}>
              <img className={styles.subtitle__arrowLeft} src={arrowLeft.src} alt="icon" />

              <div className={styles.subtitle__inner}>
                <h3 className={styles.subtitle__h3}>How it works?</h3>
                <p className={styles.subtitle__p}>Search platform looking for some parts in Industrial Automation. <span className={styles.block}>Just enter your query and get all results from our database</span></p>
              </div>

              <img className={styles.subtitle__arrowRight} src={arrowRight.src} alt="icon" />
            </div>
          </div>

          <div className={styles.services}>
            <h2 className={styles.subtitle__h2}>Our services</h2>

            <ul className={styles.services__list}>

              <li className={styles.services__item}>
                <div className={styles.services__image}>
                  <img src={quickSearch.src} alt="icon" />
                </div>
                <div className={styles.services__text}>
                  <h4 className={styles.services__name}>Quick Search</h4>
                  <p className={styles.services__description}>Easily and quickly find multiple offers by your key query</p>
                </div>
              </li>

              <li className={styles.services__item}>
                <div className={styles.services__image}>
                  <img src={priceComparison.src} alt="icon" />
                </div>
                <div className={styles.services__text}>
                  <h4 className={styles.services__name}>Price Comparison</h4>
                  <p className={styles.services__description}>Compare multiple quotes and choose a fair price</p>
                </div>
              </li>

              <li className={styles.services__item}>
                <div className={styles.services__image}>
                  <img src={shipping.src} alt="icon" />
                </div>
                <div className={styles.services__text}>
                  <h4 className={styles.services__name}>Shipping costs comparison</h4>
                  <p className={styles.services__description}>Sort offers by delivery time and choose the best variant</p>
                </div>
              </li>

              <li className={styles.services__item}>
                <div className={styles.services__image}>
                  <img src={articles.src} alt="icon" />
                </div>
                <div className={styles.services__text}>
                  <h4 className={styles.services__name}>+100 000 Articles</h4>
                  <p className={styles.services__description}>In our database. It’s a good chance find parts what you need</p>
                </div>
              </li>
            </ul>

            <div className={styles.services__button}>
              <img src={background.src} alt="img" />
            </div>
          </div>

          <div className={styles.subtitle}>
            <h2 className={styles.subtitle__h2}><span className={styles.subtitle__underline}>Features</span></h2>
            <div className={styles.subtitle__description}>
              <div className={styles.subtitle__inner}>
                <h3 className={styles.subtitle__h3}>How it works?</h3>
                <p className={styles.subtitle__p}>When search engine found results of your query <span className={styles.block}>and show it you see next information:</span></p>
              </div> 
            </div>
          </div>

          <FeaturesSlider></FeaturesSlider>

          <div className={styles.features_wrapper}>
            <div className={styles.features}>
              <div className={styles.subtitle__inner}>
                <h3 className={styles.subtitle__h3}>Choose best price for you</h3>
                <p className={styles.subtitle__p}>Searc platform gathering prices from a lot of stores <span>and can <span className={styles.bold}>show you many various</span>. Easy.</span>
                <img className={styles.features__arrowBlue} src={arrowBlue.src} alt="icon" /></p>
              </div>
  
              <ul className={styles.card}>
              {featuresType.map((item, index) => index !== featuresType.length - 1 && 
                          <li
                            className={styles.card__item} 
                            key={index}>
                              <div className={styles.card__item_body}>
                                <p className={styles.card__name}>
                                  {item.name}
                                </p>
                                <div className={styles.card__price}>
                                  <p className={styles.card__number}>{item.price[0] + ' €'}</p>
                                  <p className={styles.card__string}>{item.price[1] + ' € Shipping cost'}</p>
                                </div>
                              </div>
                          </li>
                      )}
              </ul>
            </div>

            <div className={styles.features}>
              <div className={styles.subtitle__inner}>
                <h3 className={styles.subtitle__h3}>View many variants</h3>
                <p className={styles.subtitle__p}>Search platform displays many suggestion from several services and stores where <span className={styles.bold}>you can buy it</span>.
                <img className={styles.features__arrowBlue} src={arrowBlue.src} alt="icon" /></p>
              </div>
  
              <ul className={styles.card}>
              {featuresType.map((item, index) => item !== featuresType[0] &&
                  <li
                      className={styles.card__item} 
                      key={index}>
                        <div className={styles.card__item_body}>
                          <div className={styles.card__company}>
                            <img src={item.company[0]} alt="logo" />
                            <p>{item.company[1]}</p>
                          </div>
                          <Link href={'/'} className={styles.card__button}>
                            <span>Go to store</span>
                            <img src={vectorGo.src} alt="icon" />
                          </Link>
                        </div>
                  </li>
              )}
              </ul>
            </div>
            
  
            <div className={styles.features}>
              <div className={styles.subtitle__inner}>
                <h3 className={styles.subtitle__h3}>Use Fast delivery</h3>
                <p className={styles.subtitle__p}>If you have to get parts as soon as possible you can choose <span className={styles.bold}>Fast delivery</span> option. Also you can see <span className={styles.bold}>Shipping cost</span> for more prices understandable
                <img className={styles.features__arrowBlue} src={arrowBlue.src} alt="icon" /></p>
              </div>

              <ul className={styles.card}>
              {Object.values(delivery).map((item, index) => (
                          <li
                              className={styles.card__item} 
                              key={index}>
                                {index === 0 && <h3>Shipping<p><img src={check.src} alt="icon" /><span>Fast delivery only</span></p></h3>}
                                <div className={styles.card__item_body}>
                                <img src={item.icon} alt="icon" />
                                  <p className={styles.card__name}>
                                    {item.name}
                                  </p>
                                </div>
                          </li>
                      ))}
              </ul>
            </div>
          </div>

          <div className={styles.letsTry}>
            <h3 className={styles.letsTry__h3}>Let’s try!</h3>
            <p className={styles.letsTry__p}>Search platform looking for some parts in Industrial Automation. <span>Just enter your query and get all results from our database</span></p>
            <Search></Search>
          </div>
        </div>

        <div className={styles.reviews}>
          <div className={styles.reviews__container + ' _container'}>
            <h2 className={styles.subtitle__h2}><span className={styles.subtitle__underline}>Customer reviews</span></h2>
            <ReviewsSlider />
            <Link href={'/'} className={styles.slider__button}>Add review</Link>
          </div>
        </div>
      </div>
  );
}
