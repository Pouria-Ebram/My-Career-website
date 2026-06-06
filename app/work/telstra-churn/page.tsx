/*
  Case study: Telstra post-assurance NBN churn model
  --------------------------------------------------
  Route: /work/telstra-churn

  Public-figures policy: multiples and percentages, no dollar figures.
  Specific Telstra base/volume numbers softened to qualitative framing.
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

// Compact insight card for the "What the model surfaced" section.
function Insight({
  multiplier,
  title,
  body,
}: {
  multiplier: string;
  title: string;
  body: string;
}) {
  return (
    <div className="border border-black/5 rounded-xl p-5 bg-[var(--color-paper)]">
      <p
        className="heading-serif text-2xl text-[var(--color-coral)] mb-1"
        dangerouslySetInnerHTML={{ __html: multiplier }}
      />
      <h3 className="text-sm font-medium text-[var(--color-ink)] mb-1.5">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
        {body}
      </p>
    </div>
  );
}

export default function TelstraChurn() {
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
          Telstra &middot; Post-assurance NBN churn model
        </p>

        {/* H1 */}
        <h1 className="heading-serif text-3xl md:text-5xl text-[var(--color-ink)] mb-6 leading-tight">
          Predicting post-assurance NBN churn &mdash; fast enough to act on
          it.
        </h1>

        {/* TLDR */}
        <div className="border border-black/5 rounded-xl bg-[var(--color-paper-warm)]/60 p-5 md:p-6 mb-12">
          <p className="text-xs uppercase tracking-wider text-[var(--color-ink-soft)] mb-2">
            TL;DR
          </p>
          <div className="space-y-4 text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed">
            <p>
              When a Telstra NBN customer has a fault, the window to retain
              them is narrow.{" "}
              <span className="text-[var(--color-ink)]">
                10% of post-assurance churn happens within 3 days
              </span>{" "}
              of the ticket; half within 36 days. A weekly campaign cycle
              loses most of them.
            </p>
            <p>
              I led the development of a daily-refreshed XGBoost propensity
              model that scores every consumer NBN customer who&rsquo;s had a
              fault in the past 60 days. In production, it captures{" "}
              <span className="text-[var(--color-ink)]">
                up to 5&times; more high-risk churners in the top decile than
                random
              </span>{" "}
              &mdash; and is used by marketing for retention, by assurance
              teams as a risk signal during issue resolution, and by the
              fixed-broadband business for pattern-level insight.
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
              Across Telstra&rsquo;s consumer NBN base the natural churn
              rate sits in the{" "}
              <span className="text-[var(--color-ink)]">
                low single digits over a six-month window
              </span>{" "}
              &mdash; meaningful in aggregate, scattered in distribution.
              The most concentrated risk inside that base, by a long way,
              is customers who&rsquo;ve recently had an assurance episode.
              A fault is one of the cleanest signals of dissatisfaction the
              business gets.
            </p>
            <p>
              What makes the post-assurance segment hard to manage isn&rsquo;t
              just identifying who&rsquo;s at risk &mdash; it&rsquo;s the
              speed at which they leave.{" "}
              <span className="text-[var(--color-ink)]">
                10% of post-assurance churn happens within 3 days of the
                ticket
              </span>
              . A quarter happens within 12 days. Half within 36. By the
              time a typical weekly retention campaign reaches a customer,
              the largest part of the risk pool has already gone.
            </p>
            <p>
              The strategic ask was twofold: build a churn-propensity model
              specifically for the post-assurance cohort, and operate it
              fast enough that downstream teams could actually catch the
              customer before they left. The cohort framing matters &mdash;
              this isn&rsquo;t a generic churn model. It&rsquo;s a model
              for the moment when churn risk is most concentrated and most
              time-sensitive.
            </p>
          </div>
        </section>

        {/* ============ APPROACH ============ */}
        <section className="mb-14">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-5">
            Approach
          </h2>
          <div className="space-y-4 text-[var(--color-ink-muted)] leading-relaxed">
            <h3 className="text-base font-medium text-[var(--color-ink)] mt-2 mb-2">
              Scoping the target
            </h3>
            <p>
              The first call was{" "}
              <span className="text-[var(--color-ink)]">
                who we were modelling
              </span>
              . Two questions: which churners are we training on, and which
              customers should we score in production?
            </p>
            <p>
              For training we used churn events where a fault had been
              raised within 90 days of the customer leaving &mdash; tickets
              sourced across Salesforce, Siebel, SIIAM, Platinum, and case
              notes &mdash; on the assumption that fault-adjacent churn
              carries the structural signal we want to learn. Importantly,
              we counted{" "}
              <span className="text-[var(--color-ink)]">any fault</span>,
              not only one related to the service that ended up being
              churned. The negative experience travels with the customer.
            </p>
            <p>
              For scoring in production we cast the net wider: every
              consumer NBN customer who&rsquo;s had a fault in the past 60
              days gets a propensity score, refreshed daily. The 60-day
              window was set deliberately wider than the strongest signal
              concentration (the first 30 days) so we caught slower-burn
              churn intent that builds gradually.
            </p>

            <h3 className="text-base font-medium text-[var(--color-ink)] mt-6 mb-2">
              Data and features
            </h3>
            <p>
              The model integrated signal across the customer&rsquo;s
              entire footprint, not just their assurance ticket.{" "}
              <span className="text-[var(--color-ink)]">
                Fault and capture data
              </span>{" "}
              (incident counts, proactive vs reported vs SmartHelp,
              workable vs unworkable, team touches, symptom, tests
              passed/failed, average and max handling time, truck rolls);{" "}
              <span className="text-[var(--color-ink)]">
                network telemetry
              </span>{" "}
              (T-AAA session-level dropouts, LTE failover quality, MOS
              voice quality, unplanned outages);{" "}
              <span className="text-[var(--color-ink)]">
                service characteristics
              </span>{" "}
              (MAS, NBN tech type, limited-by-tech / limited-by-plan
              flags); and{" "}
              <span className="text-[var(--color-ink)]">
                customer attributes
              </span>{" "}
              (tenure, demographics, data usage, discounts, multi-service
              holdings). A separately engineered NBN Service Health view
              compressed the network signal into model-ready features.
            </p>

            <h3 className="text-base font-medium text-[var(--color-ink)] mt-6 mb-2">
              Sampling and training
            </h3>
            <p>
              Across the full population the post-assurance churn rate was
              low enough that naive training would have produced a model
              biased toward the majority class. We undersampled the
              non-churn cohort to bring the churn rate up to{" "}
              <span className="text-[var(--color-ink)]">~10%</span> for
              training, then applied a{" "}
              <span className="text-[var(--color-ink)]">prior adjustment</span>{" "}
              at inference time to remap propensity scores back to the
              true population base rate. Customers who had multiple
              services and churned only one during the period were
              excluded from the non-churn cohort to avoid contaminating
              the negative class.
            </p>
            <p>
              Testing was done both in-time (25% holdout) and{" "}
              <span className="text-[var(--color-ink)]">out-of-time</span>{" "}
              against a more recent month, with the OOT sample matched
              back to the training churn rate to keep evaluation
              comparable.
            </p>

            <h3 className="text-base font-medium text-[var(--color-ink)] mt-6 mb-2">
              Model and the recall&ndash;precision call
            </h3>
            <p>
              The model is an XGBoost classifier. Across{" "}
              <span className="text-[var(--color-ink)]">10+ iterations</span>{" "}
              we did feature selection (
              <span className="text-[var(--color-ink)]">
                200 candidate features narrowed to 85
              </span>
              ), hyperparameter tuning, and stability analysis across
              time windows.
            </p>
            <p>
              The harder decision was the{" "}
              <span className="text-[var(--color-ink)]">
                recall vs precision trade-off
              </span>
              . The cost of a false negative here (missing a real churner)
              is materially higher than the cost of a false positive
              (calling someone we didn&rsquo;t need to). We deliberately
              tuned for{" "}
              <span className="text-[var(--color-ink)]">recall</span> using{" "}
              <code className="text-[13px] bg-[var(--color-paper-warm)] px-1 py-0.5 rounded">
                scale_pos_weight
              </code>
              , accepting more false positives in the top decile in
              exchange for a better true-positive rate. We also evaluated
              ensembling the recall-tuned model with a precision-tuned
              variant for a more balanced score where downstream actions
              had higher cost.
            </p>

            <h3 className="text-base font-medium text-[var(--color-ink)] mt-6 mb-2">
              Top features &mdash; what carried the signal
            </h3>
            <p>
              The strongest features clustered into four families:{" "}
              <span className="text-[var(--color-ink)]">
                fault recency and frequency
              </span>{" "}
              (
              <code className="text-[12px] bg-[var(--color-paper-warm)] px-1 py-0.5 rounded">
                days_since_last_fault
              </code>
              ,{" "}
              <code className="text-[12px] bg-[var(--color-paper-warm)] px-1 py-0.5 rounded">
                num_faults_90d
              </code>
              ),{" "}
              <span className="text-[var(--color-ink)]">
                network performance flags
              </span>{" "}
              (
              <code className="text-[12px] bg-[var(--color-paper-warm)] px-1 py-0.5 rounded">
                upload_bad_experience
              </code>
              ,{" "}
              <code className="text-[12px] bg-[var(--color-paper-warm)] px-1 py-0.5 rounded">
                download_bad_experience
              </code>
              ),{" "}
              <span className="text-[var(--color-ink)]">tenure</span>{" "}
              (both customer-level and service-level), and{" "}
              <span className="text-[var(--color-ink)]">
                fault-handling quality
              </span>{" "}
              (capture cases without resolution, important diagnostics
              failed, average resolution hours). The mix reads as you&rsquo;d
              hope: the model is genuinely learning that the customer is
              unhappy with the service AND with how the business handled
              the problem.
            </p>
          </div>
        </section>

        {/* ============ OUTCOME ============ */}
        <section className="mb-14">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-5">
            Outcome
          </h2>

          <div className="grid sm:grid-cols-3 gap-3 mb-6">
            <Stat value="5&times;" label="Lift over random in top decile" />
            <Stat value="Daily" label="Production score refresh" />
            <Stat value="200 &rarr; 85" label="Features after selection" />
          </div>

          <div className="space-y-4 text-[var(--color-ink-muted)] leading-relaxed">
            <p>
              The model went into production with daily refresh in
              Telstra&rsquo;s customer inference pipeline. Top-decile lift
              of <span className="text-[var(--color-ink)]">5&times;</span>{" "}
              over random meant the highest-scored customers were materially
              more likely to be churners &mdash; concentrated enough that
              downstream teams could prioritise small lists effectively
              instead of trying to act on the whole eligible base.
            </p>
            <p>
              In production the model was picked up by three different
              parts of the business, each using it for a different thing:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  <span className="text-[var(--color-ink)]">
                    Marketing
                  </span>{" "}
                  &mdash; targeted retention campaigns at the customers most
                  likely to leave, with reach calibrated to where the model
                  was concentrating risk.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  <span className="text-[var(--color-ink)]">
                    Assurance teams
                  </span>{" "}
                  &mdash; used the score as a risk signal overlaid on
                  engineering and assurance reports during fault
                  resolution, so the team handling a ticket could see
                  whether they were holding a high-risk customer in their
                  queue.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-coral)] mt-1.5">&bull;</span>
                <span>
                  <span className="text-[var(--color-ink)]">
                    Fixed-broadband business teams
                  </span>{" "}
                  &mdash; consumed the pattern-level insights the model
                  surfaced (below) to shape product, plan, and
                  service-recovery decisions.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ============ INSIGHTS ============ */}
        <section className="mb-14">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-2">
            What the model surfaced
          </h2>
          <p className="text-sm text-[var(--color-ink-soft)] mb-6">
            Some of the most actionable outputs weren&rsquo;t the
            predictions themselves &mdash; they were the pattern-level
            insights handed back to assurance, product, and onboarding
            teams.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Insight
              multiplier="3&times;"
              title="The unheard customer"
              body="Customers who reported a fault but where the diagnostics showed no test failures churned at nearly 3× the base rate. The 'I told you something was wrong and you didn't fix it' cohort."
            />
            <Insight
              multiplier="4&times;"
              title="New customers, early faults"
              body="Customers in their first year with Telstra, hit by a fault, were 4× more likely to churn. Services under three months old: 3× more likely. Early-life faults shape the relationship."
            />
            <Insight
              multiplier="70%"
              title="Open cases without resolution"
              body="Customers with capture cases marked unresolved at 90 days were 70% more likely to churn — a direct lever for assurance ops teams to prioritise."
            />
            <Insight
              multiplier="2&ndash;3&times;"
              title="Speed they were promised vs got"
              body="Services running on plans faster than their line could actually deliver (speed > MAS) churned 2–3× more often. A direct signal to product/plan teams."
            />
          </div>
        </section>

        {/* ============ WHAT I LEARNED ============ */}
        <section className="mb-14">
          <h2 className="heading-serif text-2xl md:text-3xl text-[var(--color-ink)] mb-5">
            What I learned
          </h2>
          <div className="space-y-4 text-[var(--color-ink-muted)] leading-relaxed">
            <p>
              The single most important lesson was that{" "}
              <span className="text-[var(--color-ink)]">
                the window of action shapes the modelling problem
              </span>
              . The temporal analysis &mdash; 10% of churn happening within
              3 days of a fault &mdash; wasn&rsquo;t background context.
              It was the spec. A monthly-refreshed model would have looked
              good on paper and been operationally useless. A daily refresh
              wasn&rsquo;t a stretch goal; it was the minimum cadence at
              which the prediction was worth producing.
            </p>
            <p>
              The second lesson was about{" "}
              <span className="text-[var(--color-ink)]">
                recall over precision when the action is cheap
              </span>
              . Most ML teams reach for balanced metrics by default;
              this project taught me to ask &ldquo;what does the
              downstream action cost?&rdquo; first. A retention call is
              cheap; missing a real churner who took their NBN to a
              competitor is expensive. Once you ask the question
              that way the recall-precision trade-off becomes
              an obvious product decision rather than a technical one.
            </p>
            <p>
              The third lesson was that{" "}
              <span className="text-[var(--color-ink)]">
                feature insights can be the deliverable
              </span>
              . The pattern-level findings &mdash; the unheard-customer
              cohort, the early-life-fault effect, the speed-vs-MAS
              mismatch &mdash; were arguably as valuable to the business
              as the propensity scores themselves. They gave product,
              assurance, and onboarding teams concrete things to change.
              I now look for those structural insights deliberately on
              every modelling project, not as a happy byproduct.
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
                <Pill>XGBoost</Pill>
                <Pill>Pandas / scikit-learn</Pill>
                <Pill>AWS SageMaker</Pill>
                <Pill>Daily batch scoring pipeline</Pill>
                <Pill>Telstra customer inference platform</Pill>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--color-ink-soft)] mb-3">
                My role
              </p>
              <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
                Lead data scientist on the post-assurance churn model.
                Owned cohort scoping, feature engineering, model design and
                evaluation, the recall-precision call, production rollout,
                and the insight readouts to marketing, assurance, and
                fixed-broadband business teams.
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
