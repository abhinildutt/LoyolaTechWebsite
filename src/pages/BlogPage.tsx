import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon,
  ArrowRightIcon,
  SparklesIcon,
  CodeBracketIcon,
  CubeIcon,
  LightBulbIcon,
  BeakerIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

// Blog post type
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

// Categories with icons and colors
const categories = [
  { id: 'all', name: 'All', icon: SparklesIcon, color: '#00D4FF' },
  { id: 'ai', name: 'AI & Machine Learning', icon: BeakerIcon, color: '#A855F7' },
  { id: 'blockchain', name: 'Blockchain Systems', icon: CubeIcon, color: '#06B6D4' },
  { id: 'product', name: 'Product Engineering', icon: CodeBracketIcon, color: '#3B82F6' },
  { id: 'design', name: 'UX / Design', icon: LightBulbIcon, color: '#EC4899' },
  { id: 'company', name: 'Company', icon: UserGroupIcon, color: '#10B981' },
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Blog posts
  const [posts] = useState<BlogPost[]>([
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
  ]);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
                         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* 1. Hero Section - "Insights from the Frontier" */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient mesh */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{ y: heroY }}
          >
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px]" />
            <div className="absolute top-40 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
          </motion.div>

          {/* Geometric grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-6 leading-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">Ideas, Insights,</span>
              <br />
              <span className="text-white">and Engineering Stories</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Deep dives into AI, blockchain, product design, and the craft of building intelligent systems.
            </motion.p>

            {/* Category Filters */}
            <motion.div
              className="flex overflow-x-auto pb-2 hide-scrollbar mb-8 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex space-x-8">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  
                  return (
                    <motion.button
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      onClick={() => setActiveCategory(category.id)}
                      className="relative group flex items-center space-x-2 py-2 whitespace-nowrap"
                    >
                      <Icon 
                        className="w-4 h-4 transition-colors"
                        style={{ color: isActive ? category.color : '#9CA3AF' }}
                      />
                      <span
                        className={`text-sm font-medium transition-colors ${
                          isActive ? '' : 'text-gray-500'
                        }`}
                        style={{ color: isActive ? category.color : undefined }}
                      >
                        {category.name}
                      </span>
                      
                      {/* Animated underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                        style={{ backgroundColor: category.color }}
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scaleX: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Hover effect */}
                      {!isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="relative group">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-violet-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Main Blog Grid - All Posts as Cards */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          {(searchQuery || activeCategory !== 'all') && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-center"
            >
              <p className="text-gray-400">
                Found <span className="text-cyan-400 font-semibold">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'insight' : 'insights'}
                {searchQuery && <span> matching "<span className="text-white">{searchQuery}</span>"</span>}
              </p>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BeakerIcon className="w-16 h-16 text-gray-700 mx-auto mb-4" />
              <h3 className="text-2xl font-light mb-2">No insights found</h3>
              <p className="text-xl text-gray-500 mb-6">
                {searchQuery 
                  ? `No results matching "${searchQuery}"`
                  : 'No posts in this category yet'
                }
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
              >
                Clear filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* 4. Footer CTA - "Stay In the Loop" */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-950" />
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'linear-gradient(45deg, #00D4FF 0%, #7B3FE4 50%, #06B6D4 100%)',
              backgroundSize: '200% 200%',
              filter: 'blur(100px)',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              <span className="text-gradient">Stay In the Loop</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join 2,000+ builders learning what's next.
            </p>

            {/* Email signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold"
                style={{ boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)' }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Blog Card Component - Similar to Featured Article Style
interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const category = categories.find(c => c.id === post.category);
  const Icon = category?.icon || SparklesIcon;

  return (
    <Link to={`/blog/${post.id}`}>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: index * 0.1, duration: 0.8 }}
        className="relative group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-3xl glass border border-white/10 hover:border-cyan-500/30 transition-all duration-500 h-full">
          {/* Background with gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${category?.color}10, ${category?.color}05)`,
            }}
          />
          
          {/* Animated glow on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at center, ${category?.color}15, transparent 70%)`,
            }}
          />

          <div className="relative p-8 md:p-12">
            {/* Featured badge (if featured) */}
            {post.featured && (
              <motion.div
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <SparklesIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold">Featured Article</span>
              </motion.div>
            )}

            {/* Category badge (if not featured) */}
            {!post.featured && (
              <div className="mb-6">
                <span 
                  className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-sm font-semibold"
                  style={{ 
                    backgroundColor: `${category?.color}10`,
                    borderColor: `${category?.color}30`,
                    color: category?.color,
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category?.name}</span>
                </span>
              </div>
            )}

            {/* Title */}
            <motion.h2 
              className="text-3xl md:text-4xl font-light mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {post.title}
            </motion.h2>

            {/* Excerpt */}
            <motion.p
              className="text-lg text-gray-400 mb-8 leading-relaxed line-clamp-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {post.excerpt}
            </motion.p>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-500">
              <span 
                className="px-3 py-1 rounded-full border"
                style={{ 
                  backgroundColor: `${category?.color}10`,
                  borderColor: `${category?.color}30`,
                  color: category?.color,
                }}
              >
                {category?.name}
              </span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              {post.author && (
                <>
                  <span>•</span>
                  <span>by {post.author}</span>
                </>
              )}
            </div>

            {/* CTA */}
            <motion.div
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold group/btn"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Read Insight</span>
              <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default BlogPage;

