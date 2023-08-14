"use client"

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

type Data = {
  name: string
  price: number
}

type Props = {
  data: Data[]
}

export default function ProductChart(props: Props) {
  return (
    <>
      <LineChart width={600} height={300} data={props.data}>
        <Line dataKey="Precio" stroke="#f33" strokeWidth={3} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
      <LineChart width={600} height={300} data={props.data}>
        <Line dataKey="Precio_a_dolar_oficial" stroke="#3a3" strokeWidth={3} />
        <Line dataKey="Precio_a_dolar_blue" stroke="#33a" strokeWidth={3} />
        <Line dataKey="Dolar_oficial" stroke="#3a38" strokeWidth={3} />
        <Line dataKey="Dolar_blue" stroke="#33a8" strokeWidth={3} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </>
  )
}
