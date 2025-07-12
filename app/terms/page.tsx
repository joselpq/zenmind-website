import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #0c0c0c 100%)', color: '#ffffff'}}>
      {/* Header */}
      <header style={{background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold" style={{color: '#a855f7'}}>ZenMind</Link>
            <Link href="/" style={{color: 'rgba(255, 255, 255, 0.8)'}} className="hover:text-purple-400">Back to Home</Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8" style={{color: '#ffffff'}}>Terms of Service</h1>
        
        <div style={{background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)'}} className="rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>1. Acceptance of Terms</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              By using ZenMind services operated by PQG Holdings, you agree to these Terms of Service. 
              If you do not agree with any part of these terms, you should not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>2. Service Description</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              ZenMind provides AI-powered technology services and solutions, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              <li>Artificial intelligence platforms and tools</li>
              <li>Data processing and analytics services</li>
              <li>Automated workflow solutions</li>
              <li>Machine learning and predictive analytics</li>
              <li>Integration services for third-party platforms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>3. User Accounts</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              To access our services, you must:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>4. Acceptable Use</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}} className="mb-3">You agree NOT to use our services to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Transmit harmful, offensive, or illegal content</li>
              <li>Compromise system security or integrity</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Use the services for competitive intelligence</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>5. Intellectual Property</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              All content, trademarks, logos, and technology provided by ZenMind and PQG Holdings are protected 
              by copyright and other intellectual property laws. You may not copy, modify, or distribute 
              our content without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>6. Payment and Billing</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              Pricing and plans are subject to change. Payment terms depend on your selected plan:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              <li>Payments are charged according to billing cycle</li>
              <li>No refunds for mid-cycle cancellations</li>
              <li>Applicable taxes will be added</li>
              <li>Overdue accounts may be suspended</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>7. Limitation of Liability</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              ZenMind and PQG Holdings shall not be liable for indirect, incidental, special, or consequential 
              damages resulting from the use or inability to use our services, even if advised of the 
              possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>8. Data and Privacy</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              Your use of our services is also governed by our Privacy Policy. We are committed to 
              protecting your data and maintaining compliance with applicable data protection regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>9. Service Availability</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              Our services are provided "as is." While we strive to maintain high availability and 
              performance, we do not guarantee uninterrupted or error-free service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>10. Termination</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              We may suspend or terminate your account if you violate these terms. You may cancel 
              your subscription at any time through your account dashboard or by contacting support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>11. Modifications to Terms</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              We reserve the right to modify these terms. Significant changes will be communicated 
              30 days in advance. Continued use after changes constitutes acceptance of new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>12. Governing Law</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              These terms are governed by the laws of the State of California, United States. 
              Any disputes will be resolved in the courts of San Francisco County, California.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>13. Contact Information</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              For questions about these terms, contact us:
            </p>
            <div className="mt-3 space-y-1" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              <p>Email: contato@zenmind.com.br</p>
            </div>
          </section>

          <div className="pt-6" style={{borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
            <p className="text-sm" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
              Last updated: {new Date().toLocaleDateString('en-US')}<br />
              Version: 1.0
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255, 255, 255, 0.1)'}} className="py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p style={{color: 'rgba(255, 255, 255, 0.6)'}}>© 2024 ZenMind by PQG Holdings. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}