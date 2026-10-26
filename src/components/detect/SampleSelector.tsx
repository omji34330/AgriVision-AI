import React from 'react';
import { SAMPLE_LEAVES } from '../../data/samples';
import { SampleLeaf } from '../../types';
import { Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';

interface SampleSelectorProps {
  onSelectSample: (sample: SampleLeaf) => void;
  selectedSampleId?: string;
  disabled?: boolean;
}

export const SampleSelector: React.FC<SampleSelectorProps> = ({
  onSelectSample,
  selectedSampleId,
  disabled = false,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-agri-100 text-agri-700 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              Quick Academic Demonstration Samples
            </h3>
            <p className="text-xs text-slate-500">
              Pre-validated PlantVillage benchmark specimens for instantaneous 2-minute presentations
            </p>
          </div>
        </div>
        <span className="text-[11px] font-semibold text-agri-700 bg-agri-50 px-2.5 py-1 rounded-full border border-agri-200 self-start sm:self-auto">
          6 Verified Specimens
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {SAMPLE_LEAVES.map((sample) => {
          const isSelected = selectedSampleId === sample.id;
          return (
            <button
              key={sample.id}
              disabled={disabled}
              onClick={() => onSelectSample(sample)}
              className={`group text-left p-2.5 rounded-xl border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'border-agri-500 bg-agri-50/70 ring-2 ring-agri-400/40 shadow-sm'
                  : 'border-slate-200 hover:border-agri-300 bg-slate-50 hover:bg-white'
              } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer active:scale-95'}`}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-2 bg-slate-100 border border-slate-200/60 flex items-center justify-center">
                <img
                  src={sample.imageUrl}
                  alt={sample.knownLabel}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span
                  className={`absolute top-1 right-1 text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm ${
                    sample.isHealthy
                      ? 'bg-emerald-600 text-white'
                      : 'bg-rose-600 text-white'
                  }`}
                >
                  {sample.isHealthy ? 'Healthy' : 'Diseased'}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block truncate">
                  {sample.crop}
                </span>
                <p className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-agri-700">
                  {sample.knownLabel.split(' ').slice(1).join(' ') || sample.knownLabel}
                </p>
              </div>

              <div className="mt-2 pt-1.5 border-t border-slate-200/60 flex items-center justify-between text-[10px]">
                <span className="text-slate-500">Benchmark</span>
                {isSelected ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-agri-600" />
                ) : (
                  <span className="text-agri-600 font-semibold group-hover:underline">Select</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
