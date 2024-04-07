import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

const share=[
  { year: '2005', price: 2400 },
  { year: '2007', price: 2210 },
  { year: '2008', price: 2290 },
  { year: '2010', price: 2000 },
  { year: '2011', price: 2181 },
  { year: '2012', price: 2500 },
  { year: '2015', price: 2100 },
  { year: '2016', price: 2500 },
  { year: '2017', price: 2100 },
  { year: '2018', price: 1900 },
  { year: '2019', price: 4500 },
  { year: '2020', price: 2200 },
  { year: '2021', price: 2400 },
  { year: '2022', price: 650 },
  { year: '2023', price: 5000 }
]
const revenue=[
  { year: '2005', price: 250000 },
  { year: '2007', price: 200000 },
  { year: '2008', price: 260000 },
  { year: '2010', price: 280000 },
  { year: '2011', price: 300000 },
  { year: '2012', price: 320000 },
  { year: '2013', price: 340000 },
  { year: '2014', price: 360000 },
  { year: '2015', price: 380000 },
  { year: '2016', price: 400000 },
  { year: '2017', price: 420000 },
  { year: '2018', price: 440000 },
  { year: '2019', price: 460000 },
  { year: '2020', price: 480000 },
  { year: '2021', price: 500000 },
  { year: '2022', price: 520000 },
  { year: '2023', price: 540000 }
]

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

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.year}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      {/* <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      /> */}
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Amt: ${value}`}
      </text>
     
    </g>
  );
};

export default function PieChartScreen({title}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChart width={400} height={300} className="piechartScreen">
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={title === "Assets" ? assets : title === "Revenues" ? revenue : title === "Shares" && share}
        cx={200}
        cy={145}
        innerRadius={45}
        outerRadius={50}
        fill="#8884d8"
        dataKey={title === "Assets" ? "expenses" : "price"}
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}
