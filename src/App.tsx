import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { DetectPage } from './pages/DetectPage';
import { LibraryPage } from './pages/LibraryPage';
import { HistoryPage } from './pages/HistoryPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [librarySelectedDiseaseId, setLibrarySelectedDiseaseId] = useState<string | null>(null);
  const [detectCropFilter, setDetectCropFilter] = useState<string>('Auto-Detect');

  // Sync tab with URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'detect', 'library', 'history', 'how-it-works', 'about'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToLibrary = (diseaseId?: string) => {
    if (diseaseId) {
      setLibrarySelectedDiseaseId(diseaseId);
    }
    handleTabChange('library');
  };

  const handleNavigateToDetectWithCrop = (crop: string) => {
    setDetectCropFilter(crop);
    handleTabChange('detect');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-agri-200 selection:text-agri-900">
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      <main className="flex-1">
        {activeTab === 'home' && <HomePage setActiveTab={handleTabChange} />}
        {activeTab === 'detect' && (
          <DetectPage
            onNavigateToLibrary={handleNavigateToLibrary}
            initialCropFilter={detectCropFilter}
          />
        )}
        {activeTab === 'library' && (
          <LibraryPage
            onAnalyzeCrop={handleNavigateToDetectWithCrop}
            initialSelectedDiseaseId={librarySelectedDiseaseId}
          />
        )}
        {activeTab === 'history' && (
          <HistoryPage
            onNavigateToDetect={() => handleTabChange('detect')}
            onNavigateToLibrary={handleNavigateToLibrary}
          />
        )}
        {activeTab === 'how-it-works' && (
          <HowItWorksPage onTestModel={() => handleTabChange('detect')} />
        )}
        {activeTab === 'about' && <AboutPage />}
      </main>

      <Footer setActiveTab={handleTabChange} />
    </div>
  );
}

export default App;
