// import "./styles.css";
// import React from "react";
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

export const StraightAnglePieChart = () => {
  return (
    <ResponsiveContainer width="80%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          // 0が3時, 90が12時, -90が6時の位置
          // defaultが0
          startAngle={180}
          // defaultが360
          endAngle={0}
          data={data}
          fill="#8884d8"
          label={{ fontSize: "1.5em" }}
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
