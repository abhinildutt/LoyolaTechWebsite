import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { 
  NewspaperIcon,
  CalendarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

// News article type
interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  location?: string;
  type: 'press-release' | 'announcement' | 'partnership';
  featured?: boolean;
  content: string;
}

const NewsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // News articles
  const [articles] = useState<NewsArticle[]>([
    {
      id: 'annaiizu-mou-glycoscan',
      title: 'Loyola Technology and AnnaIZU Announce Strategic MoU to Advance AI-Driven Glycaemic Prediction for Consumer Health',
      excerpt: 'Loyola Technology LLC has entered into a formal Memorandum of Understanding (MoU) with AnnaIZU, a leading UK based SaaS firm, to accelerate the development, validation, and commercial adoption of GlycoScan, an AI-vision product designed to estimate glycaemic impact directly from packaged food labels.',
      date: '2025-11-10',
      location: 'London, United Kingdom',
      type: 'press-release',
      featured: true,
      content: `Loyola Technology LLC has entered into a formal Memorandum of Understanding (MoU) with AnnaIZU, a leading UK based SaaS firm, to accelerate the development, validation, and commercial adoption of GlycoScan, an AI-vision product designed to estimate glycaemic impact directly from packaged food labels.

The collaboration strengthens both organisations' commitment to accessible, data-driven health solutions. Under the MoU, AnnaIZU will support real-world testing, user engagement, and domain validation, while Loyola Technology will continue to advance the underlying AI models, computer-vision pipeline, and product engineering.

GlycoScan uses image-based analysis, advanced OCR, and nutritional pattern modelling to predict the expected blood sugar response range before consumption. The product aims to assist the UK's rising population of diabetic and pre-diabetic individuals by helping them take informed dietary decisions without technical effort.

Sushant Dutt, Co-Founder and President of Loyola Technology, stated:

"AnnaIZU's involvement gives us a robust channel to refine GlycoScan for real-world conditions. This partnership aligns with our goal of creating practical AI products that deliver measurable impact. GlycoScan is positioned to reduce avoidable GP visits, support healthier choices, and extend the reach of AI-enabled preventive care."

Mihir, AnnaIZU CEO added:

"We are pleased to collaborate with Loyola Technology on a product that supports healthier living. The platform offers genuine value for patients, caregivers, and clinicians. Our role is to ensure the product aligns with real user needs and clinical expectations."

The agreement outlines cooperation in areas such as:

a) user trials with diverse dietary profiles

b) product feedback from nutrition and health specialists

c) integration guidance for clinics, wellness platforms, and digital-first health providers

d) joint exploration of commercial pathways in the UK and international markets

Loyola Technology continues to expand its product portfolio across AI, blockchain-enabled process tokenization, and cognitive automation. The MoU with AnnaIZU reinforces the company's intent to remain at the forefront of applied AI within health and consumer well-being.

About Loyola Technology

Loyola Technology LLC is a Delaware-registered product company specialising in AI-based health platforms, blockchain-driven process tokenization, and enterprise automation builds. The firm operates across North America, the UK, Europe, and India, with a focus on scalable digital solutions.

About AnnaIZU

AnnaIZU is a health innovation venture dedicated to improving wellness outcomes through digital guidance, personalised insights, and community-driven support.

For media enquiries:

Email: communications@loyolatech.com

Website: www.loyolatech.com`
    },
  ]);

  const featuredArticle = articles.find(article => article.featured);
  const otherArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
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
                <pattern id="news-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#news-grid)" />
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
              className="text-6xl md:text-7xl lg:text-8xl font-extralight leading-tight mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gradient">News &</span>
              <br />
              <span className="text-white">Announcements</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Stay updated with the latest developments, partnerships, and milestones from Loyola Technology.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
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
                  {/* Press Release badge */}
                  <motion.div
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <NewspaperIcon className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wide">Press Release</span>
                  </motion.div>

                  {/* Content */}
                  <motion.h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {featuredArticle.title}
                  </motion.h2>

                  <motion.p
                    className="text-xl text-gray-400 max-w-4xl mb-8 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {featuredArticle.excerpt}
                  </motion.p>

                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-500">
                    {featuredArticle.location && (
                      <>
                        <div className="flex items-center space-x-2">
                          <MapPinIcon className="w-4 h-4" />
                          <span>{featuredArticle.location}</span>
                        </div>
                        <span>•</span>
                      </>
                    )}
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{new Date(featuredArticle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <motion.div
                    className="prose prose-lg prose-invert max-w-none mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="text-gray-300 leading-relaxed space-y-6">
                      {featuredArticle.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Articles Section */}
      {otherArticles.length > 0 && (
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light mb-12 text-center"
            >
              <span className="text-gradient">More News</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {otherArticles.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state if no other articles */}
      {otherArticles.length === 0 && (
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <NewspaperIcon className="w-16 h-16 text-gray-700 mx-auto mb-4" />
              <h3 className="text-2xl font-light mb-2">More news coming soon</h3>
              <p className="text-xl text-gray-500">
                Stay tuned for the latest updates and announcements.
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

// News Card Component
interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

const NewsCard = ({ article, index }: NewsCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="relative group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-3xl glass border border-white/10 hover:border-cyan-500/30 transition-all duration-500 h-full">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-violet-500/10" />
        
        {/* Animated glow on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.15), transparent 70%)',
          }}
        />

        <div className="relative p-8 md:p-12">
          {/* Type badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wide">
              {article.type === 'press-release' ? 'Press Release' : 
               article.type === 'announcement' ? 'Announcement' : 'Partnership'}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3 
            className="text-2xl md:text-3xl font-light mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {article.title}
          </motion.h3>

          {/* Excerpt */}
          <motion.p
            className="text-lg text-gray-400 mb-8 leading-relaxed line-clamp-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {article.excerpt}
          </motion.p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            {article.location && (
              <>
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="w-4 h-4" />
                  <span>{article.location}</span>
                </div>
                <span>•</span>
              </>
            )}
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-4 h-4" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default NewsPage;

