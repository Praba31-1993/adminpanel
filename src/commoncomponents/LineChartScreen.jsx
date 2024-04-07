import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, ResponsiveContainer } from 'recharts';

const share = [
  {
    year: '2005',
    uv: 4000,
    pv: 2400,
    price: 2400,
  },
  {
    year: '2007',
    uv: 3000,
    pv: 1398,
    price: 2210,
  },
  {
    year: '2008',
    uv: 2000,
    pv: 9800,
    price: 2290,
  },
  {
    year: '2010',
    uv: 2780,
    pv: 3908,
    price: 2000,
  },
  {
    year: '2011',
    uv: 1890,
    pv: 4800,
    price: 2181,
  },
  {
    year: '2012',
    uv: 2390,
    pv: 3800,
    price: 2500,
  },
  {
    year: '2015',
    uv: 3490,
    pv: 4300,
    price: 2100,
  },
  {
    year: '2016',
    uv: 2700,
    pv: 2600,
    price: 2500,
  },
  {
    year: '2017',
    uv: 1800,
    pv: 1300,
    price: 2100,
  },
  {
    year: '2018',
    uv: 1500,
    pv: 2800,
    price: 1900,
  },
  {
    year: '2019',
    uv: 3500,
    pv: 1500,
    price: 4500,

  },
  {
    year: '2020',
    uv: 3000,
    pv: 1300,
    price: 2200,
  },
  {
    year: '2021',
    uv: 2000,
    pv: 1800,
    price: 2400,
  },
  {
    year: '2022',
    uv: 1500,
    pv: 2800,
    price: 650,
  },
  {
    year: '2023',
    uv: 2500,
    pv: 1300,
    price: 5000,
  },
];

const revenue = [
  {
    year: '2005',
    uv: 2700,
    pv: 2600,
    price: 250000,
  },
  {
    year: '2007',
    uv: 3000,
    pv: 2500,
    price: 200000,
  },
  {
    year: '2008',
    uv: 3100,
    pv: 2700,
    price: 260000,
  },
  {
    year: '2010',
    uv: 3200,
    pv: 2800,
    price: 280000,
  },
  {
    year: '2011',
    uv: 3300,
    pv: 3000,
    price: 300000,
  },
  {
    year: '2012',
    uv: 3400,
    pv: 3200,
    price: 320000,
  },
  {
    year: '2013',
    uv: 3500,
    pv: 3400,
    price: 340000,
  },
  {
    year: '2014',
    uv: 3600,
    pv: 3600,
    price: 360000,
  },
  {
    year: '2015',
    uv: 3700,
    pv: 3800,
    price: 380000,
  },
  {
    year: '2016',
    uv: 3800,
    pv: 4000,
    price: 400000,
  },
  {
    year: '2017',
    uv: 3900,
    pv: 4200,
    price: 420000,
  },
  {
    year: '2018',
    uv: 4000,
    pv: 4400,
    price: 440000,
  },
  {
    year: '2019',
    uv: 4100,
    pv: 4600,
    price: 460000,
  },
  {
    year: '2020',
    uv: 4200,
    pv: 4800,
    price: 480000,
  },
  {
    year: '2021',
    uv: 4300,
    pv: 5000,
    price: 500000,
  },
  {
    year: '2022',
    uv: 4400,
    pv: 5200,
    price: 520000,
  },
  {
    year: '2023',
    uv: 4500,
    pv: 5400,
    price: 540000,
  },
];

const assets = [
  {
    year: '2005',
    profit: 5200,
    loss: 1800,
    expenses: 250000,
  },
  {
    year: '2006',
    profit: 5400,
    loss: 2000,
    expenses: 260000,
  },
  {
    year: '2007',
    profit: 5600,
    loss: 2200,
    expenses: 270000,
  },
  {
    year: '2008',
    profit: 5800,
    loss: 2400,
    expenses: 280000,
  },
  {
    year: '2009',
    profit: 6000,
    loss: 2600,
    expenses: 290000,
  },
  {
    year: '2010',
    profit: 6200,
    loss: 2800,
    expenses: 300000,
  },
  {
    year: '2011',
    profit: 6400,
    loss: 3000,
    expenses: 310000,
  },
  {
    year: '2012',
    profit: 6600,
    loss: 3200,
    expenses: 320000,
  },
  {
    year: '2013',
    profit: 6800,
    loss: 3400,
    expenses: 330000,
  },
  {
    year: '2014',
    profit: 7000,
    loss: 3600,
    expenses: 340000,
  },
  {
    year: '2015',
    profit: 7200,
    loss: 3800,
    expenses: 350000,
  },
  {
    year: '2016',
    profit: 7400,
    loss: 4000,
    expenses: 360000,
  },
  {
    year: '2017',
    profit: 7600,
    loss: 4200,
    expenses: 370000,
  },
  {
    year: '2018',
    profit: 7800,
    loss: 4400,
    expenses: 380000,
  },
  {
    year: '2019',
    profit: 8000,
    loss: 4600,
    expenses: 390000,
  },
  {
    year: '2020',
    profit: 8200,
    loss: 4800,
    expenses: 400000,
  },
  {
    year: '2021',
    profit: 8400,
    loss: 5000,
    expenses: 410000,
  },
  {
    year: '2022',
    profit: 8600,
    loss: 5200,
    expenses: 420000,
  },
  {
    year: '2023',
    profit: 8800,
    loss: 5400,
    expenses: 210000,
  },
  {
    year: '2024',
    profit: 9000,
    loss: 5600,
    expenses: 440000,
  },
];

const LineChartScreen = ({ title }) => {
  return (
    <ResponsiveContainer height={300}>
      <LineChart
        width={300}
        height={100}
        data={title === "Assets" ? assets : title === "Revenues" ? revenue : title === "Shares" && share}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          // bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={title === "Assets" ? "expenses" : "price"} stroke="#8884d8" activeDot={{ r: 8 }} />
        {title === "Assets" && <>
          <Line type="monotone" dataKey="profit" stroke="green" />
          <Line type="monotone" dataKey="loss" stroke="red" />
        </>
        }
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartScreen;