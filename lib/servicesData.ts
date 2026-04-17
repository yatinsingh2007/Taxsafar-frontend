export const servicesRegistry: Record<string, any> = {
  'return-filing': {
    howItWorks: [
      { step: '01', title: 'Create Account', desc: 'Fill Up Basic Details To Create An Account.' },
      { step: '02', title: 'Find Relevent Service.', desc: 'Upload All Your documents , Income Details And Make Payment.' },
      { step: '03', title: 'Get contacted By Team.', desc: 'Our team Will Reach Out you Within 1-48 Hours .' },
      { step: '04', title: 'Find Filed Documents.', desc: 'You Can get All Your Documents By Login Your Account Or Via Mail.' }
    ],
    cards: [
      {
        title: 'GST Return Filing',
        description: 'Monthly or quarterly GST returns are crucial for compliance. We handle GSTR-1, GSTR-3B, and reconciliation tasks with precision.',
        listTitle: 'Steps:',
        listType: 'numbered',
        listItems: [
          'Register/Login',
          'Submit your purchase & sales data',
          'Make payment',
          'We file your GST returns on time',
          'Get confirmation and filing proof'
        ],
        primaryButton: 'File GST Now',
        secondaryButton: 'Contact Us'
      },
      {
        title: 'TDS Return Filing',
        description: "Whether it's salary, interest, rent, or contractor payments — we ensure timely TDS filing and Form 16/26Q generation.",
        listTitle: 'Steps:',
        listType: 'numbered',
        listItems: [
          'Share TAN, challan & deduction details',
          'Upload documents',
          'We prepare and file returns',
          'Get acknowledgment and forms on email'
        ],
        primaryButton: 'File TDS Now',
        secondaryButton: 'Contact Us'
      },
      {
        title: 'Income Tax Return (ITR) Filing',
        description: 'We simplify ITR filing for salaried individuals, freelancers, business owners, and investors. Ensure timely tax compliance, maximize refunds, and avoid penalties.',
        listTitle: 'Steps:',
        listType: 'numbered',
        listItems: [
          'Create an account',
          'Upload PAN, income details, Form 16, etc.',
          'Pay the filing fee',
          'Our expert CA will review and file your return'
        ],
        primaryButton: 'File ITR Now',
        secondaryButton: 'Contact Us'
      },
      {
        title: 'FSSAI Compliance Filing',
        description: 'Food businesses must stay compliant with FSSAI norms. We manage renewals, updates, and annual returns efficiently.',
        listTitle: 'Steps:',
        listType: 'numbered',
        listItems: [
          'Upload your license and FBO details',
          'Our team checks and initiates compliance',
          'Track filing progress on dashboard',
          'Receive final documents & compliance report'
        ],
        primaryButton: 'File FSSAI Returns',
        secondaryButton: 'Contact Us'
      }
    ]
  },
  'assessment': {
    howItWorks: [
      { step: '01', title: 'Submit Notice or Query', desc: 'Upload the income tax notice or any communication received from the department.' },
      { step: '02', title: 'Expert Evaluation', desc: 'Our CA/CS experts analyze the notice and identify compliance or errors involved.' },
      { step: '03', title: 'Resolution & Filing', desc: 'We prepare the required response, rectification, or revised returns for submission.' },
      { step: '04', title: 'Track and Receive Updates', desc: 'Stay informed through your dashboard or email as we follow up until closure.' }
    ],
    cards: [
      {
        title: 'Assessment & Notice Resolution',
        description: "Received a notice from the Income Tax Department or GST authorities? Don't panic. Our expert panel helps you respond professionally, rectify returns, submit explanations, and avoid penalties. From Section 143(1) adjustments to detailed scrutiny under 143(2), we've got you covered.",
        listTitle: 'Steps:',
        listType: 'numbered',
        listItems: [
          'Upload your notice and related documents',
          'Make the consultation payment',
          'Get expert analysis & recommendations',
          'Let us draft and submit replies or revised returns',
          'Receive updates on resolution status via email or dashboard'
        ],
        primaryButton: 'Resolve My Notice',
        secondaryButton: 'Talk to Expert'
      }
    ]
  },
  'registrations': {
    howItWorks: [
      { step: '01', title: 'Choose Your Service', desc: 'Select from a list of business registrations & compliance services.' },
      { step: '02', title: 'Upload Documents', desc: 'Upload KYC, business details, and required documents securely.' },
      { step: '03', title: 'Expert Processing', desc: 'Our legal experts handle registration & filing with relevant authorities.' },
      { step: '04', title: 'Get Certificate or Status', desc: 'Receive your registration certificate, compliance report or license digitally.' }
    ],
    cards: [
      {
        title: 'Popular Registration & Compliance Services',
        description: 'We offer end-to-end assistance for various business registrations, legal licenses, and routine compliance. Start your business journey legally and avoid penalties or disruptions.',
        listTitle: 'Our Services Include:',
        listType: 'checklist',
        listItems: [
          'Private Limited Company Registration',
          'LLP (Limited Liability Partnership) Registration',
          'Sole Proprietorship Registration',
          'Partnership Firm Registration',
          'MSME / Udyam Registration',
          'GST Registration & Filing',
          'Import Export Code (IEC) Registration',
          'FSSAI (Food License) Registration',
          'Professional Tax & Shops Act Registration',
          'Trade License & Local Municipal Compliance',
          'Startup India Registration',
          'Digital Signature Certificate (DSC)'
        ],
        primaryButton: 'Get Started',
        secondaryButton: 'Consult Advisor'
      }
    ]
  },
  'virtual-office': {
    howItWorks: [
      { step: '01', title: 'Select City & Package', desc: 'Choose from major Indian cities and flexible virtual office plans.' },
      { step: '02', title: 'Upload KYC & Business Proof', desc: 'Provide basic business documents and identity proof for verification.' },
      { step: '03', title: 'Get Virtual Office Setup', desc: 'We register your business at a premium location with valid documents.' },
      { step: '04', title: 'Use it for GST, Mailing & Legal', desc: 'Start using your virtual address for GST registration, mail handling & ROC filings.' }
    ],
    cards: [
      {
        title: 'Premium Virtual Office Plans Across India',
        description: 'Expand your business without physical space! Get a professional address for GST registration, business communication, and legal purposes in top metro cities of India.',
        listTitle: 'Available in:',
        listType: 'checklist',
        listItems: [
          'Delhi NCR',
          'Mumbai',
          'Bangalore',
          'Hyderabad',
          'Chennai',
          'Pune',
          'Kolkata'
        ],
        primaryButton: 'View Plans',
        secondaryButton: 'Talk to Expert'
      }
    ]
  }
};
