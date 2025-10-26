import { Layers3, CheckCircle, TrendingUp, Zap, Shield, Cloud, ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <Layers3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-slate-900">Stockpile Analyst AI</h1>
              </div>
            </div>
            <Button onClick={onGetStarted} variant="outline">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                <Zap className="w-4 h-4" />
                <span>AI-Powered Photogrammetry</span>
              </div>
              <div>
                <h1 className="text-slate-900 mb-4">
                  Transform Aerial Imagery into Actionable Insights
                </h1>
                <p className="text-slate-600 mb-8">
                  Professional photogrammetry suite for earthwork, mining, and construction projects. 
                  Generate survey-grade 3D models, calculate volumes, and produce detailed reports in minutes.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button onClick={onGetStarted} size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-slate-900">500+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div className="w-px h-12 bg-slate-300" />
                <div>
                  <div className="text-slate-900">±2cm</div>
                  <div className="text-slate-600">Vertical Accuracy</div>
                </div>
                <div className="w-px h-12 bg-slate-300" />
                <div>
                  <div className="text-slate-900">15min</div>
                  <div className="text-slate-600">Average Processing</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20" />
              <Card className="overflow-hidden shadow-2xl relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1514189069169-f31100881e49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHN1cnZleXxlbnwxfHx8fDE3NjE0OTI3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Drone aerial survey"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur rounded-lg p-4 shadow-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-600">Volume Analysis</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-slate-900">Cut: 1,247 m³ • Fill: 892 m³</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-slate-900 mb-4">Everything You Need for Stockpile Analysis</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From image upload to final deliverables, our platform handles the entire photogrammetry workflow
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow border-t-4 border-t-blue-600">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Cloud Processing</h3>
              <p className="text-slate-600 mb-4">
                Upload drone imagery and let our cloud infrastructure handle the heavy lifting. No expensive hardware required.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Unlimited processing power</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Auto-scaling resources</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-t-4 border-t-purple-600">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Accurate Volume Calculations</h3>
              <p className="text-slate-600 mb-4">
                Survey-grade cut/fill analysis with detailed stockpile measurements for earthwork and mining operations.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>±2-3cm vertical accuracy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Multi-temporal change detection</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-t-4 border-t-green-600">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Professional Deliverables</h3>
              <p className="text-slate-600 mb-4">
                Export survey-ready formats compatible with industry-standard software like Civil 3D and Virtual Surveyor.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>GeoTIFF, LAS, DXF formats</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Comprehensive PDF reports</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Simple workflow from imagery to insights in just a few steps
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Upload Imagery', desc: 'Drag and drop your drone photos or videos' },
              { step: '02', title: 'AI Processing', desc: 'Our AI generates 3D models and orthomosaics' },
              { step: '03', title: 'Review Results', desc: 'Explore volumes, elevations, and contours' },
              { step: '04', title: 'Download Reports', desc: 'Export professional deliverables' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span>{item.step}</span>
                  </div>
                  <h3 className="text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-slate-900 mb-4">Trusted by Industry Professionals</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From mining operations to construction sites, our platform delivers accurate results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group cursor-pointer">
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1697207457766-599f094d55e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBxdWFycnklMjBhZXJpYWx8ZW58MXx8fHwxNzYxNDY1MzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mining and quarry operations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="mb-1">Mining & Quarries</h3>
                  <p className="text-white/90">Drone-based inventory and monthly volume tracking</p>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden group cursor-pointer">
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1661945072487-bf771c03851c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzdXJ2ZXl8ZW58MXx8fHwxNzYxNDkyNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Construction site"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="mb-1">Construction Sites</h3>
                  <p className="text-white/90">Cut/fill analysis and progress tracking</p>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden group cursor-pointer">
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1687079661067-37edf116d6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBkcm9uZSUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYxNDkxOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Earthwork"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="mb-1">Earthwork Projects</h3>
                  <p className="text-white/90">Terrain modeling and volume estimation</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-4">Ready to Transform Your Workflow?</h2>
          <p className="mb-8 text-blue-100">
            Join hundreds of surveyors, engineers, and project managers using Stockpile Analyst AI
          </p>
          <Button onClick={onGetStarted} size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Start Your Free Trial
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Layers3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-white">Stockpile Analyst AI</span>
              </div>
              <p className="text-slate-500">Professional photogrammetry for the modern surveyor</p>
            </div>
            <div>
              <h4 className="text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li>Features</li>
                <li>Pricing</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
            © 2025 Stockpile Analyst AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
