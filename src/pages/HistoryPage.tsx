import React, { useState, useEffect } from 'react';
import { AnalysisRecord } from '../types';
import { getAnalysisHistory, deleteAnalysisRecord, clearAllHistory } from '../utils/storage';
import { HistoryList } from '../components/history/HistoryList';
import { Modal } from '../components/common/Modal';
import { History, ShieldCheck, ArrowRight, Printer, Sparkles } from 'lucide-react';
import { Badge } from '../components/common/Badge';

interface HistoryPageProps {
  onNavigateToDetect: () => void;
  onNavigateToLibrary: (diseaseId: string) => void;
}

export const HistoryPage: React.FC<HistoryPageProps> = ({
  onNavigateToDetect,
  onNavigateToLibrary,
}) => {
  const [records, setRecords] = useState<AnalysisRecord[]>([]);
  const [selectedRecord, setSelectedRecord] = useState<AnalysisRecord | null>(null);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = () => {
    const list = getAnalysisHistory();
    setRecords(list);
  };

  const handleDelete = (id: string) => {
    deleteAnalysisRecord(id);
    loadHistory();
  };

  const handleClearAll = () => {
    clearAllHistory();
    loadHistory();
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agri-100 text-agri-800 text-xs font-bold uppercase tracking-wider">
            <History className="w-3.5 h-3.5 text-agri-600" />
            Field Diagnostics Log
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Analysis History & Audit Trail
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Chronological audit of plant pathology diagnoses, confidence distributions, and agronomic interventions saved in this device’s session.
          </p>
        </div>

        {/* History List Component */}
        <HistoryList
          records={records}
          onDeleteRecord={handleDelete}
          onClearAll={handleClearAll}
          onViewRecord={(r) => setSelectedRecord(r)}
          onNavigateToDetect={onNavigateToDetect}
        />

        {/* Record Detail Modal */}
        {selectedRecord && (
          <Modal
            isOpen={!!selectedRecord}
            onClose={() => setSelectedRecord(null)}
            title={`Diagnosis: ${selectedRecord.diagnosis}`}
            maxWidth="2xl"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-200">
                  <img
                    src={selectedRecord.imageUrl}
                    alt={selectedRecord.diagnosis}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 font-bold uppercase block text-[10px]">
                      Timestamp:
                    </span>
                    <p className="font-semibold text-slate-800">
                      {new Date(selectedRecord.timestamp).toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-bold uppercase block text-[10px]">
                      Host Plant:
                    </span>
                    <p className="font-semibold text-slate-800">
                      {selectedRecord.crop}
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-bold uppercase block text-[10px]">
                      Diagnosis Status:
                    </span>
                    <Badge variant={selectedRecord.isHealthy ? 'healthy' : 'danger'}>
                      {selectedRecord.isHealthy ? 'Healthy Leaf' : 'Pathogenic Condition'}
                    </Badge>
                  </div>

                  <div>
                    <span className="text-slate-400 font-bold uppercase block text-[10px]">
                      Model Confidence:
                    </span>
                    <p className="font-mono font-bold text-lg text-agri-700">
                      {selectedRecord.confidence}%
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-bold uppercase block text-[10px]">
                      Severity Index:
                    </span>
                    <p className="font-semibold text-slate-700">
                      {selectedRecord.severity}
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-bold uppercase block text-[10px]">
                      Engine Mode:
                    </span>
                    <p className="font-mono text-slate-600">
                      {selectedRecord.prediction.engineMode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommendations Summary */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <span className="font-bold text-slate-700 uppercase block text-[10px]">
                  Cultural Management Guidelines:
                </span>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  {selectedRecord.prediction.recommendations.cultural.slice(0, 3).map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Close
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const id = selectedRecord.prediction.classId;
                      setSelectedRecord(null);
                      onNavigateToLibrary(id);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-agri-700 hover:bg-agri-50 rounded-xl border border-agri-200"
                  >
                    View in Library
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};
