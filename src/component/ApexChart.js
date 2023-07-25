import { Tooltip } from 'bootstrap'
import React from 'react'
import Chart from 'react-apexcharts'
const ApexChart = () => {
  return (
    <div className='container'>
    <h1 className='text-center'>Rohit Kumar Sah</h1>
    <div className='row'>
        <div className='col-lg-12 col-md-12 col-12'>
            <Chart
            type="bar"
            width="100%"
            height={600}
            series={[
                {
                    name:'company1',
                    data:[100,200,300,400,500,600,700,800,900]
                },
                {
                    name:"CM",
                    data: [200,35,412,100,300,200,90,40,555]
                },
                {
                    name:"CM",
                    data: [200,35,412,100,300,200,90,40,555]
                },
                {
                    name:"CM",
                    data: [200,35,412,100,300,200,90,40,555]
                }
            ]}
            options={{
colors:["#131C85","#FD80A8"],
chart:{
    stacked:true
},
Tooltip:{
    followCursor:true
},
dataLabels:{
    formatter:(val)=>{
        return`$${val}`
    }
},
xaxis:{
    tickPlacement: 'on',
    title:{
        text: 'Months'
    },
    categories:['jan','fab','mar','apr','may','jun','july','aug','sep']
},
yaxis:{
    labels:{
        formatter:(val)=>{
            return `$${val}`
        },
    },
    
    title:{
            text:'Amount'
        }
},
legend:{
        position:'left'
},
title:{
    text:'Bar Chart',
    style:{
        fontSize:20
    }
},
grid:{
    borderColor:'green'
}
            }}
            >

            </Chart>
        </div>
    </div>
    </div>
  )
}

export default ApexChart