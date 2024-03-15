import React, { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, Legend, ChartConfiguration } from 'chart.js/auto';
import { OverviewData } from '../data/OverviewData';
import "./DoughnutChart.css";
import { useSelector } from "react-redux";

Chart.register(
  ArcElement,
  DoughnutController,
  Legend
);

interface OverviewProps {
  fundKey: keyof typeof OverviewData;
}

const DoughnutChart: React.FC<OverviewProps> = (props) => {
  const reduxClass = useSelector((state: any) => state.CalculateReturnsSlice);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null); // Ref to hold the chart instance

  useEffect(() => {
    const ctx = chartRef.current;

    if (!ctx) {
      return;
    }

    const data = reduxClass.dataYear;
    const doughnutData = (OverviewData[props.fundKey] as any)[reduxClass.dataYear] as ChartConfiguration['data'];
    
    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    // Create new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: doughnutData,
    });

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [props.fundKey, reduxClass.dataYear]);

  return <canvas id='doughnutChart' ref={chartRef} />;
};

export default DoughnutChart;
