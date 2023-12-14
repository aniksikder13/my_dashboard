import React from 'react'
import PiChart from './Charts/PiChart'
import AreaChart from './Charts/AreaChart'
import styles from './dashboard.module.css'

export default function ChartContainer() {
  return (
    <div className={styles.chartContainer}>
        <AreaChart />
        <PiChart />
    </div>
  )
}
