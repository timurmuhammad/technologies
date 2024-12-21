'use client'
import styles from "./language.module.scss";

import React, { useState } from 'react'

enum languageType {
    en = 'EN',
    de = 'DE'
}

export default function Language() {
    const [ languageValue, setLanguageValue ] = useState(languageType.en)

    return (
        <div className={styles.body}>
            {Object.values(languageType).map((languageType, index) => (
                <div
                    className={languageType === languageValue ? styles.value_active : styles.value }
                    key={index} 
                    onClick={() => setLanguageValue(languageType)}>
                        {languageType}
                </div>
            ))}
        </div>
    )
}
