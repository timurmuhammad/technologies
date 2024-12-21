'use client'
import '../../shared/icons/search.svg'
import { useContext, useRef, useState } from 'react'

import styles from './search.module.scss'
import searchIcon from '../../shared/icons/search.svg'
import Link from 'next/link'
import {TotalContext} from '../../app/layout'


type Props = {
    onHeader?: boolean
}

export const Search = ({ 
    onHeader = false,
}) => {

    const [searchValue, setSearchValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const searchRef = useRef(null)

    const { searchString, setSearchString } = useContext(TotalContext)


    function onClick() {
        setSearchString && setSearchString(searchValue)
    }

    function handleQueryChange(value: string) {
        setSearchValue(value)
    }

    return <div className={onHeader ? styles.wrapper : styles.wrapper_border} ref={searchRef}>
        <div className={styles.body}>
            <input
                ref={inputRef} 
                value={searchValue} 
                onChange={event => {
                    handleQueryChange(event.target.value)
                }} 
                className={styles.input} 
                type="text" 
                placeholder="Search by name, word, article or ID"
            />
            {searchValue.length > 0 && <div className={styles.cleare} onClick={() => {
                setSearchValue('')
                inputRef.current && inputRef.current.focus()
            }}></div>}  
        </div>

        <Link href={'/catalog'} className={onHeader 
            ? styles.go_icon + (searchValue.length === 0 ? ' _notClick' : '') 
            : styles.go_button + (searchValue.length === 0 ? ' _notClick' : '')} 

            onClick={() => onClick()}

        >
            <div
                className={styles.searchIcon}
            ><img src={searchIcon.src} alt='icon'></img></div>
        </Link>

    </div>
}