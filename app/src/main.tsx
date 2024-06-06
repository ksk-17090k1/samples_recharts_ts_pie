import React from "react";
import ReactDOM from "react-dom/client";
import { TwoLevelPieChart } from "./components/TwoLevelPieChart.tsx";
import { StraightAnglePieChart } from "./components/StraightAnglePieChart.tsx";
import { TwoSimplePieChart } from "./components/TwoSimplePieChart.tsx";
import { PieChartWithCustomizedLabel } from "./components/PieChartWithCustomizedLabel.tsx";
import { CustomActiveShapePieChart } from "./components/CustomActiveShapePieChart.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TwoLevelPieChart />
    <StraightAnglePieChart />
    <TwoSimplePieChart />
    <PieChartWithCustomizedLabel />
    <CustomActiveShapePieChart />
  </React.StrictMode>
);
