import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X, AlertCircle, Camera, Check, HelpCircle } from 'lucide-react';
import { SUPPORTED_CROPS } from '../../data/diseases';

interface ImageUploaderProps {
  imageSrc: string | null;
  fileName: string | null;
  fileSize: number | null;
  onImageSelected: (base64: string, name: string, size: number) => void;
  onClearImage: () => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  selectedCrop: string;
  onCropChange: (crop: string) => void;
  isSampleSpecimen?: boolean;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  imageSrc,
  fileName,
  fileSize,
  onImageSelected,
  onClearImage,
  onAnalyze,
  isAnalyzing,
  selectedCrop,
  onCropChange,
  isSampleSpecimen = false,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];

  const handleFileProcess = (file: File) => {
    setErrorMessage(null);

    if (!ALLOWED_TYPES.includes(file.type)) {
      setErrorMessage('Unsupported file format. Please upload a JPG, JPEG, PNG, or WEBP leaf image.');
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setErrorMessage(`Image size exceeds 10MB (${(file.size / (1024 * 1024)).toFixed(1)} MB). Please upload a smaller file.`);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        onImageSelected(result, file.name, file.size);
      }
    };
    reader.onerror = () => {
      setErrorMessage('Failed to read image file. Please try again.');
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileProcess(e.target.files[0]);
    }
  };

  const formatFileSize = (bytes: number | null): string => {
    if (!bytes) return '';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-6">
      {/* Crop Context Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
        <div>
          <label htmlFor="crop-select" className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
            Target Crop Species (Optional)
          </label>
          <p className="text-xs text-slate-500">
            Helps the AI narrow down pathogen candidates to crop-specific strains
          </p>
        </div>
        <select
          id="crop-select"
          value={selectedCrop}
          onChange={(e) => onCropChange(e.target.value)}
          disabled={isAnalyzing}
          className="text-sm font-semibold bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-agri-500 shadow-sm"
        >
          <option value="Auto-Detect">Auto-Detect Crop Species</option>
          {SUPPORTED_CROPS.map((crop) => (
            <option key={crop} value={crop}>
              {crop}
            </option>
          ))}
        </select>
      </div>

      {/* Error alert if validation fails */}
      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Invalid Image File</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Main Drag & Drop / Preview Area */}
      {!imageSrc ? (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-3xl p-8 sm:p-12 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[320px] ${
            dragActive
              ? 'border-agri-500 bg-agri-50/80 scale-[0.99]'
              : 'border-slate-300 hover:border-agri-400 bg-slate-50/60 hover:bg-slate-50'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.png,.webp"
            className="hidden"
            onChange={handleInputChange}
          />

          <div className="w-20 h-20 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-agri-600 mb-4 group-hover:scale-110 transition-transform">
            <Upload className="w-10 h-10" />
          </div>

          <h4 className="text-lg font-bold text-slate-900 mb-1">
            Drag & Drop Leaf Photograph Here
          </h4>
          <p className="text-sm text-slate-500 max-w-sm mb-4">
            or <span className="text-agri-600 font-bold underline">browse files</span> from your computer or smartphone
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-slate-500">
            <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">JPG</span>
            <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">PNG</span>
            <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">WEBP</span>
            <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200">Max 10 MB</span>
          </div>

          <div className="mt-6 flex items-center gap-1.5 text-xs text-slate-400">
            <Camera className="w-4 h-4 text-slate-400" />
            <span>Optimal results: Plain neutral background, clear lesion focus, good natural lighting</span>
          </div>
        </div>
      ) : (
        /* Image Preview Box */
        <div className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 max-h-[440px] flex items-center justify-center border border-slate-200 shadow-inner group">
            <img
              src={imageSrc}
              alt="Uploaded plant leaf for AI diagnosis"
              className="max-h-[400px] w-auto object-contain mx-auto transition-transform"
            />

            {/* Clear/Remove button */}
            {!isAnalyzing && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClearImage();
                }}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 hover:bg-rose-600 text-white backdrop-blur-sm shadow-md transition-all group-hover:scale-105"
                title="Remove image and select another"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            {/* Image Meta pill */}
            <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-700 text-white text-xs flex items-center gap-3">
              <span className="font-semibold truncate max-w-[200px] sm:max-w-xs">{fileName}</span>
              {fileSize && <span className="text-slate-400">({formatFileSize(fileSize)})</span>}
              {isSampleSpecimen && (
                <span className="bg-agri-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  PlantVillage Verified
                </span>
              )}
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <button
              onClick={onClearImage}
              disabled={isAnalyzing}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-sm transition-colors disabled:opacity-50"
            >
              Choose Different Image
            </button>

            <button
              onClick={onAnalyze}
              disabled={isAnalyzing}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-agri-600 to-agri-700 hover:from-agri-700 hover:to-agri-800 text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-agri-600/30 hover:shadow-xl hover:shadow-agri-600/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed transform active:scale-95"
            >
              <Upload className="w-5 h-5" />
              Analyze Image with AI
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
