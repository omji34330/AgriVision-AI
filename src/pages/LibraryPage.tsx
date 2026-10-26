import React, { useState, useMemo } from 'react';
import { PLANT_DISEASES, SUPPORTED_CROPS } from '../data/diseases';
import { DiseaseInfo, PathogenType } from '../types';
import { DiseaseCard } from '../components/library/DiseaseCard';
import { DiseaseModal } from '../components/library/DiseaseModal';
import { Search, Filter, BookOpen, Info, Sparkles, CheckCircle2 } from 'lucide-react';

interface LibraryPageProps {
  onAnalyzeCrop?: (crop: string) => void;
  initialSelectedDiseaseId?: string | null;
}

export const LibraryPage: React.FC<LibraryPageProps> = ({
  onAnalyzeCrop,
  initialSelectedDiseaseId,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCropFilter, setSelectedCropFilter] = useState('All');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('All');
  const [activeModalDisease, setActiveModalDisease] = useState<DiseaseInfo | null>(() => {
    if (initialSelectedDiseaseId) {
      return PLANT_DISEASES.find(d => d.id === initialSelectedDiseaseId) || null;
    }
    return null;
  });

  const pathogenTypes: Array<'All' | PathogenType> = [
    'All',
    'Fungal',
    'Bacterial',
    'Healthy',
  ];

  const filteredDiseases = useMemo(() => {
    return PLANT_DISEASES.filter((d) => {
      // 1. Search query match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        d.name.toLowerCase().includes(query) ||
        d.crop.toLowerCase().includes(query) ||
        d.scientificName.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query) ||
        d.symptoms.some((s) => s.toLowerCase().includes(query));

      // 2. Crop filter match
      const matchesCrop =
        selectedCropFilter === 'All' || d.crop.includes(selectedCropFilter);

      // 3. Pathogen filter match
      const matchesType =
        selectedTypeFilter === 'All' || d.pathogenType === selectedTypeFilter;

      return matchesSearch && matchesCrop && matchesType;
    });
  }, [searchQuery, selectedCropFilter, selectedTypeFilter]);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agri-100 text-agri-800 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-agri-600" />
            Pathology Reference Library
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Plant Pathology Knowledge Repository
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Scientifically verified foliar diseases, pathogen biology, symptomatology, and integrated agronomic pest management (IPM) guidelines.
          </p>
        </div>

        {/* Academic Disambiguation Alert */}
        <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-blue-900 text-xs sm:text-sm flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Educational Repository Notice:</strong> The information contained in this library is peer-reviewed agronomic documentation intended for study and agricultural reference. It is strictly distinguished from real-time classification inferences output by the AI model.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by disease, pathogen, crop, or symptom..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-agri-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Results Count */}
            <span className="text-xs font-semibold text-slate-500">
              Showing <strong className="text-slate-800">{filteredDiseases.length}</strong> of {PLANT_DISEASES.length} Pathology Profiles
            </span>
          </div>

          {/* Filter Pills */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
            {/* Crop Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-400 font-bold uppercase text-[10px] shrink-0">
                Crop:
              </span>
              {['All', 'Tomato', 'Potato', 'Corn', 'Pepper', 'Apple', 'Grape'].map((crop) => (
                <button
                  key={crop}
                  onClick={() => setSelectedCropFilter(crop)}
                  className={`px-3 py-1 rounded-lg font-semibold shrink-0 transition-all ${
                    selectedCropFilter === crop
                      ? 'bg-agri-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {crop}
                </button>
              ))}
            </div>

            {/* Pathogen Type Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-400 font-bold uppercase text-[10px] shrink-0">
                Category:
              </span>
              {pathogenTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedTypeFilter(type)}
                  className={`px-3 py-1 rounded-lg font-semibold shrink-0 transition-all ${
                    selectedTypeFilter === type
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Disease Grid */}
        {filteredDiseases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDiseases.map((disease) => (
              <DiseaseCard
                key={disease.id}
                disease={disease}
                onSelect={(d) => setActiveModalDisease(d)}
                onAnalyzeSample={(d) => onAnalyzeCrop && onAnalyzeCrop(d.crop)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
            <p className="text-slate-500 font-medium text-base">
              No plant diseases found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCropFilter('All');
                setSelectedTypeFilter('All');
              }}
              className="text-xs font-bold text-agri-600 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Modal for viewing detailed profile */}
        <DiseaseModal
          disease={activeModalDisease}
          isOpen={!!activeModalDisease}
          onClose={() => setActiveModalDisease(null)}
          onAnalyzeSample={onAnalyzeCrop}
        />
      </div>
    </div>
  );
};
