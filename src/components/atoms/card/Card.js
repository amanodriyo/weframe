import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image';
import Progress from '../progress/Progress';

function Card({ title, description, progress, color, dueDate }) {
    return (
        <div className={styles.card}>
          <div className={styles.cardHeading}>
          <li style={{ color: color, }}>{title}</li>
          <Image src="/icVert.png" alt="chat" width={10} height={15} style={{transform: 'rotate(90deg)'}}/>
          </div>
          <div className={styles.cardContent}>
            <p>{description}</p>
            <Progress height="5px" width="100%" percentage={progress} color={color}/>
            <div className={styles.cardFooter}>
            <img src="/user.svg" alt="user" style={{height:'1.5rem'}}/>
            <div className={styles.dueDate}><Image src="/clock.png" alt="chat" width={10} height={10} style={{marginRight:'5px'}}/>Due in {dueDate}</div>
            </div>
          </div>
        </div>
      );
    };

export default Card