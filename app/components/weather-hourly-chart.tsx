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
import { useState, useContext } from 'react';
import { WeatherGraphProps } from '../utils/get-weather';
import { ThemeContext } from '../context';

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

export default function WeatherHourlyChart({ chartPoints }: WeatherGraphProps) {
  const isDarkMode = useContext(ThemeContext);

  const gridColor = isDarkMode ? '#cccccc' : '#808080';
  const [data] = useState({
    type: 'line',
    datasets: [
      {
        backgroundColor: '#000000',
        borderColor: '#000000',
        pointRadius: 2,
        data: chartPoints
      }
    ]
  });
  const chartOptions: ChartOptions<'line'> = {
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
          color: gridColor,
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
        grid: {
          color: gridColor,
          tickColor: gridColor
        },
        border: { color: gridColor },
        ticks: {
          color: gridColor,
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

  return (
    <div style={{ height: '60vh' }}>
      <Line data={data} options={chartOptions} />
    </div>
  );
}
