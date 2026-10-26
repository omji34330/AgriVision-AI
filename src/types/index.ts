export type SeverityLevel = 'None (Healthy)' | 'Low' | 'Moderate' | 'High' | 'Severe';

export type PathogenType = 'Fungal' | 'Bacterial' | 'Viral' | 'Pest / Mites' | 'Healthy' | 'Nutritional Deficiency';

export interface DiseaseInfo {
  id: string;
  name: string;
  crop: string;
  scientificName: string;
  pathogenType: PathogenType;
  pathogenName?: string;
  isHealthy: boolean;
  description: string;
  symptoms: string[];
  favorableConditions: {
    temperature?: string;
    humidity?: string;
    soilCondition?: string;
    spreadFactor?: string;
  };
  prevention: string[];
  organicManagement: string[];
  chemicalManagement?: string[];
  severityLevel: SeverityLevel;
  imageUrl?: string;
}

export interface PredictionCandidate {
  label: string;
  confidence: number; // percentage 0 - 100
  crop: string;
  isHealthy: boolean;
}

export interface AnalysisPrediction {
  classId: string;
  crop: string;
  diseaseName: string;
  isHealthy: boolean;
  confidence: number; // 0 - 100
  topPredictions: PredictionCandidate[];
  severity: SeverityLevel;
  diseaseDetails: DiseaseInfo;
  symptomsObserved: string[];
  recommendations: {
    cultural: string[];
    organic: string[];
    chemical: string[];
    expertAdvisory: string;
  };
  processingTimeMs: number;
  modelUsed: string;
  engineMode: 'TensorFlow.js WebGL' | 'TensorFlow.js CPU' | 'PlantVillage Neural Engine';
  rawProbabilities?: number[];
}

export interface AnalysisRecord {
  id: string;
  timestamp: string;
  imageUrl: string;
  fileName: string;
  crop: string;
  diagnosis: string;
  isHealthy: boolean;
  confidence: number;
  severity: SeverityLevel;
  prediction: AnalysisPrediction;
  isSample?: boolean;
}

export interface SampleLeaf {
  id: string;
  crop: string;
  condition: string;
  isHealthy: boolean;
  knownLabel: string;
  description: string;
  imageUrl: string;
  source: string;
}
