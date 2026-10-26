import React from 'react';
import { DiseaseInfo } from '../../types';
import { Badge } from '../common/Badge';
import { ArrowRight, BookOpen, Bug, ShieldCheck, Thermometer } from 'lucide-react';

interface DiseaseCardProps {
  disease: DiseaseInfo;
  onSelect: (disease: DiseaseInfo) => void;
  onAnalyzeSample?: (disease: DiseaseInfo) => void;
}

export const DiseaseCard: React.FC<DiseaseCardProps> = ({
  disease,
  onSelect,
  onAnalyzeSample,
}) => {
  const getPathogenBadge = (type: string) => {
    switch (type) {
      case 'Fungal':
        return <Badge variant="warning">Fungal</Badge>;
      case 'Bacterial':
        return <Badge variant="danger">Bacterial</Badge>;
      case 'Viral':
        return <Badge variant="info">Viral</Badge>;
      case 'Healthy':
        return <Badge variant="healthy">Healthy</Badge>;
      default:
        return <Badge variant="neutral">{type}</Badge>;
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-card hover:border-agri-300 transition-all flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
            {disease.crop}
          </span>
          <div className="flex items-center gap-1.5">
            {getPathogenBadge(disease.pathogenType)}
          </div>
        </div>

        {/* Title & Scientific Name */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-agri-700 transition-colors mb-1">
          {disease.name}
        </h3>
        <p className="text-xs font-mono italic text-slate-500 mb-3">
          {disease.scientificName}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
          {disease.description}
        </p>

        {/* Symptoms teaser */}
        <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Key Symptom Marker:
          </span>
          <p className="text-xs text-slate-700 font-medium line-clamp-2">
            • {disease.symptoms[0]}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={() => onSelect(disease)}
          className="flex items-center gap-1.5 text-xs font-bold text-agri-700 hover:text-agri-900 transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          Full Pathology Dossier
        </button>

        <button
          onClick={() => onSelect(disease)}
          className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-agri-600 text-slate-600 group-hover:text-white flex items-center justify-center transition-all"
          aria-label="View disease profile"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
