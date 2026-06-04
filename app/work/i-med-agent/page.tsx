/*
  Case study: I-MED AI customer service assistant
  ------------------------------------------------
  Route: /work/i-med-agent

  Content owned by Pouria — direct version of what he wants on the site.
  Public-figures policy: no dollar amounts, no specific call-volume numbers.
  Multiples (6×) and percentages OK.

  Architecture diagram lives at /public/imed-architecture.png (Pouria saves it).
*/

import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs px-3 py-1 rounded-full border border-black/10 text-[var(--color-ink-muted)] bg-[var(--color-paper)]">
      {children}
    </span>
  );
}

export default function IMedAgent() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />

      <article className="flex-1 max-w-3xl w-full mx-auto px-6 py-12 md:py-16">
        {/* Breadcrumb */}
        <Link
          href="/about#work"
          className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-coral)] transition-colors inline-block mb-8"
        >
          &larr; Back to work
        </Link>

        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink-soft)] mb-4">
          I-MED Radiology &middot; August 2025 &mdash; present
        </p>

        {/* H1 */}
        <h1 className="heading-serif text-3xl md:text-5xl text-[var(--color-ink)] mb-6 leading-tight">
          Putting an AI customer service assistant in front of a high-volume
          radiology operation.
        </h1>

        {/* TLDR */}
        <div className="border border-black/5 rounded-xl bg-[var(--color-paper-warm)]/60 p-5 md:p-6 mb-12">
          <p className="text-xs uppercase tracking-wider text-[var(--color-ink-soft)] mb-2">
            TL;DR
          </p>
          <div className="space-y-4 text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed">
            <p>
              I helped lead the design, delivery, and production rollout of an
              AI customer service assistant for I-MED Radiology, focused on
              helping patients and referrers get faster answers to common
              enquiries across booking, preparation, clinic information,
              billing guidance, and general support.
            </p>
            <p>
              The solution uses{" "}
              <span className="text-[var(--color-ink)]">
                AWS Bedrock, Claude, RAG, Strands, and LangGraph
              </span>{" "}
              to provide grounded, workflow-aware support rather than a simple
              scripted FAQ experience. The chatbot is now in production, with
              early indicators showing materially improved efficiency per
              digital interaction compared with traditional call-centre
              handling.
            </p>
            <p>
              The next phase extends the customer-service strategy into voice.
              That work is currently in discovery and build planning, including
              comparison of options such as Amazon Lex, Amazon Nova, and
              vendor-led voice AI solutions.
            </p>
          </div>
        </div>

        {/* ============ CONTEXT ============ */}
        <section className="mb-14">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-5">
            Context
          </h2>
          <div className="space-y-4 text-[var(--color-ink-muted)] leading-relaxed">
            <p>
              I-MED Radiology is{" "}
              <span className="text-[var(--color-ink)]">
                Australia&rsquo;s largest medical imaging network
              </span>
              . A meaningful part of the operation is customer-facing: patients
              and referrers contact the business to book scans, ask about
              preparation, confirm referral requirements, understand billing
              pathways, check clinic information, and resolve general service
              questions.
            </p>
            <p>
              Before the chatbot, many of these enquiries relied heavily on
              call-centre staff and internal knowledge sources. A large portion
              of the demand followed repeatable patterns, but the answers
              often still required staff to interpret process guidance,
              clinic-specific information, billing rules, preparation
              requirements, and referral-related instructions.
            </p>
            <p>
              The opportunity was to create a safer and more scalable digital
              self-service channel: one that could answer common questions
              consistently, reduce repetitive contact demand, and give
              customers a faster path to support without removing human
              escalation where it was still needed.
            </p>
            <p>
              The project was also an opportunity to prove how generative AI
              could be delivered in a{" "}
              <span className="text-[var(--color-ink)]">
                practical, governed way inside a healthcare-adjacent customer
                environment
              </span>
              . The assistant needed to be useful, but also cautious, grounded,
              and clear about its limits.
            </p>
          </div>
        </section>

        {/* ============ APPROACH ============ */}
        <section className="mb-14">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-5">
            Approach
          </h2>
          <div className="space-y-4 text-[var(--color-ink-muted)] leading-relaxed">
            <p>
              Two early decisions shaped the project. First, the chatbot
              needed to support{" "}
              <span className="text-[var(--color-ink)]">
                real customer journeys
              </span>{" "}
              rather than only answer static FAQs. Second, it needed to be{" "}
              <span className="text-[var(--color-ink)]">
                grounded in approved business knowledge
              </span>
              , with clear guardrails around what it could and could not say.
            </p>

            <p>The solution was designed around a combination of:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  Retrieval-augmented generation over approved internal
                  knowledge sources, including clinic information, preparation
                  guidance, FAQs, billing guidance, and service information.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  Agentic orchestration to help the assistant interpret
                  customer intent and route different enquiry types through
                  the right workflow.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  Guardrails and fallback pathways so the assistant could
                  escalate or redirect users when a question was too complex,
                  sensitive, or outside scope.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  Iterative testing using real enquiry patterns, stakeholder
                  review, and production feedback.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  Governance input across operational, legal, security, and
                  customer-service stakeholders.
                </span>
              </li>
            </ul>

            <p>
              My role was the{" "}
              <span className="text-[var(--color-ink)]">
                data science lead for the project
              </span>
              , with a strong delivery and product-management component
              because the work was highly technical and still needed to be
              translated into a usable customer-service product.
            </p>
            <p>
              I worked closely with the I-MED call centre team and management,
              who were the key business stakeholders for the chatbot. They
              brought the operational knowledge: enquiry patterns, customer
              pain points, escalation scenarios, and the practical realities
              of how support teams handle patient and referrer questions. I
              helped turn that knowledge into requirements, workflows, test
              scenarios, and delivery priorities that the technical team could
              build against.
            </p>
            <p>
              I also contributed directly to the solution development,
              particularly around the assistant&rsquo;s tools and knowledge
              base. This included helping shape how internal content was
              structured for retrieval, how the chatbot accessed approved
              information, and how tool-based workflows could support common
              enquiry types. That mix of hands-on technical contribution and
              cross-functional coordination meant my role often extended into
              product management heavy lifting: clarifying scope, managing
              ambiguity, aligning stakeholders, supporting testing, and
              helping move the chatbot from prototype to production rollout.
            </p>
            <p>
              The architecture used{" "}
              <span className="text-[var(--color-ink)]">AWS Bedrock</span> as
              the model layer, with{" "}
              <span className="text-[var(--color-ink)]">Claude</span> supporting
              natural-language reasoning and response generation.
              Retrieval-augmented generation was used to ground responses in
              approved business content rather than relying on the
              model&rsquo;s general knowledge.{" "}
              <span className="text-[var(--color-ink)]">
                Strands and LangGraph
              </span>{" "}
              were used across orchestration patterns, giving the team
              flexibility to combine agentic reasoning with more controlled
              workflows where needed.
            </p>

            {/* Architecture diagram */}
            <figure className="my-8">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-black/5 bg-[var(--color-paper-warm)]/40">
                <Image
                  src="/imed-architecture.png"
                  alt="Architecture diagram showing AWS Bedrock, Claude, Strands, LangGraph, and supporting services powering the I-MED AI customer service assistant"
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                />
              </div>
              <figcaption className="text-xs text-[var(--color-ink-soft)] mt-2 text-center">
                High-level architecture &mdash; AWS-native serverless on
                ap-southeast-2, with Bedrock AgentCore and Guardrails behind
                the chat orchestrator.
              </figcaption>
            </figure>

            <p>
              One of the main design trade-offs was deciding{" "}
              <span className="text-[var(--color-ink)]">
                when the assistant should behave more like an agent and when
                it should follow a more deterministic path
              </span>
              . Open-ended customer questions often benefit from agentic
              reasoning, especially when the user&rsquo;s intent is unclear or
              they ask a multi-part question. Other moments require tighter
              control, such as presenting approved guidance, managing
              escalation, or keeping the assistant within a defined service
              boundary. The project reinforced that a hybrid approach is often
              stronger than trying to make every interaction fully agentic.
            </p>
            <p>
              Voice was treated as a separate phase rather than simply adding
              speech on top of the chatbot. Voice introduces its own delivery
              risks: latency, speech recognition quality, interruption
              handling, telephony integration, escalation, caller frustration,
              and identity-related flows. I supported discovery and solution
              comparison across options such as Amazon Lex, Amazon Nova, and
              vendor-led voice AI approaches. The voice bot is still
              relatively new and in build phase, with the technical
              implementation being managed separately through a vendor-led
              delivery stream.
            </p>
          </div>
        </section>

        {/* ============ OUTCOME ============ */}
        <section className="mb-14">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-5">
            Outcome
          </h2>

          <div className="space-y-4 text-[var(--color-ink-muted)] leading-relaxed">
            <p>
              The chatbot moved from concept into production rollout as part
              of I-MED Radiology&rsquo;s digital customer-service strategy.
            </p>
            <p>Key outcomes included:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  A production AI customer service assistant supporting common
                  patient and referrer enquiries.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  A reusable foundation for grounded AI assistance across
                  customer-service workflows.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  A more consistent digital pathway for repeatable enquiry
                  types.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  Human escalation paths for complex, sensitive, or
                  unsupported questions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  Early indicators of significantly improved efficiency per
                  digital interaction, with the chatbot operating at
                  approximately{" "}
                  <span className="text-[var(--color-ink)] font-medium">
                    6&times; efficiency
                  </span>{" "}
                  compared with traditional call-centre handling.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  A stronger internal delivery model for future AI
                  initiatives, including clearer patterns for governance,
                  testing, stakeholder review, and production monitoring.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  A foundation for the next phase of work, including voice AI
                  discovery, vendor management, and build planning.
                </span>
              </li>
            </ul>

            <p>
              The value of the project was not only in the chatbot itself. It
              also helped the organisation learn how to take an AI concept
              from experimentation into a production service: defining the
              right use cases, grounding the assistant in approved knowledge,
              setting boundaries, testing against real-world scenarios,
              managing stakeholders, and improving the experience after launch.
            </p>
            <p>
              For me, the project demonstrated the role a{" "}
              <span className="text-[var(--color-ink)]">
                technical product and delivery lead
              </span>{" "}
              can play in AI adoption. The work required enough technical
              depth to understand LLM behaviour, RAG, orchestration, AWS
              services, and solution trade-offs, but also enough product and
              operational judgement to make the assistant useful for real
              customers and manageable for the business.
            </p>
          </div>
        </section>

        {/* ============ WHAT I LEARNED ============ */}
        <section className="mb-14">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-5">
            What I learned
          </h2>
          <div className="space-y-4 text-[var(--color-ink-muted)] leading-relaxed">
            <p>
              The hardest problem was not getting an LLM to produce an answer.
              The harder problem was making the assistant{" "}
              <span className="text-[var(--color-ink)]">
                reliable enough for a real customer-service environment
              </span>
              . That meant dealing with ambiguous questions, imperfect source
              content, edge cases, escalation rules, stakeholder expectations,
              and the gap between a strong demo and a safe production
              experience.
            </p>
            <p>
              If I were starting again, I would invest even earlier in{" "}
              <span className="text-[var(--color-ink)]">evaluation design</span>
              . In AI projects, it is easy to move quickly when the first
              prototype looks impressive. But production confidence comes from
              structured test sets, expected answer patterns, escalation
              scenarios, failure-mode analysis, and clear quality measures. I
              learned that evaluation should be treated as a core delivery
              workstream, not a final testing activity.
            </p>
            <p>
              The project also taught me that AI delivery in healthcare-adjacent
              environments requires more than technical implementation. It
              requires{" "}
              <span className="text-[var(--color-ink)]">trust-building</span>.
              Customers need clear and safe answers. Operations teams need
              confidence that the assistant will not create more work than it
              removes. Legal and security teams need visibility and control.
              Executives need a practical path to value. The most important
              part of my role was helping connect those needs so the project
              could move from idea to production in a governed, useful, and
              scalable way.
            </p>
          </div>
        </section>

        {/* ============ STACK FOOTER ============ */}
        <section className="border-t border-black/5 pt-8 mt-12">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--color-ink-soft)] mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                <Pill>AWS Bedrock</Pill>
                <Pill>Claude</Pill>
                <Pill>RAG</Pill>
                <Pill>Strands</Pill>
                <Pill>LangGraph</Pill>
                <Pill>AWS serverless (Lambda, API Gateway, DynamoDB, S3, SQS)</Pill>
                <Pill>Bedrock Guardrails</Pill>
                <Pill>Genesys Cloud</Pill>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--color-ink-soft)] mb-3">
                My role
              </p>
              <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
                Data science lead with a strong product and delivery
                component. Owned solution shape, knowledge-base structuring,
                stakeholder alignment with call-centre and governance teams,
                and the path from prototype to production.
              </p>
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="mt-12 pt-6 border-t border-black/5">
          <Link
            href="/about#work"
            className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-coral)] transition-colors"
          >
            &larr; Back to all work
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
