import React from 'react'
import Searchbox from '@/components/atoms/searchbox/Searchbox'
import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Iconlist from '@/components/atoms/iconlist/Iconlist'
import Userinfo from '@/components/atoms/userinfo/Userinfo'

function Navbar() {
  return (
    <div className={styles.navConatiner}>
    <div className={styles.searcboxConatiner}><Searchbox/></div>
    <div className={styles.navRightConatiner}>
        <Link href='' className={styles.rightLink}>OTHER ITEMS</Link>
        <div><Iconlist/></div>
        <div className={styles.languageConatiner}>
            <div className={styles.languageTextConatiner}>
                <Image src="/unitedstates.png" alt="us flag" width={20} height={20}/>
                <p>ENGLISH</p>
                <Image src="/arrow.png" alt="arrow" width={13} height={8}/>
            </div>
        </div>
        <div className={styles.verticalLine}><img src="/separator.svg" alt="line"/></div>
        <div>        
           <Userinfo/>
        </div>
    </div>
    </div>
  )
}

export default Navbar