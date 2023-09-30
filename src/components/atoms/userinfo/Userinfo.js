import React from 'react'
import styles from './Userinfo.module.css'
import Image from 'next/image'

function Userinfo() {
  return (
    <div>
        <div className={styles.profileInfoConatiner}>
             <div className={styles.profilePic}></div>
             <div className={styles.profileText}>
                <p>Instructor Day</p>
                <p>Super Admin</p>
             </div>
             <Image src="/arrow.png" alt="Dropdown Icon" width={13} height={8}/>
        </div>
    </div>
  )
}

export default Userinfo