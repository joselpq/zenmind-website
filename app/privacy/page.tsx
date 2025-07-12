import Link from 'next/link'

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl font-bold mb-8" style={{color: '#ffffff'}}>Privacy Policy</h1>
        
        <div style={{background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)'}} className="rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>1. Introduction</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              ZenMind, a brand operated by PQG Holdings ("ZenMind", "we", or "our"), is committed to protecting the privacy 
              and security of our users' personal data. This Privacy Policy describes how we collect, use, store, and 
              protect your information when you use our AI-powered technology services and platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>2. Information We Collect</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}} className="mb-3">We collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              <li>Contact information (name, email, phone number)</li>
              <li>Usage data from our AI services and platforms</li>
              <li>Content and data processed through our services</li>
              <li>Website interaction and navigation data</li>
              <li>Technical information (IP address, browser, device)</li>
              <li>Account preferences and settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>3. How We Use Your Information</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}} className="mb-3">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              <li>Provide and improve our AI technology services</li>
              <li>Process and analyze data for service optimization</li>
              <li>Generate insights and analytics</li>
              <li>Communicate about our services and updates</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>4. Data Sharing and Disclosure</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              We do not sell, rent, or share your personal data with third parties for marketing purposes. 
              We may share data only with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              <li>Essential service providers and technology partners</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
              <li>PQG Holdings entities for internal business purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>5. Data Security</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              We implement appropriate technical and organizational measures to protect your data, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              <li>Encryption of data in transit and at rest</li>
              <li>Strict access controls and authentication</li>
              <li>Continuous security monitoring</li>
              <li>Regular security audits and assessments</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>6. Your Rights</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}} className="mb-3">
              Subject to applicable data protection laws, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              <li>Access your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Request data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>7. Data Retention</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              We retain your data for as long as necessary to provide our services and comply with legal obligations. 
              Data retention periods vary based on the type of data and applicable legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>8. Cookies and Tracking</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              We use cookies and similar technologies to enhance your experience on our platforms. You can manage 
              your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>9. International Data Transfers</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              Your data may be transferred to and processed in countries other than your country of residence. 
              We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>10. Changes to This Policy</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              We may update this policy periodically. We will notify you of significant changes through our website 
              or by email. Last updated: {new Date().toLocaleDateString('en-US')}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>11. Contact Us</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              To exercise your rights or ask questions about this policy, contact us:
            </p>
            <div className="mt-3 space-y-1" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              <p>Email: contato@zenmind.com.br</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{color: '#a855f7'}}>12. Data Protection Officer</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              Our Data Protection Officer can be reached at:
            </p>
            <div className="mt-3" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              <p>Email: contato@zenmind.com.br</p>
            </div>
          </section>
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