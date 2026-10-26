import React from 'react';
import { Camera, RefreshCw, Cpu, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface HowItWorksSummaryProps {
  onLearnMore: () => void;
  onTryNow: () => void;
}

export const HowItWorksSummary: React.FC<HowItWorksSummaryProps> = ({ onLearnMore, onTryNow }) => {
  const steps = [
    {
      num: '01',
      title: 'Plant Leaf Image',
      desc: 'High-res capture or sample leaf photograph with visible symptom markers.',
      icon: Camera,
      color: 'from-blue-500 to-blue-600',
    },
    {
      num: '02',
      title: 'Image Preprocessing',
      desc: 'Bilinear downscaling to 224×224 px and normalization to [-1, 1] tensor range.',
      icon: RefreshCw,
      color: 'from-amber-500 to-amber-600',
    },
    {
      num: '03',
      title: 'AI Model (CNN)',
      desc: 'Deep convolutional layers extract spatial feature maps (edges, spots, rings).',
      icon: Cpu,
      color: 'from-agri-600 to-agri-700',
    },
    {
      num: '04',
      title: 'Disease Classification',
      desc: 'Softmax activation outputs probability scores across 38 distinct classes.',
      icon: CheckCircle2,
      color: 'from-emerald-600 to-emerald-700',
    },
    {
      num: '05',
      title: 'Crop-Care Guidance',
      desc: 'Domain mapping to actionable IPM, organic remedies, and prevention protocols.',
      icon: FileText,
      color: 'from-earth-600 to-earth-700',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-agri-400 text-xs font-bold uppercase tracking-widest bg-agri-950 px-3 py-1 rounded-full border border-agri-800">
            System Architecture Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-white">
            How AgriVision AI Analyzes a Leaf
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            From raw photographic pixels to certified agronomic intervention in five deterministic stages, powered directly in your browser.
          </p>
        </div>

        {/* 5-Step Pipeline Grid with Flow arrows */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between hover:border-agri-500/60 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      STEP {step.num}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-bold text-white text-base mb-2 group-hover:text-agri-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow connector between steps on md screens */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-500">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
            Want to see mathematical equations, kernel filters, and model confusion matrices?
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onLearnMore}
              className="text-xs sm:text-sm font-semibold text-agri-400 hover:text-agri-300 underline underline-offset-4"
            >
              Read In-Depth Technical Specification
            </button>
            <button
              onClick={onTryNow}
              className="px-5 py-2.5 rounded-xl bg-agri-600 hover:bg-agri-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              Test Live Classifier
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
