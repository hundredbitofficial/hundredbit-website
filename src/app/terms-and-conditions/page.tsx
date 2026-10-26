
import Link from "next/link";

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "services", title: "2. Our Services" },
  { id: "website-use", title: "3. Website Usage" },
  { id: "enquiries", title: "4. Enquiries and Proposals" },
  { id: "client-responsibilities", title: "5. Client Responsibilities" },
  { id: "payments", title: "6. Pricing and Payments" },
  { id: "revisions", title: "7. Revisions and Scope Changes" },
  { id: "intellectual-property", title: "8. Intellectual Property" },
  { id: "third-party", title: "9. Third-Party Services" },
  { id: "confidentiality", title: "10. Confidentiality" },
  { id: "cancellation", title: "11. Cancellation and Termination" },
  { id: "warranty", title: "12. Warranties and Disclaimers" },
  { id: "liability", title: "13. Limitation of Liability" },
  { id: "indemnification", title: "14. Indemnification" },
  { id: "external-links", title: "15. External Links" },
  { id: "changes", title: "16. Changes to These Terms" },
  { id: "law", title: "17. Governing Law and Disputes" },
  { id: "contact", title: "18. Contact Us" },
];

export default function TermsAndConditionsPage() {
  const lastUpdated = "October 26, 2026";

  return (
    <main className="min-h-screen bg-white text-charcoal">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#071426] px-6 py-24 text-white sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-electric/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-electric" />
            Legal & Agreements
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Terms &
            <span className="text-electric"> Conditions.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            These terms explain the rules for using the
            Hundred Bit website and outline the general
            conditions applicable to our digital services.
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

              <nav aria-label="Terms and conditions contents">
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

          {/* Terms Content */}
          <article className="max-w-4xl">
            <div className="mb-12 rounded-2xl border border-electric/15 bg-blue-50/50 p-6">
              <p className="text-sm leading-relaxed text-slate">
                Please read these Terms & Conditions
                carefully before using our website or
                engaging our services. These terms
                describe general website usage and
                business conditions. Individual
                development projects may be subject
                to separate written agreements,
                proposals, or statements of work.
              </p>
            </div>

            <div className="space-y-14">
              {/* 1 */}
              <section id="acceptance" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  1. Acceptance of Terms
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Welcome to Hundred Bit ("Hundred Bit",
                    "we", "our", or "us"). These Terms &
                    Conditions govern your access to and
                    use of our website and the general
                    services we provide.
                  </p>

                  <p>
                    By accessing or using our website,
                    you agree to comply with these terms.
                    If you do not agree, please
                    discontinue using the website.
                  </p>

                  <p>
                    These terms should be read together
                    with our Privacy Policy and any
                    separate agreement applicable to
                    a specific project or service.
                  </p>
                </div>
              </section>

              {/* 2 */}
              <section id="services" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  2. Our Services
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Hundred Bit provides digital
                    solutions and technology services,
                    which may include:
                  </p>

                  <ul className="list-disc space-y-3 pl-6">
                    <li>Website design and development.</li>
                    <li>Web application development.</li>
                    <li>Custom software development.</li>
                    <li>E-commerce solutions.</li>
                    <li>UI/UX design.</li>
                    <li>Data analytics and business intelligence.</li>
                    <li>Automation and workflow solutions.</li>
                    <li>Website maintenance and technical support.</li>
                  </ul>

                  <p>
                    The exact scope, deliverables,
                    timelines, pricing, and conditions
                    of a particular project will be
                    determined by the relevant proposal,
                    quotation, or written agreement.
                  </p>
                </div>
              </section>

              {/* 3 */}
              <section id="website-use" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  3. Website Usage
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    You agree to use our website only
                    for lawful purposes and in a manner
                    that does not interfere with its
                    operation or the rights of others.
                  </p>

                  <p>You must not:</p>

                  <ul className="list-disc space-y-3 pl-6">
                    <li>
                      Use the website for fraudulent,
                      unlawful, or misleading purposes.
                    </li>
                    <li>
                      Attempt to gain unauthorized
                      access to our systems, servers,
                      or data.
                    </li>
                    <li>
                      Introduce malicious software,
                      viruses, or harmful code.
                    </li>
                    <li>
                      Interfere with website security
                      or availability.
                    </li>
                    <li>
                      Copy, scrape, or reproduce
                      website content in violation
                      of applicable law or our rights.
                    </li>
                    <li>
                      Submit false, misleading, or
                      unauthorized information
                      through our forms.
                    </li>
                  </ul>

                  <p>
                    We reserve the right to restrict
                    access to our website where
                    reasonably necessary to protect
                    our systems, users, or business.
                  </p>
                </div>
              </section>

              {/* 4 */}
              <section id="enquiries" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  4. Enquiries and Proposals
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Submitting an enquiry through
                    our website, email, or WhatsApp
                    does not automatically create
                    a client relationship or a
                    binding development contract.
                  </p>

                  <p>
                    Any proposal, quotation, or
                    estimate provided by Hundred Bit
                    is subject to the conditions
                    stated in that document.
                  </p>

                  <p>
                    A project will generally begin
                    after the relevant scope,
                    commercial terms, responsibilities,
                    and other applicable conditions
                    have been agreed upon in writing.
                  </p>

                  <p>
                    Unless expressly stated otherwise,
                    estimates are indicative and may
                    change if the project requirements
                    or scope change.
                  </p>
                </div>
              </section>

              {/* 5 */}
              <section
                id="client-responsibilities"
                className="scroll-mt-28"
              >
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  5. Client Responsibilities
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Clients engaging our services
                    agree to provide the information,
                    materials, access, and feedback
                    reasonably required to complete
                    their projects.
                  </p>

                  <p>Client responsibilities may include:</p>

                  <ul className="list-disc space-y-3 pl-6">
                    <li>
                      Providing accurate project
                      requirements and business
                      information.
                    </li>
                    <li>
                      Supplying authorized text,
                      images, logos, and other
                      content.
                    </li>
                    <li>
                      Obtaining necessary permissions
                      for materials supplied to us.
                    </li>
                    <li>
                      Reviewing deliverables and
                      providing feedback within
                      agreed timelines.
                    </li>
                    <li>
                      Providing access to relevant
                      accounts, systems, or
                      third-party services where
                      required.
                    </li>
                    <li>
                      Making payments according
                      to the agreed schedule.
                    </li>
                  </ul>

                  <p>
                    Delays in receiving required
                    materials, approvals, or
                    payments may affect project
                    timelines and delivery dates.
                  </p>
                </div>
              </section>

              {/* 6 */}
              <section id="payments" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  6. Pricing and Payments
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Project pricing, advance payments,
                    milestones, recurring charges,
                    and payment deadlines will be
                    specified in the applicable
                    proposal, quotation, or
                    written agreement.
                  </p>

                  <p>
                    Unless otherwise agreed in writing:
                  </p>

                  <ul className="list-disc space-y-3 pl-6">
                    <li>
                      Payments must be made according
                      to the agreed schedule.
                    </li>
                    <li>
                      Work may be paused if an
                      undisputed payment remains
                      overdue after appropriate notice.
                    </li>
                    <li>
                      Additional work outside the
                      agreed scope may require
                      additional charges.
                    </li>
                    <li>
                      Applicable taxes and statutory
                      charges will be handled as
                      required by law and the
                      relevant agreement.
                    </li>
                  </ul>

                  <p>
                    Refunds, cancellations, and
                    adjustments will be governed
                    by the applicable project
                    agreement and mandatory
                    legal requirements.
                  </p>

                  <p>
                    No general refund or
                    non-refundable advance policy
                    is created by this section
                    unless it is expressly
                    agreed in writing.
                  </p>
                </div>
              </section>

              {/* 7 */}
              <section id="revisions" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  7. Revisions and Scope Changes
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Revisions, design changes,
                    additional features, and
                    modifications will be handled
                    according to the scope and
                    revision allowance specified
                    in the relevant project agreement.
                  </p>

                  <p>
                    Requests that materially change
                    the agreed requirements may
                    require additional time,
                    resources, or fees.
                  </p>

                  <p>
                    We will communicate material
                    scope changes and, where
                    appropriate, obtain approval
                    before proceeding with
                    additional chargeable work.
                  </p>
                </div>
              </section>

              {/* 8 */}
              <section
                id="intellectual-property"
                className="scroll-mt-28"
              >
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  8. Intellectual Property
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    All intellectual property
                    rights in our website,
                    branding, logos, original
                    content, design elements,
                    and materials remain with
                    Hundred Bit or their
                    respective owners, unless
                    otherwise stated.
                  </p>

                  <p>
                    Clients retain ownership of
                    materials they provide to us,
                    subject to any third-party
                    rights or applicable agreements.
                  </p>

                  <p>
                    Ownership or licensing of
                    project-specific deliverables,
                    source code, designs, and
                    related materials will be
                    determined by the applicable
                    written project agreement.
                  </p>

                  <p>
                    Unless otherwise agreed,
                    third-party software,
                    frameworks, libraries,
                    fonts, stock assets, and
                    other licensed materials
                    remain subject to their
                    respective licenses and
                    terms.
                  </p>

                  <p>
                    We may request permission
                    to display completed work
                    in our portfolio or marketing
                    materials. Client confidential
                    information will not be
                    intentionally disclosed
                    without appropriate
                    authorization.
                  </p>
                </div>
              </section>

              {/* 9 */}
              <section id="third-party" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  9. Third-Party Services
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Our projects may use third-party
                    services, software, APIs,
                    hosting platforms, payment
                    providers, or other external
                    technologies.
                  </p>

                  <p>
                    These services may be subject
                    to separate terms, licensing
                    conditions, fees, and privacy
                    policies.
                  </p>

                  <p>
                    We are not responsible for
                    independent changes, outages,
                    discontinuation, or policies
                    of third-party providers.
                    However, where third-party
                    dependencies affect a project,
                    we will address our own
                    contractual responsibilities
                    as applicable.
                  </p>

                  <p>
                    Third-party charges, subscriptions,
                    renewals, and account ownership
                    will be handled according
                    to the relevant project
                    agreement.
                  </p>
                </div>
              </section>

              {/* 10 */}
              <section id="confidentiality" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  10. Confidentiality
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    During a project, either party
                    may receive confidential
                    business, technical, financial,
                    or other non-public information
                    from the other party.
                  </p>

                  <p>
                    Each party should take
                    reasonable steps to protect
                    confidential information
                    and use it only for the
                    purposes for which it was
                    disclosed.
                  </p>

                  <p>
                    Confidentiality obligations
                    may be further defined in
                    a separate non-disclosure
                    agreement or project contract.
                  </p>

                  <p>
                    Information that is publicly
                    available, independently
                    developed, or lawfully
                    obtained without confidentiality
                    restrictions may not be
                    subject to these obligations.
                  </p>
                </div>
              </section>

              {/* 11 */}
              <section id="cancellation" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  11. Cancellation and Termination
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Project cancellation,
                    termination, and suspension
                    will be governed by the
                    applicable written agreement.
                  </p>

                  <p>
                    Where no separate agreement
                    addresses the matter, the
                    parties should communicate
                    in writing to determine
                    outstanding deliverables,
                    completed work, payments,
                    expenses, and any other
                    applicable obligations.
                  </p>

                  <p>
                    We may suspend or terminate
                    access to our website or
                    services where reasonably
                    necessary due to unlawful
                    activity, security risks,
                    material breach, or other
                    legitimate business reasons,
                    subject to applicable law
                    and contractual obligations.
                  </p>

                  <p>
                    Termination does not remove
                    obligations that have already
                    accrued or provisions that
                    are intended to survive
                    termination.
                  </p>
                </div>
              </section>

              {/* 12 */}
              <section id="warranty" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  12. Warranties and Disclaimers
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    We aim to provide professional
                    services with reasonable
                    care and skill.
                  </p>

                  <p>
                    Unless expressly stated
                    in a written agreement,
                    our website and its
                    informational content are
                    provided on an "as available"
                    basis.
                  </p>

                  <p>
                    We do not guarantee that
                    our website will always
                    be uninterrupted, error-free,
                    or compatible with every
                    device, browser, or
                    third-party service.
                  </p>

                  <p>
                    Project-specific warranties,
                    support periods, maintenance
                    commitments, and service
                    levels will be defined
                    in the relevant agreement.
                  </p>

                  <p>
                    Nothing in these terms
                    excludes any warranty,
                    right, or remedy that
                    cannot lawfully be
                    excluded under applicable law.
                  </p>
                </div>
              </section>

              {/* 13 */}
              <section id="liability" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  13. Limitation of Liability
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    To the extent permitted
                    by applicable law,
                    Hundred Bit will not
                    be liable for indirect,
                    incidental, special,
                    or consequential losses
                    arising from the use
                    of our website or
                    services.
                  </p>

                  <p>
                    This may include loss
                    of profits, business
                    opportunities, data,
                    or anticipated savings,
                    where such exclusion
                    is legally permitted.
                  </p>

                  <p>
                    Any limitation of
                    liability relating
                    to a specific development
                    project will be governed
                    by the applicable
                    written agreement.
                  </p>

                  <p>
                    Nothing in these terms
                    limits liability where
                    such limitation is
                    prohibited by applicable
                    law, including liability
                    that cannot legally
                    be excluded or restricted.
                  </p>
                </div>
              </section>

              {/* 14 */}
              <section id="indemnification" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  14. Indemnification
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    To the extent permitted
                    by applicable law,
                    you agree to be
                    responsible for losses
                    or claims arising
                    from your unlawful
                    use of our website,
                    infringement of
                    third-party rights,
                    or material breach
                    of these terms.
                  </p>

                  <p>
                    Any indemnification
                    obligations relating
                    to a particular project
                    will be governed
                    by the applicable
                    written agreement.
                  </p>
                </div>
              </section>

              {/* 15 */}
              <section id="external-links" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  15. External Links
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    Our website may contain
                    links to external
                    websites, resources,
                    or services.
                  </p>

                  <p>
                    These links are
                    provided for
                    convenience or
                    informational purposes.
                    We do not control
                    external websites
                    and are not responsible
                    for their content,
                    availability, or
                    privacy practices.
                  </p>

                  <p>
                    Accessing external
                    websites is at
                    your own discretion.
                  </p>
                </div>
              </section>

              {/* 16 */}
              <section id="changes" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  16. Changes to These Terms
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    We may update these
                    Terms & Conditions
                    from time to time
                    to reflect changes
                    in our business,
                    services, technology,
                    or legal requirements.
                  </p>

                  <p>
                    Updated terms will
                    be published on
                    this page with
                    a revised "Last
                    updated" date.
                  </p>

                  <p>
                    Your continued use
                    of the website
                    after changes
                    become effective
                    constitutes acceptance
                    where such acceptance
                    is legally valid
                    and required.
                  </p>

                  <p>
                    Material changes
                    to an existing
                    project agreement
                    will be handled
                    according to
                    that agreement
                    and applicable law.
                  </p>
                </div>
              </section>

              {/* 17 */}
              <section id="law" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  17. Governing Law and Disputes
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    These terms are
                    intended to be
                    governed by the
                    laws of India,
                    subject to
                    applicable legal
                    requirements.
                  </p>

                  <p>
                    The parties will
                    attempt to resolve
                    disputes arising
                    from the use of
                    our website or
                    services through
                    good-faith discussions.
                  </p>

                  <p>
                    Where a dispute
                    cannot be resolved
                    amicably, it may
                    be referred to
                    the competent
                    courts having
                    jurisdiction,
                    subject to
                    applicable law
                    and any separate
                    written agreement.
                  </p>
                </div>
              </section>

              {/* 18 */}
              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  18. Contact Us
                </h2>

                <div className="mt-5 space-y-4 leading-8 text-slate">
                  <p>
                    If you have any
                    questions about
                    these Terms &
                    Conditions or
                    our services,
                    please contact
                    Hundred Bit.
                  </p>

                  <div className="mt-6 rounded-2xl border border-charcoal/10 bg-slate-50 p-6">
                    <p className="font-semibold text-charcoal">
                      Hundred Bit
                    </p>

                    <p className="mt-2 text-sm text-slate">
                      Software & Digital Solutions
                    </p>

                    <p className="mt-4 text-sm text-slate">
                      Email: Replace with your official
                      business email
                    </p>

                    <p className="mt-2 text-sm text-slate">
                      Website: hundredbit.com
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-slate">
                      For project enquiries,
                      proposals, or general
                      questions, please
                      contact us through
                      our website or
                      official communication
                      channels.
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
