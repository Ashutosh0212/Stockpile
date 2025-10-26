import { Folder, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface Project {
  id: string;
  name: string;
  date: string;
  area: string;
  images: number;
  status: 'completed' | 'processing' | 'draft';
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'North Quarry Stockpile Survey',
    date: 'Oct 24, 2025',
    area: '4.2 hectares',
    images: 68,
    status: 'completed',
  },
  {
    id: '2',
    name: 'Highway 401 Earthwork Analysis',
    date: 'Oct 18, 2025',
    area: '12.5 hectares',
    images: 142,
    status: 'completed',
  },
  {
    id: '3',
    name: 'Residential Development - Phase 2',
    date: 'Oct 12, 2025',
    area: '3.8 hectares',
    images: 52,
    status: 'completed',
  },
  {
    id: '4',
    name: 'Mining Site Monthly Survey',
    date: 'Oct 1, 2025',
    area: '8.9 hectares',
    images: 95,
    status: 'completed',
  },
];

export function ProjectsList() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2">Recent Projects</h2>
        <p className="text-slate-600">
          Access your processed stockpile analyses and earthwork surveys
        </p>
      </div>

      <div className="space-y-3">
        {mockProjects.map((project) => (
          <Card
            key={project.id}
            className="p-4 hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-3 flex-1">
                <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <Folder className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-slate-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.area}</span>
                    </div>
                    <div>
                      <span>{project.images} images</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  className={
                    project.status === 'completed'
                      ? 'bg-green-100 text-green-800 hover:bg-green-100'
                      : project.status === 'processing'
                      ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-100'
                  }
                >
                  {project.status}
                </Badge>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
