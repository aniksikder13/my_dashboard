import React from 'react'
import styles from './dashboard.module.css'
import wizard from '../../utils/json/wizard.json'

export default function DashboardWizard() {

  return (
    <ul className={styles.wizardCards}>
      {
        wizard?.wizars?.map((item, index) => <li key={index}>
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
