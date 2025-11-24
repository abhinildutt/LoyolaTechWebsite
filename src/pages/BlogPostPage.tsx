import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { 
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  ShareIcon,
  BeakerIcon,
  CodeBracketIcon,
  CubeIcon,
  LightBulbIcon,
  UserGroupIcon,
  SparklesIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

// Blog post data (should match BlogPage)
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  thumbnail: string;
  featured?: boolean;
  author?: string;
  content?: string;
}

const categories = [
  { id: 'all', name: 'All', icon: SparklesIcon, color: '#00D4FF' },
  { id: 'ai', name: 'AI & Machine Learning', icon: BeakerIcon, color: '#A855F7' },
  { id: 'blockchain', name: 'Blockchain Systems', icon: CubeIcon, color: '#06B6D4' },
  { id: 'product', name: 'Product Engineering', icon: CodeBracketIcon, color: '#3B82F6' },
  { id: 'design', name: 'UX / Design', icon: LightBulbIcon, color: '#EC4899' },
  { id: 'company', name: 'Company', icon: UserGroupIcon, color: '#10B981' },
];

// Blog posts data
const posts: BlogPost[] = [
  {
    id: 'dustquell',
    title: 'DustQuell: A Smarter Way to Tackle Urban Air Contamination',
    excerpt: 'DustQuell steps into this gap as a next-generation, AI-driven particulate suppression platform designed to help municipalities, industrial clusters, and construction corridors manage airborne particles with precision and measurable impact.',
    category: 'ai',
    date: '2024-11-18',
    readTime: '6 min read',
    thumbnail: 'gradient-ai',
    featured: true,
    author: 'Loyola Tech Team',
    content: `Across many cities, rising particulate levels are no longer a seasonal inconvenience. They have become a continuous operational challenge, straining public health systems, depressing productivity, and forcing reactive measures instead of structured, data-led interventions. DustQuell steps into this gap as a next-generation, AI-driven particulate suppression platform designed to help municipalities, industrial clusters, and construction corridors manage airborne particles with precision and measurable impact.

DustQuell integrates smart mist systems, micro-sensors, and predictive algorithms to suppress PM2.5 and PM10 in real time. Traditional water spraying approaches operate on fixed schedules, consume excessive resources, and rarely align with the actual contaminant load in the atmosphere. DustQuell moves away from that model. It monitors particulate concentration continuously, identifies upward trends, and triggers targeted mist deployment exactly when required. This not only reduces airborne particles faster but also cuts water and energy usage. The result is a lean operational footprint and a more strategic approach to environmental management.

A core advantage is DustQuell's node-based architecture. Each location, whether a traffic junction, construction site, or industrial gate, hosts a compact module equipped with sensors and a mist unit. These nodes function independently and as part of a wider network. They collect ambient data and share it with a central AI engine, enabling rapid pattern recognition across zones. When one area shows early signs of a spike, neighboring units can respond proactively, creating a coordinated air-quality shield around critical hotspots.

This distributed approach delivers two benefits. First, it drives localised impact by cutting particulate load at the source. Second, it enables city planners and operators to visualise air-quality dynamics across zones with much higher clarity. That intelligence unlocks more strategic decision-making, such as limiting heavy-vehicle flow at certain periods, adjusting construction activity windows, or deploying resources to priority corridors.

DustQuell also supports compliance automation. Construction and industrial sites frequently struggle to maintain consistent dust-control routines. With onboard sensors and AI-based anomaly detection, DustQuell logs particulate breaches, correlates them with operational activity, and notifies stakeholders instantly. This reduces manual inspection overheads and supports transparent reporting, which is valuable for regulators and enterprises aiming to demonstrate responsible environmental operations.

On the technology front, DustQuell uses water droplets as the core mechanism for particulate capture. The droplets bind with fine particles, increase their mass, and cause them to settle quickly. This simple principle becomes significantly more effective when controlled through AI, as the system deploys mist only when particle concentration, wind movement, humidity, and micro-climate indicators align. The platform continually learns from historical patterns, enabling more accurate triggers over time.

For governments, DustQuell provides a scalable, budget-conscious pathway to address an urgent need. For enterprises, it reduces operational risk, strengthens ESG positioning, and helps create safer working zones. For communities, it enables cleaner surroundings without waiting for long-cycle infrastructure programmes.

DustQuell is not designed as a single solution to all forms of air contamination. It is engineered to manage high-dust environments, fast-changing hotspots, and peak-load scenarios with efficiency. In that niche, it offers a practical, technology-backed route to meaningful improvement.

As cities and industries look for solutions that deliver impact without heavy capital investment, DustQuell stands out as a platform built for rapid deployment, measurable outcomes, and long-term resilience.`
  },
  {
    id: 'ceo-guide-ai-agents-n8n',
    title: "The CEO's Guide to Deploying AI Agents with n8n Without Breaking Your Organisation",
    excerpt: 'AI agents are fast becoming the next layer of workforce capability. Platforms such as n8n now make it possible to design these agents without heavy engineering effort, allowing organisations to scale automation at speed.',
    category: 'product',
    date: '2025-05-12',
    readTime: '12 min read',
    thumbnail: 'gradient-product',
    featured: false,
    author: 'Loyola Tech Team',
      content: `AI agents are fast becoming the next layer of workforce capability. They handle customer interactions, manage repetitive tasks, connect systems, and orchestrate workflows with a level of consistency that traditional operations cannot match. Platforms such as n8n now make it possible to design these agents without heavy engineering effort, allowing organisations to scale automation at speed.

The opportunity is attractive, but the operational risks are real. When agents are deployed without the right strategic frame, they create fragmentation, confuse teams, and generate governance gaps that surface only after issues occur. The CEO's role is not to build the agents, but to integrate them in a way that strengthens the organisation rather than destabilising it.

The following guidance outlines how to make that happen, written for leaders who want impact without disruption.

a) Start with a clear mandate

Most deployments fail at the definition stage. Teams often experiment without clarity on what the agent is meant to deliver. For adoption to succeed, senior leadership must set explicit job roles.

Examples of strong mandates include:

• Reduce response time for inbound service queries to under thirty seconds

• Automate the reconciliation of finance logs with zero manual checks

• Pre-screen low complexity tickets before reaching human teams

• Produce daily operational summaries across CRM and ERP systems

Clear boundaries give everyone the same picture of value.

b) Build a controlled sandbox before going live

n8n is powerful, and that power can easily spill into production environments if controls are weak. A sandbox avoids accidental updates to the CRM, unexpected customer emails, or unapproved database changes.

A reliable sandbox gives teams the freedom to break things, explore scenarios, and observe agent behaviour safely. In regulated sectors, this becomes a governance requirement rather than an optional discipline.

c) Roll out agents in thin slices

Large-scale automation introduced in one sweep is guaranteed to create disruption. A thin-slice approach keeps the organisation stable.

A thin slice covers one process, one team, a limited set of scenarios, and a review cycle of a few weeks. Once value is confirmed, expand the scope. This keeps confidence high, gives teams time to adjust, and prevents departments from being overwhelmed.

A practical example is an agent that drafts first-response emails. At first, humans review and approve the outputs. When accuracy improves, the agent becomes fully autonomous for a narrow set of cases.

d) Engineer robust guardrails

The greatest operational risk comes not from the model failing, but from the agent taking unexpected liberties. Guardrails give structure.

Examples include:

• Rules that limit how much an agent can refund or credit

• Access controls on sensitive APIs

• Version locks on workflows

• Step-by-step human checkpoints where required

• Automated logging of all actions

• Rate limits to prevent system overload

A retail company once allowed an agent to adjust shipping charges. It discovered later that the agent increased customer sentiment by giving discounts more often than intended. A small design oversight became a revenue leak. This is exactly what guardrails prevent.

e) Blend agents with human teams

Resistance is a predictable challenge. People worry automation will replace them. A successful rollout treats agents as collaborators.

Strong adoption happens when teams are involved in designing edge cases, reviewing early outputs, offering feedback, and governing long-term behaviour. When humans remain central to judgement, the organisation becomes more confident and the agent performs better.

f) Start with high-frequency and high-variance processes

AI agents perform best where there is volume, repetition, and natural variability. This lets them learn meaningful patterns without the constraints of rigid legacy flows.

Common starting points include:

• Customer service triage

• Lead and case qualification

• Data extraction for KYC

• Billing queries

• Cleaning and routing operational data

• Producing summaries or daily briefs

These cases deliver the quickest impact with minimal disruption.

g) Create a central control tower for monitoring

Once agents operate independently, oversight must scale. A control tower provides real-time visibility and governance.

A strong control tower includes:

• Logs of every agent action

• Alerts when behaviour shifts

• KPI dashboards for accuracy and performance

• Version histories

• Access controls

• Rollback functions for safety

For example, if an agent suddenly starts labelling tickets differently or responding in a tone not approved, managers can intervene early before the behaviour spreads across operations.

h) Measure productivity, not just output

High output does not always mean better performance. CEOs should focus on meaningful improvements, such as reduced handling time, fewer manual tasks, higher customer satisfaction, lower error rates, and improved process stability. These reveal whether the agent is genuinely contributing to operational health.

i) Watch for ethical and behavioural drift

As agents adapt, subtle behavioural changes can appear. This drift can remain unnoticed until customers complain or a regulatory team raises concerns. Regular drift audits, tone checks, and policy alignment reviews are necessary.

When n8n workflows combine with generative models, behaviour can shift in small increments over time. Monitoring prevents minor drift from becoming a reputational issue.

j) Treat agent deployment as a long-term capability

Organisations that succeed treat automation as a core capability. This requires ownership, a centre of excellence, training pathways, governance frameworks, and forward planning. Teams then build confidence, share patterns, and scale responsibly.

A project mindset leads to one-off wins followed by stagnation. A capability mindset creates continuous momentum.

Final Takeaway

n8n-powered AI agents can transform operational performance. They can reduce cost, shorten cycle time, stabilise processes, and create consistent customer outcomes. The advantage is real, but only when deployed with precision, clear mandates, strong human alignment, and disciplined governance.`
  },
  {
    id: 'explainability-to-accountability',
    title: 'From Explainability to Accountability: What Enterprises Still Get Wrong About Responsible AI',
    excerpt: 'Enterprises continue to invest heavily in AI, yet many still confuse "explainability" with "accountability." The two are not the same. Explainability is a technical property. Accountability is an organisational commitment.',
    category: 'ai',
    date: '2024-12-01',
    readTime: '14 min read',
    thumbnail: 'gradient-ai',
    featured: false,
    author: 'Loyola Tech Team',
    content: `Enterprises continue to invest heavily in AI, yet many still confuse "explainability" with "accountability." The two are not the same. Explainability is a technical property. Accountability is an organisational commitment. One describes how a model works. The other determines who carries the consequences when the model's decisions go wrong.

The gap between these two ideas is widening as AI systems take on judgment-driven tasks across finance, healthcare, retail, and public services. Enterprises often feel reassured when a model has a dashboard, a feature-importance chart, or a transparency note. Yet none of these protect the organisation when an AI system causes a harmful outcome or deviates from expected behaviour.

This piece outlines where organisations still fall short and what leaders must shift if they want genuine responsibility rather than surface-level compliance.

a) Explainability has become a checklist, not a safeguard

Most enterprises approach explainability as documentation. They generate charts, summaries, or SHAP diagrams and file them under governance. The material might look complete, but it does not meaningfully change how decisions are monitored or escalated.

A simple example makes this clear. A risk-scoring model used by a lending team produces an explanation showing "income stability" and "credit balance" as primary drivers. The explanation is technically correct. Yet the model is trained on data where customers from certain regions historically defaulted due to external factors such as local job market downturns. The model internalises this pattern. The explanation does not highlight the geographic influence. Leadership believes the model is transparent, but a systemic bias goes unchallenged.

Explainability often reveals "how the model thinks" without showing "what the organisation must do with that insight." 

b) Accountability is unclear because responsibility is diffused

When an AI-driven decision harms a consumer or triggers a compliance issue, who owns the outcome?

Enterprises often struggle to answer because responsibility is distributed across:

• data teams

• product teams

• model developers

• operations

• procurement

• domain experts

• compliance

• vendors

In many cases, no single senior leader signs off on the risk exposure created by the AI system. Without a clear owner, accountability becomes an afterthought.

True ownership requires one senior role with the authority to pause, adjust, or retire an AI system when behaviour shifts. Many companies avoid naming such an owner because the responsibility appears politically inconvenient. The result is an accountability vacuum.

c) Many organisations treat governance as guardrails, not obligations

Governance frameworks are often designed to "catch issues" rather than to "design responsibility." This is why many models pass governance reviews but still behave unpredictably in real-world settings.

For example, a healthcare triage model may comply with clinical documentation standards during testing. Once deployed, it starts prioritising particular patient groups based on historical patterns. The model still explains its reasoning accurately, yet the behaviour shifts in ways that clinicians never intended. Governance checked documentation, but not ongoing alignment with clinical priorities.

This happens repeatedly across industries because governance focuses on approval, not continuous responsibility. 

d) Accountability requires more than technical transparency

Transparency alone does not protect an organisation. Actionable accountability depends on four elements that enterprises often neglect.

Clear ownership

One leader must be fully responsible for outcomes, including escalation, communication, and model adjustments.

Behavioural monitoring

Models evolve, especially those powered by foundation models. Enterprises often lack long-term monitoring that tracks tone, decisions, and emergent behaviour. Explainability is static. Behaviour is dynamic.

Cross-functional review

Accountability cannot sit with technical teams alone. Legal, ethics, frontline teams, customer operations, and risk committees must participate in review cycles.

Intervention powers

If a model's outcomes diverge from organisational intent, the accountable owner must be empowered to pause or retire it. This is the step most organisations are hesitant to formalise. 

e) Documentation does not equal responsibility

Many enterprises assume that responsible AI is simply a documentation effort. Policies, principles, transparency reports, fairness statements, and audit files are created and stored. Yet documentation has no impact unless teams actively use it to guide decisions.

A practical example:

A retail company deploys an AI agent in customer service to propose compensation amounts for delayed orders. The transparency documentation states that the model must not exceed set monetary limits. Six months later, due to a workflow change, the model bypasses the rule and begins issuing higher credits. The documentation still exists. The system has drifted. No one notices until finance reviews quarterly losses.

Documentation without active enforcement is simply administrative comfort. 

f) Vendor reliance creates blind spots

Most enterprises rely on external AI models or third-party platforms. Vendors often provide high-level transparency without exposing internal model behaviour.

This leads to several gaps:

• incomplete visibility of training data

• unclear responsibility for errors

• limited insight into model drift

• uncertainty around how the vendor handles sensitive cases

Leaders often assume that purchasing a "responsible AI-compliant" solution transfers accountability to the vendor. It does not. Regulators will always hold the deploying organisation responsible for the decision. 

g) Moving from explainability to accountability requires cultural change

Technical changes alone are not enough. Organisational culture influences responsible AI more than dashboards or documentation. The shift involves three key commitments.

Commitment to escalation

Teams must feel safe bringing forward concerns, even when the model is performing well statistically.

Commitment to context

Accountability means evaluating decisions beyond accuracy. It includes customer fairness, operational stability, and reputational risk.

Commitment to intervention

Enterprises must normalise pausing a model when behaviour feels uncertain. This culture is rare but essential. 

h) The path forward: practical steps for real accountability

Enterprises that want genuine responsibility should prioritise the following.

a) Name a single model owner with decision rights

This resolves the accountability vacuum instantly.

b) Build behavioural monitoring into every deployment

Track decisions, tone, and drift, not only predictive accuracy.

c) Align governance to outcomes, not paperwork

Shift from documentation-heavy reviews to scenario-based audits.

d) Introduce regular challenge sessions

Invite cross-functional teams to question assumptions and identify hidden consequences.

e) Establish a retire-or-restrict protocol

If the model behaves unpredictably, there must be a structured pause path. 

Explainability is valuable, but it is not enough. Enterprises that rely only on transparency tools are creating a false sense of safety. Responsible AI demands organisational commitment, clear ownership, and continuous oversight. Without these, explainability becomes a cosmetic layer on top of systems that can drift, misjudge, or cause unintended harm.`
  },
];

const BlogPostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end start"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Find the post
  const post = posts.find(p => p.id === postId);

  // Share functionality
  const handleShare = async () => {
    const url = window.location.href;
    const title = post?.title || 'Loyola Tech Blog';
    const text = post?.excerpt || 'Check out this insight from Loyola Tech';

    // Try native share first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (err) {
        // User cancelled or error occurred
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-cyan-400 hover:text-cyan-300">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find(c => c.id === post.category);
  const Icon = category?.icon || SparklesIcon;

  // Split content into paragraphs
  const paragraphs = post.content?.split('\n\n') || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" ref={contentRef}>
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px]"
              style={{ backgroundColor: category?.color }}
            />
            <div 
              className="absolute top-40 right-1/4 w-96 h-96 rounded-full blur-[120px]"
              style={{ backgroundColor: category?.color, opacity: 0.5 }}
            />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="post-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#post-grid)" />
            </svg>
          </div>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          style={{ opacity: headerOpacity, y: headerY }}
        >
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/blog"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors group"
            >
              <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Insights</span>
            </Link>
          </motion.div>

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-2 mb-6"
          >
            <div 
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border"
              style={{ 
                backgroundColor: `${category?.color}10`,
                borderColor: `${category?.color}30`,
                color: category?.color,
              }}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-semibold">{category?.name}</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 text-gray-400 mb-8"
          >
            {post.author && (
              <div className="flex items-center space-x-2">
                <UserIcon className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <motion.button
              onClick={handleShare}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-auto flex items-center space-x-2 px-4 py-2 rounded-xl glass hover:bg-white/10 transition-colors"
            >
              {copied ? (
                <>
                  <CheckIcon className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <ShareIcon className="w-4 h-4" />
                  <span>Share</span>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 leading-relaxed font-light italic border-l-2 pl-6 mb-8"
            style={{ borderColor: category?.color }}
          >
            {post.excerpt}
          </motion.p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="relative py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="glass rounded-3xl p-8 md:p-12 border border-white/10">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.05 }}
                  className="text-gray-300 leading-relaxed mb-6 text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.article>

          {/* Share and CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass rounded-2xl p-8 border border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-light mb-2">Enjoyed this insight?</h3>
                <p className="text-gray-400">Share it with your network or explore more articles.</p>
              </div>
              <div className="flex gap-4">
                <motion.button
                  onClick={handleShare}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl glass hover:bg-white/10 transition-colors border border-white/10"
                  title={copied ? "Link copied!" : "Share this article"}
                >
                  {copied ? (
                    <CheckIcon className="w-5 h-5 text-green-400" />
                  ) : (
                    <ShareIcon className="w-5 h-5" />
                  )}
                </motion.button>
                <Link to="/blog">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl font-semibold"
                    style={{
                      background: `linear-gradient(135deg, ${category?.color}, ${category?.color}CC)`,
                      boxShadow: `0 10px 30px ${category?.color}40`,
                    }}
                  >
                    More Insights
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts - Optional for future */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light mb-8 text-center">
            <span className="text-gradient">Continue Reading</span>
          </h2>
          <div className="text-center text-gray-500">
            <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Browse all insights →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;

