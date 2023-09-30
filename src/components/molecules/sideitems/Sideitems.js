import React from 'react'
import styles from './Sideitems.module.css'
import Image from 'next/image'
import { sidebarItems } from '@/data/sidebarItems'

function Sideitems() {
  return (
    <div className={styles.ulConatiner}>
        <div className={styles.ulHeading}>MAIN MENU</div>
         <ul className={styles.listItemConatiner}>
        {sidebarItems.map((item, index) => (
          <li key={index} className={styles.listItems}>
            {item.icon}
            <div className={styles.listDataConatiner}>
            <div className={styles.listLabel}>{item.label}</div>
            <div className={styles.listInfoConatiner}>
            {item.notification && <span className={styles.listNotification}>{item.notification}</span>}
            {item.button && <button className={styles.listButton}>New</button>}
            {item.notification && item.dropdown ? (
              <Image src="/chevron.png" alt="Dropdown Icon" width={20} height={20} style={{ transform: 'rotate(90deg)', position:'relative', top:'2px' }}/>
            ) : item.dropdown ? (
              <Image src="/chevron.png" alt="Dropdown Icon" width={20} height={20} style={{ position:'relative', top:'2px' }} />
            ) : null}
            </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
  )
}

export default Sideitems