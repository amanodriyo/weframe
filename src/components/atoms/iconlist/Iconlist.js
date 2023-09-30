import React from 'react'
import styles from './Iconlist.module.css'
import Image from 'next/image'

function Iconlist() {
  return (
    <div>
        <ul className={styles.iconListConatiner}>
            <li><Image src="/bell.png" alt="Dropdown Icon" width={20} height={20}/><div><span>15</span></div></li>
            <li><Image src="/VideoLesson.png" alt="Dropdown Icon" width={20} height={20}/><div><span>5</span></div></li>
            <li><Image src="/checkbox.png" alt="Dropdown Icon" width={20} height={20}/><div><span>2</span></div></li>
            <li><Image src="/office.png" alt="Dropdown Icon" width={20} height={20}/><div style={{backgroundColor:'#E328AF'}}><span>!</span></div></li>
        </ul>
    </div>
  )
}

export default Iconlist