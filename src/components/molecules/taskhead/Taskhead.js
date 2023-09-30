import React from 'react'
import styles from './Taskhead.module.css'
import Image from 'next/image'
import Button from '@/components/atoms/button/button'
import Progress from '@/components/atoms/progress/Progress'

function Taskhead() {
  return (
    <div className={styles.taskConatiner}>
        <div className={styles.taskLeftConatiner}>
            <div className={styles.taskArrowConatiner}><Image src="/btnBack.png" alt="back btn" width={30} height={30}/></div>
            <div className={styles.taskHeaderConatiner}>
            <div className={styles.taskHeader}>School November Tasks</div>
            <div className={styles.taskHeaderTwo}>Created by Instructor Day on November 31, 2022</div>
            <div className={styles.taskButtonConatiner}>
              <div className={styles.taskUserContainer}><img src="/user.svg" alt="user" style={{height:'2rem'}}/></div>
              <div className={styles.taskButtons}>
              <Button background='#6418C3' color='white'>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <Image src="/addfriend.png" alt="frind" width={20} height={20}/>
              <p style={{marginLeft:'10px'}}>Invite People</p>
              </div>
              </Button>
              <Button background='#0D0B21' color='white'>
              <p>Private</p>
              </Button>
              <Button background='#7879F1' color='white'>
              <p>Edit</p>
              </Button>
              <Button background='#0D0B21' color='white'>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <Image src="/chat.png" alt="chat" width={20} height={20}/>
              <p style={{marginLeft:'10px'}}>45 Comments</p>
              </div>
              </Button>
              </div>
            </div>
            </div>
        </div>
        <div className={styles.taskRightConatiner}>
            <div className={styles.taskCompanyConatiner}>
                <div className={styles.companyText}>
                    <div>Centered Martial Arts</div>
                    <p>Sunnyvale, Ca</p>
                </div>
                <div>
                    <img src="/companyLogo.png" alt="logo" style={{height:'3rem'}}/>
                </div>
                <div>
                    <Image src="/icVert.png" alt="chat" width={10} height={15}/>
                </div>
            </div>
            <div className={styles.totalProgress}>
                <div className={styles.totalProgressHeading}>Total Progress 60%</div>
                <Progress height="5px" width="50%" percentage={60} color="#6418C3"/>
            </div>
        </div>
    </div>
  )
}

export default Taskhead