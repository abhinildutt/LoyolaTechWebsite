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

