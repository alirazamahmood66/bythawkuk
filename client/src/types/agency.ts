export interface AgencyInfo {
  name: string;
  tagline: string;
  domain: string;
  location: string;
  established: string;
  status: 'Development Phase' | 'Live' | 'Maintenance';
}

export interface AgencyService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  planetMapping: string;
  technologies: string[];
  capabilities: string[];
}
