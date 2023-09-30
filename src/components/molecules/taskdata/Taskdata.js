// components/TaskBoard.js
import React from 'react';
import { Data } from '@/data/data';
import Card from '@/components/atoms/card/Card';
import styles from './Taskdata.module.css'

function Taskdata() {

  const groupedCards = Data.reduce((acc, card) => {
    const { status, ...rest } = card;
    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(rest);
    return acc;
  }, {});

  const statuses = ['To-Do List', 'In Progress', 'Done', 'Revised'];

  return (
    <div className={styles.taskBoard}>
      <div className={styles.taskColumnsContainer}>
        {statuses.map((status, index) => (
          <div className={styles.taskColumn} key={index}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'15px'}}>
           <h2 style={{fontSize:'16px'}}>{status} ({groupedCards[status] ? groupedCards[status].length : 0})</h2>
           <button className={styles.addButton}>+</button>
          </div>
            {groupedCards[status] ? (
              groupedCards[status].map((card, cardIndex) => (
                <Card key={cardIndex} {...card} />
              ))
            ) : (
              <div className={styles.emptySection}>
                <div className={styles.moveCard}>Move card here</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Taskdata;
