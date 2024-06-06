// import "./styles.css";
// import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

// propsの型を追加
// stringも許されるpropertyもあるが、今回はnumberのみ
type Props = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
};
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: Props) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    // SVGのtext要素
    // ref: https://developer.mozilla.org/ja/docs/Web/SVG/Element/text
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      // 追加
      fontSize="1.5em"
    >
      {/* ここをいじるとフォーマットを調整できる */}
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const PieChartWithCustomizedLabel = () => {
  return (
    <ResponsiveContainer width="80%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          // labelの線を表示しない
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
