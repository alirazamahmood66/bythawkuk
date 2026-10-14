import { apiRequest } from './apiClient';

export interface ContactSubmissionPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  projectTypes: string[];
  description: string;
  budget?: string;
  timeline?: string;
  honeypot?: string;
}

export interface ContactSubmissionResult {
  enquiryId: string;
  referenceNumber: string;
  status: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  data: ContactSubmissionResult;
  errors?: Record<string, string>;
  timestamp: string;
}

export async function submitContactEnquiry(
  payload: ContactSubmissionPayload
): Promise<ContactApiResponse> {
  return apiRequest<ContactApiResponse>('/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
