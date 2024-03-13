import React, { useEffect, useRef, FC } from 'react';
import { Chart, DoughnutController, ArcElement, Legend, ChartConfiguration } from 'chart.js/auto';
import { OverviewData } from '../data/OverviewData';
import "./DoughnutChart.css";

Chart.register(
  ArcElement,
  DoughnutController,
  Legend
);

interface OverviewProps {
    fundKey: keyof typeof OverviewData;
  }

  
  

const DoughnutChart: React.FC<OverviewProps> = (props) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = chartRef.current;

    if (!ctx) {
      return;
    }

    const doughnutData = (OverviewData[props.fundKey]).data as ChartConfiguration['data'];

    new Chart(ctx, {
      type: 'doughnut',
      data: doughnutData,
    });
  }, [props.fundKey]);

  return <canvas id='doughnutChart' ref={chartRef} />;
};

export default DoughnutChart;
