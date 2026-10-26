import React from 'react';
import { TrendingUp, Sprout, DollarSign, Clock, ShieldAlert, Award } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Mitigates 20% - 40% Global Harvest Losses',
      description:
        'Plant diseases cause catastrophic yield reductions worldwide. Early AI foliar detection catches initial foci before airborne fungal sporangia proliferate across the entire field.',
      color: 'text-agri-600',
      bgColor: 'bg-agri-50'
    },
    {
      icon: DollarSign,
      title: 'Reduces Indiscriminate Chemical Expenditure',
      description:
        'Instead of costly blanket fungicide sprayings, farmers can identify the exact localized pathology and apply targeted treatments, slashing agrochemical inputs by up to 35%.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Clock,
      title: 'Sub-Second Diagnostic Velocity',
      description:
        'Traditional agar plate culturing and laboratory PCR assays take 3 to 7 days. AgriVision AI delivers immediate preliminary analysis in seconds right in the browser.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      icon: Sprout,
      title: 'Protects Soil Microbiome & Biodiversity',
      description:
        'Promotes organic bio-fungicides (e.g., Trichoderma, Bacillus subtilis) and cultural measures, conserving beneficial mycorrhizae and preventing chemical runoff into local watersheds.',
      color: 'text-earth-600',
      bgColor: 'bg-earth-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (5 cols): Context & Engineering stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-100 text-earth-800 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Agronomic Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Early Disease Detection Matters for Sustainable Agriculture
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              According to the Food and Agriculture Organization (FAO), plant diseases cost the global economy over $220 billion annually. For smallholder farmers with limited agricultural extension coverage, visual AI triage acts as a vital first line of defense.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-amber-800">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Crucial Agricultural Engineering Principle:</span>
              </div>
              <p className="text-xs text-amber-800/90 leading-relaxed">
                "Intervening during the primary incubation phase prevents exponential secondary spore release, protecting not just the individual crop row, but neighbouring community farms."
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): The 4 benefit cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl ${b.bgColor} ${b.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
