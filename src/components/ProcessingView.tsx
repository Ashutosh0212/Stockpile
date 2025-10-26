import { CheckCircle, Loader2, Circle } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { CompletionCelebration } from './CompletionCelebration';
import { useEffect, useState } from 'react';

interface ProcessingViewProps {
  onComplete: () => void;
}

const steps = [
  { name: 'Loading Images', duration: 10, desc: 'Uploading and validating imagery files' },
  { name: 'Scanning & Analysis', duration: 15, desc: 'Analyzing image metadata and quality' },
  { name: 'Feature Detection & Matching', duration: 25, desc: 'Identifying common features across images' },
  { name: 'Sparse Reconstruction', duration: 20, desc: 'Building initial 3D structure' },
  { name: 'Dense Point Cloud Generation', duration: 30, desc: 'Creating high-density 3D model' },
  { name: 'Digital Surface Model (DSM)', duration: 15, desc: 'Generating elevation raster' },
  { name: 'Orthomosaic Generation', duration: 20, desc: 'Creating georeferenced map' },
  { name: 'Volume Calculation', duration: 10, desc: 'Computing cut/fill volumes' },
];

export function ProcessingView({ onComplete }: ProcessingViewProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    const totalDuration = steps.reduce((sum, step) => sum + step.duration, 0);
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += 0.5;
      const newProgress = (elapsed / totalDuration) * 100;
      setProgress(newProgress);

      let accumulatedDuration = 0;
      let newStep = 0;
      for (let i = 0; i < steps.length; i++) {
        accumulatedDuration += steps[i].duration;
        if (elapsed < accumulatedDuration) {
          newStep = i;
          break;
        }
      }

      if (newStep !== currentStep && newStep < steps.length) {
        setCurrentStep(newStep);
      }

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        setShowCelebration(true);
        setTimeout(() => {
          setShowCelebration(false);
          onComplete();
        }, 3000);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [currentStep, onComplete]);

  return (
    <>
      <CompletionCelebration show={showCelebration} />
      <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h2 className="mb-2">Processing Aerial Survey</h2>
        <p className="text-slate-600">
          Generating high-resolution 3D surface model and orthomosaic from your imagery
        </p>
      </div>

      {/* Animated Scanner Visualization */}
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
        <div className="relative">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <Loader2 className="w-16 h-16 text-white animate-spin" />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-ping opacity-75" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-slate-900 mb-2">{steps[currentStep].name}</h3>
            <p className="text-slate-600">{steps[currentStep].desc}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-700">Overall Progress</span>
            <span className="text-blue-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-3">
          {steps.map((step, index) => {
            const isComplete = index < currentStep;
            const isCurrent = index === currentStep;
            const isPending = index > currentStep;

            return (
              <div
                key={step.name}
                className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 ${
                  isCurrent ? 'bg-blue-50 shadow-sm scale-[1.02]' : ''
                }`}
              >
                {isComplete && (
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                )}
                {isCurrent && (
                  <Loader2 className="w-5 h-5 text-blue-600 flex-shrink-0 animate-spin mt-0.5" />
                )}
                {isPending && (
                  <Circle className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1 min-w-0">
                  <div
                    className={`${
                      isComplete
                        ? 'text-slate-500'
                        : isCurrent
                        ? 'text-slate-900'
                        : 'text-slate-400'
                    }`}
                  >
                    {step.name}
                  </div>
                  {isCurrent && (
                    <div className="text-slate-500 mt-0.5">{step.desc}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="mb-2 text-blue-900">Processing Details</h3>
        <div className="grid grid-cols-2 gap-4 text-blue-800">
          <div>
            <div className="text-blue-600">Images Processed</div>
            <div>24 / 24</div>
          </div>
          <div>
            <div className="text-blue-600">Points Generated</div>
            <div>~2.4M dense points</div>
          </div>
          <div>
            <div className="text-blue-600">Output Resolution</div>
            <div>2.1 cm/pixel GSD</div>
          </div>
          <div>
            <div className="text-blue-600">Estimated Time</div>
            <div>{Math.ceil((steps.reduce((sum, s) => sum + s.duration, 0) * (100 - progress)) / 100)} seconds</div>
          </div>
        </div>
      </Card>
    </div>
    </>
  );
}
