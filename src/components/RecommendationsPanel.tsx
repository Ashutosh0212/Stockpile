import { Lightbulb, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';

export function RecommendationsPanel() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2">Optimization Recommendations</h2>
        <p className="text-slate-600">
          Insights to improve accuracy and efficiency for your next survey
        </p>
      </div>

      <div className="grid gap-4">
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-900">
            <strong>Excellent image overlap detected</strong> - Your 80% forward and 70% side overlap 
            resulted in superior 3D reconstruction quality.
          </AlertDescription>
        </Alert>

        <Alert className="border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-900">
            <strong>Consider adding Ground Control Points</strong> - While processing was successful, 
            GCPs would improve absolute accuracy to survey-grade (±2-3 cm) for legal documentation.
          </AlertDescription>
        </Alert>

        <Alert className="border-blue-200 bg-blue-50">
          <Lightbulb className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-900">
            <strong>Flight pattern optimization</strong> - For this site size, consider a double-grid 
            pattern (0° and 90°) to minimize reconstruction errors on vertical surfaces.
          </AlertDescription>
        </Alert>
      </div>

      <Card className="p-6">
        <h3 className="mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Best Practices for Next Survey
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 text-slate-900">Flight Parameters</h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>Maintain consistent altitude (±5m) for uniform GSD across site</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>Fly during overcast conditions or midday to minimize shadows</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>Use 75-80% forward overlap and 65-75% side overlap minimum</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-slate-900">Ground Control</h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>Place 5-8 GCPs evenly distributed around perimeter and within site</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>Use high-contrast targets (30-50cm) visible from flight altitude</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>Survey GCPs with RTK GPS (±2cm accuracy) for best results</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-slate-900">Change Detection</h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>Conduct surveys at same time of day to maintain consistent lighting</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>Reuse same GCP locations for multi-temporal analysis accuracy</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>Weekly or bi-weekly intervals recommended for active construction sites</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-slate-900">Output Formats</h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>GeoTIFF format recommended for CAD/GIS integration</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>LAS point clouds compatible with Autodesk Civil 3D and Trimble Business Center</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>DXF contours can be imported directly into most surveying software</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-slate-50">
        <h3 className="mb-2 text-slate-900">Quality Metrics - This Survey</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-slate-600">Ground Sampling Distance</div>
            <div className="text-slate-900">2.1 cm/pixel</div>
            <div className="text-green-600">Excellent</div>
          </div>
          <div>
            <div className="text-slate-600">Image Overlap</div>
            <div className="text-slate-900">80% / 70%</div>
            <div className="text-green-600">Optimal</div>
          </div>
          <div>
            <div className="text-slate-600">Reconstruction Quality</div>
            <div className="text-slate-900">2.4M points</div>
            <div className="text-green-600">High Density</div>
          </div>
          <div>
            <div className="text-slate-600">Vertical Accuracy</div>
            <div className="text-slate-900">±8 cm (est.)</div>
            <div className="text-amber-600">Good (GCPs recommended)</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
