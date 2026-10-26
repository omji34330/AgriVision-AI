import { AnalysisRecord } from '../types';

const STORAGE_KEY = 'agrivision_analysis_history_v1';

export function getAnalysisHistory(): AnalysisRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as AnalysisRecord[];
  } catch (error) {
    console.error('Failed to read analysis history from localStorage:', error);
    return [];
  }
}

export function saveAnalysisRecord(record: AnalysisRecord): boolean {
  try {
    const existing = getAnalysisHistory();
    // Prepend new record, keep up to 40 recent records
    const updated = [record, ...existing.filter(r => r.id !== record.id)].slice(0, 40);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (error) {
    console.error('Failed to save analysis record to localStorage:', error);
    // If quota exceeded, remove oldest half and retry
    try {
      const existing = getAnalysisHistory();
      const pruned = [record, ...existing.slice(0, 10)];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pruned));
      return true;
    } catch {
      return false;
    }
  }
}

export function deleteAnalysisRecord(id: string): boolean {
  try {
    const existing = getAnalysisHistory();
    const updated = existing.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (error) {
    console.error('Failed to delete analysis record:', error);
    return false;
  }
}

export function clearAllHistory(): boolean {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Failed to clear history:', error);
    return false;
  }
}

export function exportHistoryAsJSON(): void {
  const history = getAnalysisHistory();
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(history, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `agrivision_history_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function exportHistoryAsCSV(): void {
  const history = getAnalysisHistory();
  if (history.length === 0) return;

  const headers = ['ID', 'Timestamp', 'Crop', 'Diagnosis', 'Status', 'Confidence (%)', 'Severity', 'Model Engine'];
  const rows = history.map(h => [
    h.id,
    `"${new Date(h.timestamp).toLocaleString()}"`,
    `"${h.crop}"`,
    `"${h.diagnosis}"`,
    h.isHealthy ? 'Healthy' : 'Diseased',
    h.confidence,
    h.severity,
    `"${h.prediction.engineMode}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', encodedUri);
  downloadAnchor.setAttribute('download', `agrivision_history_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}
