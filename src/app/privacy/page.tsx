import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Social Stock Exchange',
  description: 'Privacy Policy for Social Stock Exchange - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--light-text)' }}>
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="heading-section">Privacy Policy</h1>
            <p className="text-supporting">Last updated: August 31, 2025</p>
          </header>

          <div className="space-y-12">
            <section>
              <p className="text-body text-lg leading-relaxed">
                This Privacy Policy explains how CraftPath (the &quot;Platform&quot;) collects, uses, and protects personal information in connection with our training programs, courses, and related services.
              </p>
            </section>

            <section>
              <h2 className="heading-subsection mb-6">Information We Collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-green)' }}>
                    Account and Profile Information
                  </h3>
                  <p className="text-body">
                    Name, username, and organization details you or your admin provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-green)' }}>
                    Learning Activity and Progress
                  </h3>
                  <p className="text-body">
                    Modules started/completed, assessments, scores, time spent, and achievements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-green)' }}>
                    Device and Usage Data
                  </h3>
                  <p className="text-body">
                    IP address, browser type, device identifiers, pages viewed, and interactions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-green)' }}>
                    Communications
                  </h3>
                  <p className="text-body">
                    Messages you send to us in-app or through support channels.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-subsection mb-6">How We Use Information</h2>
              <p className="text-body">
                We use information to operate and improve the Platform, personalize training, provide support, monitor performance and security, comply with legal obligations, and communicate service updates.
              </p>
            </section>

            <section>
              <h2 className="heading-subsection mb-6">Sharing and Disclosure</h2>
              <p className="text-body">
                We do not sell personal information. We may share data with service providers under contract, with your organization administrators for reporting, to comply with law, to protect our rights, or in connection with a business transaction (e.g., merger or acquisition).
              </p>
            </section>

            <section>
              <h2 className="heading-subsection mb-6">Data Retention</h2>
              <p className="text-body">
                We retain personal information for as long as necessary to provide the services and for legitimate business or legal purposes. Retention periods vary based on the type of data and applicable law.
              </p>
            </section>

            <section>
              <h2 className="heading-subsection mb-6">Your Rights</h2>
              <p className="text-body">
                Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal information. You can exercise these rights by contacting your administrator or the Platform support channel within your account.
              </p>
            </section>

            <section>
              <h2 className="heading-subsection mb-6">Security</h2>
              <p className="text-body">
                We implement administrative, technical, and organizational safeguards appropriate to the risk of the data we process. No system is completely secure; please use strong credentials and keep them confidential.
              </p>
            </section>

            <section>
              <h2 className="heading-subsection mb-6">International Data Transfers</h2>
              <p className="text-body">
                Where applicable, we rely on appropriate safeguards for cross-border data transfers, such as standard contractual clauses.
              </p>
            </section>

            <section>
              <h2 className="heading-subsection mb-6">Children&apos;s Privacy</h2>
              <p className="text-body">
                The Platform is not directed to children under 13 (or the age defined by local law). We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="heading-subsection mb-6">Changes to This Policy</h2>
              <p className="text-body">
                We may update this Privacy Policy from time to time. Material changes will be communicated via the Platform. Your continued use signifies acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="heading-subsection mb-6">Contact</h2>
              <p className="text-body">
                For questions about privacy, please use the in-app support channel or contact your organization&apos;s administrator. We will respond through the support tools provided in your account.
              </p>
            </section>

            <div className="text-center mt-16">
              <a 
                href="/" 
                className="btn-secondary"
                style={{ color: 'var(--light-text)', borderColor: 'rgba(32, 32, 38, 0.8)' }}
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}