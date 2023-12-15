import React from 'react'
import DashboardWizard from '../component/dashboard/DashboardWizard'
import ChartContainer from '../component/dashboard/Charts/ChartContainer'
import TourTable from '../component/dashboard/TourTable'

export default function Dashboard() {
  return (
    <div className='max-w-[1500px] m-auto py-5 px-3'>
      <DashboardWizard />
      <ChartContainer />
      <TourTable />
    </div>
  )
}
