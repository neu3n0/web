// import React from "react";
import styles from './Header.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>Логотип</div>
            <div className={styles.header_container}>
                <div className={styles.kek}>About</div>
                <div className={styles.kek}>Support</div>
                <div className={styles.kek}>Login</div>
            </div>
        </div>
    )
}