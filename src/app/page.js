'use client'
import React, { useState } from 'react';
import styles from './page.module.css'
import Sidebar from '@/components/molecules/sidebar/Sidebar'
import Navbar from '@/components/molecules/navbar/Navbar'
import Task from '@/components/organisms/task/Task'
import Mobnavbar from '@/components/molecules/mobnavbar/MobNavbar'
import MobSidebar from '@/components/molecules/mobsidebar/MobSidebar'

export default function Home() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className={styles.main}>
      <div className={styles.webSidebar}><Sidebar/></div>
      {isSidebarOpen && <div className={styles.mobSidebar}><MobSidebar onToggleSidebar={toggleSidebar}/></div>}
      <div className={styles.rightWrapper}>
        <div className={styles.navWrapper}>
          <div className={styles.mobNav}><Mobnavbar onToggleSidebar={toggleSidebar}/></div>
          <div className={styles.webNav}><Navbar/></div>
          </div>
        <div className={styles.taskWrapper}><Task/></div>
      </div>
    </main>
  )
}
