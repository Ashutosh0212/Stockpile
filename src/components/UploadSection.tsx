import { Upload, Image, CheckCircle, Video } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface UploadSectionProps {
  onStartProcessing: () => void;
}

export function UploadSection({ onStartProcessing }: UploadSectionProps) {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // In real implementation, handle file upload
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const renderImageUpload = () => {
    return (
      <div className="space-y-6">
        <Card
          className="border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-colors"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <Upload className="w-12 h-12 mx-auto mb-4 text-slate-400" />
          <h3 className="mb-2 text-slate-700">Drag and drop images here</h3>
          <p className="text-slate-500 mb-4">or</p>
          <Button variant="outline">Browse Files</Button>
          <p className="text-slate-400 mt-4">JPG, PNG, TIFF • Max 500 images per project</p>
        </Card>

        <Card className="p-6 bg-white">
          <h3 className="mb-4 flex items-center gap-2">
            <Image className="w-5 h-5 text-blue-600" />
            Uploaded Images (24)
          </h3>
          <div className="grid grid-cols-6 gap-2 mb-4">
            {Array.from({ length: 24 }).map((_, i) => {
              // Using the same quarry image to simulate a single survey session
              const quarryImage = 'https://images.unsplash.com/photo-1697207457766-599f094d55e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFycnklMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2MTQ5MzQzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
              return (
                <div key={i} className="aspect-square bg-slate-200 rounded relative overflow-hidden">
                  <ImageWithFallback
                    src={quarryImage}
                    alt={`Drone quarry image ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <CheckCircle className="absolute top-1 right-1 w-4 h-4 text-green-600 bg-white rounded-full" />
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-slate-600">
              Total size: 487 MB • Average GSD: 2.1 cm/px
            </div>
            <Button onClick={onStartProcessing} className="bg-blue-600 hover:bg-blue-700">
              Start Processing
            </Button>
          </div>
        </Card>
      </div>
    );
  };

  const renderVideoUpload = () => {
    return (
      <div className="space-y-6">
        <Card
          className="border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-colors"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <Video className="w-12 h-12 mx-auto mb-4 text-slate-400" />
          <h3 className="mb-2 text-slate-700">Drag and drop video here</h3>
          <p className="text-slate-500 mb-4">or</p>
          <Button variant="outline">Browse Files</Button>
          <p className="text-slate-400 mt-4">MP4, MOV, AVI • 4K resolution recommended</p>
        </Card>

        <Card className="p-6 bg-white">
          <h3 className="mb-4 flex items-center gap-2">
            <Video className="w-5 h-5 text-blue-600" />
            Uploaded Video
          </h3>
          <div className="flex items-start gap-4 mb-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 h-20 bg-gradient-to-br from-slate-300 to-slate-400 rounded flex items-center justify-center">
              <Video className="w-8 h-8 text-slate-600" />
            </div>
            <div className="flex-1">
              <div className="text-slate-900 mb-1">aerial_survey_oct26.mp4</div>
              <div className="text-slate-600">Duration: 3:24 • Resolution: 4K (3840×2160) • 30 fps</div>
              <div className="text-slate-500 mt-2">Estimated frames to extract: ~102 images</div>
            </div>
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-slate-600">
              Total size: 524 MB • Frame extraction interval: 2 seconds
            </div>
            <Button onClick={onStartProcessing} className="bg-blue-600 hover:bg-blue-700">
              Start Processing
            </Button>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2">Upload Aerial Imagery</h2>
        <p className="text-slate-600">
          Upload drone photographs or videos for photogrammetric processing. Supported formats: JPG, PNG, TIFF, MP4, MOV
        </p>
      </div>

      <Tabs defaultValue="images" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="images">
            <Image className="w-4 h-4 mr-2" />
            Images
          </TabsTrigger>
          <TabsTrigger value="video">
            <Video className="w-4 h-4 mr-2" />
            Video
          </TabsTrigger>
        </TabsList>

        <TabsContent value="images" className="space-y-6 mt-6">
          {renderImageUpload()}
        </TabsContent>
        <TabsContent value="video" className="space-y-6 mt-6">
          {renderVideoUpload()}
        </TabsContent>
      </Tabs>

      <Card className="p-6 bg-amber-50 border-amber-200">
        <h3 className="mb-2 text-amber-900">Processing Guidelines</h3>
        <ul className="space-y-1 text-amber-800">
          <li>• Minimum 15 images required for 3D reconstruction</li>
          <li>• 70-80% forward and side overlap recommended</li>
          <li>• Include ground control points (GCPs) for survey-grade accuracy</li>
          <li>• Avoid images with motion blur or poor lighting</li>
          <li>• For videos: 4K resolution recommended, extract frames at 1-2 second intervals</li>
        </ul>
      </Card>
    </div>
  );
}
