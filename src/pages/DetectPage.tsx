import React, { useState, useEffect } from 'react';
import { ImageUploader } from '../components/detect/ImageUploader';
import { SampleSelector } from '../components/detect/SampleSelector';
import { AnalysisProgress } from '../components/detect/AnalysisProgress';
import { AnalysisResult } from '../components/detect/AnalysisResult';
import { analyzeLeafImage } from '../services/aiEngine';
import { AnalysisPrediction, AnalysisRecord, SampleLeaf } from '../types';
import { saveAnalysisRecord } from '../utils/storage';
import { Sparkles, ShieldAlert, BookOpen, Layers } from 'lucide-react';

interface DetectPageProps {
  onNavigateToLibrary: (diseaseId?: string) => void;
  initialCropFilter?: string;
}

export const DetectPage: React.FC<DetectPageProps> = ({
  onNavigateToLibrary,
  initialCropFilter = 'Auto-Detect',
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<number | null>(null);
  const [selectedCrop, setSelectedCrop] = useState<string>(initialCropFilter);
  const [selectedSampleId, setSelectedSampleId] = useState<string | undefined>(undefined);
  const [isSampleSpecimen, setIsSampleSpecimen] = useState<boolean>(false);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [prediction, setPrediction] = useState<AnalysisPrediction | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  const handleSelectSample = (sample: SampleLeaf) => {
    setImageSrc(sample.imageUrl);
    setFileName(sample.knownLabel);
    setFileSize(128000); // 128 KB
    setSelectedCrop(sample.crop);
    setSelectedSampleId(sample.id);
    setIsSampleSpecimen(true);
    setPrediction(null);
    setIsSaved(false);
  };

  const handleImageSelected = (base64: string, name: string, size: number) => {
    setImageSrc(base64);
    setFileName(name);
    setFileSize(size);
    setSelectedSampleId(undefined);
    setIsSampleSpecimen(false);
    setPrediction(null);
    setIsSaved(false);
  };

  const handleClearImage = () => {
    setImageSrc(null);
    setFileName(null);
    setFileSize(null);
    setSelectedSampleId(undefined);
    setIsSampleSpecimen(false);
    setPrediction(null);
    setIsSaved(false);
  };

  const handleAnalyze = async () => {
    if (!imageSrc) return;

    setIsAnalyzing(true);
    setPrediction(null);

    // Create an off-screen HTMLImageElement to decode image dimensions for TensorFlow.js
    const imgElement = new Image();
    imgElement.crossOrigin = 'anonymous';
    imgElement.src = imageSrc;

    imgElement.onload = async () => {
      try {
        // Run AI Analysis Pipeline
        const result = await analyzeLeafImage(
          imgElement,
          selectedSampleId,
          selectedCrop !== 'Auto-Detect' ? selectedCrop : undefined
        );

        // Allow animation timer to showcase neural steps
        setTimeout(() => {
          setPrediction(result);
          setIsAnalyzing(false);

          // Auto-save record to local history
          const record: AnalysisRecord = {
            id: `diag_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
            timestamp: new Date().toISOString(),
            imageUrl: imageSrc,
            fileName: fileName || 'Uploaded_Leaf.jpg',
            crop: result.crop,
            diagnosis: result.diseaseName,
            isHealthy: result.isHealthy,
            confidence: result.confidence,
            severity: result.severity,
            prediction: result,
            isSample: isSampleSpecimen,
          };
          saveAnalysisRecord(record);
          setIsSaved(true);
        }, 1800);
      } catch (error) {
        console.error('Analysis error:', error);
        setIsAnalyzing(false);
      }
    };

    imgElement.onerror = () => {
      console.error('Failed to load image for analysis');
      setIsAnalyzing(false);
    };
  };

  const handleManualSave = () => {
    if (!prediction || !imageSrc || isSaved) return;

    const record: AnalysisRecord = {
      id: `diag_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      imageUrl: imageSrc,
      fileName: fileName || 'Uploaded_Leaf.jpg',
      crop: prediction.crop,
      diagnosis: prediction.diseaseName,
      isHealthy: prediction.isHealthy,
      confidence: prediction.confidence,
      severity: prediction.severity,
      prediction: prediction,
      isSample: isSampleSpecimen,
    };
    saveAnalysisRecord(record);
    setIsSaved(true);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Title & Context */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agri-100 text-agri-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-agri-600" />
            AI Diagnostic Laboratory
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Plant Leaf Disease Detection & Severity Triage
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Upload an image of a symptomatic leaf or choose a verified academic benchmark sample to classify pathology with our deep learning model.
          </p>
        </div>

        {/* Demo Samples Selector (for quick 2-minute presentations) */}
        {!prediction && !isAnalyzing && (
          <SampleSelector
            onSelectSample={handleSelectSample}
            selectedSampleId={selectedSampleId}
            disabled={isAnalyzing}
          />
        )}

        {/* Upload & Preview Interface */}
        {!prediction && !isAnalyzing && (
          <ImageUploader
            imageSrc={imageSrc}
            fileName={fileName}
            fileSize={fileSize}
            onImageSelected={handleImageSelected}
            onClearImage={handleClearImage}
            onAnalyze={handleAnalyze}
            isAnalyzing={isAnalyzing}
            selectedCrop={selectedCrop}
            onCropChange={setSelectedCrop}
            isSampleSpecimen={isSampleSpecimen}
          />
        )}

        {/* Animated Progress Indicator */}
        {isAnalyzing && <AnalysisProgress />}

        {/* Results Dashboard */}
        {prediction && imageSrc && (
          <AnalysisResult
            prediction={prediction}
            imageUrl={imageSrc}
            onReset={handleClearImage}
            onViewInLibrary={(id) => onNavigateToLibrary(id)}
            onSaveToHistory={handleManualSave}
            isSaved={isSaved}
          />
        )}

        {/* Academic Safety Notice Footer */}
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Advisory Note for Field Deployment:</strong> While AgriVision AI achieves high classification fidelity on clean benchmark specimens, variations in field illumination, camera glare, or compound leaf stress may affect confidence. Always corroborate automated diagnoses with macroscopic field inspection and local extension guidance.
          </p>
        </div>
      </div>
    </div>
  );
};
