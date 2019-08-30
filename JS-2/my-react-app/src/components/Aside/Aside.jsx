import React from 'react';
import styles from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <nav className={styles.aside__nav}>
                <a className={` ${styles.link} ${styles.active} `} id="active" href="#">Profile</a>
                <a className={styles.link} href="#">Messages</a>
                <a className={styles.link} href="#">News</a>
                <a className={styles.link} href="#">Music</a>
                <a className={styles.link} href="#">Settings</a>
            </nav>
        </aside>
    );
}

export default Aside;