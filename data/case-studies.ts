export type CaseStudy = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  industry?: string;
  publishedAt?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: 'fintech-account-takeover',
    title: 'Stopped Large-Scale Account Takeover in Fintech App',
    industry: 'Finance',
    summary:
      'Detected credential stuffing from 3.2M IPs, implemented bot mitigation and MFA hardening, reducing fraud by 96% in 30 days.',
    publishedAt: '2025-01-14'
  },
  {
    id: 2,
    slug: 'healthcare-ransomware',
    title: 'Rapid Ransomware Containment for a Healthcare Network',
    industry: 'Healthcare',
    summary:
      'Contained lateral movement within 6 hours, restored critical systems from backups, and deployed EDR with network segmentation.',
    publishedAt: '2024-11-08'
  },
  {
    id: 3,
    slug: 'saas-sso-vulnerability',
    title: 'SSO Bypass Discovered in SaaS Multi-Tenant App',
    industry: 'SaaS',
    summary:
      'Identified IDOR + misconfigured SAML mapping enabling cross-tenant data access; patched and verified with targeted pentests.',
    publishedAt: '2024-09-22'
  }
];