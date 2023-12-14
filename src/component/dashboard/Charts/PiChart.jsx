import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../../../utils/json/barChart.json'

export default function PiChartComopnent() {
  return (
    <div className='lg:w-[40%] mt-3 lg:mt-0'>
      <h2  className='font-bold text-white text-1.1rem lg:text-[1.4rem] mb-2'>Total Performance</h2>

      <ResponsiveContainer width="100%" height={225}>
        <BarChart 
            layout="vertical" 
            width={500} 
            height={200} 
            data={data.group} 
            margin={{ 
                top: 5,
                right: 30, 
                left: 20, 
                bottom: 5 
            }}
        >
            <CartesianGrid stroke='#414c5f' vertical={false} />
            <YAxis 
                dataKey="name" 
                type="category" 
                tick={{fill:'white', fontSize: 14, whiteSpace: 'nowrap'}} 
                width={70}
            />
            <XAxis type="number" tick={{fill:'white'}} />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#FFA5CB" stroke='#F765A3' barSize={11} />
            <Bar dataKey="uv" fill="#E697FF" stroke='#A155B9' barSize={11} />
            <Bar dataKey="amt" fill="#63ABFD" stroke='#165BAA' barSize={11} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}
