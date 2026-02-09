import { motion } from 'motion/react';

export function BriefIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Accus Capital is <span className="text-[#00A99D] font-semibold">Uganda's trusted partner</span> for fast, 
            reliable, and affordable financial solutions. We provide accessible credit and loan services designed to 
            empower individuals, businesses, and communities across Uganda.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
