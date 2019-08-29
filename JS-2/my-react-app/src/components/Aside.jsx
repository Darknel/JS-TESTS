import React from 'react';
import styles from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <nav className={styles.aside__nav}>
            <a href="#">Profile</a>
            <a href="#">Messages</a>
            <a href="#">News</a>
            <a href="#">Music</a>
            <a href="#">Settings</a>
            </nav>
        </aside>
    );
}

export default Aside;