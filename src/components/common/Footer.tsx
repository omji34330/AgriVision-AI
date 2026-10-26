import React from 'react';
import { Sprout, ShieldAlert, Lock, Heart, Award, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Project Statement */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-agri-600 flex items-center justify-center text-white shadow-md">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Agri<span className="text-agri-400">Vision</span> <span className="text-earth-400">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              An engineering-grade intelligent plant disease detection system developed as part of a B.Tech Agricultural Engineering capstone project. Powered by deep convolutional neural networks and the PlantVillage dataset.
            </p>
            <div className="flex items-center gap-2 text-xs text-agri-400 bg-agri-950/60 border border-agri-900/60 px-3 py-2 rounded-lg">
              <Award className="w-4 h-4 shrink-0" />
              <span>B.Tech Final Year Academic Project</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Project Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-agri-400 transition-colors"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('detect'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-agri-400 transition-colors"
                >
                  AI Leaf Analysis Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('library'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-agri-400 transition-colors"
                >
                  Plant Pathology Library
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('history'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-agri-400 transition-colors"
                >
                  Diagnostic History
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('how-it-works'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-agri-400 transition-colors"
                >
                  CNN Architecture & Pipeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-agri-400 transition-colors"
                >
                  About Team & Academic Info
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Supported Plant Species */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Supported Crops (PlantVillage)</h4>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {['Tomato', 'Potato', 'Corn (Maize)', 'Bell Pepper', 'Apple', 'Grape', 'Squash', 'Wheat'].map((crop) => (
                <span key={crop} className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60">
                  {crop}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-400 pt-2 leading-relaxed">
              Trained to classify 38 healthy and pathological classes across solanaceous, cucurbit, and fruit orchard crops.
            </p>
          </div>

          {/* Col 4: Safety & Privacy Commitments */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-agri-400" />
              Safety & Privacy
            </h4>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2 text-amber-300">
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="font-semibold">Agricultural Advisory:</span>
              </div>
              <p>
                AI predictions are diagnostic aids, not certified agronomist prescriptions. Never apply restricted agrochemicals without consulting your regional Krishi Vigyan Kendra (KVK) or extension officer.
              </p>
              <div className="pt-2 border-t border-slate-700 text-slate-400">
                <p>
                  <strong>100% Client-Side Privacy:</strong> Image tensors are processed strictly inside your local browser memory using TensorFlow.js. Zero images are stored on remote servers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} AgriVision AI. Developed for B.Tech Agricultural Engineering Demonstration.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React, TypeScript & TensorFlow.js
          </p>
        </div>
      </div>
    </footer>
  );
};
