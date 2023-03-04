import React from 'react'
import styles from './styles/header.module.css'
import search from '../assets/search.svg'
const Header = () =>{
    return(
        <section className={styles.headerContainer}>
            <div className={styles.mainHeader}>
                <h1>Yuksalib birlashgandan,</h1>
                <h1>Birlashib yuksalgan afzal </h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam odio deserunt soluta dicta fugiat nesciunt dolorum at ullam. Atque magnam amet neque qui illum quam quod, veniam nobis voluptatibus?</p>
            <div className={styles.searchBox}>
                <div className={styles.inputBox}>
                    <img src={search} alt="" />
                    <input type="text" placeholder='search the course' />
                    <button>Search</button>
                </div>
            </div>
        </section>
    )
}

export default Header