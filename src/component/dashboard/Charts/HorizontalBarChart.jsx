import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function HorizontalBarChart({chartData}) {
  return (
    <div className='lg:w-[40%] mt-3 lg:mt-0'>
      <h2  className='font-bold text-white text-1.1rem lg:text-[1.4rem] mb-2'>Group Performance</h2>

      <ResponsiveContainer width="100%" height={225}>
        <BarChart 
            layout="vertical" 
            width={500} 
            height={200} 
            data={chartData} 
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
                tick={{fill:'#d3eaff', fontSize: 14, whiteSpace: 'nowrap'}} 
                width={70}
            />
            <XAxis 
              type="number" 
              tick={{fill:'#d3eaff', fontSize: 14, whiteSpace: 'nowrap'}}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="target" fill="#FFA5CB" stroke='#F765A3' barSize={11} />
            <Bar dataKey="cost" fill="#E697FF" stroke='#A155B9' barSize={11} />
            <Bar dataKey="profit" fill="#63ABFD" stroke='#165BAA' barSize={11} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}
