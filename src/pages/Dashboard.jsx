import React from 'react'
import DashboardWizard from '../component/dashboard/DashboardWizard'
import ChartContainer from '../component/dashboard/Charts/ChartContainer'
import TourTable from '../component/dashboard/TourTable'

export default function Dashboard() {
  return (
    <div className='max-w-[1500px] m-auto py-4 px-3'>
      <DashboardWizard />
      <ChartContainer />
      <div>
        <h2 className='font-bold text-white text-1.1rem lg:text-[1.4rem] mb-2'>Recent Tours</h2>
        <TourTable />
      </div>
    </div>
  )
}
