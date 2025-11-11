import { motion } from 'framer-motion';
import DataFlowHero from '../components/DataFlowHero';
import StoryTimeline from '../components/StoryTimeline';
import PhilosophyPanels from '../components/PhilosophyPanels';
import ProcessFlow from '../components/ProcessFlow';
import ElegantTeam from '../components/ElegantTeam';
import VisionScene from '../components/VisionScene';
// import PlexusBackground from '../components/PlexusBackground'; // Disabled for performance

/**
 * AboutPage - A Dynamic Brand Story
 * 
 * Theme: "Intelligence. Precision. Humanity."
 * Design Flow: Intro → Journey → Philosophy → Process → Team → Vision
 * 
 * This page is designed as an immersive narrative experience, not a static grid.
 * Each section flows seamlessly into the next, guiding visitors through discovery,
 * vision, impact, and the people behind Loyola Tech.
 */
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Fixed animated background - Disabled for performance */}
      {/* <div className="fixed inset-0 z-0 opacity-40">
        <PlexusBackground />
      </div> */}

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* 1. Immersive Hero - "Who We Are" */}
        <section className="relative">
          <DataFlowHero />
        </section>

        {/* 2. Story Timeline - "How We Got Here" */}
        <section className="relative">
          <StoryTimeline />
        </section>

        {/* 3. Philosophy Panels - "What Drives Us" */}
        <section className="relative">
          <PhilosophyPanels />
        </section>

        {/* 4. Process Flow - "The Way We Build" */}
        <section className="relative">
          <ProcessFlow />
        </section>

        {/* 5. The Team - "Human but Elegant" */}
        <section className="relative">
          <ElegantTeam />
        </section>

        {/* 6. Vision Scene - "The Future" */}
        <section className="relative">
          <VisionScene />
        </section>

        {/* Ambient fade at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        />
      </div>
    </div>
  );
};

export default AboutPage;

