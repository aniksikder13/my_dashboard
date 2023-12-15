import React, {useState, useEffect} from 'react'
import HorizontalBarChart from './HorizontalBarChart'
import MenuItem from '@mui/material/MenuItem'
import AreaChart from './AreaChart'
import Input from '../../ui/Input'
import areaChartData from '../../../utils/json/areaChart.json'
import barChartData from '../../../utils/json/barChart.json'

export default function ChartContainer() {
  const [renge, setRenge]= useState('7dayes')
  const [chartData, setChartData]= useState({
    area: [],
    bar: []
  })

  useEffect(()=> {
    switch (renge) {
      case '7dayes':
        setChartData({
          area: areaChartData.area_1,
          bar: barChartData.group_1
        })
        break;
      case '15dayes':
        setChartData({
          area: areaChartData.area_2,
          bar: barChartData.group_2
        })
        break;
      case '30dayes':
        setChartData({
          area: areaChartData.area_3,
          bar: barChartData.group_3
        })
        break;  
      default:
        break;
    }
  },[renge])

  return (
    <div>
      <div className='w-[300px] mt-8'>
      <Input
            size='small'
            type='select'
            name= 'Select Renge'
            selectedValue={renge}
            idName= 'renge'
            onSelect={e => {
              setRenge(e)
            }}  
        >
            <MenuItem value="7dayes">Last 7 Days</MenuItem>   
            <MenuItem value="15dayes">Last 15 Days</MenuItem>   
            <MenuItem value="30dayes">Last 30 Days</MenuItem>          
        </Input>

      </div>
      <div className='lg:flex pt-4'>
        <AreaChart chartData={chartData.area} />
        <HorizontalBarChart chartData={chartData.bar} />
      </div>
    </div>
  )
}
