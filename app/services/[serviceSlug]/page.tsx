import ContentPageLayout from '@/components/ContentPageLayout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceLayoutRenderer from '@/components/ServiceLayoutRenderer';
import { servicesRegistry } from '@/lib/servicesData';

import { FileText, Building2, Calculator, Users, HelpCircle, Briefcase, FileSignature, Landmark } from 'lucide-react';

const servicesMap = {
  'return-filing': { title: 'Return Filing', desc: 'Expert-led return filing across all tax types including GST, ITR, TDS.', icon: FileText },
  'assessment': { title: 'Assessment & Notice Resolution', desc: 'Clear handling of income tax or GST notices and support for scrutiny & assessments.', icon: HelpCircle },
  'registrations': { title: 'Registrations & Compliance', desc: 'Start-to-finish company incorporation, GST, Trademark, and MSME registrations.', icon: FileSignature },
  'virtual-office': { title: 'Virtual Office Facilities', desc: 'Professional address for registration purposes with Pan-India presence.', icon: Building2 },
  'consultancy': { title: 'Consultancy & Compliances', desc: 'Business structuring, tax advisory, and ongoing compliance monitoring.', icon: Users },
  'accounting': { title: 'Virtual Accounting & Bookkeeping', desc: 'Real-time cloud-based bookkeeping and confidentiality assurance.', icon: Calculator },
  'loan-assistance': { title: 'Loan Assistance & Documentation', desc: 'Expert help in choosing the best loan offers with documentation support.', icon: Landmark },
  'financial-planning': { title: 'Financial Planning & Investment Advisory', desc: 'Goal-based financial planning support and tax-efficient strategies.', icon: Briefcase },
};

export default async function ServicePage({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const resolvedParams = await params;
  const service = servicesMap[resolvedParams.serviceSlug as keyof typeof servicesMap] || { title: 'Service Details', desc: 'Information about this specialized service.', icon: Briefcase };
  const customLayoutData = servicesRegistry[resolvedParams.serviceSlug];
  
  return (
    <>
      <Navbar />
      {customLayoutData ? (
        <div className="pt-20">
          <ServiceLayoutRenderer data={customLayoutData} />
        </div>
      ) : (
        <ContentPageLayout title={service.title} description={service.desc} icon={service.icon} />
      )}
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(servicesMap).map((slug) => ({
    serviceSlug: slug,
  }));
}
