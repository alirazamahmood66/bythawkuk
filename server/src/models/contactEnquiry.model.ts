import mongoose, { Schema, Document } from 'mongoose';

export type EnquiryStatus = 'new' | 'reviewed' | 'contacted' | 'qualified' | 'closed';

export interface IContactEnquiry extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  projectTypes: string[];
  description: string;
  budget?: string;
  timeline?: string;
  status: EnquiryStatus;
  ip?: string;
  userAgent?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactEnquirySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 255,
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 50,
      default: '',
    },
    company: {
      type: String,
      trim: true,
      maxlength: 150,
      default: '',
    },
    website: {
      type: String,
      trim: true,
      maxlength: 255,
      default: '',
    },
    projectTypes: {
      type: [String],
      required: true,
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length > 0,
        message: 'At least one project type must be selected',
      },
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },
    budget: {
      type: String,
      trim: true,
      default: '',
    },
    timeline: {
      type: String,
      trim: true,
      default: '',
    },
    status: {
      type: String,
      enum: ['new', 'reviewed', 'contacted', 'qualified', 'closed'],
      default: 'new',
    },
    ip: {
      type: String,
      default: '',
    },
    userAgent: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for administrative query performance
ContactEnquirySchema.index({ createdAt: -1 });
ContactEnquirySchema.index({ email: 1 });
ContactEnquirySchema.index({ status: 1 });

export const ContactEnquiry = mongoose.model<IContactEnquiry>(
  'ContactEnquiry',
  ContactEnquirySchema
);
