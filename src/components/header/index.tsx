import { useContext, useEffect, useState } from "react";
import styles from './header.module.scss'
import { PopupList } from "../../components/popup-list";
import { Search } from "../../components/search";
import { Logo } from "../../components/logo";
import { manufacturersType, aboutType } from "../../types/navType";
import Language from "../language";
import { Footer } from "../footer";
import {TotalContext} from '../../app/layout'

export const Header = () => {
    const [ burgerActive, setBurgerActive ] = useState(false)
    const {parentCategories, setCategory, setCategoryChilds} = useContext(TotalContext)

    useEffect(() => {
        if (typeof document !== 'undefined') {
            if (burgerActive) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
        }   
    }, [burgerActive]);

    return ( 
        <header className={styles.header}>
            <div className={styles.header__container + ' _container'}>
                <Logo
                    onHeader={true}
                ></Logo>

                    <PopupList
                        popupList={parentCategories}
                        title={'Categories'}
                        category={true}
                        setCategory={setCategory}
                        setCategoryChilds={setCategoryChilds}
                    ></PopupList>
        
                <PopupList
                    popupList={manufacturersType}
                    title={'Manufactures'}
                ></PopupList>
    
                <Search
                    onHeader={true}
                ></Search>
    
                <PopupList
                    popupList={aboutType}
                    title={'About'}
                ></PopupList>

                <Language></Language>

                <div className={burgerActive ? styles.nav_burger_active : styles.nav_burger} onClick={() => setBurgerActive(!burgerActive)}>
                    <span></span>
                </div>
            </div>
            <div className={burgerActive ? styles.nav_popup_active : styles.nav_popup}>
                {burgerActive && <div className={styles.category}>
                    <PopupList
                        popupList={parentCategories}
                        title={'Categories'}
                        category={true}
                        setCategory={setCategory}
                        setCategoryChilds={setCategoryChilds}
                        onClickBurger={setBurgerActive}
                    ></PopupList>
                </div>}
                {burgerActive && <Footer onClickBurger={setBurgerActive}></Footer>}
            </div>
        </header>
        
    );
};
