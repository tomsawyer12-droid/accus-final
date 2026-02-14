import { motion } from 'motion/react';
// import { Users, Shield, Target, Linkedin } from 'lucide-react';

export function TeamSection() {
  const teamMembers = [
    {
      name: 'Nelson Kisakye',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1675383094481-3e2088da943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBtYWxlfGVufDF8fHx8MTc3MDM3NTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Over 15 years of experience in microfinance and banking. Leads strategic vision and operational excellence.',
    },
    {
      name: 'Allen Kiconco',
      position: 'Chief Financial Officer',
      image: 'https://images.unsplash.com/photo-1710778044102-56a3a6b69a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzAzNzUzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Expert in financial management and risk control with proven track record in Uganda\'s financial sector.',
    },
    {
      name: 'Brenda Izagiire',
      position: 'Head of Credit',
      image: 'https://images.unsplash.com/photo-1758519291494-4e0ba9b21b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwbWFuYWdlciUyMGJ1c2luZXNzbWFufGVufDF8fHx8MTc3MDM3NTM2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Specializes in credit assessment and portfolio management. Ensures responsible lending practices.',
    },
    {
      name: 'Tracy Busenze',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1604783020105-a1c1a856a55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmluYW5jZSUyMHByb2Zlc3Npb25hbCUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzAzNzUzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Oversees day-to-day operations and ensures seamless service delivery across all branches.',
    },
    {
      name: 'James Ssali',
      position: 'Head of Business Development',
      image: 'https://images.unsplash.com/photo-1535757596010-06fbdd41fd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwb3BlcmF0aW9ucyUyMG1hbmFnZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwMzc1MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Drives growth initiatives and strategic partnerships to expand our reach across Uganda.',
    },
    {
      name: 'Rebecca Auma',
      position: 'Head of Client Services',
      image: 'https://images.unsplash.com/photo-1710778044102-56a3a6b69a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjB3b21hbiUyMG1hbmFnZXJ8ZW58MXx8fHwxNzcwMzc1MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Passionate about client satisfaction and building long-term relationships with our customers.',
    },
  ];
  const showIndividualMembers = true; // Set to true next month when individual pics are available

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E6F7F6] text-[#00A99D] rounded-full text-sm mb-4 font-semibold">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#54585A] mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals committed to your financial success
          </p>
        </motion.div>

        {/* Group Photo - Temporary for now */}
        {!showIndividualMembers && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] bg-gray-100"
          >
            <img
              src="https://res.cloudinary.com/dywusgc6j/image/upload/v1770643263/PHOTO-2026-02-09-15-23-34_nlbrct.jpg"
              alt="Accus Capital Team"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        {/* Team Members Grid - Hidden until next month */}
        {showIndividualMembers && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Name and Position Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#00A99D] font-semibold">{member.position}</p>
                  </div>
                </div>

                {/* Bio */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                  <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

{/* Team Values/Strengths - Hidden as per request */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-[#54585A] mb-4">Our Team Values</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guided by strong internal controls and a shared commitment to trust, responsibility, and discipline
          </p>
        </motion.div> */}

        {/* Team Strengths */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#00A99D] to-[#008B82] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#54585A] mb-3">Collaborative Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              Working together across departments to ensure seamless service delivery
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#00A99D] to-[#008B82] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#54585A] mb-3">Strong Controls</h3>
            <p className="text-gray-600 leading-relaxed">
              Maintaining institutional integrity through disciplined processes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#00A99D] to-[#008B82] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#54585A] mb-3">Client-Focused</h3>
            <p className="text-gray-600 leading-relaxed">
              Supporting clients' financial needs with professionalism and care
            </p>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}