import React, { useState } from 'react';
import { AnalysisRecord } from '../../types';
import { Badge } from '../common/Badge';
import {
  Trash2,
  Download,
  Calendar,
  Eye,
  ShieldCheck,
  FileSpreadsheet,
  FileCode,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { exportHistoryAsCSV, exportHistoryAsJSON } from '../../utils/storage';

interface HistoryListProps {
  records: AnalysisRecord[];
  onDeleteRecord: (id: string) => void;
  onClearAll: () => void;
  onViewRecord: (record: AnalysisRecord) => void;
  onNavigateToDetect: () => void;
}

export const HistoryList: React.FC<HistoryListProps> = ({
  records,
  onDeleteRecord,
  onClearAll,
  onViewRecord,
  onNavigateToDetect,
}) => {
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  if (records.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/90 shadow-sm space-y-4 max-w-xl mx-auto my-12">
        <div className="w-16 h-16 rounded-2xl bg-agri-50 text-agri-600 flex items-center justify-center mx-auto">
          <Calendar className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">No Previous Analyses Found</h3>
        <p className="text-sm text-slate-500 max-w-sm mx-auto">
          Your analyzed plant leaf records will be preserved here in browser storage for quick comparison and report generation.
        </p>
        <button
          onClick={onNavigateToDetect}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-agri-600 hover:bg-agri-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
        >
          <Sparkles className="w-4 h-4" />
          Perform First Leaf Analysis
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Privacy Notice Banner */}
      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <p>
            <strong>Privacy Assured:</strong> All records are stored exclusively in your browser’s local storage. No plant images, metadata, or diagnostic files are transmitted or persisted on remote servers.
          </p>
        </div>
      </div>

      {/* Top Toolbar (Export & Clear actions) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-slate-800">
            Recorded Diagnoses:
          </span>
          <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full">
            {records.length} {records.length === 1 ? 'Specimen' : 'Specimens'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={exportHistoryAsCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
            title="Export as CSV table"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
            Export CSV
          </button>

          <button
            onClick={exportHistoryAsJSON}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
            title="Export as JSON report"
          >
            <FileCode className="w-3.5 h-3.5 text-blue-600" />
            Export JSON
          </button>

          {!showClearConfirm ? (
            <button
              onClick={() => setShowClearConfirm(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear History
            </button>
          ) : (
            <div className="flex items-center gap-1.5 bg-rose-100 p-1 rounded-xl">
              <span className="text-[11px] font-bold text-rose-800 px-2">Confirm?</span>
              <button
                onClick={() => {
                  onClearAll();
                  setShowClearConfirm(false);
                }}
                className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-lg shadow-sm"
              >
                Yes, Delete All
              </button>
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-2 py-1 bg-white text-slate-600 hover:bg-slate-100 text-xs font-bold rounded-lg"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Grid of Past Records */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {records.map((record) => {
          const dateStr = new Date(record.timestamp).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          });

          return (
            <div
              key={record.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-card hover:border-agri-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail & Badges */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-slate-100 flex items-center justify-center">
                  <img
                    src={record.imageUrl}
                    alt={record.diagnosis}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={record.isHealthy ? 'healthy' : 'danger'}>
                      {record.isHealthy ? 'Healthy' : 'Diseased'}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-mono">
                    {dateStr}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Crop: {record.crop}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-agri-700 transition-colors line-clamp-1">
                    {record.diagnosis}
                  </h4>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">
                      Confidence
                    </span>
                    <span className="font-bold text-slate-800 font-mono">
                      {record.confidence}%
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">
                      Severity
                    </span>
                    <span className="font-semibold text-slate-700">
                      {record.severity}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 text-[10px] uppercase block font-semibold">
                      Model Mode
                    </span>
                    <span className="font-mono text-[11px] text-agri-700">
                      {record.prediction.engineMode.includes('WebGL') ? 'TF.js GPU' : 'TF.js CPU'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onViewRecord(record)}
                  className="flex items-center gap-1.5 text-xs font-bold text-agri-700 hover:text-agri-900 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  View Full Report
                </button>

                <button
                  onClick={() => onDeleteRecord(record.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Delete this record"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
