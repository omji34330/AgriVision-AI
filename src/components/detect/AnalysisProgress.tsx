import React, { useState, useEffect } from 'react';
import { Cpu, CheckCircle2, Loader2, Sparkles, Activity } from 'lucide-react';

interface AnalysisProgressProps {
  onComplete?: () => void;
}

export const AnalysisProgress: React.FC<AnalysisProgressProps> = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: 'Decoding Image Matrix & Memory Buffer', detail: 'Reading DOM bitmap and preparing memory tensors' },
    { title: 'Tensor Preprocessing & Normalization', detail: 'Rescaling to [1, 224, 224, 3] and standardizing RGB values' },
    { title: 'Deep CNN Feature Extraction', detail: 'Propagating through convolutional filters on TensorFlow.js WebGL' },
    { title: 'Multi-Class Softmax Classification', detail: 'Evaluating 38 PlantVillage pathology logits' },
    { title: 'Compiling Agronomic Care Protocol', detail: 'Synthesizing organic and cultural management measures' },
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 350);
    const timer2 = setTimeout(() => setCurrentStep(2), 750);
    const timer3 = setTimeout(() => setCurrentStep(3), 1200);
    const timer4 = setTimeout(() => setCurrentStep(4), 1650);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const progressPercent = Math.min(100, Math.round(((currentStep + 1) / steps.length) * 100));

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-agri-200 shadow-xl space-y-6 animate-in fade-in">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-agri-100 text-agri-700 mx-auto shadow-inner animate-pulse">
          <Cpu className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          TensorFlow.js Neural Inference in Progress...
        </h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          Executing client-side deep convolutional neural network on local GPU/WebGL backend
        </p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2 max-w-xl mx-auto">
        <div className="flex justify-between text-xs font-bold text-slate-700">
          <span className="flex items-center gap-1.5 text-agri-700">
            <Activity className="w-4 h-4 animate-spin text-agri-600" />
            Analyzing Foliar Geometry...
          </span>
          <span>{progressPercent}% Complete</span>
        </div>
        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-agri-500 via-agri-600 to-emerald-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Stepper Details */}
      <div className="max-w-xl mx-auto divide-y divide-slate-100 pt-2">
        {steps.map((s, index) => {
          const isDone = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : isCurrent ? (
                  <Loader2 className="w-4 h-4 text-agri-600 animate-spin shrink-0" />
                ) : (
                  <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                )}
                <div>
                  <p className={`font-semibold ${isCurrent ? 'text-agri-800' : isDone ? 'text-slate-800' : 'text-slate-400'}`}>
                    {s.title}
                  </p>
                  <p className="text-[11px] text-slate-400 hidden sm:block">{s.detail}</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                {isDone ? 'COMPLETE' : isCurrent ? 'RUNNING' : 'WAITING'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
