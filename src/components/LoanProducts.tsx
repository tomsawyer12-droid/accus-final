import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function LoanProducts() {
  const products = [
    {
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlcnNvbiUyMG1vbmV5JTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjkxNzkxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Personal Loans',
      description: 'Quick cash for your personal needs. Up to UGX 50M with flexible repayment terms.',
      features: ['Up to UGX 50M', '6-36 months', 'Low interest', 'Quick approval'],
    },
    {
      image: 'https://images.unsplash.com/photo-1758876202167-f81c995c3fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwb2ZmaWNlJTIwd29ya2VyfGVufDF8fHx8MTc2OTE3OTE1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Business Loans',
      description: 'Grow your business with our tailored SME financing solutions and flexible terms.',
      features: ['Up to UGX 200M', 'Business support', 'Flexible terms', 'Low rates'],
    },
    {
      image: 'https://images.unsplash.com/photo-1651449815993-706eaa7a936a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwc2hvcCUyMG93bmVyfGVufDF8fHx8MTc2OTE3OTE1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Salary Loans',
      description: 'Loans designed for salaried employees with competitive rates and instant processing.',
      features: ['Instant approval', 'No collateral', 'Direct salary deduction', 'Up to UGX 30M'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E6F7F6] text-[#00A99D] rounded-full text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00A99D] mb-4">
            Financial Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of loan services designed to meet your unique financial needs
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header with Image */}
              <div className="relative overflow-hidden h-56">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Teal Gradient Overlay - Only visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A99D] to-[#008B82] opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                
                {/* Bottom gradient for title readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Title on Image */}
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{product.title}</h3>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-16 h-16 border-4 border-white/30 rounded-full"></div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-[#00A99D] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full bg-[#00A99D] hover:bg-[#008B82] text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link to="/services">
            <Button
              size="lg"
              className="bg-[#00A99D] hover:bg-[#008B82] text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              View All Services
              <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
          </Link>
          <p className="text-gray-600 mt-6">Explore our complete range of financial solutions</p>
        </motion.div>
      </div>
    </section>
  );
}