// import "./styles.css";
// import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

export const TwoSimplePieChart = () => {
  return (
    <ResponsiveContainer width="80%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          // 表示の際にアニメーションを行うか
          isAnimationActive={false}
          data={data01}
          cx="25%"
          fill="#8884d8"
          label={{ fontSize: "1.5em" }}
        />
        <Pie
          dataKey="value"
          data={data02}
          cx="75%"
          innerRadius="40%"
          outerRadius="80%"
          fill="#82ca9d"
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
