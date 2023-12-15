import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AreaChartComponent({chartData}) {
  return (
    <div className='lg:w-[60%]'>
      <h2  className='font-bold text-white text-1.1rem lg:text-[1.4rem] mb-2'>Team Performance</h2>
      <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={chartData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} stroke='#414c5f' />
            <XAxis 
              dataKey="name"
              axisLine={{ className: 'custom-x-axis' }} 
              tickLine={false} 
              tick={{fill:'#d3eaff', fontSize: 14, whiteSpace: 'nowrap'}}
            />
            <YAxis 
              tick={{fill:'#d3eaff', fontSize: 14, whiteSpace: 'nowrap'}} 
            />
            <Tooltip />
            <Area type="monotone" dataKey="growth" stroke="#5877ff" fill="#5261a1" />
          </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}
