import React from 'react';
import { PredictionCandidate } from '../../types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts';
import { BarChart3, Info } from 'lucide-react';

interface TopPredictionsChartProps {
  candidates: PredictionCandidate[];
}

export const TopPredictionsChart: React.FC<TopPredictionsChartProps> = ({ candidates }) => {
  const chartData = candidates.map((c) => ({
    name: c.label.length > 22 ? c.label.slice(0, 20) + '...' : c.label,
    fullName: c.label,
    crop: c.crop,
    confidence: c.confidence,
    isHealthy: c.isHealthy,
  }));

  const getBarColor = (entry: (typeof chartData)[0], index: number) => {
    if (entry.isHealthy) return '#16a34a'; // Emerald
    if (index === 0) return '#e11d48'; // High probability disease (Rose)
    if (index === 1) return '#f59e0b'; // Amber
    return '#94a3b8'; // Slate
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 text-white p-3 rounded-xl shadow-xl text-xs space-y-1 border border-slate-700">
          <p className="font-bold text-sm text-agri-300">{data.fullName}</p>
          <p className="text-slate-300">Target Crop: {data.crop}</p>
          <p className="font-mono text-emerald-400 font-bold">
            Model Confidence: {data.confidence}%
          </p>
          <p className="text-[10px] text-slate-400">
            {data.isHealthy ? 'Non-infected healthy tissue' : 'Pathogenic condition'}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-agri-600" />
          <h4 className="font-bold text-slate-800 text-sm">
            Top-3 Softmax Classification Distribution
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
          Normalized Logits
        </span>
      </div>

      <div className="h-44 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              type="number"
              domain={[0, 100]}
              unit="%"
              tick={{ fontSize: 11, fill: '#64748b' }}
            />
            <YAxis
              dataKey="name"
              type="category"
              width={140}
              tick={{ fontSize: 11, fill: '#334155', fontWeight: 600 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="confidence" radius={[0, 8, 8, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry, index)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
        <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
        <p>
          <strong>Scientific Interpretation:</strong> The confidence score represents relative statistical proximity to training clusters in the PlantVillage feature space. It reflects model certainty, not an absolute guarantee of biological etiology.
        </p>
      </div>
    </div>
  );
};
