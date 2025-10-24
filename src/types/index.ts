export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  benefits: string[];
  postedAt: Date;
  expiresAt?: Date;
  isActive: boolean;
  employerId: string;
  applicationsCount: number;
}

export interface JobApplication {
  id: string;
  jobId: string;
  userId: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedAt: Date;
  coverLetter?: string;
  resumeUrl?: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  website?: string;
  logo?: string;
  industry: string;
  size: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
  location: string;
  foundedYear?: number;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
}
