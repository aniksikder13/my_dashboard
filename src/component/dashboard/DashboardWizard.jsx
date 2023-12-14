import React from 'react'
import styles from './dashboard.module.css'
import wizard from '../../utils/json/wizard.json'

export default function DashboardWizard() {
  // Fetch wizards data from json file
  const wizardList = wizard.wizars

  return (
    <ul className={styles.wizardCards}>
      {
        wizardList?.map((item, index) => <li key={index}>
          <h4>{item.title}</h4>
          <h1>
            {item.point}
          </h1>
          <p>Last record: {item.period}</p>
        </li>) 
      }
    </ul>
  )
}
