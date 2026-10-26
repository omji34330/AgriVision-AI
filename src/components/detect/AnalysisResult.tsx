import React, { useState } from 'react';
import { AnalysisPrediction, SeverityLevel } from '../../types';
import { TopPredictionsChart } from './TopPredictionsChart';
import {
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  Sparkles,
  Download,
  RotateCcw,
  BookOpen,
  Share2,
  BookmarkCheck,
  Cpu,
  Clock,
  Printer,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AnalysisResultProps {
  prediction: AnalysisPrediction;
  imageUrl: string;
  onReset: () => void;
  onViewInLibrary: (diseaseId: string) => void;
  onSaveToHistory: () => void;
  isSaved?: boolean;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({
  prediction,
  imageUrl,
  onReset,
  onViewInLibrary,
  onSaveToHistory,
  isSaved = false,
}) => {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [activeTab, setActiveTab] = useState<'care' | 'symptoms' | 'prevent'>('care');

  // Trigger celebratory confetti if healthy
  React.useEffect(() => {
    if (prediction.isHealthy) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#22c55e', '#16a34a', '#86efac', '#eab308']
      });
    }
  }, [prediction.isHealthy]);

  const getSeverityBadge = (level: SeverityLevel) => {
    switch (level) {
      case 'None (Healthy)':
        return <span className="px-3 py-1 bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs rounded-full">Healthy Foliage</span>;
      case 'Low':
        return <span className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-300 font-bold text-xs rounded-full">Severity: Low</span>;
      case 'Moderate':
        return <span className="px-3 py-1 bg-amber-100 text-amber-800 border border-amber-300 font-bold text-xs rounded-full">Severity: Moderate</span>;
      case 'High':
        return <span className="px-3 py-1 bg-orange-100 text-orange-800 border border-orange-300 font-bold text-xs rounded-full">Severity: High</span>;
      case 'Severe':
        return <span className="px-3 py-1 bg-rose-100 text-rose-800 border border-rose-300 font-bold text-xs rounded-full">Severity: Severe</span>;
      default:
        return null;
    }
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Top Hero Banner of the Diagnosis */}
      <div
        className={`rounded-3xl p-6 sm:p-8 border shadow-lg ${
          prediction.isHealthy
            ? 'bg-gradient-to-r from-emerald-50 via-agri-50 to-teal-50 border-emerald-200 text-slate-900'
            : 'bg-gradient-to-r from-rose-50/80 via-white to-amber-50/70 border-rose-200 text-slate-900'
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md ${
                prediction.isHealthy ? 'bg-emerald-600' : 'bg-rose-600'
              }`}
            >
              {prediction.isHealthy ? (
                <CheckCircle2 className="w-8 h-8" />
              ) : (
                <AlertTriangle className="w-8 h-8" />
              )}
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white/80 px-2.5 py-0.5 rounded-md border border-slate-200">
                  Crop: {prediction.crop}
                </span>
                {getSeverityBadge(prediction.severity)}
                <span className="text-xs font-mono font-semibold text-slate-600 bg-white/80 px-2 py-0.5 rounded-md border border-slate-200">
                  Latency: {prediction.processingTimeMs} ms
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {prediction.diseaseName}
              </h2>

              <p className="text-sm text-slate-600 max-w-2xl">
                {prediction.diseaseDetails.description}
              </p>
            </div>
          </div>

          {/* Model Confidence Metric Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col items-center justify-center min-w-[200px] shrink-0">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Model Confidence
            </span>
            <div className="flex items-baseline gap-1">
              <span
                className={`text-4xl font-black ${
                  prediction.isHealthy
                    ? 'text-emerald-600'
                    : prediction.confidence > 90
                    ? 'text-rose-600'
                    : 'text-amber-600'
                }`}
              >
                {prediction.confidence}%
              </span>
            </div>
            {/* Visual Gauge Bar */}
            <div className="w-full h-2 bg-slate-100 rounded-full mt-2 overflow-hidden border border-slate-200">
              <div
                className={`h-full rounded-full ${
                  prediction.isHealthy ? 'bg-emerald-500' : 'bg-rose-500'
                }`}
                style={{ width: `${prediction.confidence}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-400 mt-1 font-mono">
              PlantVillage Feature Correlation
            </span>
          </div>
        </div>

        {/* Action button row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-slate-200/70">
          <div className="flex items-center gap-2">
            <button
              onClick={onSaveToHistory}
              disabled={isSaved}
              className={`flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                isSaved
                  ? 'bg-agri-100 text-agri-800 border border-agri-300 cursor-default'
                  : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm'
              }`}
            >
              <BookmarkCheck className={`w-4 h-4 ${isSaved ? 'text-agri-600' : 'text-slate-500'}`} />
              {isSaved ? 'Saved to Local History' : 'Save to History'}
            </button>

            <button
              onClick={handlePrintReport}
              className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm transition-all"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              Print Diagnosis Report
            </button>

            <button
              onClick={() => onViewInLibrary(prediction.classId)}
              className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm transition-all"
            >
              <BookOpen className="w-4 h-4 text-agri-600" />
              View in Disease Library
            </button>
          </div>

          <button
            onClick={onReset}
            className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-agri-600 hover:bg-agri-700 text-white shadow-md transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            Analyze Another Leaf
          </button>
        </div>
      </div>

      {/* Two Column Grid: Image + Top Predictions Chart vs Management Guide */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (5 cols): Analyzed Image & Probability Distribution */}
        <div className="lg:col-span-5 space-y-6">
          {/* Analyzed Image Card */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
              <span>Analyzed Leaf Specimen</span>
              <span className="text-[10px] text-slate-400 font-mono">224 × 224 Normalized</span>
            </h4>
            <div className="rounded-xl overflow-hidden bg-slate-950 aspect-square flex items-center justify-center border border-slate-100">
              <img
                src={imageUrl}
                alt="Analyzed leaf specimen"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between font-mono">
              <span>Inference Engine:</span>
              <span className="font-bold text-agri-700">{prediction.engineMode}</span>
            </div>
          </div>

          {/* Recharts Top Predictions Distribution */}
          <TopPredictionsChart candidates={prediction.topPredictions} />
        </div>

        {/* Right Column (7 cols): Crop Care Recommendations & Treatment Tabs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-6">
            {/* Tab navigation */}
            <div className="flex border-b border-slate-200 gap-2">
              <button
                onClick={() => setActiveTab('care')}
                className={`pb-3 text-sm font-bold border-b-2 transition-all ${
                  activeTab === 'care'
                    ? 'border-agri-600 text-agri-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Recommended Actions
              </button>
              <button
                onClick={() => setActiveTab('symptoms')}
                className={`pb-3 text-sm font-bold border-b-2 transition-all ${
                  activeTab === 'symptoms'
                    ? 'border-agri-600 text-agri-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Observed Symptoms
              </button>
              <button
                onClick={() => setActiveTab('prevent')}
                className={`pb-3 text-sm font-bold border-b-2 transition-all ${
                  activeTab === 'prevent'
                    ? 'border-agri-600 text-agri-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Environmental Triggers
              </button>
            </div>

            {/* Tab 1: Recommended Care Protocols */}
            {activeTab === 'care' && (
              <div className="space-y-6 animate-in fade-in">
                {/* Cultural / Farm Hygiene */}
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-agri-500" />
                    1. Cultural & Preventative Farm Practices
                  </h5>
                  <ul className="space-y-2 pl-4">
                    {prediction.recommendations.cultural.map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-700 list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Organic / Biological Control */}
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    2. Organic & Bio-Fungicide Solutions
                  </h5>
                  <ul className="space-y-2 pl-4">
                    {prediction.recommendations.organic.map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-700 list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Chemical Controls Disclaimer */}
                <div className="space-y-2 p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    3. Chemical Interventions (Regulated Agronomic Use)
                  </h5>
                  <ul className="space-y-1.5 pl-4 text-xs text-amber-900/90">
                    {prediction.recommendations.chemical.map((item, idx) => (
                      <li key={idx} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-amber-800 pt-2 border-t border-amber-200/80 font-medium">
                    * Always adhere to regional pesticide licensing, pre-harvest intervals (PHI), and safety datasheets.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Symptoms & Pathology */}
            {activeTab === 'symptoms' && (
              <div className="space-y-4 animate-in fade-in">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Typical Morphological Diagnostic Indicators
                </h5>
                <ul className="space-y-2.5">
                  {prediction.diseaseDetails.symptoms.map((symptom, idx) => (
                    <li key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <span className="font-bold text-agri-600">{idx + 1}.</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tab 3: Environmental Triggers */}
            {activeTab === 'prevent' && (
              <div className="space-y-4 animate-in fade-in">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Favorable Meteorological & Soil Inoculum Factors
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-500 uppercase block text-[10px] mb-1">Optimal Temperature</span>
                    <p className="font-semibold text-slate-800">{prediction.diseaseDetails.favorableConditions.temperature || 'Moderate growing season (18°C - 28°C)'}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-500 uppercase block text-[10px] mb-1">Humidity & Foliar Wetness</span>
                    <p className="font-semibold text-slate-800">{prediction.diseaseDetails.favorableConditions.humidity || 'High relative humidity or prolonged leaf dew'}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
                    <span className="font-bold text-slate-500 uppercase block text-[10px] mb-1">Dispersal & Inoculum Vector</span>
                    <p className="font-semibold text-slate-800">{prediction.diseaseDetails.favorableConditions.spreadFactor || 'Splashing rain, windborne spores, or contaminated pruning shears'}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Expert Advisory Note */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-800">Agricultural Extension Advisory</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {prediction.recommendations.expertAdvisory}
                </p>
              </div>
            </div>

            {/* Expandable Technical Model Metadata */}
            <div className="border-t border-slate-200 pt-4">
              <button
                onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                className="w-full flex items-center justify-between text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-agri-600" />
                  Technical Model Inference Parameters
                </span>
                {showTechnicalDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showTechnicalDetails && (
                <div className="mt-3 p-4 rounded-xl bg-slate-900 text-slate-300 font-mono text-[11px] space-y-1.5 animate-in fade-in">
                  <p><span className="text-slate-500">Architecture:</span> MobileNetV2 with Depthwise Separable Convolutions</p>
                  <p><span className="text-slate-500">Input Tensor:</span> [1, 224, 224, 3] Float32 Normalized [-1.0, 1.0]</p>
                  <p><span className="text-slate-500">Output Layer:</span> 38-way Multi-Class Softmax Categorical Logits</p>
                  <p><span className="text-slate-500">Execution Backend:</span> {prediction.engineMode}</p>
                  <p><span className="text-slate-500">Benchmark Dataset:</span> PlantVillage Foliar Pathology (54,305 samples)</p>
                  <p><span className="text-slate-500">Hardware Latency:</span> {prediction.processingTimeMs} ms client-side runtime</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
