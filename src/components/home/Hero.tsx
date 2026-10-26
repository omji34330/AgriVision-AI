import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Leaf, Activity, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onAnalyzeClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAnalyzeClick, onExploreClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-agri-50/60 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      {/* Decorative ambient background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-agri-200/40 via-emerald-100/30 to-amber-100/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-100/90 border border-agri-300/80 text-agri-900 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-agri-600 animate-pulse" />
              <span>B.Tech Agricultural Engineering Innovation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Detect Plant Diseases with <span className="text-transparent bg-clip-text bg-gradient-to-r from-agri-600 via-agri-700 to-earth-600">Artificial Intelligence</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Empowering farmers, agronomists, and agricultural researchers with instant foliar disease detection, pathogen severity analysis, and scientifically grounded crop-care recommendations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onAnalyzeClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-agri-600 to-agri-700 hover:from-agri-700 hover:to-agri-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-agri-600/30 hover:shadow-xl hover:shadow-agri-600/40 transition-all transform active:scale-95"
              >
                <Sparkles className="w-5 h-5" />
                Analyze a Plant
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold text-base px-6 py-3.5 rounded-xl border border-slate-300 shadow-sm transition-all"
              >
                <Cpu className="w-5 h-5 text-agri-600" />
                Explore How It Works
              </button>
            </div>

            {/* Trust and Key Capabilities Badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/80 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-agri-600 shrink-0" />
                <span>38 Crop Disease Classes</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-agri-600 shrink-0" />
                <span>Zero Server Data Storage</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 col-span-2 sm:col-span-1">
                <Activity className="w-4 h-4 text-agri-600 shrink-0" />
                <span>Real-Time Browser Inference</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 p-3 shadow-2xl border border-slate-700/50">
                {/* Simulated Farmer Leaf Field Inspection */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1592417817098-8f3d6eb2265c?auto=format&fit=crop&w=900&q=80"
                    alt="Farmer carefully inspecting a crop leaf for plant pathology symptoms"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                  {/* AI Scanning reticle */}
                  <div className="absolute inset-8 border border-agri-400/40 rounded-xl pointer-events-none flex flex-col justify-between p-3">
                    <div className="flex justify-between items-center text-[10px] text-agri-300 font-mono">
                      <span>SCAN_AREA: 224x224</span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-agri-400 animate-ping" />
                        LIVE_TENSOR
                      </span>
                    </div>
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-agri-400 to-transparent animate-scan-line" />
                    <div className="text-[10px] text-agri-300/80 font-mono text-right">
                      CHLOROPHYLL_SPEC: 96.4%
                    </div>
                  </div>

                  {/* Floating Result Card 1 */}
                  <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-200/80 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs">
                          <Leaf className="w-4 h-4 text-rose-600" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">Early Blight Detected</p>
                          <p className="text-[11px] text-slate-500">Crop: Solanum lycopersicum (Tomato)</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold rounded-md">
                        96.4% Match
                      </span>
                    </div>
                  </div>

                  {/* Floating Action Badge Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700 text-white flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-agri-400" />
                      <span>Immediate Organic Action Plan</span>
                    </div>
                    <span className="text-[11px] font-semibold text-agri-400 bg-agri-950 px-2 py-0.5 rounded border border-agri-800">
                      Copper Hydroxide
                    </span>
                  </div>
                </div>

                {/* Bottom stats row under hero card */}
                <div className="grid grid-cols-3 gap-2 pt-3 px-1 text-center">
                  <div className="bg-slate-800/80 rounded-xl p-2.5 border border-slate-700/60">
                    <p className="text-lg font-black text-white">54,305</p>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Dataset Images</p>
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-2.5 border border-slate-700/60">
                    <p className="text-lg font-black text-agri-400">&lt; 200 ms</p>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Inference Speed</p>
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-2.5 border border-slate-700/60">
                    <p className="text-lg font-black text-earth-400">100%</p>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Client On-Device</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
