import React from 'react';
import { DiseaseInfo } from '../../types';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';
import {
  BookOpen,
  Thermometer,
  ShieldCheck,
  AlertTriangle,
  Leaf,
  Bug,
  Info,
  Sparkles,
} from 'lucide-react';

interface DiseaseModalProps {
  disease: DiseaseInfo | null;
  isOpen: boolean;
  onClose: () => void;
  onAnalyzeSample?: (crop: string) => void;
}

export const DiseaseModal: React.FC<DiseaseModalProps> = ({
  disease,
  isOpen,
  onClose,
  onAnalyzeSample,
}) => {
  if (!disease) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={disease.name} maxWidth="2xl">
      <div className="space-y-6">
        {/* Academic Educational Notice Banner */}
        <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs flex items-start gap-2.5">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p>
            <strong>Curated Agronomic Knowledge Base:</strong> This profile contains peer-reviewed plant pathology documentation. It is for reference and training, separate from live AI model predictions.
          </p>
        </div>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Host Crop
            </span>
            <p className="text-base font-bold text-slate-800">{disease.crop}</p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Etiological Agent
            </span>
            <p className="text-sm font-mono italic text-slate-800">
              {disease.pathogenName || disease.scientificName}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Pathogen Category
            </span>
            <span className="inline-block mt-0.5 font-bold text-xs">
              <Badge variant={disease.pathogenType === 'Healthy' ? 'healthy' : 'warning'}>
                {disease.pathogenType}
              </Badge>
            </span>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Pathological Overview
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {disease.description}
          </p>
        </div>

        {/* Symptoms */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Characteristic Diagnostic Symptoms
          </h4>
          <ul className="space-y-2">
            {disease.symptoms.map((s, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm text-slate-700 flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80"
              >
                <span className="font-bold text-agri-600 shrink-0">{idx + 1}.</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Favorable Environmental Conditions */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Epidemiological Triggers
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-amber-900">
              <span className="font-bold block text-[10px] uppercase text-amber-700 mb-1">
                Temperature Window
              </span>
              <p className="font-medium">
                {disease.favorableConditions.temperature || 'Moderate daytime temperatures (20°C - 28°C)'}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200 text-blue-900">
              <span className="font-bold block text-[10px] uppercase text-blue-700 mb-1">
                Humidity / Moisture
              </span>
              <p className="font-medium">
                {disease.favorableConditions.humidity || 'High relative humidity with prolonged foliar moisture'}
              </p>
            </div>
          </div>
        </div>

        {/* Prevention & Integrated Management */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Integrated Disease Management (IPM)
          </h4>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
            <div>
              <p className="font-bold text-slate-800 mb-1">Cultural & Agronomic Sanitation:</p>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                {disease.prevention.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <p className="font-bold text-emerald-800 mb-1">Organic & Biological Control:</p>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                {disease.organicManagement.map((o, idx) => (
                  <li key={idx}>{o}</li>
                ))}
              </ul>
            </div>

            {disease.chemicalManagement && disease.chemicalManagement.length > 0 && (
              <div className="pt-2 border-t border-slate-200">
                <p className="font-bold text-rose-800 mb-1">Chemical Guidance (With Caution):</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  {disease.chemicalManagement.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            Close Dossier
          </button>

          {onAnalyzeSample && (
            <button
              onClick={() => {
                onClose();
                onAnalyzeSample(disease.crop);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-agri-600 hover:bg-agri-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              Analyze {disease.crop} Leaf in AI Lab
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};
