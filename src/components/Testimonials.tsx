import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Nakato',
      location: 'Kampala',
      business: 'Retail Shop Owner',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 5,
      text: 'Accus Capital helped me expand my retail business with a quick business loan. The process was smooth, and the team was very professional. I received my funds within 48 hours!',
    },
    {
      name: 'James Okello',
      location: 'Jinja',
      business: 'Transport Business',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 5,
      text: 'I needed urgent funds for my transport business, and Accus Capital came through for me. Their emergency loan service is a lifesaver. Highly recommended!',
    },
    {
      name: 'Grace Auma',
      location: 'Mbale',
      business: 'SACCO Member',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 5,
      text: 'Our savings group got a group loan from Accus Capital to support our members. The flexible terms and low interest rates have made a real difference in our community.',
    },
    {
      name: 'Patrick Musoke',
      location: 'Entebbe',
      business: 'Education',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 5,
      text: 'I used a personal loan from Accus Capital to pay for my daughter\'s university fees. The repayment plan was very manageable, and the staff were understanding and supportive.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E6F7F6] text-[#00A99D] rounded-full text-sm mb-4 font-semibold">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#54585A] mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real Ugandans who transformed their lives with Accus Capital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00A99D] to-[#008B82] rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="text-white" size={20} />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-4 mt-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00A99D] text-[#00A99D]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-[#00A99D]/20"
                />
                <div>
                  <h4 className="font-bold text-[#54585A] text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.business}</p>
                  <p className="text-xs text-[#00A99D]">{testimonial.location}</p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00A99D]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            Join <span className="text-[#00A99D] font-bold">10,000+ satisfied clients</span> across Uganda
          </p>
        </motion.div>
      </div>
    </section>
  );
}
