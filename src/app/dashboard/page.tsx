'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-text)]">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your job search.</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Find Jobs</h3>
          <p className="text-gray-600 text-sm mb-4">Browse available positions</p>
          <Link href="/jobs/find">
            <Button variant="primary" size="sm" className="w-full">
              Search Jobs
            </Button>
          </Link>
        </Card>

        <Card className="text-center">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Post a Job</h3>
          <p className="text-gray-600 text-sm mb-4">Hire talented professionals</p>
          <Link href="/dashboard/post-job">
            <Button variant="secondary" size="sm" className="w-full">
              Post Job
            </Button>
          </Link>
        </Card>

        <Card className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">My Applications</h3>
          <p className="text-gray-600 text-sm mb-4">Track your applications</p>
          <Link href="/dashboard/applications">
            <Button variant="accent" size="sm" className="w-full">
              View Applications
            </Button>
          </Link>
        </Card>

        <Card className="text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">My Jobs</h3>
          <p className="text-gray-600 text-sm mb-4">Manage your job postings</p>
          <Link href="/dashboard/jobs">
            <Button variant="primary" size="sm" className="w-full">
              Manage Jobs
            </Button>
          </Link>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">Recent Job Applications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-[var(--color-text)]">Frontend Developer</h3>
                <p className="text-sm text-gray-600">TechCorp Inc.</p>
              </div>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                Pending
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-[var(--color-text)]">UX Designer</h3>
                <p className="text-sm text-gray-600">Design Studio</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Reviewed
              </span>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/dashboard/applications">
              <Button variant="primary" size="sm" className="w-full">
                View All Applications
              </Button>
            </Link>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">Job Posting Stats</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Jobs Posted</span>
              <span className="font-semibold text-[var(--color-text)]">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Active Jobs</span>
              <span className="font-semibold text-[var(--color-text)]">8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Applications</span>
              <span className="font-semibold text-[var(--color-text)]">156</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">This Month</span>
              <span className="font-semibold text-[var(--color-text)]">23</span>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/dashboard/jobs">
              <Button variant="secondary" size="sm" className="w-full">
                Manage Jobs
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}