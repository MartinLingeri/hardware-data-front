"use client"

import {
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Area,
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { format, parseISO, subDays } from "date-fns"
import { es } from "date-fns/locale"

type Data = {
  date: string
  Precio: number
  Precio_a_dolar_blue: number
  Precio_a_dolar_oficial: number
  Dolar_oficial: number
  Dolar_blue: number
}

type Props = {
  data: Data[]
}

export default function ProductChart(props: Props) {
  return (
    <section>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={props.data}
          margin={{ top: 10, bottom: 10, left: 30, right: 30 }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f33a" stopOpacity={0.4} />
              <stop offset="90%" stopColor="#f33a" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area
            dataKey="Precio"
            stroke="#f33"
            strokeWidth={3}
            fill="url(#color)"
          />
          <CartesianGrid stroke="#ccc" opacity={0.5} vertical={false} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickFormatter={(str) => {
              const date = parseISO(str)
              if (date.getDate() % 7 === 0) {
                return format(date, "MMM, d", { locale: es })
              }
              return ""
            }}
          />
          <YAxis
            domain={[0, "dataMax"]}
            axisLine={false}
            tickLine={false}
            tickFormatter={(number) => `$${number.toLocaleString()}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={props.data}
          margin={{ top: 10, bottom: 10, left: 30, right: 30 }}
        >
          <defs>
            <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3ADE81" stopOpacity={0.4} />
              <stop offset="90%" stopColor="#3ADE81" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area
            dataKey="Precio_a_dolar_oficial"
            stroke="#3ADE81"
            strokeWidth={4}
            fill="url(#color2)"
          />
          <defs>
            <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#33a" stopOpacity={0.4} />
              <stop offset="90%" stopColor="#33a" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area
            dataKey="Precio_a_dolar_blue"
            stroke="#33a"
            strokeWidth={4}
            fill="url(#color3)"
            fillOpacity={0.5}
          />
          <Area
            dataKey="Dolar_oficial"
            stroke="#91DE7A"
            strokeWidth={2}
            fill="url(#color2)"
            fillOpacity={0.5}
          />
          <Area
            dataKey="Dolar_blue"
            stroke="#33e"
            strokeWidth={2}
            fillOpacity={0.5}
            fill="url(#color3)"
          />
          <CartesianGrid
            stroke="#ccc"
            opacity={0.5}
            vertical={false}
            fillOpacity={0.2}
          />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickFormatter={(str) => {
              const date = parseISO(str)
              if (date.getDate() % 7 === 0) {
                return format(date, "MMM, d", { locale: es })
              }
              return ""
            }}
          />
          <YAxis
            domain={[0, "dataMax"]}
            axisLine={false}
            tickLine={false}
            tickFormatter={(number) => `$${number.toLocaleString()}`}
          />
          <Tooltip content={<CustomTooltipDolar />} />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  )
}

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value: number | string }> // Tipamos el payload como un array de objetos con una propiedad 'value'
  label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active) {
    return (
      <div className="rounded-md shadow-md bg-slate-50 text-black box-shadow p-2">
        <h4>{format(parseISO(label!), "eeee, d MMM, yyyy", { locale: es })}</h4>
        <p>${payload![0].value.toLocaleString()} ARS</p>
      </div>
    )
  }
  return null
}

function CustomTooltipDolar({ active, payload, label }: CustomTooltipProps) {
  if (active) {
    return (
      <div className="rounded-md shadow-md bg-slate-50 text-black box-shadow p-2">
        <h4>{format(parseISO(label!), "eeee, d MMM, yyyy", { locale: es })}</h4>
        <p className="text-[#3ADE81]">
          Precio a dolar oficial: ${payload![0].value.toLocaleString()} ARS
        </p>
        <p className="text-[#33a]">
          Precio a dolar blue: ${payload![1].value.toLocaleString()} ARS
        </p>
        <p className="text-[#91DE7A]">
          Dolar Oficial: ${payload![2].value.toLocaleString()} ARS
        </p>
        <p className="text-[#33e]">
          Dolar Blue: ${payload![3].value.toLocaleString()} ARS
        </p>
      </div>
    )
  }
  return null
}
