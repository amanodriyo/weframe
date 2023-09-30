import React from 'react'
import styles from './MobSidebar.module.css'
import Sideitems from '../sideitems/Sideitems'
import Image from 'next/image'
import Searchbox from '@/components/atoms/searchbox/Searchbox'
import Iconlist from '@/components/atoms/iconlist/Iconlist'

function MobSidebar({ onToggleSidebar }) {
  return (
    <div className={styles.mobSideConatiner}>
    <div className={styles.mobSideHeading}>
      <div className={styles.mobLogo}>weframetech</div>
      <Image src="/close.png" alt="Dropdown Icon" width={30} height={30} onClick={onToggleSidebar} />
    </div>
    <div className={styles.mobUserInput}>
      <Searchbox/>
      <Iconlist/>
    </div>
     <Sideitems/>
     <div className={styles.mobBanner}><Image src="/banner.png" alt="Dropdown Icon" fill/></div>
    </div>
  )
}

export default MobSidebar