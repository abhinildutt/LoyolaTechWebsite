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
  ]);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
                         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Show featured post only if it matches current filters
  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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

      {/* 2. Featured Article Banner */}
      {featuredPost && (
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl glass border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
                {/* Background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-violet-500/10" />
                
                {/* Animated glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.15), transparent 70%)',
                  }}
                />

                <div className="relative p-12 md:p-16">
                  {/* Featured badge */}
                  <motion.div
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <SparklesIcon className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-semibold">Featured Article</span>
                  </motion.div>

                  {/* Content */}
                  <motion.h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {featuredPost.title}
                  </motion.h2>

                  <motion.p
                    className="text-xl text-gray-400 max-w-4xl mb-8 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {featuredPost.excerpt}
                  </motion.p>

                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-500">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {categories.find(c => c.id === featuredPost.category)?.name}
                    </span>
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                    {featuredPost.author && (
                      <>
                        <span>•</span>
                        <span>by {featuredPost.author}</span>
                      </>
                    )}
                  </div>

                  {/* CTA */}
                  <Link to={`/blog/${featuredPost.id}`}>
                    <motion.button
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold group/btn"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Read Insight</span>
                      <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 3. Main Blog Grid - "Editorial Tiles" */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <BlogTile key={post.id} post={post} index={index} />
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

// Blog Tile Component
interface BlogTileProps {
  post: BlogPost;
  index: number;
}

const BlogTile = ({ post, index }: BlogTileProps) => {
  const category = categories.find(c => c.id === post.category);
  const Icon = category?.icon || SparklesIcon;

  return (
    <Link to={`/blog/${post.id}`}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ y: -8 }}
        className="group relative cursor-pointer"
      >
        <div className="relative h-full overflow-hidden rounded-2xl glass border border-white/5 hover:border-white/20 transition-all duration-500">
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at top, ${category?.color}15, transparent 70%)`,
          }}
        />

        {/* Thumbnail placeholder */}
        <div 
          className="relative h-48 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${category?.color}20, ${category?.color}05)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-16 h-16 opacity-20" style={{ color: category?.color }} />
          </div>
          
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.3 }}
            style={{
              background: `linear-gradient(135deg, ${category?.color}, transparent)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative p-6">
          {/* Category badge */}
          <div className="flex items-center space-x-2 mb-3">
            <span 
              className="px-2 py-1 rounded-full text-xs font-semibold border"
              style={{ 
                backgroundColor: `${category?.color}10`,
                borderColor: `${category?.color}30`,
                color: category?.color,
              }}
            >
              {category?.name}
            </span>
          </div>

          {/* Title */}
          <motion.h3 
            className="text-xl font-semibold mb-3 leading-tight group-hover:text-cyan-400 transition-colors"
            initial={{ y: 0 }}
            whileHover={{ y: -4 }}
          >
            {post.title}
          </motion.h3>

          {/* Excerpt */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Corner accent */}
        <div 
          className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: `radial-gradient(circle at top right, ${category?.color}30, transparent)`,
          }}
        />
      </div>
    </motion.article>
    </Link>
  );
};

export default BlogPage;

