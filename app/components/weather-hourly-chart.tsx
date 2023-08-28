'use client';

import {
  Chart as ChartJS,
  ChartOptions,
  LineController,
  LinearScale,
  TimeScale,
  LineElement,
  PointElement,
  Tooltip,
  TooltipItem
} from 'chart.js';
import 'chartjs-adapter-moment';
import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import { WeatherGraphProps } from '../utils/get-weather';

interface CustomTooltipItem extends TooltipItem<'line'> {
  raw: {
    y: number;
  };
}

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
);

export const chartOptions: ChartOptions<'line'> = {
  maintainAspectRatio: false,
  scales: {
    x: {
      type: 'time',
      time: {
        tooltipFormat: 'dddd ha',
        displayFormats: {
          day: 'dddd'
        }
      },
      grid: {
        display: false
      },
      ticks: {
        autoSkip: false,
        maxRotation: 0,
        major: {
          enabled: true
        },
        font: (context) => {
          if (context.tick && context.tick.major) {
            return {
              weight: 'bold'
            };
          }
        }
      }
    },
    y: {
      ticks: {
        callback: (value) => {
          return value + '°F';
        }
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: (context: CustomTooltipItem) => {
          return context.raw.y + '°F';
        }
      }
    }
  }
};

export default function WeatherHourlyChart({ chartPoints }: WeatherGraphProps) {
  const [data] = useState({
    type: 'line',
    datasets: [
      {
        backgroundColor: '#000',
        borderColor: '#000',
        pointRadius: 2,
        data: chartPoints
      }
    ]
  });

  return (
    <div style={{ height: '60vh' }}>
      <Line data={data} options={chartOptions} />
    </div>
  );
}
