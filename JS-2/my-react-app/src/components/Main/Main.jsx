import React from 'react';
import styles from './Main.module.css';

const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main__image}></div>
            <div className={styles.main__personal}>
                <div className={styles.main__avatar}>
                    <img src="dsafsdfsfds" alt="asdfsaff" />
                </div>
                <div className={styles.main__data}>
                    <h2>Evgen Kushnir</h2>
                    <ul className={styles.main__list}>
                        <li>Date of Birth: 24 August</li>
                        <li>City: Lviv</li>
                        <li>Education: CHDTU'19</li>
                        <li>Web Site: https://github.com/Darknel</li>
                    </ul>
                </div>
            </div>
            <form className={styles.main__form}>
                <fieldset>
                    <legend>My posts</legend>
                    <input type="textarea" className={styles.main__text} id="text" placeholder="your news..." />
                    <input type="submit" className={styles.main__button} />
                </fieldset>
            </form>
        </main>
    );
}

export default Main;