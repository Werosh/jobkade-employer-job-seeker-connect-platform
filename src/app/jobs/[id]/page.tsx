'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

// Mock data - in a real app, this would come from an API
const mockJob = {
  id: '1',
  title: 'Senior Frontend Developer',
  company: 'TechCorp Inc.',
  location: 'San Francisco, CA',
  type: 'full-time' as const,
  salary: { min: 120000, max: 150000, currency: 'USD' },
  postedDate: '2024-01-15',
  description: `We are looking for a talented Senior Frontend Developer to join our growing team. You will be responsible for building user-facing features and ensuring the best user experience.

As a Senior Frontend Developer, you will:
- Build responsive and interactive web applications using React and TypeScript
- Collaborate with designers and backend developers to implement user interfaces
- Optimize applications for maximum speed and scalability
- Write clean, maintainable, and well-tested code
- Mentor junior developers and contribute to code reviews

This is an exciting opportunity to work with cutting-edge technologies and make a real impact on our product.`,
  requirements: [
    '5+ years of experience in frontend development',
    'Strong proficiency in React, TypeScript, and JavaScript',
    'Experience with modern CSS frameworks (Tailwind, Styled Components)',
    'Knowledge of state management libraries (Redux, Zustand)',
    'Experience with testing frameworks (Jest, React Testing Library)',
    'Familiarity with build tools (Webpack, Vite)',
    'Strong understanding of responsive design principles',
    'Experience with version control (Git)',
    'Excellent communication and collaboration skills'
  ],
  benefits: [
    'Competitive salary and equity package',
    'Comprehensive health, dental, and vision insurance',
    '401(k) with company matching',
    'Flexible work hours and remote work options',
    'Professional development budget',
    'Unlimited PTO',
    'Stocked kitchen and catered meals',
    'Team building events and company retreats',
    'Learning and development opportunities'
  ],
  contactEmail: 'careers@techcorp.com',
  contactPhone: '+1 (555) 123-4567',
  website: 'https://techcorp.com'
};

export default function JobDetailsPage() {
  const params = useParams();
  const [showContact, setShowContact] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  const handleApply = () => {
    if (!showContact) {
      setShowContact(true);
    } else {
      setHasApplied(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Job Header */}
      <Card className="mb-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[var(--color-text)] mb-2">{mockJob.title}</h1>
            <p className="text-xl text-gray-600 font-medium mb-4">{mockJob.company}</p>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {mockJob.location}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                ${mockJob.salary.min.toLocaleString()} - ${mockJob.salary.max.toLocaleString()}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Posted {new Date(mockJob.postedDate).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="ml-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              mockJob.type === 'full-time' ? 'bg-green-100 text-green-800' :
              mockJob.type === 'part-time' ? 'bg-blue-100 text-blue-800' :
              mockJob.type === 'contract' ? 'bg-purple-100 text-purple-800' :
              'bg-orange-100 text-orange-800'
            }`}>
              {mockJob.type.replace('-', ' ')}
            </span>
          </div>
        </div>

        <div className="flex gap-4">
          {!hasApplied ? (
            <Button
              variant="primary"
              size="lg"
              onClick={handleApply}
            >
              {showContact ? 'Apply Now' : 'Unlock Contact'}
            </Button>
          ) : (
            <Button variant="accent" size="lg" disabled>
              Application Submitted
            </Button>
          )}
          <Button variant="secondary" size="lg">
            Save Job
          </Button>
          <Button variant="accent" size="lg">
            Share
          </Button>
        </div>
      </Card>

      {/* Job Description */}
      <Card className="mb-8">
        <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">Job Description</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 whitespace-pre-line">{mockJob.description}</p>
        </div>
      </Card>

      {/* Requirements */}
      <Card className="mb-8">
        <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">Requirements</h2>
        <ul className="space-y-2">
          {mockJob.requirements.map((req, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-[var(--color-primary)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{req}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Benefits */}
      <Card className="mb-8">
        <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">Benefits & Perks</h2>
        <ul className="space-y-2">
          {mockJob.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-[var(--color-accent)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Contact Information */}
      {showContact && (
        <Card>
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-[var(--color-text)] mb-2">Email</h3>
              <p className="text-gray-600">{mockJob.contactEmail}</p>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-text)] mb-2">Phone</h3>
              <p className="text-gray-600">{mockJob.contactPhone}</p>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-text)] mb-2">Website</h3>
              <a href={mockJob.website} className="text-[var(--color-primary)] hover:underline">
                {mockJob.website}
              </a>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
