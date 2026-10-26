import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { Benefits } from '../components/home/Benefits';
import { HowItWorksSummary } from '../components/home/HowItWorksSummary';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-0">
      <Hero
        onAnalyzeClick={() => setActiveTab('detect')}
        onExploreClick={() => setActiveTab('how-it-works')}
      />

      <Features onLearnMore={(tab) => setActiveTab(tab)} />

      <Benefits />

      <HowItWorksSummary
        onLearnMore={() => setActiveTab('how-it-works')}
        onTryNow={() => setActiveTab('detect')}
      />

      {/* Pre-Demonstration Quick Try Banner */}
      <section className="py-16 bg-gradient-to-r from-agri-700 via-agri-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-agri-600/40 border border-agri-400/40 text-agri-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-agri-300" />
            Ready for College Viva & Demo
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Demonstrate Real-Time AI Disease Diagnosis in Under 2 Minutes
          </h2>

          <p className="text-base sm:text-lg text-agri-100 max-w-2xl mx-auto font-normal">
            Select a verified benchmark specimen or upload a fresh leaf photo to observe real-time TensorFlow.js tensor preprocessing, classification, and crop-care generation.
          </p>

          <div className="pt-2">
            <button
              onClick={() => {
                setActiveTab('detect');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 bg-white text-agri-900 hover:bg-agri-50 font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform active:scale-95"
            >
              <Sparkles className="w-5 h-5 text-agri-600" />
              Launch AI Detection Lab
              <ArrowRight className="w-5 h-5 ml-1 text-agri-600" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
