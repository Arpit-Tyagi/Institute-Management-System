import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
  
  
const Chart = () => {
  
// Sample data
const data = [
  {name: '2014', DAC: 70, DAI:75, course: 'DAC', cou: 'DAI'},
  {name: ' 2015', DAC: 77, DAI:79, course: 'DAC', cou: 'DAI'},
  {name: '2016', DAC: 85, DAI:85, course: 'DAC', cou: 'DAI'},
  {name: '2017', DAC: 89, DAI:90, course: 'DAC', cou: 'DAI'},
  {name: '2018', DAC: 70, DAI:75,course: 'DAC', cou: 'DAI'},
  {name: ' 2019', DAC: 77, DAI:79, course: 'DAC', cou: 'DAI'},
  {name: '2020', DAC: 85, DAI:85, course: 'DAC', cou: 'DAI'},
  {name: '2021', DAC: 89, DAI:90, course: 'DAC', cou: 'DAI'}
];
  
  
return (
<BarChart width={1100} height={500} data={data}>

  <Tooltip/>
    <CartesianGrid stroke="#8884d8" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis  />
    <Bar dataKey="DAC" fill="#B22222" label nameKey="course" />
    <Bar dataKey="DAI" fill="#82ca9d"  label nameKey="cou" />
  </BarChart>
);
}
  
export default Chart;