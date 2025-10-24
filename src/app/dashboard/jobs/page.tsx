'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
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
    postedAt: '2024-01-15',
    applicationsCount: 24,
    isActive: true
  },
  {
    id: '2',
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'New York, NY',
    type: 'full-time' as const,
    salary: { min: 80000, max: 100000, currency: 'USD' },
    postedAt: '2024-01-10',
    applicationsCount: 18,
    isActive: true
  },
  {
    id: '3',
    title: 'Marketing Manager',
    company: 'Growth Co.',
    location: 'Remote',
    type: 'full-time' as const,
    salary: { min: 70000, max: 90000, currency: 'USD' },
    postedAt: '2024-01-05',
    applicationsCount: 32,
    isActive: false
  }
];

export default function MyJobsPage() {
  const [jobs] = useState(mockJobs);
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  const filteredJobs = jobs.filter(job => {
    if (filter === 'active') return job.isActive;
    if (filter === 'inactive') return !job.isActive;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text)]">My Job Postings</h1>
          <p className="text-gray-600 mt-2">Manage and track your job postings</p>
        </div>
        <Link href="/dashboard/post-job">
          <Button variant="primary">
            Post New Job
          </Button>
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-white text-[var(--color-text)] shadow-sm'
              : 'text-gray-600 hover:text-[var(--color-text)]'
          }`}
        >
          All Jobs ({jobs.length})
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            filter === 'active'
              ? 'bg-white text-[var(--color-text)] shadow-sm'
              : 'text-gray-600 hover:text-[var(--color-text)]'
          }`}
        >
          Active ({jobs.filter(j => j.isActive).length})
        </button>
        <button
          onClick={() => setFilter('inactive')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            filter === 'inactive'
              ? 'bg-white text-[var(--color-text)] shadow-sm'
              : 'text-gray-600 hover:text-[var(--color-text)]'
          }`}
        >
          Inactive ({jobs.filter(j => !j.isActive).length})
        </button>
      </div>

      {/* Jobs List */}
      {filteredJobs.length === 0 ? (
        <EmptyState
          title="No jobs found"
          description="You haven't posted any jobs yet, or no jobs match your current filter."
          actionLabel="Post Your First Job"
          onAction={() => window.location.href = '/dashboard/post-job'}
          icon={
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          }
        />
      ) : (
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">{job.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      job.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {job.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-1">{job.company}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Posted: {new Date(job.postedAt).toLocaleDateString()}</span>
                    <span>Applications: {job.applicationsCount}</span>
                    {job.salary && (
                      <span>Salary: ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Link href={`/jobs/${job.id}`}>
                    <Button variant="primary" size="sm">
                      View
                    </Button>
                  </Link>
                  <Button variant="secondary" size="sm">
                    Edit
                  </Button>
                  <Button variant="accent" size="sm">
                    {job.isActive ? 'Deactivate' : 'Activate'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
