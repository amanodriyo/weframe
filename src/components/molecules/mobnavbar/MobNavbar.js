import React from 'react'
import Userinfo from '@/components/atoms/userinfo/Userinfo'
import Image from 'next/image'
import styles from './MobNavbar.module.css'

function Mobnavbar({ onToggleSidebar }) {
  return (
    <div className={styles.mobNavConatiner}>
    <div className={styles.mobNavLeft}>
        <Image src="/hamburgermenu.png" alt="hamburger" width={30} height={30} onClick={onToggleSidebar} />
        <div>weframetech</div>
    </div>
    <Userinfo/>
    </div>
  )
}

export default Mobnavbar