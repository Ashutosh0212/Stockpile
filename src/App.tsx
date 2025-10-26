import { useState } from 'react';
import { Layers3, Upload, FolderOpen, CheckCircle, Lightbulb } from 'lucide-react';
import { Button } from './components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Toaster } from './components/ui/sonner';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { UploadSection } from './components/UploadSection';
import { ProcessingView } from './components/ProcessingView';
import { ResultsPanel } from './components/ResultsPanel';
import { ProjectsList } from './components/ProjectsList';
import { RecommendationsPanel } from './components/RecommendationsPanel';

type PageState = 'landing' | 'login' | 'app';
type ViewState = 'upload' | 'processing' | 'results';

export default function App() {
  const [pageState, setPageState] = useState<PageState>('landing');
  const [viewState, setViewState] = useState<ViewState>('upload');
  const [activeTab, setActiveTab] = useState('new-project');

  const handleGetStarted = () => {
    setPageState('login');
  };

  const handleLogin = () => {
    setPageState('app');
  };

  const handleBackToLanding = () => {
    setPageState('landing');
  };

  const handleStartProcessing = () => {
    setViewState('processing');
  };

  const handleProcessingComplete = () => {
    setViewState('results');
    setActiveTab('results');
  };

  const handleNewProject = () => {
    setViewState('upload');
    setActiveTab('new-project');
  };

  // Show Landing Page
  if (pageState === 'landing') {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  // Show Login Page
  if (pageState === 'login') {
    return <LoginPage onLogin={handleLogin} onBack={handleBackToLanding} />;
  }

  // Show Main Application
  return (
    <div className="min-h-screen bg-slate-100">
      <Toaster />
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <Layers3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-slate-900">Stockpile Analyst AI</h1>
                <p className="text-slate-600">Professional Photogrammetry & Volume Analysis</p>
              </div>
            </div>
            {viewState === 'results' && (
              <Button onClick={handleNewProject} className="bg-blue-600 hover:bg-blue-700">
                <Upload className="w-4 h-4 mr-2" />
                New Project
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {viewState === 'processing' ? (
          <ProcessingView onComplete={handleProcessingComplete} />
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="new-project" className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                New Project
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="results"
                className="flex items-center gap-2"
                disabled={viewState !== 'results'}
              >
                <CheckCircle className="w-4 h-4" />
                Results
              </TabsTrigger>
              <TabsTrigger
                value="recommendations"
                className="flex items-center gap-2"
                disabled={viewState !== 'results'}
              >
                <Lightbulb className="w-4 h-4" />
                Insights
              </TabsTrigger>
            </TabsList>

            <TabsContent value="new-project">
              <UploadSection onStartProcessing={handleStartProcessing} />
            </TabsContent>

            <TabsContent value="projects">
              <ProjectsList />
            </TabsContent>

            <TabsContent value="results">
              <ResultsPanel />
            </TabsContent>

            <TabsContent value="recommendations">
              <RecommendationsPanel />
            </TabsContent>
          </Tabs>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between text-slate-600">
            <div>
              <p>Survey-grade photogrammetry for earthwork and construction projects</p>
              <p className="text-slate-500">Compatible with Virtual Surveyor, Civil 3D, and all major GIS platforms</p>
            </div>
            <div className="text-right">
              <p>Supported Formats</p>
              <p className="text-slate-500">GeoTIFF • LAS • DXF • PDF</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
