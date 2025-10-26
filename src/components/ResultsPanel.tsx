import { Download, MapPin, Layers, TrendingUp, TrendingDown, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

export function ResultsPanel() {
  const handleDownloadReport = () => {
    // Simulate PDF download
    toast.success('Report downloaded successfully!', {
      description: 'stockpile-analysis-report-oct26-2025.pdf',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="mb-2">Analysis Results</h2>
          <p className="text-slate-600">
            Construction Site Survey - October 26, 2025
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge className="bg-green-600">Processing Complete</Badge>
          <Button onClick={handleDownloadReport} className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
        </div>
      </div>

      {/* Prominent Download Report Card */}
      <Card className="p-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white border-0 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white mb-2">Complete Analysis Report Ready</h3>
              <p className="text-blue-100 mb-4">
                Comprehensive PDF report including volume calculations, site plans, elevation data, and professional deliverables
              </p>
              <ul className="space-y-1 text-blue-100">
                <li>• Executive Summary with Volume Analysis</li>
                <li>• High-Resolution Orthomosaic Maps</li>
                <li>• Elevation Profiles & Contour Maps</li>
                <li>• Cut/Fill Calculations & Statistics</li>
              </ul>
            </div>
          </div>
          <Button 
            onClick={handleDownloadReport}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg flex-shrink-0"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF Report
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-slate-600">Cut Volume</span>
          </div>
          <div className="text-slate-900">1,247 m³</div>
          <div className="text-slate-500">excavated material</div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-4 h-4 text-orange-600" />
            <span className="text-slate-600">Fill Volume</span>
          </div>
          <div className="text-slate-900">892 m³</div>
          <div className="text-slate-500">added material</div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-purple-600" />
            <span className="text-slate-600">Net Volume</span>
          </div>
          <div className="text-slate-900">355 m³</div>
          <div className="text-slate-500">net cut</div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-green-600" />
            <span className="text-slate-600">Survey Area</span>
          </div>
          <div className="text-slate-900">2.8 hectares</div>
          <div className="text-slate-500">28,000 m²</div>
        </Card>
      </div>

      <Tabs defaultValue="orthomosaic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="orthomosaic">Orthomosaic</TabsTrigger>
          <TabsTrigger value="dsm">Elevation Model</TabsTrigger>
          <TabsTrigger value="contours">Contour Map</TabsTrigger>
        </TabsList>
        
        <TabsContent value="orthomosaic" className="mt-4">
          <Card className="overflow-hidden">
            <div className="aspect-[16/10] bg-slate-100 relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1687079661067-37edf116d6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBkcm9uZSUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYxNDkxOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Orthomosaic map"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-3 py-2 rounded shadow-lg">
                <div className="text-slate-600">GSD: 2.1 cm/pixel</div>
                <div className="text-slate-900">Georeferenced: WGS84 / UTM 33N</div>
              </div>
            </div>
            <div className="p-4 border-t bg-white">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Georeferenced Orthophoto</span>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download GeoTIFF
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="dsm" className="mt-4">
          <Card className="overflow-hidden">
            <div className="aspect-[16/10] bg-gradient-to-br from-green-900 via-yellow-600 to-red-900 relative">
              <div className="absolute inset-0 opacity-70">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1730314737142-2f6bb293f893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3BvZ3JhcGhpYyUyMG1hcCUyMHRlcnJhaW58ZW58MXx8fHwxNzYxMzgwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Digital Surface Model"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded shadow-lg overflow-hidden">
                <div className="p-3 border-b">
                  <div className="text-slate-600">Elevation Legend</div>
                </div>
                <div className="p-3 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-3 bg-red-900 rounded" />
                    <span className="text-slate-700">145-150m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-3 bg-yellow-600 rounded" />
                    <span className="text-slate-700">140-145m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-3 bg-green-600 rounded" />
                    <span className="text-slate-700">135-140m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-3 bg-green-900 rounded" />
                    <span className="text-slate-700">130-135m</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t bg-white">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Digital Surface Model (DSM)</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download TIF
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download LAS
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="contours" className="mt-4">
          <Card className="overflow-hidden">
            <div className="aspect-[16/10] bg-slate-50 relative">
              <svg className="w-full h-full" viewBox="0 0 800 500">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="800" height="500" fill="url(#grid)" />
                
                {/* Contour lines */}
                <path d="M 100 400 Q 200 380 300 390 T 500 380 T 700 390" 
                      fill="none" stroke="#94a3b8" strokeWidth="1.5" />
                <text x="710" y="393" className="fill-slate-600 text-xs">130m</text>
                
                <path d="M 80 320 Q 180 300 280 310 T 480 300 T 720 315" 
                      fill="none" stroke="#64748b" strokeWidth="2" />
                <text x="730" y="318" className="fill-slate-700 text-xs">135m</text>
                
                <path d="M 60 240 Q 160 220 260 230 T 460 220 T 740 235" 
                      fill="none" stroke="#475569" strokeWidth="2" />
                <text x="750" y="238" className="fill-slate-800 text-xs">140m</text>
                
                <path d="M 90 160 Q 190 140 290 150 T 490 140 T 690 155" 
                      fill="none" stroke="#334155" strokeWidth="2.5" />
                <text x="700" y="158" className="fill-slate-900 text-xs">145m</text>
                
                <path d="M 120 80 Q 220 60 320 70 T 520 60 T 680 75" 
                      fill="none" stroke="#1e293b" strokeWidth="2.5" />
                <text x="690" y="78" className="fill-slate-900 text-xs">150m</text>
                
                {/* Sample points */}
                {[
                  { x: 200, y: 380 }, { x: 350, y: 300 }, { x: 500, y: 220 },
                  { x: 280, y: 150 }, { x: 600, y: 140 }
                ].map((point, i) => (
                  <circle key={i} cx={point.x} cy={point.y} r="3" className="fill-blue-600" />
                ))}
              </svg>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-3 py-2 rounded shadow-lg">
                <div className="text-slate-600">Contour Interval: 5m</div>
                <div className="text-slate-900">Vertical Accuracy: ±8 cm</div>
              </div>
            </div>
            <div className="p-4 border-t bg-white">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Topographic Contour Map</span>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download DXF
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="p-6">
        <h3 className="mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          Survey Report & Deliverables
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded hover:bg-slate-100 transition-colors">
            <div>
              <div className="text-slate-900">Volume Analysis Report</div>
              <div className="text-slate-500">PDF report with cut/fill calculations and statistics</div>
            </div>
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded hover:bg-slate-100 transition-colors">
            <div>
              <div className="text-slate-900">Point Cloud (LAS)</div>
              <div className="text-slate-500">2.4M points • 48.2 MB • Compatible with Civil 3D, Virtual Surveyor</div>
            </div>
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded hover:bg-slate-100 transition-colors">
            <div>
              <div className="text-slate-900">Orthomosaic (GeoTIFF)</div>
              <div className="text-slate-500">8192 × 5120 px • 156 MB • WGS84 UTM 33N</div>
            </div>
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded hover:bg-slate-100 transition-colors">
            <div>
              <div className="text-slate-900">Digital Surface Model (GeoTIFF)</div>
              <div className="text-slate-500">DSM raster • 32-bit float elevation values</div>
            </div>
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
