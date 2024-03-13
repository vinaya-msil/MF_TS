import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

const PieCharts: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current;
    if (!ctx) return;

    const pieData = {
      datasets: [
        {
          data: [19, 12, 3, 5],
          backgroundColor: ['red', 'blue', 'yellow', 'green'],
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'pie',
      data: pieData,
    };

    const chart = new Chart(ctx, config);

  }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
};

export default PieCharts;
