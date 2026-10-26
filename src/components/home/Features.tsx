import React from 'react';
import { Sparkles, HeartPulse, Tractor, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';

interface FeaturesProps {
  onLearnMore: (tab: string) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onLearnMore }) => {
  const featureList = [
    {
      id: 'ai-detection',
      title: 'AI Disease Detection',
      icon: Sparkles,
      iconBg: 'bg-agri-100 text-agri-700',
      badge: 'Deep CNN Core',
      description:
        'Leverages convolutional neural networks trained on 54,000+ benchmark leaf images to identify subtle necroses, chlorotic rings, rust pustules, and fungal spores within milliseconds.',
      highlights: [
        'Multi-spectral foliar pattern recognition',
        'Top-3 softmax probability distribution',
        'Fine-tuned on standard PlantVillage taxonomy'
      ],
      actionText: 'Test Detection Engine',
      targetTab: 'detect'
    },
    {
      id: 'health-insights',
      title: 'Crop Health Insights',
      icon: HeartPulse,
      iconBg: 'bg-amber-100 text-amber-700',
      badge: 'Pathology Analytics',
      description:
        'Comprehensive symptom profiles and environmental vulnerability models that clarify whether lesions stem from fungal pathogens, bacterial blight, viral mosaic, or nutrient deficiency.',
      highlights: [
        'Severity indexing (None, Low, Moderate, Severe)',
        'Favorable temperature and humidity conditions',
        'Differentiates healthy foliage from blighted leaves'
      ],
      actionText: 'Browse Pathology Library',
      targetTab: 'library'
    },
    {
      id: 'smart-farming',
      title: 'Smart Farming Recommendations',
      icon: Tractor,
      iconBg: 'bg-earth-100 text-earth-800',
      badge: 'Agronomy Care',
      description:
        'Actionable integrated pest management (IPM) guidelines prioritizing cultural practices, organic bio-fungicides, and preventative crop rotations before chemical interventions.',
      highlights: [
        'Organic bio-control solutions (Neem, Trichoderma)',
        'Preventative canopy and irrigation practices',
        'Clear warnings for expert extension verification'
      ],
      actionText: 'View Pipeline Architecture',
      targetTab: 'how-it-works'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agri-50 border border-agri-200 text-agri-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered for Precision Agricultural Diagnosis
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A synergistic combination of deep computer vision and plant pathology domain knowledge, designed to support farmers in making timely, informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="group relative flex flex-col justify-between bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-agri-300 shadow-sm hover:shadow-card transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${feat.iconBg} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-agri-700 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {feat.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200/60 mb-6">
                    {feat.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <ShieldCheck className="w-4 h-4 text-agri-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onLearnMore(feat.targetTab)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-white group-hover:bg-agri-50 border border-slate-200 group-hover:border-agri-200 text-xs font-bold text-slate-800 group-hover:text-agri-800 transition-all"
                >
                  <span>{feat.actionText}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-agri-600 group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
