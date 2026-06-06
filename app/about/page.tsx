/*
  About page (/about)
  -------------------
  Long-form narrative about Pouria. Sections, in order:
    1. Hero          — name, role, location, CV download, key links
    2. Story         — career arc from Iran-trained engineer to AI product lead
    3. Currently     — what's on his plate right now
    4. Capabilities  — outcome-framed strengths (NOT a tool list)
    5. Selected work — placeholders linking to future Phase 3 case studies
    6. Looking next  — explicit ask: target roles
    7. Contact       — buttons to email + LinkedIn

  All section IDs are anchorable so the homepage nav can deep-link
  (e.g. /about#contact).
*/

import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// Reusable capability card to keep the markup tidy.
function Capability({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-black/5 rounded-xl p-5 hover:border-[var(--color-coral)]/40 transition-colors bg-[var(--color-paper)]">
      <h3 className="text-base font-medium mb-2 text-[var(--color-ink)]">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
        {body}
      </p>
    </div>
  );
}

// Reusable work card. If `href` is supplied, the card is a clickable link
// (case study is live); otherwise it's a static placeholder.
function WorkCard({
  title,
  org,
  blurb,
  href,
  status = "Case study coming soon",
}: {
  title: string;
  org: string;
  blurb: string;
  href?: string;
  status?: string;
}) {
  const inner = (
    <>
      <div className="flex items-baseline justify-between mb-2 gap-3">
        <h3 className="text-base font-medium text-[var(--color-ink)]">
          {title}
        </h3>
        <span className="text-[10px] uppercase tracking-wider text-[var(--color-ink-soft)] whitespace-nowrap">
          {org}
        </span>
      </div>
      <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed mb-3">
        {blurb}
      </p>
      <p className="text-xs text-[var(--color-coral)] font-medium">
        {href ? <>Read the case study &rarr;</> : status}
      </p>
    </>
  );

  const baseClasses =
    "block border border-black/5 rounded-xl p-5 bg-[var(--color-paper)] hover:border-[var(--color-coral)]/40 transition-colors";

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {inner}
      </Link>
    );
  }
  return <div className={baseClasses}>{inner}</div>;
}

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />

      <article className="flex-1 max-w-3xl w-full mx-auto px-6 py-16 md:py-24">
        {/* ============ HERO ============ */}
        <section id="top">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink-soft)] mb-5">
            About
          </p>
          <h1 className="heading-serif text-4xl md:text-5xl text-[var(--color-ink)] mb-5">
            From network engineer to AI product leader.
          </h1>
          <p className="text-lg leading-relaxed text-[var(--color-ink-muted)] mb-8">
            Ten years across two of Australia&rsquo;s largest networks &mdash;
            telecom and healthcare. The throughline: turning complex systems
            into products people actually use.
          </p>

          <div className="flex flex-wrap gap-3 mb-2">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--color-ink)] text-white text-sm font-medium hover:bg-[var(--color-coral)] transition-colors"
              download
            >
              Download CV
              <span aria-hidden>&darr;</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pouria-ebram/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-black/15 text-sm font-medium hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-black/15 text-sm font-medium hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* ============ STORY ============ */}
        <section id="story" className="mt-20">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-6">
            How I got here
          </h2>
          <div className="space-y-5 text-[var(--color-ink-muted)] leading-relaxed">
            <p>
              I trained as an electrical and telecommunications engineer in
              Iran &mdash; bachelor&rsquo;s at Isfahan University of Technology,
              master&rsquo;s at Shiraz University. Engineering taught me to
              think in systems: every visible failure has a structural cause
              underneath, and the work is to find it.
            </p>
            <p>
              I moved to Melbourne and started at{" "}
              <span className="text-[var(--color-ink)]">Telstra</span> in
              customer assurance &mdash; doing root-cause investigation on
              enterprise network faults. Six years there gave me something most
              data scientists never get: a working sense of how complex
              production systems actually break, and how operations teams
              actually use the tools we build for them. That shapes everything
              I do today.
            </p>
            <p>
              The move into data science came naturally from there. I returned
              to Monash for a graduate diploma in 2021 and shifted internally
              &mdash; first into sports media analytics (AFL, NRL, AFLW
              streaming), then into customer base management, and eventually
              into the Lead role on Telstra&rsquo;s customer experience
              program. Along the way I led production churn modelling that
              delivered material recurring savings, applied LLM-based topic
              modelling to customer verbatim analysis, and led the ML work
              behind the company&rsquo;s CIQ initiative &mdash; adopted
              enterprise-wide across 15 retail locations.
            </p>
            <p>
              Then I made the biggest leap yet: industry change, role step-up,
              and focus shift in a single move. I joined{" "}
              <span className="text-[var(--color-ink)]">I-MED Radiology</span>{" "}
              &mdash; Australia&rsquo;s largest medical imaging network &mdash;
              as Lead Data Scientist. My focus is GenAI for operational
              efficiency: turning frontier models into real tools that change
              how the business runs day-to-day. Going from selling phone plans
              to supporting clinical operations has reinforced what I already
              believed: the hardest part of AI work is rarely the model. It&rsquo;s
              everything around the model.
            </p>
          </div>
        </section>

        {/* ============ CURRENTLY ============ */}
        <section id="currently" className="mt-20">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-6">
            What I&rsquo;m working on now
          </h2>
          <ul className="space-y-3 text-[var(--color-ink-muted)] leading-relaxed">
            <li className="flex gap-3">
              <span className="text-[var(--color-coral)] font-medium mt-0.5">&rarr;</span>
              <span>
                Leading GenAI initiatives at I-MED that improve operational
                efficiency across the business
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-coral)] font-medium mt-0.5">&rarr;</span>
              <span>
                Going deeper on agentic systems and the MCP ecosystem &mdash;
                this site is one of the experiments (read more in{" "}
                <a href="/#work" className="underline underline-offset-2 hover:text-[var(--color-coral)]">
                  selected work
                </a>
                )
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-coral)] font-medium mt-0.5">&rarr;</span>
              <span>
                Building toward AI product leadership &mdash; looking for roles
                where AI craft and product judgment both matter
              </span>
            </li>
          </ul>
        </section>

        {/* ============ CAPABILITIES ============ */}
        <section id="capabilities" className="mt-20">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-2">
            What I&rsquo;m good at
          </h2>
          <p className="text-sm text-[var(--color-ink-soft)] mb-6">
            Framed as outcomes, not toolkits.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Capability
              title="Shipping production GenAI"
              body="RAG architectures, vector DBs, LLM integration, prompt engineering, custom chatbots, agentic systems with tool use and MCP."
            />
            <Capability
              title="End-to-end ML"
              body="From problem framing through deployment and monitoring. XGBoost, LightGBM, deep learning, time series — whichever the problem actually needs."
            />
            <Capability
              title="Driving enterprise adoption"
              body="Translating model outputs into dashboards, processes, and decisions used across 15+ teams and locations. Tools that get used, not just shipped."
            />
            <Capability
              title="Outcomes that hit the P&L"
              body="Material recurring savings via production churn models. Director's Accolade for cross-team integration. Enterprise-wide CIQ rollout informing CX strategy."
            />
            <Capability
              title="Cross-functional product thinking"
              body="Workshops with marketing, commercial, ops, and engineering. Turning ambiguous business problems into roadmaps and shippable AI features."
            />
            <Capability
              title="Growing teams and people"
              body="Mentoring junior data scientists, owning project delivery lifecycle, building the kind of team practices that compound over time."
            />
          </div>
        </section>

        {/* ============ SELECTED WORK ============ */}
        <section id="work" className="mt-20">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-2">
            Selected work
          </h2>
          <p className="text-sm text-[var(--color-ink-soft)] mb-6">
            Full case studies coming in Phase 3 of this site.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            <WorkCard
              org="I-MED"
              title="GenAI for operational efficiency"
              blurb="Leading GenAI initiatives across Australia's largest medical imaging network — turning frontier models into tools the business actually uses."
              href={
                process.env.NEXT_PUBLIC_DRAFT_CASE_STUDIES === "true"
                  ? "/work/i-med-agent"
                  : undefined
              }
            />
            <WorkCard
              org="Telstra"
              title="CIQ — Customer-IQ"
              blurb="Led ML propensity models adopted enterprise-wide across 15 store locations, informing strategic decisions on network investment and CX."
              href="/work/telstra-ciq"
            />
            <WorkCard
              org="Telstra"
              title="Churn prediction at scale"
              blurb="Daily-refreshed post-assurance churn propensity model for NBN — 5× top-decile lift, used across marketing, assurance ops, and fixed-broadband product teams."
              href="/work/telstra-churn"
            />
          </div>
        </section>

        {/* ============ LOOKING NEXT ============ */}
        <section id="next" className="mt-20">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-6">
            What&rsquo;s next
          </h2>
          <p className="text-[var(--color-ink-muted)] leading-relaxed mb-5">
            I&rsquo;m exploring next moves where AI product leadership and
            technical depth both matter. Specifically interested in:
          </p>
          <ul className="space-y-3 text-[var(--color-ink-muted)] leading-relaxed mb-6">
            <li className="flex gap-3">
              <span className="text-[var(--color-coral)] font-medium mt-0.5">&rarr;</span>
              <span>
                <span className="text-[var(--color-ink)] font-medium">
                  AI Product Manager / Senior PM
                </span>{" "}
                at companies shipping AI features at meaningful scale
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-coral)] font-medium mt-0.5">&rarr;</span>
              <span>
                <span className="text-[var(--color-ink)] font-medium">
                  Head of AI Product / AI Product Lead
                </span>{" "}
                at scaleups or established companies standing up a new AI
                function
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-coral)] font-medium mt-0.5">&rarr;</span>
              <span>
                <span className="text-[var(--color-ink)] font-medium">
                  AI consulting and advisory
                </span>{" "}
                for orgs trying to navigate &ldquo;what should we actually
                build with this&rdquo;
              </span>
            </li>
          </ul>
          <p className="text-[var(--color-ink-muted)] leading-relaxed">
            If any of those sound like a fit, the chatbot in the corner can
            tell you more &mdash; or just{" "}
            <a
              href="#contact"
              className="text-[var(--color-coral)] underline underline-offset-2"
            >
              reach out directly
            </a>
            .
          </p>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="mt-20 mb-8">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-6">
            Get in touch
          </h2>
          <p className="text-[var(--color-ink-muted)] leading-relaxed mb-6">
            The fastest way to reach me is email. For a longer pitch or to
            connect publicly, LinkedIn is great too.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:pouriaebzhd@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--color-ink)] text-white text-sm font-medium hover:bg-[var(--color-coral)] transition-colors"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/pouria-ebram/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-black/15 text-sm font-medium hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"
            >
              Connect on LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-black/15 text-sm font-medium hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"
              download
            >
              Download CV
            </a>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
