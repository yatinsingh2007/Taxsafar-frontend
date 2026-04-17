import ContentPageLayout from '@/components/ContentPageLayout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Info, HelpCircle, FileText, PhoneCall, ShieldCheck, CreditCard, Stethoscope } from 'lucide-react';
import { notFound } from 'next/navigation';

const pageMap = {
  'about-us': { title: 'About Us', desc: 'Learn about TaxSafar, our mission to simplify compliance, and the team behind it.', icon: Info },
  'blog': { title: 'Tax & Compliance Blog', desc: 'Stay updated with the latest in tax regulations, filing tips, and business growth.', icon: FileText },
  'faq': { title: 'Frequently Asked Questions', desc: 'Find quick answers to the most common queries we receive from our clients.', icon: HelpCircle },
  'contact': { title: 'Contact Us', desc: 'Get in touch with our expert team for dedicated assistance and support.', icon: PhoneCall },
  'terms': { title: 'Terms of Use', desc: 'Read the terms and conditions governing the use of TaxSafar services.', icon: FileText },
  'privacy': { title: 'Privacy Policy', desc: 'Understand how we protect your personal and financial data with bank-grade security.', icon: ShieldCheck },
  'payment-policy': { title: 'Payment Policy', desc: 'Details regarding our service fees, subscription billing, and refund guidelines.', icon: CreditCard },
  'support': { title: 'Help Center & Support', desc: 'Comprehensive guides, ticketing system, and priority tracking for your compliance needs.', icon: Stethoscope },
};

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const pageData = pageMap[resolvedParams.slug as keyof typeof pageMap];
  
  if (!pageData) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ContentPageLayout title={pageData.title} description={pageData.desc} icon={pageData.icon} />
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(pageMap).map((slug) => ({
    slug,
  }));
}
