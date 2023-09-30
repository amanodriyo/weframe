import React from 'react';
import styles from './Searchbox.module.css'

function Searchbox(){
  return (
    <div className={styles.searchbar}>
        <div className={styles.searchImgConatiner}><img src='/search.png' className={styles.searchImg}/></div>
        <input className={styles.searchInput} placeholder='Search here'/>
    </div>
  )
}

export default Searchbox