export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  salary?: {
    min: number;
    max?: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  benefits: string[];
  postedBy: string; // User ID
  postedAt: Date;
  expiresAt?: Date;
  isActive: boolean;
  applicationsCount: number;
  contactEmail?: string;
  contactPhone?: string;
  website?: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  applicantId: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone?: string;
  resumeUrl?: string;
  coverLetter?: string;
  appliedAt: Date;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'job_seeker' | 'employer';
  profile?: {
    bio?: string;
    skills?: string[];
    experience?: string;
    education?: string;
    location?: string;
    phone?: string;
    website?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface JobFilters {
  search?: string;
  location?: string;
  type?: Job['type'];
  salaryMin?: number;
  salaryMax?: number;
  postedAfter?: Date;
}

export interface JobSearchResult {
  jobs: Job[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
