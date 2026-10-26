
import Link from "next/link";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information", title: "2. Information We Collect" },
  { id: "usage", title: "3. How We Use Your Information" },
  { id: "sharing", title: "4. Sharing of Information" },
  { id: "cookies", title: "5. Cookies and Tracking" },
  { id: "third-party", title: "6. Third-Party Services" },
  { id: "security", title: "7. Data Security" },
  { id: "retention", title: "8. Data Retention" },
  { id: "rights", title: "9. Your Privacy Rights" },
  { id: "children", title: "10. Children's Privacy" },
  { id: "international", title: "11. International Transfers" },
  { id: "changes", title: "12. Changes to This Policy" },
  { id: "contact", title: "13. Contact Us" },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 26, 2026";

  return (
    <main className="min-h-screen bg-white text-charcoal">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071426] px-6 py-24 text-white sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-electric/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-electric" />
            Legal & Privacy
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Privacy
            <span className="text-electric"> Policy.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Your privacy matters to us. Learn how Hundred Bit
            collects, uses, protects, and manages your personal
            information when you interact with our website and
            digital services.
          </p>

          <p className="mt-8 text-sm text-white/45">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[260px_1fr]">
          {/* Table of Contents */}
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="rounded-2xl border border-charcoal/10 bg-slate-50 p-6">
              <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate">
                Contents
              </h2>

              <nav aria-label="Privacy policy contents">
                <ul className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-sm text-slate transition hover:text-electric"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Policy Content */}
          <article className="max-w-4xl">
            <div className="mb-12 rounded-2xl border border-electric/15 bg-blue-50/50 p-6">
              <p className="text-sm leading-relaxed text-slate">
                This Privacy Policy explains how Hundred Bit
                handles personal information. By using our website,
                you acknowledge that you have read this policy.
                Where consent is required, we will seek it
                separately and explain the relevant purpose.
              </p>
            </div>

            <div className="space-y-14">
              <section id="introduction" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  1. Introduction
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Hundred Bit ("we", "our", or "us") is a
                    software and digital solutions company that
                    provides website development, application
                    development, custom software, UI/UX design,
                    data analytics, automation, and related
                    technology services.
                  </p>

                  <p>
                    This Privacy Policy applies to information
                    collected through our website, contact forms,
                    business communications, and related digital
                    interactions.
                  </p>

                  <p>
                    We aim to handle personal information
                    responsibly, transparently, and only for
                    purposes that are relevant to our business
                    activities.
                  </p>
                </div>
              </section>

              <section id="information" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  2. Information We Collect
                </h2>

                <div className="mt-5 space-y-5 leading-8 text-slate">
                  <p>
                    Depending on how you interact with Hundred Bit,
                    we may collect the following categories of
                    information:
                  </p>

                  <div>
                    <h3 className="font-semibold text-charcoal">
                      A. Information You Provide
                    </h3>

                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>Your name and business name.</li>
                      <li>Your email address and phone number.</li>
                      <li>
                        Project requirements, service preferences,
                        and messages submitted through our forms.
                      </li>
                      <li>
                        Budget estimates, project timelines, and
                        other information you voluntarily provide.
                      </li>
                      <li>
                        Information you share when contacting us
                        through WhatsApp or email.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-charcoal">
                      B. Technical Information
                    </h3>

                    <p className="mt-3">
                      When you visit our website, certain
                      technical information may be collected by
                      our hosting provider or other enabled
                      services, including:
                    </p>

                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>IP address and approximate location.</li>
                      <li>Browser type and operating system.</li>
                      <li>Device information.</li>
                      <li>Pages visited and referring URLs.</li>
                      <li>
                        Website access times and diagnostic logs.
                      </li>
                    </ul>
                  </div>

                  <p>
                    We do not intentionally request sensitive
                    personal information through our general
                    website contact forms. Please avoid
                    submitting passwords, financial account
                    credentials, or unnecessary sensitive
                    information.
                  </p>
                </div>
              </section>

              <section id="usage" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  3. How We Use Your Information
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    We may use personal information for the
                    following purposes:
                  </p>

                  <ul className="list-disc space-y-3 pl-6">
                    <li>
                      Responding to enquiries, requests, and
                      project discussions.
                    </li>
                    <li>
                      Preparing proposals, quotations, and project
                      estimates.
                    </li>
                    <li>
                      Providing, managing, and improving our
                      services.
                    </li>
                    <li>
                      Communicating about project progress,
                      support, and business matters.
                    </li>
                    <li>
                      Maintaining website functionality,
                      security, and performance.
                    </li>
                    <li>
                      Preventing fraud, misuse, spam, and
                      unauthorized activity.
                    </li>
                    <li>
                      Complying with applicable legal obligations.
                    </li>
                  </ul>

                  <p>
                    We will not use your personal information for
                    unrelated purposes without providing
                    appropriate notice or obtaining consent where
                    required.
                  </p>
                </div>
              </section>

              <section id="sharing" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  4. Sharing of Information
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    We do not sell personal information to third
                    parties.
                  </p>

                  <p>
                    We may share information with trusted
                    service providers when necessary to operate
                    our website or deliver our services.
                    These providers may include:
                  </p>

                  <ul className="list-disc space-y-3 pl-6">
                    <li>Website hosting and infrastructure providers.</li>
                    <li>Email delivery and communication providers.</li>
                    <li>Database and cloud storage providers.</li>
                    <li>Website analytics and security providers.</li>
                    <li>
                      Professional advisers, where reasonably
                      necessary.
                    </li>
                  </ul>

                  <p>
                    We may also disclose information when
                    required by applicable law, a valid legal
                    request, or to protect our rights, users,
                    and services.
                  </p>

                  <p>
                    Where appropriate, we seek to ensure that
                    service providers handle information
                    consistently with their contractual
                    obligations and applicable privacy
                    requirements.
                  </p>
                </div>
              </section>

              <section id="cookies" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  5. Cookies and Tracking
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Cookies are small files stored on your
                    device that may help websites remember
                    preferences and improve functionality.
                  </p>

                  <p>
                    Our website or its service providers may use
                    cookies or similar technologies for:
                  </p>

                  <ul className="list-disc space-y-2 pl-6">
                    <li>Essential website functionality.</li>
                    <li>Security and performance.</li>
                    <li>
                      Remembering preferences, where enabled.
                    </li>
                    <li>
                      Analytics and usage measurement, where
                      enabled.
                    </li>
                  </ul>

                  <p>
                    You can manage cookies through your browser
                    settings. Disabling certain cookies may
                    affect website functionality.
                  </p>

                  <p>
                    Where consent is required for non-essential
                    cookies or tracking technologies, we will
                    obtain the appropriate consent before
                    activating them.
                  </p>
                </div>
              </section>

              <section id="third-party" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  6. Third-Party Services
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Our website may use third-party services
                    that process information according to
                    their own privacy policies.
                  </p>

                  <p>
                    These services may include hosting
                    platforms, communication tools, analytics
                    services, embedded content, or other
                    integrations used by our website.
                  </p>

                  <p>
                    When you follow a link to a third-party
                    website or communicate through an external
                    service such as WhatsApp, your interaction
                    may be governed by that provider's privacy
                    policy and terms.
                  </p>

                  <p>
                    We encourage you to review the privacy
                    policies of third-party services you use.
                  </p>
                </div>
              </section>

              <section id="security" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  7. Data Security
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    We take reasonable technical and
                    organizational measures designed to protect
                    personal information against unauthorized
                    access, alteration, disclosure, loss, or
                    destruction.
                  </p>

                  <p>
                    Depending on the services and systems used,
                    these measures may include access controls,
                    secure connections, appropriate
                    authentication, and security monitoring.
                  </p>

                  <p>
                    However, no method of transmission or
                    electronic storage is completely secure.
                    We cannot guarantee absolute security.
                  </p>

                  <p>
                    If a personal data breach occurs, we will
                    take appropriate steps in accordance with
                    applicable legal requirements.
                  </p>
                </div>
              </section>

              <section id="retention" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  8. Data Retention
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    We retain personal information only for as
                    long as reasonably necessary for the
                    purposes for which it was collected,
                    including responding to enquiries,
                    providing services, maintaining business
                    records, and complying with legal
                    obligations.
                  </p>

                  <p>
                    When information is no longer required,
                    we will take reasonable steps to delete
                    or anonymize it, subject to applicable
                    legal requirements and legitimate
                    operational needs.
                  </p>

                  <p>
                    Retention periods may vary depending on
                    the type of information and the purpose
                    for which it is processed.
                  </p>
                </div>
              </section>

              <section id="rights" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  9. Your Privacy Rights
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Depending on applicable law, you may have
                    rights relating to your personal
                    information, including:
                  </p>

                  <ul className="list-disc space-y-3 pl-6">
                    <li>
                      Requesting information about personal
                      data we process.
                    </li>
                    <li>
                      Requesting correction of inaccurate or
                      incomplete personal information.
                    </li>
                    <li>
                      Requesting deletion of personal
                      information, subject to applicable
                      legal requirements.
                    </li>
                    <li>
                      Withdrawing consent where processing
                      is based on consent.
                    </li>
                    <li>
                      Raising a privacy-related complaint
                      or grievance.
                    </li>
                    <li>
                      Exercising other rights available
                      under applicable privacy laws.
                    </li>
                  </ul>

                  <p>
                    To submit a privacy request, contact us
                    using the details provided in the
                    "Contact Us" section below.
                  </p>

                  <p>
                    We may need to verify your identity
                    before responding to certain requests.
                    We will respond within the period
                    required by applicable law.
                  </p>
                </div>
              </section>

              <section id="children" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  10. Children's Privacy
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Our website and services are intended
                    for businesses, professionals, and
                    individuals who are legally capable
                    of using our services.
                  </p>

                  <p>
                    We do not knowingly collect personal
                    information from children in
                    circumstances where parental or
                    guardian consent is required.
                  </p>

                  <p>
                    If you believe that a child has
                    provided personal information to us
                    without the required authorization,
                    please contact us so that we can
                    review the matter and take appropriate
                    action.
                  </p>
                </div>
              </section>

              <section id="international" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  11. International Transfers
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Certain service providers may process
                    or store information on servers
                    located outside India.
                  </p>

                  <p>
                    Where personal information is
                    transferred internationally, we
                    will take appropriate steps to
                    ensure that such transfers are
                    handled in accordance with
                    applicable legal requirements.
                  </p>
                </div>
              </section>

              <section id="changes" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  12. Changes to This Policy
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    We may update this Privacy Policy
                    from time to time to reflect
                    changes in our services, technology,
                    business practices, or applicable
                    legal requirements.
                  </p>

                  <p>
                    Updated versions will be published
                    on this page with a revised
                    "Last updated" date.
                  </p>

                  <p>
                    Where required by law, we will
                    provide additional notice or
                    obtain consent for material
                    changes to our data processing
                    practices.
                  </p>
                </div>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  13. Contact Us
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    If you have questions about this
                    Privacy Policy, wish to exercise
                    your privacy rights, or would like
                    to raise a privacy-related
                    grievance, please contact us.
                  </p>

                  <div className="mt-6 rounded-2xl border border-charcoal/10 bg-slate-50 p-6">
                    <p className="font-semibold text-charcoal">
                      Hundred Bit
                    </p>

                    <p className="mt-2 text-sm text-slate">
                      Privacy and Data Protection
                    </p>

                    <p className="mt-4 text-sm text-slate">
                      Email: Replace with your official
                      privacy contact email
                    </p>

                    <p className="mt-2 text-sm text-slate">
                      Website: hundredbit.com
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-slate">
                      Please include "Privacy Request"
                      in the subject line of your
                      email so that we can identify
                      and respond to your request
                      appropriately.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer Navigation */}
            <div className="mt-16 border-t border-charcoal/10 pt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-electric transition hover:gap-3"
              >
                ← Back to Home
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
