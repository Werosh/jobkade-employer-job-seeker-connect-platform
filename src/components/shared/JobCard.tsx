import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  postedDate: string;
  description?: string;
  onViewDetails?: (id: string) => void;
}

export const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  company,
  location,
  salary,
  type,
  postedDate,
  description,
  onViewDetails
}) => {
  const typeColors = {
    'full-time': 'bg-green-100 text-green-800',
    'part-time': 'bg-blue-100 text-blue-800',
    'contract': 'bg-purple-100 text-purple-800',
    'freelance': 'bg-orange-100 text-orange-800'
  };

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 font-medium">{company}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[type]}`}>
          {type.replace('-', ' ')}
        </span>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </div>
        {salary && (
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            {salary}
          </div>
        )}
        <div className="text-xs text-gray-500">
          Posted {postedDate}
        </div>
      </div>
      
      {description && (
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{description}</p>
      )}
      
      <div className="flex justify-end">
        <Button
          variant="primary"
          size="sm"
          onClick={() => onViewDetails?.(id)}
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};
