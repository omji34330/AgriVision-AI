import React, { useState } from 'react';
import { Sprout, Menu, X, ShieldCheck, Cpu, BookOpen, History, Info, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Sprout },
    { id: 'detect', label: 'Detect Disease', icon: Sparkles },
    { id: 'library', label: 'Disease Library', icon: BookOpen },
    { id: 'history', label: 'Analysis History', icon: History },
    { id: 'how-it-works', label: 'How It Works', icon: Cpu },
    { id: 'about', label: 'About Project', icon: Info },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Project Tagline */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-agri-700 via-agri-600 to-agri-500 flex items-center justify-center text-white shadow-md shadow-agri-600/20 group-hover:scale-105 transition-transform">
              <Sprout className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                  Agri<span className="text-agri-600">Vision</span> <span className="text-earth-600">AI</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider bg-agri-100 text-agri-800 px-2 py-0.5 rounded-full border border-agri-200">
                  <ShieldCheck className="w-3 h-3 text-agri-600" /> PlantVillage AI
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Smart Plant Disease Detection & Crop-Care System
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-agri-50 text-agri-800 border border-agri-200 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-agri-600' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('detect')}
              className="flex items-center gap-2 bg-gradient-to-r from-agri-600 to-agri-700 hover:from-agri-700 hover:to-agri-800 text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-md shadow-agri-600/25 hover:shadow-lg hover:shadow-agri-600/35 transition-all transform active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              Analyze Leaf
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="pb-2 px-3">
            <span className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider">
              Navigation Menu
            </span>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? 'bg-agri-50 text-agri-800 border border-agri-200'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-agri-600' : 'text-slate-400'}`} />
                {item.label}
              </button>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => handleNavClick('detect')}
              className="w-full flex items-center justify-center gap-2 bg-agri-600 hover:bg-agri-700 text-white font-bold py-3 rounded-xl shadow-md shadow-agri-600/20"
            >
              <Sparkles className="w-5 h-5" />
              Analyze Plant Leaf
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
