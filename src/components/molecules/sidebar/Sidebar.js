import React from 'react'
import styles from './Sidebar.module.css';
import Image from 'next/image';
import Sideitems from '../sideitems/Sideitems';

function Sidebar() {

  return (
    <div className={styles.sidebarConatiner}>
      <div className={styles.headingConatiner}><h1>weframetech</h1><Image src="/hamburgermenu.png" alt="hamburger" width={20} height={20}/></div>
      <Sideitems/>
      <div className={styles.bannerContainer}><Image src="/banner.png" alt="Dropdown Icon" fill/></div>
    </div>
  )
}

export default Sidebar