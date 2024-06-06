// import "./styles.css";
// import React from "react";
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

export const TwoLevelPieChart = () => {
  return (
    <ResponsiveContainer width="80%" height={400}>
      <PieChart>
        <Pie
          data={data01}
          dataKey="value"
          // 円グラフの中心座標
          // defaultが50%なので省略可
          //   cx={200}
          //   cy={200}
          // defaultが80%
          outerRadius="60%"
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          // defaultが0%
          innerRadius="70%"
          outerRadius="80%"
          fill="#82ca9d"
          // paddingを調整できる。基本細い円に対して使うことになりそう
          paddingAngle={5}
          label={{ fontSize: "1.5em" }}
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
