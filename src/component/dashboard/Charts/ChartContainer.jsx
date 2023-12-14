import React from 'react'
import PiChart from './PiChart'
import AreaChart from './AreaChart'

export default function ChartContainer() {
  return (
    <div className='lg:flex py-5 mt-4'>
        <AreaChart />
        <PiChart />
    </div>
  )
}
