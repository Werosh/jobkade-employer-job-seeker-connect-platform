'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { JobCard } from '@/components/shared/JobCard';
import { EmptyState } from '@/components/shared/EmptyState';

// Mock data - in a real app, this would come from an API
const mockJobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'full-time' as const,
    salary: { min: 120000, max: 150000, currency: 'USD' },
    postedDate: '2 days ago',
    description: 'We are looking for a talented Senior Frontend Developer to join our growing team. You will be responsible for building user-facing features and ensuring the best user experience.',
    requirements: ['React', 'TypeScript', '5+ years experience'],
    benefits: ['Health insurance', '401k', 'Flexible hours']
  },
  {
    id: '2',
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'New York, NY',
    type: 'full-time' as const,
    salary: { min: 80000, max: 100000, currency: 'USD' },
    postedDate: '1 week ago',
    description: 'Join our design team to create beautiful and intuitive user experiences. You will work closely with product managers and developers.',
    requirements: ['Figma', 'User research', '3+ years experience'],
    benefits: ['Remote work', 'Learning budget', 'Team events']
  },
  {
    id: '3',
    title: 'Marketing Manager',
    company: 'Growth Co.',
    location: 'Remote',
    type: 'full-time' as const,
    salary: { min: 70000, max: 90000, currency: 'USD' },
    postedDate: '3 days ago',
    description: 'Lead our marketing efforts and drive growth through innovative campaigns and strategies.',
    requirements: ['Digital marketing', 'Analytics', '4+ years experience'],
    benefits: ['Unlimited PTO', 'Stock options', 'Home office stipend']
  },
  {
    id: '4',
    title: 'Backend Developer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    type: 'contract' as const,
    salary: { min: 100000, max: 120000, currency: 'USD' },
    postedDate: '5 days ago',
    description: 'Build scalable backend systems and APIs for our growing platform.',
    requirements: ['Node.js', 'Python', 'AWS', '3+ years experience'],
    benefits: ['Flexible schedule', 'Project-based work']
  }
];

export default function FindJobsPage() {
  const [jobs] = useState(mockJobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = !locationFilter || 
                           job.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    const matchesType = typeFilter === 'all' || job.type === typeFilter;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-text)]">Find Your Next Job</h1>
        <p className="text-gray-600 mt-2">Discover amazing opportunities that match your skills and interests</p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <Input
              placeholder="Search jobs, companies, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Input
            placeholder="Location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>
      </Card>

      {/* Results Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[var(--color-text)]">
          {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
            <option value="relevance">Relevance</option>
            <option value="date">Date Posted</option>
            <option value="salary">Salary</option>
          </select>
        </div>
      </div>

      {/* Jobs List */}
      {filteredJobs.length === 0 ? (
        <EmptyState
          title="No jobs found"
          description="Try adjusting your search criteria or browse all available positions."
          actionLabel="Clear Filters"
          onAction={() => {
            setSearchTerm('');
            setLocationFilter('');
            setTypeFilter('all');
          }}
          icon={
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          }
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              salary={job.salary ? `$${job.salary.min.toLocaleString()} - $${job.salary.max.toLocaleString()}` : undefined}
              postedDate={job.postedDate}
              description={job.description}
              onViewDetails={(id) => window.location.href = `/jobs/${id}`}
            />
          ))}
        </div>
      )}

      {/* Load More Button */}
      {filteredJobs.length > 0 && (
        <div className="text-center mt-8">
          <Button variant="secondary" size="lg">
            Load More Jobs
          </Button>
        </div>
      )}
    </div>
  );
}
