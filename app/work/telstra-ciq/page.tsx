/*
  Case study: Telstra CIQ — Customer-IQ
  -------------------------------------
  Route: /work/telstra-ciq

  Pouria's lead role on the CIQ initiative. Three workstreams; the case
  study centres the most impactful one (the fixed-broadband customer
  experience model) and summarises the other two as follow-on work.

  Public-figures policy: multiples and percentages only. No dollar figures.
*/

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

// Small stat block used in the Outcome section.
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-black/5 rounded-xl p-5 bg-[var(--color-paper-warm)]/40">
      <p
        className="heading-serif text-3xl md:text-4xl text-[var(--color-ink)] mb-1"
        dangerouslySetInnerHTML={{ __html: value }}
      />
      <p className="text-xs uppercase tracking-wider text-[var(--color-ink-soft)]">
        {label}
      </p>
    </div>
  );
}

export default function TelstraCIQ() {
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
          Telstra &middot; CIQ &mdash; Customer-IQ &middot; 2023 &mdash; 2025
        </p>

        {/* H1 */}
        <h1 className="heading-serif text-3xl md:text-5xl text-[var(--color-ink)] mb-6 leading-tight">
          From a 1% NPS signal to a daily customer-experience metric for
          the whole broadband base.
        </h1>

        {/* TLDR */}
        <div className="border border-black/5 rounded-xl bg-[var(--color-paper-warm)]/60 p-5 md:p-6 mb-12">
          <p className="text-xs uppercase tracking-wider text-[var(--color-ink-soft)] mb-2">
            TL;DR
          </p>
          <div className="space-y-4 text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed">
            <p>
              Telstra ran NPS surveys against roughly{" "}
              <span className="text-[var(--color-ink)]">
                1% of its customer base at most every six months
              </span>{" "}
              &mdash; not enough resolution to manage customer experience as
              an operational signal. I led the development and production
              rollout of a model that turns that sparse survey signal into a{" "}
              <span className="text-[var(--color-ink)]">
                daily customer-experience prediction for 100% of the fixed
                broadband base
              </span>
              .
            </p>
            <p>
              The model is in production, used across{" "}
              <span className="text-[var(--color-ink)]">
                15+ retail stores
              </span>{" "}
              and by network engineering to prioritise investments, and gave
              every business unit a way to measure the customer-experience
              impact of their own initiatives. Two follow-on workstreams
              extended the platform &mdash; richer interaction data improved
              bad-experience identification by 30%, and a price-sensitivity
              proof of concept laid groundwork for measuring sentiment
              around price-rise events.
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
              Telstra is Australia&rsquo;s largest telecommunications
              company. Customer experience drives almost every commercial
              outcome in the business &mdash; churn, retention, network
              investment priorities, store performance, the lot &mdash; but
              the operational signal for it was thin. NPS surveys covered{" "}
              <span className="text-[var(--color-ink)]">
                only around 1% of the customer base
              </span>
              , and a given customer would receive a survey at most{" "}
              <span className="text-[var(--color-ink)]">
                once every six months
              </span>
              . That left enormous blind spots between surveys, with no way
              for individual business units to tie their initiatives back to
              an observable experience metric.
            </p>
            <p>
              The strategic ask was straightforward but technically hard:
              build a{" "}
              <span className="text-[var(--color-ink)]">
                customer-centric metric
              </span>{" "}
              that could be predicted for the whole base, refreshed
              frequently enough to be useful, and accurate enough that the
              business could actually act on it. Done well, it would give
              every team &mdash; network engineering, retail, marketing,
              service operations &mdash; a way to measure the customer-experience
              impact of their own work.
            </p>
            <p>
              The fixed-broadband segment was chosen as the first
              proving-ground for the model. It&rsquo;s a large, technically
              diverse part of the base (multiple NBN technologies, varied
              network conditions, varied in-home setups) and a domain where
              experience problems show up as both commercial drag and
              operational cost.
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
              I led the development of the fixed-broadband model in close
              collaboration with project leads, business stakeholders, and
              the engineering and analytics teams across Telstra and{" "}
              <span className="text-[var(--color-ink)]">Quantium</span>{" "}
              (Telstra&rsquo;s analytics delivery partner). The work split
              into three threads: framing the modelling problem, building
              the model itself, and getting it into production in a form
              the business could actually use.
            </p>

            <h3 className="text-base font-medium text-[var(--color-ink)] mt-6 mb-2">
              Modelling decisions worth highlighting
            </h3>
            <p>
              The most important design call was{" "}
              <span className="text-[var(--color-ink)]">
                treating the target as a continuous score rather than a hard
                class
              </span>
              . NPS sentiment isn&rsquo;t cleanly binary or multi-class &mdash; a
              given customer&rsquo;s experience sits on a spectrum &mdash; so I
              built an XGBoost regression with the{" "}
              <code className="text-[13px] bg-[var(--color-paper-warm)] px-1 py-0.5 rounded">
                reg:logistic
              </code>{" "}
              objective to produce a probabilistic satisfaction score (0&ndash;1).
              Customers were then classified into Bad / Neutral / Good buckets
              by mapping percentile-based cutoffs back through baseline churn
              rates &mdash; so the thresholds were calibrated against actual
              downstream behaviour, not arbitrary cutoffs. The probabilistic
              output also let stakeholders see a gradient of satisfaction
              rather than just a label, which mattered when teams wanted to
              compare cohorts or measure relative shifts.
            </p>
            <p>
              Predictive features came from across the customer footprint:{" "}
              <span className="text-[var(--color-ink)]">
                network stability statistics
              </span>{" "}
              (the strongest set),{" "}
              <span className="text-[var(--color-ink)]">
                customer-service interaction history
              </span>
              ,{" "}
              <span className="text-[var(--color-ink)]">
                in-home Wi-Fi performance signals
              </span>
              , and customer demographics. We ran{" "}
              <span className="text-[var(--color-ink)]">
                50+ model iterations
              </span>{" "}
              testing different feature sets and data-recency windows
              (multi-year history vs. recent data, and weightings between
              the two).
            </p>
            <p>
              The hardest technical decision was how to handle the
              diversity of NBN technologies (FTTP, FTTB, FTTN, HFC, fixed
              wireless). The intuitive approach was a separate model per
              technology, but that fragments the training data and balloons
              maintenance cost. I designed experiments comparing per-technology
              models against a{" "}
              <span className="text-[var(--color-ink)]">
                single unified model that used technology type as a feature,
                with technology-specific classification thresholds at the
                back end
              </span>
              . The unified approach won on both accuracy and maintainability
              &mdash; one model to monitor, one pipeline to keep healthy, and
              the threshold layer absorbed the technology-specific calibration
              we still needed.
            </p>
            <p>
              Performance was evaluated using AUC (separately for the Bad
              and Good classes) and F1 &mdash; chosen specifically because the
              business cared more about correctly identifying the tails of
              the experience distribution than about overall classification
              accuracy.
            </p>

            <h3 className="text-base font-medium text-[var(--color-ink)] mt-6 mb-2">
              Cross-functional and team leadership
            </h3>
            <p>
              Modelling rigour wasn&rsquo;t the only part of the role. I
              worked with business stakeholders to embed their domain insight
              into feature engineering and model evaluation, facilitated
              problem-solving sessions that aligned technical iterations
              with business needs, and ran the model-review loop with
              Quantium&rsquo;s analytics team &mdash; turning their feedback
              into refinements. I also{" "}
              <span className="text-[var(--color-ink)]">
                mentored junior data scientists
              </span>{" "}
              through the end-to-end modelling pipeline: reviewing code,
              owning data quality, and bringing them up to speed on Telstra
              tooling and the specifics of fixed-broadband network data.
            </p>
          </div>
        </section>

        {/* ============ OUTCOME ============ */}
        <section className="mb-14">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-5">
            Outcome
          </h2>

          <div className="grid sm:grid-cols-3 gap-3 mb-6">
            <Stat value="1% &rarr; 100%" label="Coverage uplift, daily" />
            <Stat value="15+" label="Retail stores using the model" />
            <Stat value="50+" label="Model iterations to ship" />
          </div>

          <div className="space-y-4 text-[var(--color-ink-muted)] leading-relaxed">
            <p>
              The model went into production on schedule, delivering{" "}
              <span className="text-[var(--color-ink)]">
                daily customer-experience classifications for 100% of the
                fixed-broadband base
              </span>{" "}
              &mdash; a step-change from a quarterly survey signal covering
              1%.
            </p>
            <p>
              Downstream it became infrastructure for several different
              parts of the business:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  <span className="text-[var(--color-ink)]">
                    Retail
                  </span>{" "}
                  &mdash; deployed across 15+ stores to help sales and
                  customer-service representatives have better-informed
                  interactions with customers in front of them.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  <span className="text-[var(--color-ink)]">
                    Network engineering
                  </span>{" "}
                  &mdash; used to prioritise investment by identifying which
                  drivers (e.g. in-home Wi-Fi quality, degradable line
                  performance, network speed) were most associated with
                  predicted experience drops.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  <span className="text-[var(--color-ink)]">
                    Every other business unit
                  </span>{" "}
                  &mdash; gained a daily customer-centric metric they could
                  attribute their own initiatives against, instead of waiting
                  on the next survey cycle.
                </span>
              </li>
            </ul>
            <p>
              The model also surfaced{" "}
              <span className="text-[var(--color-ink)]">
                in-home Wi-Fi performance
              </span>{" "}
              as one of the most influential drivers of predicted experience
              &mdash; an insight that materially changed where the network team
              chose to invest attention.
            </p>
          </div>
        </section>

        {/* ============ FOLLOW-ON WORK ============ */}
        <section className="mb-14">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-5">
            Follow-on workstreams
          </h2>
          <div className="space-y-5 text-[var(--color-ink-muted)] leading-relaxed">
            <p>
              Once the broadband model was in production I led two
              extension workstreams with small teams of data scientists and
              analysts.
            </p>

            <div>
              <h3 className="text-base font-medium text-[var(--color-ink)] mb-2">
                Inference enrichment with episode interaction data
              </h3>
              <p>
                Worked with another Telstra business unit to bring an
                enriched customer-interaction dataset into the inference
                pipeline &mdash; covering plan changes, new service
                additions, and assurance requests. Tested correlation
                between the new dataset and CIQ predictions, then built a
                proof-of-concept Random Forest model to quantify the
                accuracy uplift. The result was a{" "}
                <span className="text-[var(--color-ink)]">
                  30% improvement in identifying bad-experience customers
                </span>{" "}
                versus the existing business-rule approach, plus a simpler
                inference pipeline (we retired a chunk of brittle rule
                logic in the process). It also reduced data duplication by
                aligning CIQ&rsquo;s episode-interaction signal with the
                metric the rest of the business was already using.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-[var(--color-ink)] mb-2">
                Price-sensitivity proof of concept
              </h3>
              <p>
                After multiple price-rise events the business wanted a way
                to identify customers most sensitive to pricing changes.
                Led a small team to extract sentiment features from
                free-text NPS verbatims using LLM-based topic modelling
                (evaluated GPT-3.5, LLaMA, and Mistral with few-shot
                prompting against a negative-feedback cohort), then trained
                an XGBoost binary classifier over those features plus
                demographic and product-holding data. The initial model
                achieved an AUC-PR of 60% &mdash; promising as a starting
                point but clearly pointing to the need for external data
                sources to push accuracy higher. The work is being refined
                and moved toward production.
              </p>
            </div>
          </div>
        </section>

        {/* ============ WHAT I LEARNED ============ */}
        <section className="mb-14">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-5">
            What I learned
          </h2>
          <div className="space-y-4 text-[var(--color-ink-muted)] leading-relaxed">
            <p>
              The single biggest lesson was that{" "}
              <span className="text-[var(--color-ink)]">
                a probabilistic score beats a hard class when the underlying
                signal isn&rsquo;t clean
              </span>
              . Treating sentiment as a continuous variable gave us
              flexibility to recalibrate thresholds for different downstream
              uses, surfaced the gradient stakeholders wanted to see, and
              made the model honest about the fact that NPS itself is a
              noisy proxy.
            </p>
            <p>
              The second lesson was about{" "}
              <span className="text-[var(--color-ink)]">
                one good model with the right feature beating many segmented
                models
              </span>
              . The experiment that proved a single unified model with NBN
              technology as a feature outperformed per-technology models
              was counter to most stakeholders&rsquo; intuition. It also
              halved long-term maintenance cost. The pattern generalises: in
              most contexts, fewer well-instrumented models scale better
              than a portfolio of segment-specific ones.
            </p>
            <p>
              The third lesson was a product one &mdash; what made the CIQ
              model genuinely valuable wasn&rsquo;t its accuracy in
              isolation, it was the fact that{" "}
              <span className="text-[var(--color-ink)]">
                every business unit could attribute their own initiatives
                against it
              </span>
              . The model became infrastructure that multiplied the
              effectiveness of work across the company, rather than a
              standalone insight tool. That&rsquo;s the framing I now bring
              to most AI-product work: ask what the rest of the business will
              be able to do <em>because</em> this thing exists, not just
              what the thing itself does.
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
                <Pill>Python</Pill>
                <Pill>XGBoost (reg:logistic)</Pill>
                <Pill>Random Forest</Pill>
                <Pill>Pandas</Pill>
                <Pill>scikit-learn</Pill>
                <Pill>AWS SageMaker</Pill>
                <Pill>LLM topic modelling (GPT-3.5 / LLaMA / Mistral)</Pill>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--color-ink-soft)] mb-3">
                My role
              </p>
              <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
                Lead data scientist on the fixed-broadband model and the
                two follow-on workstreams. Owned modelling decisions,
                production rollout, stakeholder alignment across Telstra
                and Quantium teams, and mentoring of junior data scientists
                through the lifecycle.
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
